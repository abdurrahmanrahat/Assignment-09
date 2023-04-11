import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default function Statistics() {

    const data = useLoaderData();


    return (
        <div>
            <div className='divide-y-1 divide-gray-600  '>
                <h2 className='text-4xl font-semibold text-purple-700 text-center mt-12 mb-3'>Here is shown my Assignment Marks with a SimpleAreaChart</h2>
                <hr className='w-2/5 mx-auto' />

            </div>

            <div className='mt-10 md:p-8'>
                <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    );

}
