import React from 'react';
import './index.css';

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
        <div class="quadChart">
            <div class="quadDate">
                <h1>
                    {props.date}
                </h1>
            </div>
            <div class="row">
                <div class="column">
                    <h1>Progress</h1>
                    <EntryList entries={props.progressList} />
                </div>
                <div class="column">
                    <h1>Risks</h1>
                    <EntryList entries={props.risksList} />
                </div>
            </div>
            <div class="row">
                <div class="column-2">
                    <h1>Plans</h1>
                    <EntryList entries={props.plansList} />
                </div>
                <div class="column-3">
                    <h1>Needs</h1>
                    <EntryList entries={props.needsList} />
                </div>
            </div>
        </div>
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