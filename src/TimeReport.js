import {Box, CircularProgress, Container, Tab, Tabs} from "@mui/material";
import {Component} from "react";
import KimaiRequest from "./KimaiRequest";
import TimeReportRecords from "./TimeReportRecords";
import TimeReportAggregate from "./TimeReportAggregate";


class TimeReport extends Component {
    constructor(props) {
        super(props)
        this.state = {users: null, activities: null, selectedTab: "0"}
    }

    componentDidMount() {
        this.loadActivities()
        this.loadUsers()
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

    render() {
        return <Container>
            <Box sx={{width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
                    <Tabs value={this.state.selectedTab} onChange={(e, newValue) => {this.setState({selectedTab: newValue})}}>
                        <Tab label={"Time Records"} value="0"/>
                        <Tab label={"Time Aggregates"} value="1"/>
                    </Tabs>
                </Box>
                {(this.state.users && this.state.activities) ?
                    <>
                        {this.state.selectedTab === "0" &&
                            <TimeReportRecords users={this.state.users} activities={this.state.activities}/>
                        }
                        {this.state.selectedTab === "1" &&
                            <TimeReportAggregate users={this.state.users} activities={this.state.activities}/>
                        }
                    </> : <div><center><CircularProgress/></center></div>}
            </Box>
        </Container>
    }
}
export default TimeReport