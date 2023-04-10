import React from 'react';

const Home = () => {
    return (
        <div className='my-container md:flex mt-6 p-2'>
            <div className='md:w-1/2'>
                <h2 className='text-7xl font-semibold md:mr-20 md:mt-14'>One Step Closer To Your <span className='text-violet-700'>Dream Job</span></h2>
                <p className='text-lg mt-8 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-primary'>Get Started</button>
            </div>
            <div className='md:w-1/2 '>
                <img className='  ' src="/src/assets/header-image.png" alt="" />
            </div>
        </div>
    );
};

export default Home;