import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const JobsContext = createContext([]);

function App() {
  const [count, setCount] = useState(0)
  const jobsDetails = useLoaderData();

  return (
    <>
      <JobsContext.Provider value={jobsDetails}>
        <Header></Header>
        <Outlet></Outlet>
      </JobsContext.Provider>
    </>
  )
}

export default App
