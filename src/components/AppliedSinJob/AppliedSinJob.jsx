import React from 'react';
import { Link } from 'react-router-dom';

const AppliedSinJob = ({ singleJob }) => {
    // console.log(singleJob[0]);
    const { id, logo, jobTitle, companyName, location, salary, isRemote } = singleJob[0]
    return (
        <div className='my-container'>
            <div className='md:flex justify-between items-center mt-12 mx-2 md:my-16'>
                <div className='md:flex gap-14'>
                    <img className='w-52 h-36' src={logo} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>{jobTitle}</h2>
                        <p className='text-lg text-gray-600'>{companyName}</p>
                        <button className='btn-trans my-2'>{isRemote}</button>

                        <div className='flex text-lg text-gray-600'>
                            <p className='mr-8'><span></span>Location: {location}</p>
                            <p><span></span>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/jobViewDetails/${id}`}>
                    <button className='btn-primary w-50 h-14'>View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default AppliedSinJob;