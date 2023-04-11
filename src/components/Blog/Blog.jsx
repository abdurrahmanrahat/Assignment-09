import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-container p-2'>
                <div className="my-10">
                    <h2 className='text-2xl font-semibold'>Q-1. When should you use context API?</h2>
                    <p className='text-lg mt-2 text-gray-600'><span className='font-semibold'>Ans-</span> In react, we use props for giving and receiving data from a component to another component. When react provide us context API, easily we can use it in parent component for giving data through value property and we can receive this data from any other child component.</p>
                </div>
                <div className="my-10">
                    <h2 className='text-2xl font-semibold'>Q-2. What is a custom hook?</h2>
                    <p className='text-lg mt-2 text-gray-600'><span className='font-semibold'>Ans-</span> Custom hooks in react js are reusable functions that we can use to add special and unique functionality to the React applications. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.</p>
                </div>
                <div className="my-10">
                    <h2 className='text-2xl font-semibold'>Q-3. What is useRef?</h2>
                    <p className='text-lg mt-2 text-gray-600'><span className='font-semibold'>Ans-</span> The useRef in react js which has an initial value is a built-in react hook that accepts one argument as the initial value and returns a reference. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
                <div className="my-10">
                    <h2 className='text-2xl font-semibold'>Q-4. What is useMemo?</h2>
                    <p className='text-lg mt-2 text-gray-600'><span className='font-semibold'>Ans-</span> The React useMemo Hook returns a memoized value that allows you to memoize expensive functions so that you can avoid calling them on every render. The useMemo Hook only runs when one of its dependencies is updated. This can improve our site performance.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;