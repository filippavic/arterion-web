import React from "react"
import Image from "../components/image"
import { Parallax } from "react-scroll-parallax"

import "./gallery.scss"

function Gallery() {
  return (
    <div className="gallery">

      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Family house exterior 3D visualization." filename="haus_4k.jpg" />
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-20, 15]} tagOuter="figure">
            <Image alt="Modern penthouse interior 3D visualizaton." filename="penthouse.jpg" />
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryDualContainer">
        <div className="leftDualGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Modern sofa 3D advertisement." filename="1seater_4k.jpg" />
          </Parallax>
        </div>
        <div className="rightDualGallery">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Image alt="Product close-up render." filename="closeup.jpg" />
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Living room visualization." filename="render_night_2K_sig.jpg" />
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryDualContainer">
        <div className="leftDualGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Modern kitchen interior." filename="kitchen_2K.jpg" />
          </Parallax>
        </div>
        <div className="rightDualGallery">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Image alt="Product visualization - perfume." filename="parfume_4k.jpg" />
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Modern architecture conceptual model." filename="maquete_4k.jpg" />
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Low poly game asset visualization." filename="witch_4k.jpg" />
          </Parallax>
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
