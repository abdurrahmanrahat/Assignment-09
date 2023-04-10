import React from 'react';

const JobList = ({ jobList }) => {
    const { coverImage, job, title } = jobList;
    return (
        <div className='md:w-1/4 md:text-start p-4'>
            <img className='w-20 h-20' src={coverImage} alt="" />
            <h3 className='text-2xl font-medium'>{title}</h3>
            <p className='text-lg text-gray-600'>{job}</p>
        </div>
    );
};

export default JobList;