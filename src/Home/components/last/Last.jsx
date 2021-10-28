import React from 'react';
import "./last.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";


function Last() {


    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Um filme dirigido por: Henrique Hokamura, Clara etc", "Composição do estudo: corpos ausentes", "estreia em abr/22"],
        });
      }, []);
    
  return (
    <div className='Last'>
        <div className='container'>
            <div className="left">
                <h2>EM BREVE</h2>
                <h3>Projeto ProAc </h3>
                <h4> <span ref={textRef}></span></h4>
            </div>
            <div className="right">
                <video src="assets/proAc.mov" autoPlay muted loop></video>
            </div>
        </div>
    </div>
  );
}


export default Last;