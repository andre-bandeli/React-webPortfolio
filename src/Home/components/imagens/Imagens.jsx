import React from 'react'
import "./imagens.scss"
import { Link } from 'react-router-dom';

function Imagens() {
    return (
        <div className="im">
             <div className="txt">
                <h1>Galeria de Imagens </h1>
            </div>
            <div className="container">
                <div className="top">
                    <div className="c1">
                        <img src="assets/1.jpg" alt="" />
                    </div>
                    <div className="c2">
                    <img src="assets/2.jpg" alt="" />
                    </div>
                    <div className="c3">
                    <img src="assets/fundovideos.jpeg" alt="" />
                    </div>
                    <div className="c4">
                    <img src="assets/1.jpg" alt="" />
                    </div>
                </div>

                <div className="bot">
                    <div className="c5">
                    <img src="assets/8.jpg" alt="" />
                    </div>
                    <div className="c6">
                    <img src="assets/3re.png" alt="" />
                    </div>
                    <div className="c7">
                    <img src="assets/6.jpg" alt="" />
                    </div>
                    <div className="c8">
                    <img src="assets/1.png" alt="" />
                    </div>
                </div>

                <div className="box">
                 <Link to="/sobre"> <h3>visualizar galeria completa</h3></Link> 
                </div>
            </div>

            
        </div>
    )
}


export default Imagens;