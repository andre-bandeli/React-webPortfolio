import React from 'react'
import "./header.scss"

import backgroundvideo from "./furia.mp4"


function Header() {
    return (
        <video autoPlay muted src={backgroundvideo} type="video/mp4" id="video">
            </video>
    )
}

export default Header