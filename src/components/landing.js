import React, { useEffect } from "react"
import Lottie from 'react-lottie'
import translate from "translate-js"
import gsap from "gsap"
import * as animationLeftData from '../images/arterion_sketch_left.json'
import * as animationRightData from '../images/arterion_sketch_right.json'

import logo from "../images/arterion_logo.webp"

const Landing = () => {

    useEffect(() => {
        //gsap timeline
        const lltl = gsap.timeline({onComplete: function(){
            ltl.play();
        }})

        lltl.set(".line", {
            autoAlpha: 0,
            y: 15,
            skewY: 2
        })
        .to(".line", {
            autoAlpha: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 2,
            delay: 4,
            skewY: 0,
            stagger: { amount: 0.3 },
          })

        const ltl = gsap.timeline({
            paused: true,
			onComplete: function(){
				ltl.restart();
			}
		})
    
        ltl.set(".slider-line1", {
            autoAlpha: 0,
            y: 15,
            skewY: 2
          })
          .set(".slider-line2", {
            autoAlpha: 0,
            y: 10,
            skewY: 2
          })
          .set(".slider-line3", {
            autoAlpha: 0,
            y: 10,
            skewY: 2
          })
          .to(".slider-line1", {
            autoAlpha: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 1,
            skewY: 0,
            stagger: { amount: 0.3 },
          })
          .to(".slider-line1", {
            autoAlpha: 0,
            y: -15,
            ease: "power4.inOut",
            duration: 1,
            delay: 1.5,
            skewY: -2,
            stagger: { amount: 0.3 },
          })
          .to(".slider-line2", {
            autoAlpha: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 1,
            skewY: 0,
            stagger: { amount: 0.3 },
          })
          .to(".slider-line2", {
            autoAlpha: 0,
            y: -15,
            ease: "power4.inOut",
            duration: 1,
            delay: 1.5,
            skewY: -2,
            stagger: { amount: 0.3 },
          })
          .to(".slider-line3", {
            autoAlpha: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 1,
            skewY: 0,
            stagger: { amount: 0.3 },
          })
          .to(".slider-line3", {
            autoAlpha: 0,
            y: -15,
            ease: "power4.inOut",
            duration: 1,
            delay: 1.5,
            skewY: -2,
            stagger: { amount: 0.3 },
          })
      }, [])

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
    
    translate.add({line1: 'vizualizacija', line2: 'modeliranje', line3: 'teksturiranje',
line4: 'dizajn', line5: 'animacije'}, 'hr');
    translate.add({line1: 'visualization', line2: 'modelling', line3: 'texturing',
line4: 'design', line5:'animation'}, 'en');


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
                        <div className="landing-text-main">     
                            <picture>
                                <source srcSet={require("../images/arterion_logo.webp")} type="image/webp" alt="ARTERION"/>
                                <img src={require("../images/arterion_logo.png")} alt="ARTERION"/>
                            </picture>
                        </div>
                        <div className="landing-text-slider">
                            <h2>
                                <div className="slider-line1">
                                    <span>{translate('line1', null, {locale: locale})}</span>
                                </div>
                                <div className="slider-line2" id="proba">
                                    <span>{translate('line2', null, {locale: locale})}</span>
                                </div>
                                <div className="slider-line3">
                                    <span>{translate('line3', null, {locale: locale})}</span>
                                </div>
                                <div className="slider-line4">
                                    <span>{translate('line4', null, {locale: locale})}</span>
                                </div>
                                <div className="slider-line5">
                                    <span>{translate('line5', null, {locale: locale})}</span>
                                </div>
                            </h2>    
                        </div>
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
                        <picture>
                            <source type="image/webp" srcSet={require("../images/interior_off_left.webp")} alt="Interior render"></source>
                            <img src={require("../images/interior_off_left.png")} alt="Interior render"></img>
                        </picture>
                        
                    </div>

                    <div className="landing-image-right">
                        <picture>
                            <source type="image/webp" srcSet={require("../images/interior_right.webp")} alt="Interior render"></source>
                            <img src={require("../images/interior_right.png")} alt="Interior render"></img>
                        </picture>
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