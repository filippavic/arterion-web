import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Controller, Scene } from "react-scrollmagic"

import "./gallery.scss"

function Gallery(props) {
  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger1">
          <Controller>
            <Scene
              classToggle="text-line"
              triggerElement="#trigger1"
              duration="0"
              triggerHook="0.8"
            >
              <svg height="16vw" width="60vw" stroke="#000000" stroke-width="1">
                <text
                  font-family="Metropolis"
                  font-style="black"
                  x="3vh"
                  y="8vw"
                  fill="none"
                  font-size="8vw"
                  visibility="hidden"
                >
                  {props.title1}
                </text>
              </svg>
            </Scene>
          </Controller>
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop1} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom1} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger2">
          <Controller>
            <Scene
              classToggle="text-line"
              triggerElement="#trigger2"
              duration="0"
              triggerHook="0.8"
            >
              <svg
                height="16vw"
                width="60vw"
                stroke="#000000"
                stroke-width="1"
                class="text-line"
              >
                <text
                  font-family="Metropolis"
                  font-style="black"
                  x="3vh"
                  y="8vw"
                  fill="none"
                  font-size="8vw"
                  visibility="hidden"
                >
                  {props.title2}
                </text>
              </svg>
            </Scene>
          </Controller>
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop2} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom2} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger3">
          <Controller>
            <Scene
              classToggle="text-line"
              triggerElement="#trigger3"
              duration="0"
              triggerHook="0.8"
            >
              <svg height="16vw" width="60vw" stroke="#000000" stroke-width="1">
                <text
                  font-family="Metropolis"
                  font-style="black"
                  x="3vh"
                  y="8vw"
                  fill="none"
                  font-size="8vw"
                  visibility="hidden"
                >
                  {props.title3}
                </text>
              </svg>
            </Scene>
          </Controller>
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop3} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom3} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
    </div>
  )
}

export default Gallery
