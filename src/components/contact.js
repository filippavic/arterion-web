import React, { useState } from "react"
import Lottie from 'react-lottie'
import ScrollTrigger from 'react-scroll-trigger';
import { useTranslation } from "react-i18next"
import i18n from 'i18next';
import * as contactAnimationDataHR from '../images/contact_hr.json'
import * as contactAnimationDataEN from '../images/contact_en.json'

const Contact = () => {

    //Lotie toggle
    const [isStopped, setStopped] = useState(true);

    //react-i18next translation
    const { t } = useTranslation();

    //get locale
    const getLanguage = () => {
        return i18n.language ||
          (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
          'en';
    };

    var locale = (String(getLanguage())).substring(0,2);

    //scroll trigger
    const onEnterViewport = () => {
        setStopped(false);
    }

    const onExitViewport = () => {
        setStopped(true);
    }


    //Lottie options
        var defaultOptions = {
            loop: false,
            autoplay: false, 
            animationData:
                locale.localeCompare("hr") === 0
                    ? contactAnimationDataHR.default
                    : contactAnimationDataEN.default,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }
   
    return (
        <div className="contact-cont">
                
            <div className="contact-bg"></div>

            <div className="contact-top">
                <div className="contact-animation-cont">
                    <ScrollTrigger onEnter={() => onEnterViewport()} onExit={() => onExitViewport()} />
                    <Lottie options={defaultOptions} isStopped = {isStopped} isClickToPauseDisabled={true} className="contact-animation" id="contact-animation"
                    />
                </div>
            </div>

            <div className="contact-middle">
                <div className="contact-left">
                    <a href="mailto:info@arterion.design">info@arterion.design</a>
                    <a href="tel:385 123 456">+385 123 456</a>
                </div>

                <div className="contact-right">
                    <h3 id="company-title">ARTERION obrt za dizajn</h3>
                    <h3>{t("owner")}</h3>
                    <h3>Jalšje 22, Veliko Trgovišće</h3>
                    <h3>{t("country")}</h3>
                </div>
            </div>

            <div className="contact-bottom">
                <a href="https://apeiron.media">Made with &hearts; by apeiron</a>
            </div>
        </div>
    )
}

export default Contact