import React from 'react'
import "./sliderTwo.scss"

function SliderTwo() {
    return (
        <div className='sliderTwo'>
             <div className="container">
                <div className="left">
                   <h3>INSÔNIA</h3>
                    <h2>A videodança é um produto híbrido realizado com a mistura entre o audiovisual e a dança e tem como principal 
                        elemento o movimento. É diferente do mero registro documental de um espetáculo porque pressupõe uma adaptação do que.</h2>
                    <button>
                       share
                    </button>
                </div>
                <div className="right">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/242366697?h=773b1ed5de" frameborder="0" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}


export default SliderTwo;