import React from 'react';
import App from '/Users/Priscilla Santana/Desktop/Campinas Tech Talents/Práticas/facebook-clone-ctt/src/App'


function ShowContacts () {
    
    let contact = document.querySelector(".lista-de-contatos")
    let displaySetting = contact.style.display;
    let button = document.querySelector("#button")

    if (displaySetting == 'block') {
        contact.style.display = 'none';
        button.innerHTML = 'Exibir Contatos';
    } else {
        contact.style.display = 'block';
        button.innerHTML = 'Recolher Contatos'
    }
}

export default ShowContacts()