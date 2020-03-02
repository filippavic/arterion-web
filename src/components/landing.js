import React, { useEffect } from "react"
import Lottie from 'react-lottie'
import translate from "translate-js"
import gsap from "gsap"
import * as animationLeftData from '../images/arterion_sketch_left.json'
import * as animationRightData from '../images/arterion_sketch_right.json'

const Landing = () => {

    /* useEffect(() => {
        //gsap timeline
        const ltl = gsap.timeline()
    
        ltl.set(".landing-image-left", {
            autoAlpha: 0
          })
          .set(".landing-image-right", {
            autoAlpha: 0
          })
          .to(".landing-image-left, .landing-image-right", {
            autoAlpha: 1,
            ease: "power2.easeInOut",
            delay: 3,
            duration: 7,
            stagger: {amount: 0.3}
          })
          .to(".landing-animation-cont", {
            autoAlpha: 0,
            ease: "power4.out"
          })
      }, []) */

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
    
    translate.add({title1: '3D vizualizacije', title2: 'interijera, eksterijera i proizvoda'}, 'hr');
    translate.add({title1: '3D visualizations:', title2: 'interior, exterior and products'}, 'en');


    //Lottie options
    if (typeof locale !== "undefined"){
        var defaultOptionsLeft = {
            loop: false,
            autoplay: true, 
            animationData: animationLeftData.default,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }

        var defaultOptionsRight = {
            loop: false,
            autoplay: true, 
            animationData: animationRightData.default,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }
    }
    

    return (
        <div className="landing">
            <div className="container">
                <div className="landing-text">
                    <h2>
                        <div className="line">
                            <span>{translate('title1', null, {locale: locale})}</span>
                        </div>
                        <div className="line">
                            <span>{translate('title2', null, {locale: locale})}</span>
                        </div>
                    </h2>
                </div>

                <div className="landing-animation-cont">
                    <div className="landing-animation-cont-left">
                        <Lottie options={defaultOptionsLeft} speed={1.5} isClickToPauseDisabled={true} className="landing-animation" id="landing-animation-left"
                        />
                    </div>
                    <div className="landing-animation-cont-right">
                        <Lottie options={defaultOptionsRight} speed={1.5} isClickToPauseDisabled={true} className="landing-animation" id="landing-animation-right"
                        />
                    </div>    
                </div>

                <div className="landing-images-cont">
                    <div className="landing-image-left">
                        <img src="interior_off_left.webp"></img>
                    </div>

                    <div className="landing-image-right">
                        <img src="interior_off_right.webp" id="image-right"></img>
                    </div>
                </div>
                
            </div>

            <div className='icon-scroll'>
                <div className="icon-scroll-screen"></div>
            </div>
        </div>
    )
}

export default Landing