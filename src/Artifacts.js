import React from 'react';
import './index.css';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import domainModel from './images/domainModel.png';

export default function Artifacts()
{
    return(
        <div className="artifacts">
            {artifactData.map((data) => {
               return <Artifact
                   title={data.title || "No Title"}
                   contentList={data.contentList || []}
                   image={data.image || ""}
                   alt={data.alt || ""}
               />
            })}
        </div>
    );
}

function Artifact(props)
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
                    {props.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    bgcolor: '#343434',
                    color: 'white'
                }}>
                <div className="artifact">
                    <ArtifactContent {...props} />
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

function ArtifactContent(props)
{
    const image = <img src={props.image} alt={props.alt} className="artifactImage"></img>
    const contentList = props.contentList;
    const artifactItems = contentList.map((content) => {
        if (typeof content === 'string' || content instanceof String) {
            return <h1>{content}</h1>
        } else {
            return <ParagraphContent contentList={content}/>
        }
    });

    if (props.image !== "")
    {
        return(
            <div>
                {image}
                <div>
                    {artifactItems}
                </div>
            </div>
        );
    }
    return(
        <div>{artifactItems}</div>
    );
}

function ParagraphContent(props)
{
    const contentList = props.contentList;
    const paragraphItems = contentList.map((content) => {
            return <p>{content}</p>
    });
    return(
        <div>{paragraphItems}</div>
    );
}

const artifactData = [
    {
        title: "Domain Model",
        contentList: [],
        image: domainModel,
        alt: "Domain Model"
    },
    {
        title: "Goals",
        contentList: [
            [
                `There are two main goals that we hope to achieve through the 
                completion of this project. We would firstly like to (1) provide 
                a way for creatives to convert their LUTs to a format that is 
                compatible with the data captured using the new ARRI camera (logC3 
                to logC4). They will be able to adjust values and see the live 
                results of changes made based on formulas that the Motion Picture 
                Science students will develop and provide. The program will also 
                (2) act as a tool for digital imaging technicians and cinematographers 
                to allow them to visualize and update their look up tables (LUTs) live. 
                Since creatives often possess and use LUTs that they did not create, this 
                would help them see the effects on the colors and values in any scene to 
                which the LUT is applied.`
            ]
        ]
    },
    {
        title: "Scope",
        contentList: [
            [
                `The program will only take in images used as reference when modifying 
                the LUT. Video files will not be supported. The maximum amount of images 
                that can be uploaded at one time is 8. The program is a LUT modification 
                software that provides visualization of changes using reference images. 
                It is not an image editing software, so none of the imported reference 
                images will be modified or exported. Only one LUT, which must be in logC3 
                format, may be imported at a time and will be the sole LUT being updated 
                through the user interface.`
            ]
        ]
    },
    {
        title: "Development Methodology",
        contentList: [
            "Planned Activities and Artifacts",
            [
                `Our overall development methodology is going to be based on Kanban. 
                We will define stories as we discover requirements, assign priorities, 
                and then allow team members to assign themselves to a story for 
                development. Each story card will progress from the backlog, to work 
                in progress, then to testing/review, and finally complete. This allows 
                all team members to check on the progress of any active and inactive 
                story. This will be somewhat cyclical in nature given the well defined 
                flow of stories through each step with the developers picking up new 
                stories as current ones are completed.`
            ],
            "Roles",
            [
                `We have our system architect role, which will likely assist in figuring 
                out the order in which cards need to be completed to ensure functionality 
                is maintained. Additionally, we are hoping that this encourages 
                collaboration, considering we should have a different developer work on 
                testing a feature that one developer works on. The CIT Lead will be 
                primarily responsible for the overall testing and integration effort through 
                the use of CI/CD pipelines and automated tests when possible. Each team 
                member will be a developer working on implementing stories and will 
                therefore need to be present at meetings where we discuss requirements and 
                create stories. The project lead will be primarily responsible for leading 
                these meetings and consulting with the team to ensure everyone is on the 
                same page. The communications lead will be responsible for communicating 
                any team questions to the sponsor so we can get more accurate information 
                about requirements.`
            ],
            "Standards and Quality Practices",
            [
                `The CIT Lead will hold the primary responsibility of testing and 
                integration efforts, but each developer will also be responsible for 
                testing their code. Unit tests should be written for new functionality by 
                the developer who implemented the functionality. Once implemented and 
                tested, the story will move to the Review phase where another developer 
                will perform a code review and run manual tests on the new functionality. 
                The CIT Lead will assist in setting up CI/CD pipelines for automated 
                testing when possible. This will reduce the overall time spent manually 
                testing and increase the quality of the software with good test coverage.`
            ],
            "Tools",
            [
                `For our kanban board, we are using Github Projects, which ties into our 
                repository, allowing us to link branches and commits directly to the 
                relevant cards. Github Projects also has built in metrics, showing the 
                number of cards done, who has cards assigned, and more.`
            ],
            "Metrics and Measurements",
            [
                `Because we are using Kanban, there are no sprints like in Scrum so some 
                metrics and measurements will not be viable with this methodology. Our 
                primary process metric will be the number of cards in progress and in 
                review and defect metrics from internal testing. See the Process and 
                Project Metrics document for a more in depth explanation of our metrics.`
            ]
        ]
    },
    {
        title: "Process and Project Metrics",
        contentList: [
            "Process",
            [
                `One metric will be the number of cards in the in-progress and in code 
                review sections on our kanban board at any given time. We are looking to 
                have only 1 or 2 cards in progress per person at any given time, along 
                with only having 1 or 2 cards in code review for the entire team at any 
                given time. Along with this, we are already taking time measurements for 
                our project requirements, so we can use time tracking as a good tracker 
                of effort throughout the project. The time tracking system, Kimai, 
                contains features like weekly and monthly summaries that can be filtered 
                to be per person and per team.`
            ],
            "Progress",
            [
                `As for progress metrics, we will measure our progress throughout the 
                project by measuring the number of passing tests and the number of defects 
                given at any given time.	The number of passing tests will be measured 
                by running tests after each card is completed, and updating which tests 
                were created, which ones started failing, and which ones were fixed. The 
                number of defects will be tracked using a defect tracking system like 
                Github Issues.`
            ]
        ]
    },
    {
        title: "Planned Milestones and Major Deliverables",
        contentList: [
            [
                `Our major milestones would be getting our tech stack fully functional in 
                a basic demo application. Next, we will look to get the logC3 imports 
                fully working, along with converting that to a logC4 LUT and applying that 
                to an image. Finally, being able to edit the LUT conversion to create the 
                final logC4 LUT, and being able to export that would be our final major 
                milestone. While getting the back-end functional, we will also be 
                iteratively designing and creating the front-end so we can respond to 
                sponsor feedback and ultimately have a desirable user interface. After 
                this, we hope to implement some of the stretch goals as defined in the 
                project proposal, such as visualizing the 1D and 3D color gamut and the 
                ability to visualize changes being done on each node.`
            ]
        ]
    },
    {
        title: "Initial Requirements",
        contentList: [
            [
                `The minimum viable product is an application that runs on macOS that 
                imports a logC3 LUT and up to 8 images, generates logC4 LUT, and is able 
                to apply both LUTs to the imported images. Users can view a side-by-side 
                comparison of the images after the LUTs are applied and fine tune and 
                customize the generated LUT before finally exporting.`
            ]
        ]
    },
    {
        title: "Communications and Stakeholder Management",
        contentList: [
            [
                `We have a dedicated Communications Lead who is responsible for 
                communicating with the sponsor. This is important because they will act 
                as a sole point of contact, relaying development team questions to the 
                sponsor and transmitting any questions the sponsor may have to the 
                development team.`
            ]
        ]
    },
];