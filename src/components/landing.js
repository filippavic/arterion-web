import { React } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Img } from "gatsby-image"
import { translate } from "translate-js"
import { Lottie } from 'react-lottie'
import * as animationData from '../images/arterion_sketch_white.json'

const Landing = () => {

    var defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    function getLocale() {
        var lang = "";
        if (navigator.languages !== undefined) lang = navigator.languages[0]; 
        else lang = navigator.language;
    
        if (lang.substring(0,2).localeCompare("hr") !== 0) return "en"
        else return "hr"
      }
    
    var locale = getLocale();
    
    translate.add({title1: '3D vizualizacije', title2: 'interijera, eksterijera i proizvoda'}, 'hr');
    translate.add({title1: '3D visualizations:', title2: 'interior, exterior and products'}, 'en');

    return (
        <div className="landing">
            <div className="container">
                <div className="landing-text">
                    <h1 id="landing-headline">ARTERION</h1>
                    <h2>
                        <div className="line">
                            <span>{translate('title1', null, {locale: locale})}</span>
                        </div>
                        <div className="line">
                            <span>{translate('title2', null, {locale: locale})}</span>
                        </div>
                    </h2>
                </div>

                <div className="landing-image">
                    <Lottie options={defaultOptions} isClickToPauseDisabled={true} className="landing-animation" id="landing-animation"
                    />
                </div>
            </div>

            <div className='icon-scroll'>
                <div className="icon-scroll-screen"></div>
            </div>
        </div>
    )
}

export default Landing