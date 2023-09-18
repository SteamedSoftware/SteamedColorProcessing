import React from 'react';
import './index.css';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

export default function QuadCharts()
{
    return(
        <div class="quadCharts">
            <QuadChart 
                date="2023-9-12 - 2023-9-19"
                progressList={[
                    "Decided Team Roles",
                    "Decided Task Tracking Method (Kanban)",
                    "Determined Dev Tech stack",
                    "Set up source control",
                    "Set up basic website"
                ]}
                risksList={[
                    "Putting time into python architecture, which might not work out"
                ]}
                plansList={[
                    "Initial testing on python and C# performance"
                ]}
                needsList={[
                    "Knowledge on github use",
                    "Open source? Closed source?",
                    "Licensing"
                ]}
            />
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
                        display: { xs: 'none', md: 'flex' },
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
                <div class="quadChart">
                    <div class="row">
                        <div class="column-1">
                            <h1>Progress</h1>
                            <EntryList entries={props.progressList} />
                        </div>
                        <div class="column-2">
                            <h1>Risks</h1>
                            <EntryList entries={props.risksList} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="column-3">
                            <h1>Plans</h1>
                            <EntryList entries={props.plansList} />
                        </div>
                        <div class="column-4">
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