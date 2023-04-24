import React from 'react'
import BodyPage from './BodyPage'
import FooterPage from './FooterPage'
import HeaderPage from './HeaderPage'
import './Css/styling.css'
import IplLogo from "../images/iplLogo.png"

function HomePage() {
    return (
        <div className='scorePage'>
            {/* <HeaderPage /> */}
            <div>
            <h1 className='rcb'>RCB</h1>
            <BodyPage />
            </div>
            <h1>VS</h1>
            <div>
            <h1 className='csk'>CSK</h1>
            <BodyPage />
            </div>
            {/* <FooterPage /> */}
        </div>
    )
}

export default HomePage
