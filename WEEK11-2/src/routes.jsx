import { Navigate } from 'react-router'
import { lazy } from 'react'
import Layout from './layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Jobs = lazy(() => import('./pages/Jobs'))
const Contact = lazy(() => import('./pages/Contact'))

const routes = () => [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to='home' />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'jobs',
        element: <Jobs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]

export default routes
