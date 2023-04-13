import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { JobsContext } from '../../App';
import { addToDb } from '../../utilities/fakedb';

const JobViewDetails = () => {
    const jobsDetails = useContext(JobsContext);
    // console.log(jobsDetails);

    // const jobsDetails = useLoaderData();
    // const [jobsDetails, setJobsDetails] = useState([]);
    // console.log(jobsDetails);

    // useEffect(() => {
    //     fetch('featuredJobs.json')
    //         .then(res => res.json())
    //         .then(data => setJobsDetails(data))
    // }, [])


    const { jobId } = useParams();
    // console.log(jobId);

    const singleJob = jobsDetails.find(singleJob => singleJob.id == jobId);
    // console.log(singleJob);

    // handler apply now btn 
    const handleApplyNow = (id) => {
        console.log(id);
        addToDb(id);
    }

    return (
        <div className='md:flex my-container md:gap-14 my-12'>
            <div className='md:w-2/3 p-4'>
                <p className='text-lg text-gray-600'><span className='text-gray-900 font-bold'>Job Description:</span> {singleJob.jobDescription}</p>
                <p className='text-lg text-gray-600 my-6'><span className='text-gray-900 font-bold'>Job Responsibility:</span> {singleJob.jobResponsibility}</p>
                <h6 className='text-gray-900 font-bold'>Educational Requirements:</h6>
                <p className='text-lg text-gray-600 my-4'>{singleJob.eduRequirment}</p>

                <h6 className='text-gray-900 font-bold'>Experiences:</h6>
                <p className='text-lg text-gray-600 my-4'>{singleJob.experiences}</p>
            </div>
            <div className='md:w-1/3 bg-blue-100 bg-opacity-40 p-6 rounded-md'>
                <div>
                    <h4 className='text-2xl font-bold'>Job Details</h4>
                    <hr className='my-4' />
                    <p className='text-lg text-gray-600 mb-2'><span className='text-gray-900 font-semibold'>Salary:</span> {singleJob.salary}(Per Month)</p>
                    <p className='text-lg text-gray-600'><span className='text-gray-900 font-semibold'>Job Title:</span> {singleJob.jobTitle}</p>
                </div>
                <div>
                    <h4 className='text-2xl font-bold mt-8'>Contact Information</h4>
                    <hr className='my-4' />
                    <p className='text-lg text-gray-600 mb-2'><span className='text-gray-900 font-semibold'>Phone:</span> {singleJob.phone}(Per Month)</p>
                    <p className='text-lg text-gray-600 mb-2'><span className='text-gray-900 font-semibold'>Email:</span> {singleJob.email}(Per Month)</p>
                    <p className='text-lg text-gray-600 mb-8'><span className='text-gray-900 font-semibold'>Address:</span> {singleJob.address}</p>
                </div>
                <button onClick={() => handleApplyNow(jobId)} className='btn-primary w-full'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobViewDetails;