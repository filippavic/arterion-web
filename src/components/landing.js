import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Lottie from 'react-lottie'
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

    return (
        <div className="landing">
            <div className="container">
                <div className="landing-text">
                    <h1 id="landing-headline">ARTERION</h1>
                    <h2>
                        <div className="line">
                            <span>3D vizualizacije</span>
                        </div>
                        <div className="line">
                            <span>interijera, eksterijera i proizvoda</span>
                        </div>
                    </h2>
                </div>

                <div className="landing-image">
                    <Lottie options={defaultOptions} className="landing-animation" id="landing-animation"
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