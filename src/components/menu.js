//eksperimentalno
//za brisanje

import React from "react"
import gsap from "gsap"

import "../components/menu2.scss"

const Menu = (props) => {

    if (props.isMenuOpen){
        return (
            <div className="menu-cont" id='menu'>
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
        )
    }
    else{
        return (null);
    }

}

export default Menu
