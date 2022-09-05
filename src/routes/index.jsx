import React from 'react'
import { useRoutes } from 'react-router-dom'
import Contact from '../pages/contact/Contact';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Login from '../pages/Login/Login';
import News from '../pages/news/News';
import CheckOut from '../pages/checkout/CheckOut';
import HomeTemplate from '../template/HomeTemplate/HomeTemplate';
import UserTemplate from '../template/UserTemplate/UserTemplate';
import CheckOutTemplate from '../template/CheckOutTemplate/CheckOutTemplate';
import Profie from '../pages/profile/Profie';
import AdminTemplate from '../template/AdminTemplate/AdminTemplate';
import Films from '../pages/Admin/Films/Films';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import ShowTime from '../pages/Admin/Showtime/ShowTime';
import AddNew from '../pages/Admin/Films/AddNew/AddNew';
import Edit from '../pages/Admin/Films/Edit/Edit';

export default function Routes() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeTemplate/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/news',
                    element: <News/>
                },
                {
                    path: '/detail/:id',
                    element: <Detail/>
                }
            ]
        },
        {
            path: '/login',
            element: <UserTemplate/>,
            children: [
                {
                    path: '/login',
                    element: <Login/>
                },
            ]
        },
        {
            path: '/checkout',
            element: <CheckOutTemplate/>,
            children: [
                {
                    path: '/checkout:id',
                    element: <CheckOut/>
                },
            ]
        },
        {
            path: '/admin',
            element: <AdminTemplate/>,
            children: [
                {
                    path: '/admin/films',
                    element: <Films/>
                },
                {
                    path: '/admin/user',
                    element: <Dashboard/>
                },
                {
                    path: '/admin/films/showtime/:id/:tenphim',
                    element: <ShowTime/>
                },
                {
                    path: '/admin/films/addnew',
                    element: <AddNew/>
                },
                {
                    path: '/admin/films/edit/:id',
                    element: <Edit/>
                },
            ]
        }
    ]);
  return routing;
}
