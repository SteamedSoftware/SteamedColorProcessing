import {Button, Container, Input, InputLabel} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import {Component} from "react";
import {DateTime, Duration} from "luxon";
import KimaiRequest from "./KimaiRequest";

class TimeReportAggregate extends Component {
    constructor(props) {
        super(props)
        this.state = {aggRows: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}], aggCols: null, loading: true, startDate: "", endDate: ""}
    }

    componentDidMount() {
        let cols = [{field: 'Member', headerName: "Member", width: 200}]
        Object.values(this.props.activities).forEach((activity) => {
            cols.push({field: activity.name, headerName: activity.name, width: 200})
        })
        cols.push({field: "Total", headerName: "Total", width: 200})
        this.setState({aggCols: cols})
        this.loadAggregate("", "")
    }

    loadAggregate(start, end) {
        let path = "timesheet_sums?project=1"
        if (start !== "") {
            path += "&begin="+start+"T00:00:00"
        }
        if (end !== "") {
            path += "&end="+end+"T23:59:59"
        }
        KimaiRequest(path).then(([json]) => {
            let rawData = json.data
            let users = this.props.users
            let activities = this.props.activities

            let totalsByMember = {}
            let projectTotals = {}
            function addToTotalsForProject(activityName, durationNum) {
                if (projectTotals.hasOwnProperty(activityName)) {
                    projectTotals[activityName] += durationNum
                } else {
                    projectTotals[activityName] = durationNum
                }
            }
            function addToTotalsForMember(user_id, activity_id, duration) {
                let userName = users[user_id].alias
                let activityName = activities.hasOwnProperty(activity_id) ? activities[activity_id].name : activity_id
                let durationNum = parseInt(duration)
                if (totalsByMember.hasOwnProperty(userName)) {
                    if (totalsByMember[userName].hasOwnProperty(activityName)) {
                        totalsByMember[userName][activityName] += durationNum
                    } else {
                        totalsByMember[userName][activityName] = durationNum
                    }
                } else {
                    totalsByMember[userName] = {}
                    totalsByMember[userName][activityName] = durationNum
                }
                if (activity_id !== "Total") {
                    addToTotalsForMember(user_id, "Total", duration)
                }
                addToTotalsForProject(activityName, durationNum)
            }
            for (let rawRow of rawData) {
                addToTotalsForMember(rawRow["user_id"], rawRow["activity_id"], rawRow["duration"])
            }
            let activityNames = []
            Object.values(activities).forEach((activity) => {
                activityNames.push(activity.name)
            })
            activityNames.push("Total")

            let rows = []
            let rowId = 0
            Object.entries(totalsByMember).map(([memberName, memberData]) => {
                let row = {id: rowId, Member: memberName}
                activityNames.forEach((activity) => {
                    let activityName = activity
                    let durationNum = 0
                    if (memberData.hasOwnProperty(activityName)) {
                        durationNum = memberData[activityName]
                    }
                    row[activityName] = Duration.fromObject({seconds: durationNum}).toFormat("hh:mm")
                })
                rows.push(row)
                rowId++;
            })
            let row = {id: rowId, Member: "Team Total"}
            activityNames.forEach((activity) => {
                let activityName = activity
                let durationNum = 0
                if (projectTotals.hasOwnProperty(activityName)) {
                    durationNum = projectTotals[activityName]
                }
                row[activityName] = Duration.fromObject({seconds: durationNum}).toFormat("hh:mm")
            })
            rows.push(row)
            this.setState({aggRows: rows, loading: false})
        })
    }

    updateDateRange(newStart, newEnd) {
        this.setState({timesheetRows: this.defaultRows})
        this.setState({startDate: newStart, endDate: newEnd})
        this.loadAggregate(newStart, newEnd)
    }

    filterToThisWeek() {
        let startDate = DateTime.now().startOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        let endDate = DateTime.now().endOf('week').minus(Duration.fromObject({days: 1})).toISODate()
        this.updateDateRange(startDate, endDate)
    }

    filterToLastWeek() {
        let startDate = DateTime.now().startOf('week').minus(Duration.fromObject({days: 8})).toISODate()
        let endDate = DateTime.now().endOf('week').minus(Duration.fromObject({days: 8})).toISODate()
        this.updateDateRange(startDate, endDate)
    }

    clearFilters() {
        this.updateDateRange("", "")
    }

    render() {
        return <Container>
            <Container sx={{display: 'inline-flex', alignContent: 'flex-start'}}>
                <div style={{marginInlineEnd: "2em"}}>
                    <InputLabel>Start Date</InputLabel>
                    <Input type={"date"} value={this.state.startDate} onChange={(e) => {this.updateDateRange(e.target.value, this.state.endDate)}}/>
                </div>
                <div style={{marginInlineEnd: "2em"}}>
                    <InputLabel>End Date (incl.)</InputLabel>
                    <Input type={"date"} value={this.state.endDate} onChange={(e) => {this.updateDateRange(this.state.startDate, e.target.value)}}/>
                </div>
                <div style={{marginInlineEnd: "2em"}}>
                    <Button onClick={() => {this.filterToLastWeek()}}>Last Week</Button>
                </div>
                <div style={{marginInlineEnd: "2em"}}>
                    <Button onClick={() => {this.filterToThisWeek()}}>This Week</Button>
                </div>
                <div>
                    <Button onClick={() => {this.clearFilters()}}>All Time</Button>
                </div>
            </Container>
            <hr/>
            {this.state.aggCols &&
                <DataGrid
                    columns={this.state.aggCols}
                    rows={this.state.aggRows}
                    hideFooter={true}
                    loading={this.state.loading}
                />
            }
        </Container>
    }
}
export default TimeReportAggregate