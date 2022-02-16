import React from 'react';
import "./box.scss"

function Box() {
  return (
   <div className='box'>
       <div className="container">
           <div className="one">
               <video src="assets/corpo.mp4" autoPlay muted loop></video>
               <h2>CORPO</h2>
               <div className='box-t'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi laborum dolorem eaque. 
                        Quae nihil eos omnis enim, blanditii!</h3>
               </div>
           </div>
           <div className="two">
                <video src="assets/desvu.mp4" autoPlay muted loop></video>
                <h2>DESVU</h2>
                <div className='box-t'>
                <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi laborum dolorem eaque. 
                </h3>
               </div>
           </div>
           <div className="tree">
                <video src="assets/pa.mov" autoPlay muted loop></video>
                <h2>PROAC</h2>
                <div className='box-t'>
                <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi laborum dolorem eaque. 
                        Quae nihil eos!</h3>
               </div>
           </div>
           <div className="four">
                <video src="assets/coronabeat.mp4" autoPlay muted loop></video>
                <h2>CORONABEAT</h2>
                <div className='box-t'>
                <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi laborum dolorem eaque. 
                        Quae nihil eos omnis eni Officia, blanditiis 
                        !</h3>
               </div>
           </div>
       </div>
   </div>
  );
}

export default Box;