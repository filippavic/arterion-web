import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./gallery.scss"

function Gallery(props) {
  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="titleGallery">
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
            >
              {props.title}
            </text>
          </svg>
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop} />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom} />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
    </div>
  )
}

export default Gallery
