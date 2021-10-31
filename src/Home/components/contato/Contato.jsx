import React from 'react';
import "./contato.scss"

function Contato() {
  return (
    <div className="contato">
        <div className="left">
            <div className="contact">
                <h1>CONTATO</h1>
            </div>

            <div className="redes">
                
                <img src="assets/instagram.png" alt="" />
                   <h2>INSTAGRAM: @henriqueHokamura </h2>
                   
            </div>

            <div className="redes">
                
                <img src="assets/telefones.png" alt="" />
                    <h2>Iniciar conversa no WhatsApp </h2>
                   
            </div>

            <div className="redes">
                
                <img src="assets/face.png" alt="" />
                     <h2>Facebook.com/henriquehokamura</h2>
                   
            </div>
        </div>

        <div className="right">
            <div className="container"></div>
        </div>
    </div>
  );
}


export default Contato;