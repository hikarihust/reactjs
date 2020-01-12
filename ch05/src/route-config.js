import React from 'react';

import Home from './components/Home'
import About from './components/About'
import Notfound from './components/Notfound';
import CourseList from './components/CourseList';
import LeaveMe from './components/LeaveMe';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/about",
        exact: true,
        main: () => <About />
    },
    {
        path: "/course",
        exact: false,
        main: ({ match }) => <CourseList match={ match } />
    },
    {
        path: "/leave-me",
        exact: true,
        main: () => <LeaveMe />
    },
    {
        path: "",
        exact: true,
        main: () => <Notfound />
    }
];

export default routes;