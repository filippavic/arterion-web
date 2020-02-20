import { React } from "react"
import { translate } from "translate-js"

const Contact = () => {

    function getLocale() {
        var lang = "";
        if (navigator.languages !== undefined) lang = navigator.languages[0]; 
        else lang = navigator.language;
    
        if (lang.substring(0,2).localeCompare("hr") !== 0) return "en"
        else return "hr"
      }
    
    var locale = getLocale();
    
    translate.add({country: 'Hrvatska'}, 'hr');
    translate.add({country: 'Croatia'}, 'en');

    return (
        <div className="contact-cont">
            <div className="contact-bg"></div>

            <div className="contact-top">
                <h1>KONTAKT</h1>
            </div>

            <div className="contact-middle">
                <div className="contact-left">
                    <a href="mailto:info@arterion.design">info@arterion.design</a>
                    <a href="tel:385 123 456">+385 123 456</a>
                </div>

                <div className="contact-right">
                    <h3 id="company-title">ARTERION obrt za dizajn</h3>
                    <h3>Jalšje 22, Jalšje</h3>
                    <h3>Veliko Trgovišće</h3>
                    <h3>{translate('country', null, {locale: locale})}</h3>
                </div>
            </div>

            <div className="contact-bottom">
                <a href="https://apeiron.media">Made by apeiron</a>
            </div>
        </div>
    )
}

export default Contact