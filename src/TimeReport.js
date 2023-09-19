import {Container, Input, InputLabel} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import {Component} from "react";
import {DateTime, Duration} from "luxon";

function KimaiRequest(apiPath) {
    return fetch("https://kimai.teichman.me/api/"+apiPath,
        {
            headers: {
                "X-AUTH-USER": "kimaiapi@teichman.me",
                "X-AUTH-TOKEN": "SeniorProject"
            }
        }
    ).then((resp) => {
        return resp.json().then((json) => {
            return new Promise((resolve) => {
                resolve([json, resp.headers])
            })
        })
    })
}

class TimeReport extends Component {
    constructor(props) {
        super(props)
        let startDate = DateTime.now().startOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        let endDate = DateTime.now().endOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        this.state = {users: null, activities: null, timesheets: null, startDate, endDate, timesheetRows: null, timesheetPageCount: null, timesheetPageSize: 10, timesheetPage: 1}
        this.timesheetColumns = [
            {field: 'member', headerName: 'Member', width: 150},
            {field: 'start', headerName: 'Start', type: 'datetime', valueFormatter: v => v.value.toLocaleString(DateTime.DATETIME_SHORT), width: 175},
            {field: 'end', headerName: 'End', type: 'datetime', valueFormatter: v => v.value.isLuxonDateTime ? v.value.toLocaleString(DateTime.DATETIME_SHORT) : "In Progress", width: 175},
            {field: 'activity', headerName: 'Activity', width: 150},
            {field: 'detail', headerName: 'Detail', width: 200}
        ]
    }

    componentDidMount() {
        Promise.all([this.loadUsers(), this.loadActivities()]).then(() => {
            this.loadTimesheets(this.state.startDate, this.state.endDate)
        })
    }

    loadUsers() {
        return KimaiRequest("users").then(([json, headers]) => {
            let users = {}
            json.forEach((user) => {
                users[user.id] = user
            })
            this.setState({users})
        })
    }

    loadActivities() {
        return KimaiRequest("activities").then(([json, headers]) => {
            let activities = {}
            json.forEach((activity) => {
                activities[activity.id] = activity
            })
            this.setState({activities})
        })
    }

    loadTimesheets(start, end) {
        let path = "timesheets?user=all&project=1&size=1000"
        if (start !== "") {
            path += "&begin="+start+"T00:00:00"
        }
        if (end !== "") {
            path += "&end="+end+"T23:59:59"
        }
        return KimaiRequest(path).then(([json, headers]) => {
            let timesheetRows = null
            if (this.state.users && this.state.activities && json) {
                timesheetRows = []
                this.setState({timesheetPageCount: headers["x-total-count"]})
                json.map((timesheet) => {
                    timesheetRows.push({
                        id: timesheet.id,
                        member: this.state.users[timesheet.user].alias,
                        start: DateTime.fromISO(timesheet.begin),
                        end: timesheet.end ? DateTime.fromISO(timesheet.end) : "In Progress",
                        activity: this.state.activities[timesheet.activity].name,
                        detail: timesheet.description
                    })
                })
            }
            this.setState({timesheets: json, timesheetRows})
        })
    }


    updateDateRange(newStart, newEnd) {
        this.setState({timesheetRows: null})
        this.setState({startDate: newStart, endDate: newEnd})
        this.loadTimesheets(newStart, newEnd)
    }

    render() {
        return <Container>
            <h1>Time Report</h1>
            <Container sx={{display: 'inline-flex', alignContent: 'flex-start'}}>
                <div style={{marginInlineEnd: "2em"}}>
                    <InputLabel>Start Date</InputLabel>
                    <Input type={"date"} value={this.state.startDate} onChange={(e) => {this.updateDateRange(e.target.value, this.state.endDate)}}/>
                </div>
                <div>
                    <InputLabel>End Date (incl.)</InputLabel>
                    <Input type={"date"} value={this.state.endDate} onChange={(e) => {this.updateDateRange(this.state.startDate, e.target.value)}}/>
                </div>
            </Container>
            <hr/>
            <h2>Timesheet Data</h2>
            {this.state.timesheetRows &&
                <DataGrid
                    columns={this.timesheetColumns}
                    rows={this.state.timesheetRows}
                    pageSizeOptions={[10, 20, 50, 100]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10
                            }
                        },
                        sorting: {
                            sortModel: [
                                {field: 'start', sort: 'desc'}
                            ]
                        }
                    }}
                />
            }

        </Container>
    }
}
export default TimeReport