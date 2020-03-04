import React from "react"
import Image from "../components/image"
import { Parallax } from "react-scroll-parallax"
import translate from "translate-js"
// import Zoom from 'react-medium-image-zoom'

import "./gallery.scss"

function Gallery() {

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

  translate.add(
    {
      description1: "Lorem ipsum na hrvatskom bla bla",
      description2: "Lorem ipsum na hrvatskom bla bla",
      description3: "Lorem ipsum na hrvatskom bla bla",
      description4: "Lorem ipsum na hrvatskom bla bla",
      description5: "Lorem ipsum na hrvatskom bla bla",
      description6: "Lorem ipsum na hrvatskom bla bla",
    },
    "hr"
  )
  translate.add(
    {
      description1: "Lorem ipsum na engleskom bla bla",
      description2: "Lorem ipsum na engleskom bla bla",
      description3: "Lorem ipsum na engleskom bla bla",
      description4: "Lorem ipsum na engleskom bla bla",
      description5: "Lorem ipsum na engleskom bla bla",
      description6: "Lorem ipsum na engleskom bla bla",
    },
    "en"
  )


  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Interior visualization" filename="interior_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description1", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Interior visualization" filename="interior_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description2", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Exterior visualization" filename="exterior_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description3", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Exterior visualization" filename="exterior_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description4", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Product visualization" filename="product_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description5", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 20]} tagOuter="figure">
            <Image alt="Product visualization" filename="product_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description6", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
    </div>
  )
}

export default Gallery
