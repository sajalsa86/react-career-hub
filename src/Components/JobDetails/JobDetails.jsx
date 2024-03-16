import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utilitis/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job)
    const handleJobApplication = () => {
        saveJobApplication(idInt);
        toast("You have Applied Successfully !!")
    };
    return (
        <div>
            <h2 className="my-5 text-center text-3xl font-bold">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-5">
                <div className="md:col-span-3">
                    <p className="mb-8 text-slate-600"><span className="text-gray-900 font-semibold">Job Description: </span>{job.job_description}</p>
                    <p className="mb-4 text-slate-600"><span className="text-gray-900 font-semibold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <h4 className="mb-5 text-gray-900 font-semibold">Educational Requirements:</h4>
                    <p className="my-5">{job.educational_requirements}</p>
                    <h4 className="text-gray-900 font-semibold">Experiences:</h4>
                    <p className="mt-5">{job.experiences}</p>
                </div>
                <div>
                    <div className="bg-violet-200 p-4 rounded">
                        <h3 className="text-gray-900 font-semibold">Job Details</h3>
                        <hr className="my-4 border border-1 border-gray-300"></hr>
                        <h4 className="flex mb-3">
                            <AiOutlineDollarCircle className="text-xl mr-1 text-violet-500"></AiOutlineDollarCircle>
                            <p className="capitalize text-sm"><span className="text-gray-900 font-semibold">salary: </span>{job.salary} (per month)</p>
                        </h4>
                        <h4 className="flex mb-4">
                            <IoCalendarOutline className="text-xl mr-1 text-violet-500"></IoCalendarOutline>
                            <p className="capitalize text-sm"><span className="text-gray-900 font-semibold">Job Title : </span>{job.job_title}</p>
                        </h4>
                        <h3 className="text-gray-900 font-semibold">Contact Information</h3>
                        <hr className="my-3 border border-1 border-gray-300"></hr>
                        <h4 className="flex mb-4">
                            <MdOutlinePhone className="text-xl mr-1 text-violet-500"></MdOutlinePhone>
                            <p className="capitalize text-sm"><span className="text-gray-900 font-semibold">phone : </span>{job.contact_information.phone}</p>
                        </h4>
                        <h4 className="flex mb-4">
                            <MdOutlineMailOutline className="text-xl mr-1 text-violet-500"></MdOutlineMailOutline>
                            <p className="capitalize text-sm"><span className="text-gray-900 font-semibold">email : </span>{job.contact_information.email}</p>
                        </h4>
                        <h4 className="flex mb-4">
                            <GrLocation className="text-xl mr-1 text-violet-500"></GrLocation>
                            <p className="capitalize text-sm"><span className="text-gray-900 font-semibold">address : </span>{job.contact_information.address}</p>
                        </h4>
                    </div>
                    <button onClick={handleJobApplication} className="btn btn-primary mt-6 w-full">Apply Now</button>
                    <ToastContainer position="top-left" />
                </div>

            </div>
        </div>
    );
};

export default JobDetails;