import {Container, Input, InputLabel} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import {Component} from "react";
import {DateTime, Duration} from "luxon";
import KimaiRequest from "./KimaiRequest";

class TimeReportRecords extends Component {
    constructor(props) {
        super(props)
        let startDate = DateTime.now().startOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        let endDate = DateTime.now().endOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        this.defaultRows = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}]
        this.state = {timesheets: null, startDate, endDate, timesheetRows: this.defaultRows, timesheetTotal: 0, timesheetPageSize: 10, timesheetPage: 1, loading: true}
        this.timesheetColumns = [
            {field: 'member', headerName: 'Member', width: 150},
            {field: 'start', headerName: 'Start', type: 'datetime', valueFormatter: v => v.value !== undefined ? (v.value.toLocaleString(DateTime.DATETIME_SHORT)) : "", width: 175},
            {field: 'end', headerName: 'End', type: 'datetime', valueFormatter: v => v.value !== undefined ? (v.value.isLuxonDateTime ? v.value.toLocaleString(DateTime.DATETIME_SHORT) : "In Progress") : "", width: 175},
            {field: 'activity', headerName: 'Activity', width: 150},
            {field: 'detail', headerName: 'Detail', width: 200}
        ]
    }

    componentDidMount() {
        this.loadTimesheets(this.state.startDate, this.state.endDate)
    }

    loadUsers() {
        return KimaiRequest("users").then(([json]) => {
            let users = {}
            json.forEach((user) => {
                users[user.id] = user
            })
            this.setState({users})
        })
    }

    loadActivities() {
        return KimaiRequest("activities").then(([json]) => {
            let activities = {}
            json.forEach((activity) => {
                activities[activity.id] = activity
            })
            this.setState({activities})
        })
    }

    loadTimesheets(start, end, size=this.state.timesheetPageSize, page=this.state.timesheetPage) {
        this.setState({loading: true})
        let path = "timesheets?user=all&project=1&size="+size+"&page="+page
        if (start !== "") {
            path += "&begin="+start+"T00:00:00"
        }
        if (end !== "") {
            path += "&end="+end+"T23:59:59"
        }
        return KimaiRequest(path).then(([json, headers]) => {
            let timesheetRows = null
            if (this.props.users && this.props.activities && json) {
                timesheetRows = []
                this.setState({timesheetTotal: parseInt(headers.get("x-total-count"))})
                json.map((timesheet) => {
                    timesheetRows.push({
                        id: timesheet.id,
                        member: this.props.users[timesheet.user].alias,
                        start: DateTime.fromISO(timesheet.begin),
                        end: timesheet.end ? DateTime.fromISO(timesheet.end) : "In Progress",
                        activity: this.props.activities[timesheet.activity].name,
                        detail: timesheet.description
                    })
                })
            }
            this.setState({timesheets: json, timesheetRows, loading: false})
        })
    }

    updateDateRange(newStart, newEnd) {
        this.setState({timesheetRows: this.defaultRows})
        this.setState({startDate: newStart, endDate: newEnd})
        this.loadTimesheets(newStart, newEnd)
    }

    render() {
        return <Container>
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
            <DataGrid
                columns={this.timesheetColumns}
                rows={this.state.timesheetRows}
                pageSizeOptions={[10, 20, 50, 100]}
                paginationMode={"server"}
                loading={this.state.loading}
                rowCount={this.state.timesheetTotal}
                onPaginationModelChange={(p) => {this.setState({timesheetPage: p.page+1, timesheetPageSize: p.pageSize}); this.loadTimesheets(this.state.startDate, this.state.endDate, p.pageSize, p.page+1)}}
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
        </Container>
    }
}
export default TimeReportRecords