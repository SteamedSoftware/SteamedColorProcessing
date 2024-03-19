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
    const listItems = entries.map((entry) => {
        if (typeof entry === 'string' || entry instanceof String) {
            return <li>{entry}</li>
        } else {
            return <EntryList entries={entry}/>
        }
    });
    return(
        <ul>{listItems}</ul>
    );
}

const quadChartData = [
    {
        date: "2024-3-19 - 2024-3-26",
        progressList: [
            "Spring Break (Relaxed Progress)",
            "Color curve unit testing finished"
            
        ],
        risksList: [
            "Deadline pressure"
        ],
        plansList: [
            "Saturation slider debugging",
            [
                "Stretch goal at this point"
            ],
            "Fix bit depth limitations with base64 encoding",
            "Full vertical integration"
        ],
        needsList: [
            "None"
        ]
    },
    {
        date: "2024-3-5 - 2024-3-12",
        progressList: [
            "Saturation testing",
            [
                "Still some oversaturation errors"
            ]
        ],
        risksList: [
            "Accuracy failures with saturation"
        ],
        plansList: [
            "Switch over to color curve testing",
            [
                "Saturation testing was troublesome and is not part of MVP"
            ],
            "Bit depth error fix",
            "Vertical Integration"
        ],
        needsList: [
            "None"
        ]
    },
    {
        date: "2024-2-27 - 2024-3-5",
        progressList: [
            "Backend Accuracy Testing",
            "Being sick",
            "UI partially connected to backend",
            "Saturation slider backend",
            [
                "Some errors when over saturating"
            ]
        ],
        risksList: [
            "Accuracy failures"
        ],
        plansList: [
            "Desaturation accuracy testing",
            "Bit depth error fix",
            "Vertical Integration"
        ],
        needsList: [
            "None"
        ]
    },
    {
        date: "2024-2-20 - 2024-2-27",
        progressList: [
            "Caching",
            "LogC3 compatibility check successful"
        ],
        risksList: [
            "Front-end/back-end compatability"
        ],
        plansList: [
            "Test 12-bit speed (no expected deviation)",
            "Color curve testing",
            "Saturation slider backend"
        ],
        needsList: [
            "None"
        ]
    },
    {
        date: "2024-2-13 - 2024-2-20",
        progressList: [
            "Slider backend",
            "Transformation matrix application",
            "Minor Performance Improvements"
        ],
        risksList: [
            "Front-end/back-end compatability"
        ],
        plansList: [
            "Slider frontend",
            "Color curve backend",
            "Further UI improvements",
            "Testing with LUTS/backend"
        ],
        needsList: [
            "Information about color curve things, LUT image?",
            "Final export information?"
        ]
    },
    {
        date: "2024-2-6 - 2024-2-13",
        progressList: [
            "Fixed windows build bug",
            "Slider backend and API"
        ],
        risksList: [
            "Front-end/back-end compatability"
        ],
        plansList: [
            "Implement slider fully",
            "Final exporting",
            "Merge together into one branch"
        ],
        needsList: [
            "Name and logo information",
            "Information on white color curve",
            "LUT sizes, slider needs to have same size"
        ]
    },
    {
        date: "2024-1-30 - 2024-2-6",
        progressList: [
            "Color Curves in UI",
            "Iron out LUT bug"
        ],
        risksList: [
            "Front-end/back-end compatability"
        ],
        plansList: [
            "Connect Front-end w/ Back-end",
            "Start LUT merging",
            "Performance Improvements",
            "Finish slider",
            "Polish UI"
        ],
        needsList: [
            "Information about sliders",
            "Information about MVP (8 images shown at once, would be slow)",
            "Math on merging LUTs",
            "What is the white color curve? Luminance, saturation?"
        ]
    },
    {
        date: "2024-1-23 - 2024-1-30",
        progressList: [
            "Vacation :)",
            "Semester Plans",
            [
                "Freeze Dates",
                "Updated roles"
            ]
        ],
        risksList: [
            "Front-end/back-end compatability"
        ],
        plansList: [
            "Connect Front-end w/ Back-end",
            "Iron out LUT bug",
            "Start LUT merging"
        ],
        needsList: [
            "N/A"
        ]
    },
    {
        date: "2023-11-28 - 2023-12-5",
        progressList: [
            "Color Graph for UI",
            "Completed short video artifact",
            "Windows build script"
            
        ],
        risksList: [
            "Work on artifacts (presentation) takes time from development",
            "End of semester burnout/heavy workload from other classes"
        ],
        plansList: [
            "Team Presentation",
            "Work on UI components",
            "Get API endpoints up",
            "Debugging LUT implementation"
            
        ],
        needsList: [
            "N/A"
        ]
    },
    {
        date: "2023-11-21 - 2023-11-28",
        progressList: [
            "Removed frameworks from existing UI",
            "Finalized video script",
            "Initial backend slider logic implemented"
        ],
        risksList: [
            "Work on artifacts (video) takes time from development",
            "End of semester burnout/heavy workload from other classes"
        ],
        plansList: [
            "Record video",
            "Work on UI components",
            "Get API endpoints up",
            "Debugging LUT implementation"
            
        ],
        needsList: [
            "N/A"
        ]
    },
    {
        date: "2023-11-14 - 2023-11-21",
        progressList: [
            "Worked on short video",
            "Successful full-stack test"
        ],
        risksList: [
            "Work on artifacts (video) takes time from development",
            "End of semester burnout/heavy workload from other classes"
        ],
        plansList: [
            "Further development of UI concepts",
            "Continued development of backend",
            "Complete concept for short video and begin production",
            "Remove frameworks from existing UI"
        ],
        needsList: [
            "Information on ARRI image file format",
            "Information on what LogC3 and LogC4 actually are",
            "Details of expected color curve behavior and appearance"
        ]
    },
    {
        date: "2023-11-7 - 2023-11-14",
        progressList: [
            "Work on interpolation",
            [
                "Polish algebraic implementation in C",
                "Began work on matrix implementation in C"
            ],
            "Prepared further UI concets for review",
            "Completed Senior Project Excellenve and Creativity Award opt-ins",
            "Researched UI testing frameworks"
        ],
        risksList: [
            "Matrix calculations could be difficult or slow in C, as there is no built-in implementation",
            "Front-end automated testing could be difficult",
            "Improper LUT testing can hide errors"
        ],
        plansList: [
            "Further development of UI concepts",
            "Continued development of backend",
            "Implement backend testing for interpolation"
        ],
        needsList: [
            "Method stub for the LUT conversion formula"
        ]
    },
    {
        date: "2023-10-31 - 2023-11-7",
        progressList: [
            "Interpolation research",
            "Team members being sick"
        ],
        risksList: [
            "Matrix calculations difficult in C",
            "Front-end automation difficult",
            "Improper LUT testing can hide errors"
        ],
        plansList: [
            "Presentations on both frontend and backend from team",
            "Conversion of existing code to C",
            "Research into Matrix calculations",
            [
                "Performance might make this unnecessary though"
            ],
            "Research front-end automated testing frameworks",
            [
                "Jest",
                "React testing library"
            ]
        ],
        needsList: [
            "Demo LUT (inverter) with example in/out images",
            "Want: example of matrix interpolation calcs"
        ]
    },
    {
        date: "2023-10-24 - 2023-10-31",
        progressList: [
            "Had discussion on roles and progress",
            "Some rudimentary UI design"
        ],
        risksList: [
            "Workload increasing at the same time as other courses increasing workload"
        ],
        plansList: [
            "Presentations on both frontend and backend from team",
            "C# Performance Testing",
            "C -> Python Performance Testing"
        ],
        needsList: [
            "UI feedback"
        ]
    },
    {
        date: "2023-10-17 - 2023-10-24",
        progressList: [
            "Had discussion on roles and progress",
            "Completed team retrospective document"
        ],
        risksList: [
            "Workload increasing at the same time as other courses increasing workload"
        ],
        plansList: [
            "Hold retrospective",
            "Initial UI design"
        ],
        needsList: [
            "Tetrahedral interpolation equations"
        ]
    },
    {
        date: "2023-10-10 - 2023-10-17",
        progressList: [
            "Further LUT performance testing",
            "Updated project plan document",
            "Further Electron/Python application test",
            [
                "M1 Mac Success"
            ]
        ],
        risksList: [
            "Slow performance"
        ],
        plansList: [
            "Setup CI/CD and automated testing",
            "Write out various UI components"
        ],
        needsList: [
            "Faster LUT boundary calculations?"
        ]
    },
    {
        date: "2023-10-03 - 2023-10-10",
        progressList: [
            "Finished project documents",
            "Electron/Python application test",
            [
                "Linux Success",
                "Windows Success",
                "Intel Mac Success",
                "M1 Mac TBD"
            ]
        ],
        risksList: [
            "Under scope"
        ],
        plansList: [
            "Finish LUT interpolation",
            "Test LUT manipulation performance",
            "Initialize final project repository",
            "Setup CI/CD"
        ],
        needsList: [
            "More feature ideas",
            "Mac lab access in Magic (good computer so compilation doesn’t take long?)",
            "Example LUT manipulation tasks"
        ]
    },
    {
        date: "2023-09-26 - 2023-10-03",
        progressList: [
            "Did some testing with LUTs using Pillow",
            "Did testing with image refresh and network speed"
        ],
        risksList: [
            "Difficult to obtain licensing for new UI frameworks",
            "UI frameworks prove insufficient",
            "Tetrahedral interpolation proves difficult"
        ],
        plansList: [
            "Tetrahedral interpolation testing",
            "Test tech stacks that move away from web frameworks",
            "Spikes for various UI frameworks (QT, PyQT, ActiveQT)"
        ],
        needsList: [
            "Licensing info from ARRI",
            [
                "ARRI assist with purchasing licenses?",
                "Release under (L)GPLv3 License?"
            ]
        ]
    },
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