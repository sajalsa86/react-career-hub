
import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // eslint-disable-next-line react/prop-types
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="mr-4 btn btn-warning py-2 px-4 text-violet-900 font-extrabold hover:bg-blue-200">{remote_or_onsite}</button>
                    <button className="btn btn-success py-2 px-4 text-violet-900 font-extrabold hover:bg-blue-200">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <h2 className="flex mr-4">
                        <MdLocationOn className="text-2xl mr-2"></MdLocationOn>
                        {location}
                    </h2>
                    <h2 className="flex">
                        <HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>
                        {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;