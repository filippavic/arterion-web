import React from "react"


const Contact = () => {

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
                    <h3>Jalsje 22, Jalsje</h3>
                    <h3>Veliko Trgovisce</h3>
                    <h3>Hrvatska</h3>
                </div>
            </div>

            <div className="contact-bottom">
                <a href="https://apeiron.media">Made by apeiron</a>
            </div>
        </div>
    )
}

export default Contact