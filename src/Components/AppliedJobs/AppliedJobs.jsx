import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilitis/LocalStorage";
import Applied from "../Applied/Applied";
import { SlArrowDown } from "react-icons/sl";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    const handleFilterJob = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    };
    return (
        <div>
            <h2 className="my-12 text-center text-2xl">Applied Job: {appliedJobs.length}</h2>
            <div className="text-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By <SlArrowDown /> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilterJob('all')}><a>All</a></li>
                        <li onClick={() => handleFilterJob('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterJob('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {displayJobs.map(applied => <Applied
                    key={applied.id}
                    applied={applied}
                ></Applied>)}
            </div>
        </div>
    );
};

export default AppliedJobs;