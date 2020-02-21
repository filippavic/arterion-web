import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Controller, Scene } from "react-scrollmagic"
import translate from "translate-js"

import "./gallery.scss"

function Gallery(props) {
  //localization
  function getLocale() {
    var lang = ""
    if (typeof navigator !== "undefined") {
      if (navigator.languages !== undefined) lang = navigator.languages[0]
      else lang = navigator.language

      if (lang.substring(0, 2).localeCompare("hr") !== 0) return "en"
      else return "hr"
    }
  }

  var locale = getLocale()

  translate.add({ interior: "INTERIJER" }, "hr")
  translate.add({ interior: "INTERIOR" }, "en")

  translate.add({ exterior: "EKSTERIJER" }, "hr")
  translate.add({ exterior: "EXTERIOR" }, "en")

  translate.add({ product: "PROIZVODI" }, "hr")
  translate.add({ product: "PRODUCTS" }, "en")

  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger1">
          <Controller>
            <Scene
              classToggle="text-line"
              triggerElement="#trigger1"
              duration="0"
              triggerHook="0.9"
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
                  {translate("interior", null, { locale: locale })}
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
              triggerHook="0.9"
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
                  {translate("exterior", null, { locale: locale })}
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
              triggerHook="0.9"
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
                  {translate("product", null, { locale: locale })}
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
