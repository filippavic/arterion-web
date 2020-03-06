import React from "react"
import { Parallax } from "react-scroll-parallax"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "./gallery.scss"

function Gallery() {

  return (
    <div className="gallery">

      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/haus_4k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/haus_4k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/haus_4k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/haus_4k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/haus_4k.jpg")} alt="Family house exterior 3D visualization."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-20, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/penthouse.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/penthouse.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/penthouse.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/penthouse.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/penthouse.jpg")} alt="Modern penthouse interior 3D visualizaton."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryDualContainer">
        <div className="leftDualGallery">
          <Parallax className="custom-class" y={[-25, 20]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/closeup.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/closeup.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/closeup.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/closeup.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/closeup.jpg")} alt="Product close-up render."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
        
        <div className="rightDualGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/sjopenna_2k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/sjopenna_2k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/sjopenna_2k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/sjopenna_2k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/sjopenna_2k.jpg")} alt="Product advertisement - IKEA Sjopenna."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/render_night_2K_sig.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/render_night_2K_sig.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/render_night_2K_sig.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/render_night_2K_sig.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/render_night_2K_sig.jpg")} alt="Living room visualization."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryCenterContainer">
        <div className="centerElementGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/1seater_4k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/1seater_4k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/1seater_4k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/1seater_4k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/1seater_4k.jpg")} alt="Modern sofa 3D advertisement."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
      </div>

      <div className="galleryDualContainer">
        <div className="leftDualGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/kitchen_2K.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/kitchen_2K.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/kitchen_2K.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/kitchen_2K.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/kitchen_2K.jpg")} alt="Modern kitchen interior."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
        <div className="rightDualGallery">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/parfume_4k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/parfume_4k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/parfume_4k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/parfume_4k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/parfume_4k.jpg")} alt="Product visualization - perfume."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
      </div>

      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/maquete_4k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/maquete_4k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/maquete_4k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/maquete_4k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/maquete_4k.jpg")} alt="Modern architecture conceptual model."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
        <div className="rightBottomGallery"></div>
      </div>

      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.8)'}>
              <picture>
                <source type="image/webp" srcSet={require("../images/gallery/webp_xl/witch_4k.webp")} media="(min-width: 2000px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_l/witch_4k.webp")} media="(min-width: 800px)"></source>
                <source type="image/webp" srcSet={require("../images/gallery/webp_s/witch_4k.webp")}></source>
                <source type="image/jpg" srcSet={require("../images/gallery/jpg/witch_4k.jpg")} media="(min-width: 800px)"></source>
                <img className="image" draggable="false" src={require("../images/gallery/jpg_s/witch_4k.jpg")} alt="Low poly game asset visualization."></img>
              </picture>     
            </Zoom>
          </Parallax>
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
