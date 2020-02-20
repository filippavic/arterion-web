import React, { useEffect, useState } from "react"
import translate from "translate-js"
import gsap from "gsap"

function Header() {

  //gsap timeline
  const [menutl] = useState(gsap.timeline({paused: true}));

  useEffect(() => {
        
    //gsap animations
    menutl.from(".menu-info", {
      opacity: 0,
      y: 10,
      ease: "power4.out",
      skewY: 2,
      duration: 0.5,
      delay: 0.2
    }).from(".contact-info", {
      opacity: 0,
      y: 25,
      skewY: 3,
      ease: "power4.out",
      stagger: {amount: 0.4},
      duration: 0.5
    }).from(".company-info", {
      opacity: 0,
      y: 20,
      skewY: 3,
      ease: "power4.out",
      stagger: {amount: 0.4},
      duration: 0.5
    })

  }, [menutl]);

  //menu opening
  const [isMenuOpen, setMenu] = useState(false);

  const openCloseMenu = () => {
    if (!isMenuOpen){
      setMenu(true);
      menutl.play();
    }
    else{
      menutl.reverse(0);
      setTimeout(function(){
        setMenu(false);
      }, 1000);
    }
  }

  //close menu on outside click
  var element = (typeof document !== `undefined`) ? document.getElementById('menu') : null;
  var headerMenu = (typeof document !== `undefined`) ? document.getElementById('contact-button') : null;
 
  if (typeof window !== "undefined") {
    window.addEventListener('click', function(e){
      if(isMenuOpen && element && headerMenu && !element.contains(e.target) && !headerMenu.contains(e.target)){
        openCloseMenu();
      }
   });
  }
  
  //localization
  function getLocale() {
    var lang = "";
    if (typeof navigator !== "undefined"){
      if (navigator.languages !== undefined) lang = navigator.languages[0]; 
      else lang = navigator.language;

      if (lang.substring(0,2).localeCompare("hr") !== 0) return "en"
      else return "hr"
    }
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
              <a className="contact-animate" id="contact-button" onClick={() => openCloseMenu()}>{translate('contact', null, {locale: locale})}</a>
            </div>
          </div>
        </div>
      </header>

      <div className={isMenuOpen ? "menu-cont is-open" : "menu-cont"} id='menu'>
        <div className="menu-info">
            <a className="close-button" onClick={() => openCloseMenu()}>x</a>
            <h3>{translate('contact', null, {locale: locale})}</h3>
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
