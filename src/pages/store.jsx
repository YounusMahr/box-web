import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import  rigidbox2 from '../assets/front/Rigid-boxes-02.webp';
import mailerbox2 from '../assets/front/Mailer-boxes-05.webp';
import retailerbox2 from '../assets/front/Retail-boxes-02.webp';
import button_icon_right from "../assets/front/button_icon_right.svg"
import button_icon_top from "../assets/front/button_icon_top.svg"

function store() {
  return (
    <div>
    
        <>
  <main>
    <section
      className="banner_768_image"
      id="yourDivId"
      style={{ backgroundColor: "#f6f2f0" }}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-md-6 width_90_per">
            <div className="breadcrumbs">
              <ul>
                <li className="">
                  <a
                    style={{ color: "#000" }}
                    className="breadcrumb_white_20_400"
                    href="../index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <span
                    style={{ color: "#000" }}
                    className="breadcrumb_white_20_400"
                  >
                    Store
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="heading_79_700_black mb-0 color_00">
                Shop Our Premade
                <span className="heading_79_500_white_italic color_0074">
                  Boxes And Save Big
                </span>
              </h1>
              <p
                className="paragraph_18_400_white color_00"
                style={{ color: "#000" }}
              >
                Remain on the go? Shop your style from our ready-made sparkling
                packaging collections at The Custom Boxes Megastore. Save big
                time &amp; money!
              </p>
              <div className="mt-5">
                <a href="../quote/index.html">
                  <button className="margin-bottom-20 btn button_18_500_white">
                    Choose your packaging style
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Trending and Popular Product Start*/}
    <div className="home_trending_popular">
      <div className="container margin_60_35">
        <div className="product_title">
          <div className="row">
            <div className="col-md-9">
              <p className="mini_24_700_red_heading mb-3">Store</p>
            </div>
          </div>
        </div>
        <div className="loop_class">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="category_bg_area mb-5">
                <a href="rigid-box/index.html">
                  <div className="category_imag_width">
                    <img
                      src={rigidbox2}
                      alt="Rigid boxes 02"
                    />
                  </div>
                </a>
                <h2>
                  <a
                    href="rigid-box/index.html"
                    className="heading_25_700_black"
                  >
                    Rigid Box
                  </a>
                </h2>
                <p>
                  Custom Rigid boxes are designed to provide perfection,
                  elegance, and unmatched durability. These gorgeous boxes are
                  ideal for luxury brands and boost consumers' unboxing
                  experience. Rigid boxes protect fragile items with
                  eye-catching patterns, high-quality finishes, and durable
                  materials. Gifting in these boxes increases the credibility
                  and dependability of your valuable products.
                </p>
                <div className="text-start mt-4">
                  <a href="rigid-box/index.html">
                    <button className="btn category_customize_btn customize_18_500_button">
                      Shop now
                      <img
                        className="show_button_icon width_15"
                    
                        src={button_icon_right}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button width_15"
                        src={button_icon_top}
                        alt="button top"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="category_bg_area mb-5">
                <a href="mailer-box/index.html">
                  <div className="category_imag_width">
                    <img
                      src={mailerbox2}
                      alt="Mailer boxes 05"
                    />
                  </div>
                </a>
                <h2>
                  <a
                    href="mailer-box/index.html"
                    className="heading_25_700_black"
                  >
                    Mailer Box
                  </a>
                </h2>
                <p>
                  Custom Mailer boxes are intended to simplify shipping
                  processes for e-commerce enterprises. These durable and
                  environmentally friendly solutions provide complete security
                  for your fragile products while increasing their aesthetic
                  appeal. Because of their versatility, they are tailored into
                  various custom designs, themes, and styles. They also increase
                  consumers’ unboxing experience.
                </p>
                <div className="text-start mt-4">
                  <a href="mailer-box/index.html">
                    <button className="btn category_customize_btn customize_18_500_button">
                      Shop now
                      <img
                        className="show_button_icon width_15"
                        src={button_icon_right}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button width_15"
                        src={button_icon_top}
                        alt="button top"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="category_bg_area mb-5">
                <a href="retail-box/index.html">
                  <div className="category_imag_width">
                    <img
                      src={retailerbox2}
                      alt="Retail boxes 02"
                    />
                  </div>
                </a>
                <h2>
                  <a
                    href="retail-box/index.html"
                    className="heading_25_700_black"
                  >
                    Retail Box
                  </a>
                </h2>
                <p>
                  Retail boxes combine branding and utility. Flaunting your
                  high-quality products in these beautiful boxes protects them
                  and increases their aesthetic appeal. These are vital branding
                  tactics for attracting specific audiences and driving
                  significant revenue. Retail boxes are perfect for improving
                  consumers' purchasing experience because of their
                  eye-enthralling designs and printing options.
                </p>
                <div className="text-start mt-4">
                  <a href="retail-box/index.html">
                    <button className="btn category_customize_btn customize_18_500_button">
                      Shop now
                      <img
                        className="show_button_icon width_15"
                        src={button_icon_right}
                        alt="button right"
                        width={15}
                        height={15}
                      />
                      <img
                        className="show_hover_icon_button width_15"
                        src={button_icon_top}
                        alt="button top"
                        width={15}
                        height={15}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /products_carousel */}
      </div>
    </div>
    {/*Trending and Popular Product End*/}
  </main>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .ready_to_think{display:none;}\n    .ready_to_think_store {background-image: url(../frontend_f/front/box_bg_last.webp);padding: 100px 0;background-repeat: no-repeat;background-size: cover;position: relative;}\n    .align-center{align-items: center;}.width_15{width: 15px;}.width_100{width: 100%;}.color_00{color:#000;}.color_0074{color:#0074bd;}\n    .banner_on_pages {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: url(../frontend_f/front/store-banner.webp);\n}\n.breadcrumbs ul li:after {color:#000;}\n"
    }}
  />
</>
 
    </div>
   
  )
}

export default store