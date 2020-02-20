import React, { useState } from "react"
import translate from "translate-js"

function Header() {

  const [isMenuOpen, setMenu] = useState(false);

  const openCloseMenu = () => {
    setMenu(!isMenuOpen);
  }

  var element = document.getElementById('menu');

  //open menu
  /*var contactButton = document.querySelector("contact-animate");
  if (contactButton){
    contactButton.addEventListener('click', function() {
      openCloseMenu();   
    });
  }*/

  //close menu on outside click
  window.addEventListener('click', function(e){
     if(element && !element.contains(e.target) && isMenuOpen){
       openCloseMenu();
     }
  });

  function getLocale() {
    var lang = "";
    if (navigator.languages !== undefined) lang = navigator.languages[0]; 
    else lang = navigator.language;

    if (lang.substring(0,2).localeCompare("hr") !== 0) return "en"
    else return "hr"
  }

  var locale = getLocale();

  translate.add({contact: 'KONTAKT', country: 'Hrvatska'}, 'hr');
  translate.add({contact: 'CONTACT', country: 'Croatia'}, 'en');

  return(
    <div className="header-and-menu">
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <a href="/">ARTERION</a>
              
            </div>

            <div className="header-menu">
  <a className="contact-animate" id="contact-button" onClick={() => setMenu(true)}>{translate('contact', null, {locale: locale})}</a>
              </div>
          </div>
        </div>
      </header>

      <div className={isMenuOpen ? "menu-cont is-open" : "menu-cont"} id='menu'>
        <div className="close-button">
            <h3>CLOSE</h3>
        </div>

        <div className="contact-info">
            <a href="mailto:info@arterion.design">info@arterion.design</a>
            <a href="tel:385 123 456">+385 123 456</a>
        </div>

        <div className="company-info">
            <h3>Jalšje 22, Jalšje</h3>
            <h3>Veliko Trgovišće</h3>
            <h3>{translate('country', null, {locale: locale})}</h3>
        </div>
      </div>
    </div>
  )
  

}


export default Header
