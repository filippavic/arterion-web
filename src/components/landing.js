import React from "react"
import Lottie from 'react-lottie'
import { useTranslation } from "react-i18next"
import * as animationData from '../images/arterion_sketch_white.json'

const Landing = () => {

    //react-i18next translation
    const { t } = useTranslation();

    //Lottie options
        var defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData.default,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }
    

    return (
        <div className="landing">
            <div className="container">
                <div className="landing-text">
                    <h1 id="landing-headline">ARTERION</h1>
                    <h2>
                        <div className="line">
                            <span>{t("landingTitle1")}</span>
                        </div>
                        <div className="line">
                            <span>{t("landingTitle2")}</span>
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