import React, { useState } from "react"

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

  return(
    <div className="header-and-menu">
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <a href="/">ARTERION</a>
              
            </div>

            <div className="header-menu">
                <a className="contact-animate" id="contact-button" onClick={() => setMenu(true)}>KONTAKT</a>
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
            <h3>Jalsje 22, Jalsje</h3>
            <h3>Veliko Trgovisce</h3>
            <h3>Hrvatska</h3>
        </div>
      </div>
    </div>
  )
  

}


export default Header
