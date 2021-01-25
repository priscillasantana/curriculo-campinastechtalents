import React from 'react';

function Sidebar () {
    return(
        <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button id="button">Exibir Contatos</button>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(21) 99022-2459</p>
              </div>
            </li>
            <li>
              <div className="item-contato">
                <h4>E-MAIL</h4>
                <p>priscillasantana@outlook.com</p>
              </div>
            </li>
          </div>
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            <li>
              <h4>Universidade Federal de Pelotas</h4>
              <p>Relações Internacionais</p>
            </li>
            <li>
              <h4>Campinas Tech Talents - AB Inbev</h4>
              <p>Front End Jr Developer - React.js</p>
            </li>
          </div>
        </div>
      </aside>
    )
};


export default Sidebar