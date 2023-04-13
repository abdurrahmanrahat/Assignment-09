import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../../App';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedSinJob from '../AppliedSinJob/AppliedSinJob';

const AppliedJobs = () => {
    const [dBJobs, setDbJobs] = useState([]);

    const jobsDetail = useContext(JobsContext);
    // console.log(jobsDetail);

    useEffect(() => {
        const storedJobs = getShoppingCart();
        const savedJobs = [];

        for (const id in storedJobs) {
            const filterJobs = jobsDetail.filter(job => job.id == id);
            if (filterJobs) {
                savedJobs.push(filterJobs);
            }
        }
        setDbJobs(savedJobs);

    }, [])
    console.log(dBJobs);
    const stoJobs = dBJobs;
    console.log(stoJobs);

    // const getFromDb = getShoppingCart();
    // console.log(getFromDb);

    return (
        <div>
            {
                stoJobs.map(dBJob => <AppliedSinJob 
                    key={dBJob[0].companyName}
                    singleJob={dBJob}
                ></AppliedSinJob>)
            }
        </div>
    );
};

export default AppliedJobs;