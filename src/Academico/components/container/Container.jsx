import React from 'react'
import "./container.scss"

export default function Container() {
    return (
        <div className='container'>
            <div className="item">
                <div className="item-1">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam ab nam tenetur, rem corporis, 
                        perspiciatis doloremque at provident accusantium 
                        corrupti ut illo laborum porro commodi dolor debitis
                         earum nobis cumque.
                    </h1>
                </div>
                <div className="itens">
                    <div className='i1'>
                        <img src="assets/1.jpg" alt="" />
                        <img src="assets/1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
