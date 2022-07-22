import { workPlaces } from "data/workPlaces";
import { BsCursorFill } from 'react-icons/bs';


import { JobItem, JobTitle, JobPeriod, JobPlace, Duty } from "../style/ExperiencePage.styled";


const Experience = () => {

    return <div>
        <h2 className="visually-hidden">Work Experience</h2>

        <ul>
            {workPlaces.map((job, index) => <JobItem key={index}>
                <BsCursorFill size='15'/> <JobTitle>{job.position}</JobTitle>
                <div>
                    <JobPeriod>{job.date}</JobPeriod><JobPlace>{job.place}</JobPlace>
                </div>
                
                <Duty>
                    {job.info.map((duty, index) => <li key={index}>
                        {duty}
                    </li>)}
                </Duty>
            </JobItem>)}
        </ul>
</div>
}

export default Experience;