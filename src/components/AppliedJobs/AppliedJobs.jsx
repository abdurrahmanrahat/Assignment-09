import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../../App';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedSinJob from '../AppliedSinJob/AppliedSinJob';

const AppliedJobs = () => {
    const [dBJobs, setDbJobs] = useState([]);

    const jobsDetail = useContext(JobsContext);
    // console.log(jobsDetail);

    const [specificJobs, setSpecificJobs] = useState([]);

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
        setSpecificJobs(savedJobs);

    }, [])
    // console.log(dBJobs);
    const stoJobs = dBJobs;
    // console.log(stoJobs);

    const handleSpecificJobs = (event) => {
        const value = event.target.value;
        console.log(value);
        const filterData = dBJobs.filter((item) => item[0].isRemote == value);
        setSpecificJobs(filterData)
    }

    // const getFromDb = getShoppingCart();
    // console.log(getFromDb);

    return (
        <div>

            <div className="my-6 my-container text-right">
                <label htmlFor="">Filter Order: </label>
                <select onChange={handleSpecificJobs} className="select select-bordered w-full max-w-xs ml-2">
                    <option disabled selected>
                        Choose Here
                    </option>
                    <option value={"Remote"} >Remote Jobs</option>
                    <option value={"Full Time"}>Full Time Job</option>
                </select>
            </div>

            <div>
                {
                    specificJobs.map(dBJob => <AppliedSinJob
                        key={dBJob[0].companyName}
                        singleJob={dBJob}
                    ></AppliedSinJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;