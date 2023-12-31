import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';
import BannerImage from '../../../public/images/header-image.png'

const Home = () => {
    const [jobLists, setJobLists] = useState([]);

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);


    // const featuredJobs = featuredJob.slice(0, 4);
    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])


    // job list
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobLists(data))
    }, [])


    // console.log(featuredJobs);

    return (
        <div>
            {/* Banner Header section */}
            <div className='my-container flex flex-col-reverse md:flex-row mt-6 p-2'>
                <div className='md:w-1/2'>
                    <h2 className='text-7xl font-semibold md:mr-20 md:mt-14'>One Step Closer To Your <span className='text-violet-700'>Dream Job</span></h2>
                    <p className='text-lg mt-8 mb-4 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div className='md:w-1/2 mb-12 md:mb-0'>
                    <img className=' ' src={BannerImage} alt="" />
                </div>
            </div>

            {/* Job Category List */}
            <div className='my-container p-2 text-center mt-28'>
                <h2 className='text-5xl font-semibold'>Job Category List</h2>
                <p className='text-lg mt-4 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:flex mt-8 md:gap-6'>
                    {
                        jobLists.map(jobList => <JobList
                            key={jobList.id}
                            jobList={jobList}
                        ></JobList>)
                    }
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className='my-container p-2 text-center mt-28'>
                <h2 className='text-5xl font-semibold'>Featured Jobs</h2>
                <p className='text-lg mt-4 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:grid grid-cols-2 my-12 md:gap-6'>
                    {
                        showAll ? 
                        featuredJobs.map(featuredJob => <FeaturedJob
                            key={featuredJob.id}
                            featuredJob={featuredJob}
                        ></FeaturedJob>)
                        :
                        featuredJobs.slice(0, 4).map(featuredJob => <FeaturedJob
                            key={featuredJob.id}
                            featuredJob={featuredJob}
                        ></FeaturedJob>)
                    }
                </div>
                <div>
                    {
                        !showAll && <button onClick={() => setShowAll(true)} className='btn-primary'>See All Jobs</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;