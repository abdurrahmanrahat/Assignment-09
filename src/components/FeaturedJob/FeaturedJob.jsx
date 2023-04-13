import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob, handleJobViewDetails }) => {
    // console.log(featuredJob);
    const { id, logo, jobTitle, companyName, location, salary, isRemote } = featuredJob;

    return (
        <div className='shadow-sm shadow-gray-400 md:px-8 pb-4 text-start rounded-lg'>
            <img className='w-52 h-36' src={logo} alt="" />
            <h2 className='font-bold text-2xl'>{jobTitle}</h2>
            <p className='text-lg text-gray-600'>{companyName}</p>
            <button className='btn-trans my-2'>{isRemote ? 'Remote' : 'Full-Time'}</button>

            <div className='flex text-lg text-gray-600'>
                <p className='mr-8'><span></span>Location: {location}</p>
                <p><span></span>Salary: {salary}</p>
            </div>

            <Link to={`/jobViewDetails/${id}`}><button className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;