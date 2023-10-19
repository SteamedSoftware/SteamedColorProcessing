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
                Kanban is a Japanese word meaning “visual board” or “sign”, and is 
                based around keeping track of tasks using a visual board system. 
                Kanban is mainly focused on increasing transparency by breaking down 
                work into small tasks, visualizing them, and keeping work in progress 
                items limited. We will define stories as we discover requirements, 
                assign priorities, and then allow team members to assign themselves 
                to a story for development. Each story card will progress from the 
                Backlog, to Work In Progress, then to Testing/Review, and finally 
                Complete. This allows all team members to check on the progress of 
                any active and inactive story. This will be somewhat cyclical in nature 
                given the well defined flow of stories through each step with the 
                developers picking up new stories as current ones are completed. Our 
                Kanban methodology also prevents more than 1 or 2 cards from being 
                placed in work in progress per each team member, thus simplifying the 
                workflow for developers and ensuring that tasks are completed in a 
                timely manner before starting additional work.`
            ],
            "Roles",
            [
                `The Project Lead is responsible for leading team meetings and delegating 
                tasks from the Kanban board. Additionally, keeping track of the card 
                completion rate will give an overview on the team’s progress, and will 
                allow for notifying the team if there seem to be any blockers.`
            ],
            [
                `The Communications lead is responsible for leading sponsor meetings and 
                is the main point of contact between the project sponsor and software 
                team. Their role in the Kanban methodology is creating cards based on 
                requests from the sponsor and requirements, and demonstrating completed 
                features for the sponsor and coach.`
            ],
            [
                `The Systems Architect is responsible for ensuring that the system and 
                features are compatible with one another, along with tracking feature 
                development. In Kanban, they will be responsible for code review on 
                cards moving out of work in progress, as well as limiting the number of 
                cards set to in progress.`
            ],
            [
                `The CIT lead is responsible for issue tracking and delegating bug fix 
                tasks, along with maintaining the CI pipelines for the project. Their 
                role in the Kanban methodology is to add issues to our issue tracker, 
                connecting them with the relevant cards, and also limiting the number 
                of issues open at any given time, in line with the principles of Kanban.`
            ],
            [
                `The Website lead is responsible for keeping the project website updated 
                with information like the weekly 4-up, project artifacts, and any other 
                relevant information to the project that should be public-facing. In 
                Kanban, they will keep track of our various project and process metrics, 
                visualize the data, and update this information on the website, along 
                with reporting this information to the team and sponsor.`
            ],
            "Standards and Quality Practices",
            [
                `The CIT Lead will hold the primary responsibility of testing and integration 
                efforts, but each developer will also be responsible for testing their code. 
                Unit tests should be written for new functionality by the developer who 
                implemented the functionality. Once implemented and tested, the story will 
                move to the Review phase where another developer will perform a code review 
                and run manual tests on the new functionality. The CIT Lead will assist in 
                setting up CI/CD pipelines for automated testing when possible. The CI 
                pipeline will automatically evaluate unit tests, highlighting developer-defined 
                behavioral defects. This will reduce the overall time spent manually testing 
                and increase the quality of the software with good test coverage. Failing 
                tests will be assigned to be resolved by the developer who wrote the test. 
                The CIT lead assigns developers to bug fixing tasks when issues are reported 
                by creating relevant cards on GitHub Projects and assigning team members. To 
                further monitor product quality, we will be tracking defect metrics as 
                explained in Process and Project Metrics below.`
            ],
            "Tools",
            [
                `For our kanban board, we are using GitHub Projects, which ties into our 
                repository, allowing us to link branches and commits directly to the 
                relevant cards. GitHub Projects also has built in metrics, showing the 
                number of cards done, who has cards assigned, and more. GitHub also has 
                an “issues” board, which will be used for defect tracking and assigning. 
                Each member of the team will have a role in organizing the different 
                parts that make up the Kanban board, from the project lead delegating 
                tasks to the CIT lead keeping track of bugs and adding those to our issue 
                tracker.`
            ],
            [
                `The review process for stories should be well defined as it is an 
                integral part of our Kanban methodology. Once a story has been implemented 
                and tested by the developer, it will be put into review through a PR. All 
                other developers will be responsible for performing a code review to u
                phold coding standards and best practices. However, code reviews are often 
                time consuming and lead to bottlenecks, so it is only required that 2 
                other developers approve the merge request. In addition to a static code 
                review, the reviewers should manually test the new functionality, if 
                possible. The CIT Lead will be responsible for automated testing of the 
                new functionality once merged.`
            ]
        ]
    },
    {
        title: "Weekly Workflow",
        contentList: [
            [
                `While not using a strict, Scrum-based process, our development methodology 
                and process still defines a general weekly workflow that should be followed. 
                There are a minimum of two in-person meetings each week: a Team Meeting on 
                Tuesdays, and a Sponsor Meeting on Thursdays. General development will occur 
                outside of these meetings based on any plans discussed. At the beginning of 
                each week, team members should do some individual planning so they are prepared 
                for the team meeting. Written stand-ups and status updates via Discord will be 
                required to allow for communication and cohesiveness.`
            ],
            "Development",
            [
                `Story planning will be done at the Team Meeting, but development will occur 
                outside of these meetings. Stories will be pulled from the Kanban backlog and 
                worked on by the respective developer. A new branch will be made for each story 
                following proper version control standards. The name of this branch should follow 
                the format of: developerInitials_storyDescription`
            ],
            "Individual Planning - Monday",
            [
                `Each team member should look over the backlog before the weekly team meeting to 
                ensure there are no missing requirements. Thinking about the week ahead is 
                important and looking at the backlog is a great way to gauge future tasks. During 
                this time, everyone should think about their current work and about how it fits 
                into the whole project as well as look at the Senior Project Portal to check for 
                any upcoming submissions. This is more of an informal activity to be performed by 
                each team member so that they are prepared for the team meeting on Tuesday, allowing 
                for more work to be done.`
            ],
            "Team Meeting - Tuesday",
            [
                `The Team Lead is responsible for leading the team meetings, at which any upcoming 
                milestones (development and/or project artifacts) are discussed first to ensure 
                timely completion and to keep everyone up to date. Any blockers will be discussed 
                during the team meeting if they haven’t been already. At the team meeting the team 
                will help the communications lead create the meeting agenda for the upcoming sponsor 
                meeting and a 4-Up as a weekly progress artifact. General task planning and artifact 
                creation will be a priority for team meetings since everyone will be present. This 
                includes the aforementioned agenda and 4-Up as well as development tasks that will 
                need to be completed next and story creation. Requirements breakdown will be done 
                based on the information at the time to create any stories that may be missing in the 
                backlog. Stories will also be assigned at the team meeting based on developer 
                availability and implementation specifics (backend/frontend).`
            ],
            "Sponsor Meeting - Thursday",
            [
                `Following the agenda produced during the earlier team meeting, the 4-Up is presented 
                to the sponsor, ending with our team's questions for the sponsor. This meeting time 
                is used to validate our requirements and gather any necessary resources from the 
                sponsor.`
            ],
            "Standups - Sunday",
            [
                `Written, weekend stand-ups will be required via Discord to help ensure the team is 
                on track and doing work. Having a weekend stand-up is important since the team only 
                meets in person twice a week. This allows the team members to stay up to date on what 
                the other developers are working on and their progress in those tasks. Information 
                about tasks progress is crucial to have by Sunday so it can be discussed at the 
                following weekly meeting.`
            ],
            "Progress and Issue Updates - Rolling Basis",
            [
                `Each team member should look over the Kanban board to make sure it is up to date 
                and is responsible for updating their assigned tasks with any changes necessary. 
                When claiming a new task, members will inform the team which issue they plan to 
                pursue and their reasoning for it, to allow other members to raise concerns. In 
                addition, developers should update the team in the Standups channel on a rolling 
                basis as progress is made on specific tasking. If anyone finds a potential issue or 
                is blocked for any reason, the concern should be raised to the rest of the team in 
                the Standups channel as well. If the issue is a bug with the current implementation, 
                an issue should be created via the issue tracking on GitHub. For more information 
                on issue tracking and bug fixes, see Standards and Quality Practices below.`
            ]
        ]
    },
    {
        title: "Process and Project Metrics",
        contentList: [
            "Process",
            [
                `One metric will be the number of cards in the in-progress and in code 
                review sections on our kanban board at any given time. We are looking 
                to have only 1 or 2 cards in progress per person at any given time, 
                along with only having 1 or 2 cards in code review for the entire team 
                at any given time. Along with this, we are already taking time 
                measurements for our project requirements, so we can use time tracking 
                as a good tracker of effort throughout the project. The time tracking 
                system, Kimai, contains features like weekly and monthly summaries that 
                can be filtered to be per person and per team. Earned value will help us 
                visualize progress even more when used with our Kanban methodology. 
                Kanban allows us to visualize story progression and identify possible 
                bottlenecks, but adding in earned value will allow us to also visualize 
                story importance/complexity as not all stories will require the same 
                amount of work. This will also help explain why some stories take longer 
                than others without having to jump to the conclusion that there is a 
                bottleneck.`
            ],
            "Product",
            [
                `As for product metrics, we will measure our progress throughout the 
                project by measuring the number of passing tests and the number of 
                defects given at any given time.	The number of passing tests will 
                be measured by running tests after each card is completed, and updating 
                which tests were created, which ones started failing, and which ones were 
                fixed. The number of defects will be tracked using a defect tracking 
                system like GitHub Issues. Overall test coverage will also be tracked to 
                help find bugs and improve product quality.`
            ]
        ]
    },
    {
        title: "Planned Milestones and Major Deliverables",
        contentList: [
            [
                `Our major milestones would be getting our tech stack fully functional 
                in a basic demo application. Next, we will look to get the LogC3 imports 
                fully working, along with converting that to a LogC4 LUT and applying 
                that to an image. Finally, being able to edit the LUT conversion to 
                create the final LogC4 LUT, and being able to export that would be our 
                final major milestone. While getting the back-end functional, we will 
                also be iteratively designing and creating the front-end so we can 
                respond to sponsor feedback and ultimately have a desirable user 
                interface. After this, we hope to implement some of the stretch goals 
                as defined in the project proposal, such as visualizing the 1D and 3D 
                color gamut and the ability to create, track, and visualize changes as 
                stacked nodes.`
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