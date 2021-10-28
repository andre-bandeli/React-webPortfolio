import React from 'react'
import "./slider.scss"


function Slider() {

    
    return (
        <div className="slider">
            <div className="txt">
                <h1>Minhas Produções</h1>
            </div>
            <div className="container">
                <iframe src="https://www.youtube.com/embed/AIi9SfMiZ50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="left">
                    <h1>CORONA </h1> <h3>BEAT</h3>
                    <h2>A videodança é um produto híbrido realizado com a mistura entre o audiovisual e a dança e tem como principal 
                        elemento o movimento. É diferente do mero registro documental de um espetáculo porque pressupõe uma adaptação do que.</h2>
                    <button>
                       share 
                    </button>
                </div>

            </div>
                <div className="back"> </div>
        </div>
    )
}


export default Slider;