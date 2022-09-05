import React, { useEffect } from 'react'
import { Outlet, useNavigate, Navigate} from 'react-router-dom'
import { USER_LOGIN } from '../../constant/common'
import Footer from '../HomeTemplate/footer/footer'
import Header from '../HomeTemplate/header/header'


export default function CheckOutTemplate() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate  to='/login' />
    }

    return (
        <>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
