import React from 'react';
import './index.css';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QuadCharts()
{
    return(
        <div className="quadCharts">
            {quadChartData.map((data) => {
               return <QuadChart
                   date={data.date || "No Date"}
                   progressList={data.progressList || []}
                   risksList={data.risksList || []}
                   plansList={data.plansList || []}
                   needsList={data.needsList || []}
               />
            })}
        </div>
    );
}

function QuadChart(props)
{
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    bgcolor: '#1E1E1E',
                    color: 'white'
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {props.date}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    bgcolor: '#343434',
                    color: 'white'
                }}>
                <div className="quadChart">
                    <div className="row">
                        <div className="column-1">
                            <h1>Progress</h1>
                            <EntryList entries={props.progressList} />
                        </div>
                        <div className="column-2">
                            <h1>Risks</h1>
                            <EntryList entries={props.risksList} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <h1>Plans</h1>
                            <EntryList entries={props.plansList} />
                        </div>
                        <div className="column-4">
                            <h1>Needs</h1>
                            <EntryList entries={props.needsList} />
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

function EntryList(props)
{
    const entries = props.entries;
    const listItems = entries.map((entry) =>
        <li>{entry}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}

const quadChartData = [
    {
        date: "2023-09-19 - 2023-09-26",
        progressList: [
            "Initial Domain Model completed",
            "\"Asks\" from Sponsor completed",
            "Website has Team Members",
            "Website has basic Time Report tied to Kimai"
        ],
        risksList: [
            "LUT Performance in Python is worse than anticipated",
            "Python -> Electron app latency is worse than anticipated",
            "ARRI takes extended time to give us licensing requirements for our development"
        ],
        plansList: [
            "Python LUT Performance Testing: Goal 9/21",
            "Python -> React app latency Testing: Goal 9/21",
            "Implement more detailed Time Reporting on Website: Goal 9/21",
            "Project Synopsis: Goal: 9/26",
            "Draft further questions to have forwarded to ARRI: Goal: 9/26"
        ],
        needsList: [
            "Domain Model Review",
            "Details on the artifacts to be produced by Color Science team",
            "Details on User Perspective",
            "Details on Software Flow"
        ]
    },
    {
        date: "2023-09-12 - 2023-09-19",
        progressList: [
            "Decided Team Roles",
            "Decided Task Tracking Method (Kanban)",
            "Determined Dev Tech stack",
            "Set up source control",
            "Set up basic website"
        ],
        risksList: [
            "Putting time into python architecture, which might not work out"
        ],
        plansList: [
            "Initial testing on python and C# performance"
        ],
        needsList: [
            "Knowledge on github use",
            "Open source? Closed source?",
            "Licensing"
        ]
    }
]