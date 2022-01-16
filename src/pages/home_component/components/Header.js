import React from 'react'

import TopNav from './TopNav'

import './css/header.css'

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="row">
                <div className="col-4 col-md-3">
                    <img src="https://i0.wp.com/s1.uphinh.org/2021/02/18/logod32c8897b67fa29a.png" alt="logo"/>
                </div>
                <div className="col-8 col-md-9">
                    <TopNav/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header