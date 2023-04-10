import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    // const [open, setOpen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center my-container'>
            <h2 className='font-bold text-3xl py-8'>OrionEdu</h2>

            <nav>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ?
                                <XMarkIcon className="h-6 w-6 text-purple-500" />
                                : <Bars3Icon className="h-6 w-6 text-purple-500" />
                        }
                    </span>
                </div>

                <ul className={`text-gray-600 text-base items-start justify-start font-semibold space-x-8 flex absolute  md:static flex-col md:flex-row ${open ? 'top-16' : '-top-36'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </ul>
            </nav>

            <button className='btn-primary'>Start Applying</button>
        </div>
    );
};

export default Header;