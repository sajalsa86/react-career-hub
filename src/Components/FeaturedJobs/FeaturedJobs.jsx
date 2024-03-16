import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Job from "../Job/Job";
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    //this is not the best way to load show all data
    const [dataLength, setDatalength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        <div>
            <Section
                heading={`Featured Jobs : ${jobs.length}`}
                para={"Explore thousands of job opportunities with all the information you need. Its your future"}
            ></Section>
            <div className="my-10 grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center mb-4'}>
                <button className="btn btn-success" onClick={() => setDatalength(jobs.length)}>Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;