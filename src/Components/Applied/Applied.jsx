
import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
const Applied = ({ applied }) => {
    // eslint-disable-next-line react/prop-types
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = applied;
    return (
        <div className="border p-3 rounded my-5">
            <div className="grid grid-cols-8 items-center">
                <div className="h-44 col-span-2 bg-slate-300 rounded mr-10 flex items-center justify-center">
                    <img className="" src={logo} alt="" />
                </div>
                <div className="col-span-3">
                    <h2>{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="my-2">
                        <button className="mr-4 p-2 border rounded text-violet-600 font-semibold hover:bg-blue-200">{remote_or_onsite}</button>
                        <button className="p-2 border rounded text-violet-600 font-semibold hover:bg-blue-200">{job_type}</button>
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
                </div>
                <button className="w-28 flex justify-self-end me-5 btn btn-primary font-semibold text-md col-span-3">View Details</button>
            </div>
        </div>
    );
};

export default Applied;