import React from 'react';

const JobList = ({ jobList }) => {
    const { coverImage, job, title } = jobList;
    return (

        <div className='md:w-1/4 p-4 text-start ml-16 md:ml-0'>
            <div className='w-20 h-20 '>
                <img className='object-cover' src={coverImage} alt="" />
            </div>
            <h3 className='text-2xl font-medium'>{title}</h3>
            <p className='text-lg text-gray-600'>{job}</p>
        </div>

    );
};

export default JobList;