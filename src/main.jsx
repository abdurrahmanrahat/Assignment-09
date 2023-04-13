import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import JobViewDetails from './components/JobViewDetails/JobViewDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('/featuredJobs.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignmentMarks.json')
      },
      {
        path: "jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "jobViewDetails/:jobId",
        element: <JobViewDetails></JobViewDetails>,
        // loader: ({ params }) => fetch(`/featuredJobs.json/${params.jobId}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
