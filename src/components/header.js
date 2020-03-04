import React, { useEffect, useState } from "react"
import gsap from "gsap"
import translate from "translate-js"

function Header() {

  //gsap timeline
  const [menutl] = useState(gsap.timeline({paused: true}));

  //scroll to top animation
  const scroll = () => {
    if (typeof window !== "undefined"){
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }
  }

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
    }, 0.3).from(".company-info", {
      opacity: 0,
      y: 20,
      skewY: 3,
      ease: "power4.out",
      stagger: {amount: 0.4},
      duration: 0.5
    }, 0.4)

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
      }, 600);
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

  translate.add({contact: 'KONTAKT', country: 'Hrvatska', owner: 'Siniša Slovenec'}, 'hr');
  translate.add({contact: 'CONTACT', country: 'Croatia', owner: 'Siniša Slovenec'}, 'en');
  
 
  return(
    <div className="header-and-menu">
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <a onClick={() => scroll()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="105px" viewBox="0 0 1416.34 157.35"><path d="M105,47.32,30.45,155.15H0L105,3,210,155.15H179.55"/><path d="M343.1,107.74l54.95,47.41H363.4L312,111.05h-53.9v44.1h-28V5.21h84c46.55,0,84,23.59,84,52.92C398.05,81.06,375.3,100.46,343.1,107.74ZM258.05,93.41h56c30.8,0,56-15.88,56-35.28s-25.2-35.28-56-35.28h-56Z"/><path d="M566.6,22.85h-56v132.3h-28V22.85h-56l-14-17.64h168Z"/><path d="M887.75,107.74l55,47.41H908.05l-51.46-44.1h-53.9v44.1h-28V5.21h84c46.55,0,84,23.59,84,52.92C942.7,81.06,920,100.46,887.75,107.74ZM802.69,93.41h56c30.8,0,56-15.88,56-35.28s-25.2-35.28-56-35.28h-56Z"/><path d="M973.24,155.15V5.21h28V155.15Z"/><path d="M1221.67,80.18c0,42.55-43.37,77.17-96.69,77.17s-96.69-34.62-96.69-77.17S1071.66,3,1125,3,1221.67,37.62,1221.67,80.18Zm-22.1,0c0-32.86-33.43-59.54-74.59-59.54s-74.59,26.68-74.59,59.54,33.43,59.53,74.59,59.53S1199.57,113,1199.57,80.18Z"/><path d="M1416.34,2.21V154.35l-140-105.62V152.15h-28V0l140,105.62V2.21Z"/><path d="M746.63,88.84h-147V71.21h147Z"/><path d="M746.63,154.84h-147V137.21h147Z"/><polygon points="613.67 5.21 599.67 22.84 746.63 22.84 746.63 5.21 613.67 5.21"/></svg>  
              </a>              
            </div>

            <div className="header-menu">
              <a role="button" tabIndex={0} aria-label="contact" className="contact-animate" id="contact-button" onClick={() => openCloseMenu()}>{translate('contact', null, {locale: locale})}</a>
            </div>
          </div>
        </div>
      </header>

      <div className={isMenuOpen ? "menu-cont is-open" : "menu-cont"} id='menu'>
        <div className="menu-info">
            <a role="button" tabIndex={0} aria-label="close" className="close-button" onClick={() => openCloseMenu()}></a>
            <h3>{translate('contact', null, {locale: locale})}</h3>
        </div>

        <div className="contact-info">
            <a href="mailto:info@arterion.design">info@arterion.design</a>
            <a href="tel:385 123 456">+385 123 456</a>
        </div>

        <div className="company-info">
            <h3>{translate('owner', null, {locale: locale})}</h3>
            <h3>Jalšje 22, Veliko Trgovišće</h3>
            <h3>{translate('country', null, {locale: locale})}</h3>
        </div>
      </div>
    </div>
  )
  

}


export default Header
