import React from 'react'
import redline from '../assets/front/red-line.svg';
import blueline from '../assets/front/blue-z.svg';
import brandline from '../assets/front/brand_line.webp';

import Header from '../components/header';
import Footer from '../components/footer';
import { Link, NavLink } from 'react-router-dom';

import retailboxes from '../assets/uploads_f/1713980563.Worth-Ravishing-Custom-Retail-Boxes.webp'
import ecoboxes from '../assets/uploads_f/1708525324.Worth-Ravishing-Custom-Eco-Friendly-Boxes.webp'
import cardboxes from '../assets/uploads_f/1708525390.Worth-Ravishing-Custom-Cardboard-Packaging.webp'
import rigidboxes from '../assets/uploads_f/1708525446.Worth-Ravishing-Custom-Rigid-Boxes.webp'

import  structuraldesign from '../assets/uploads_f/structuraldesign.webp'
import  graphicaldesign from '../assets/uploads_f/Graphic-Design.webp'
import Prototyping from '../assets/uploads_f/Prototyping.webp'
import Production from '../assets/uploads_f/Production-Management.webp'

import lefticon from '../assets/front/box_top_left_icon.webp'
import toprighticon from '../assets//front/box_top_right_icon.webp'
import bottomiconleft from '../assets/front/box_bottom_left_icon.webp'
import bottomiconright from '../assets/front/box_bottom_right_icon.webp'
import Ecofriendly from '../assets/uploads_f/1710845456.Custom-Eco-Friendly-Boxes.webp'

import homebanner from '../assets/front/home_banner_sale.webp'
import salebannersvg from '../assets/front/sale_banner_icon.svg'
import boxstyleleft from '../assets/front/box_style_bottom_left.webp'
import  custombox from '../assets/front/the-custom-boxes-testimonial.webp'
import  googlebox from '../assets/front/google-testimonial.webp'
import  talking_call from '../assets/front/talking_call.webp'
import  womentestimonial from '../assets/front/testimonial_woman.webp'

import  cardboard from '../assets/uploads_f/1708085363.Cardboard-Tuckin-boxes.webp'
import  cbdpackage from '../assets/uploads_f/1708085827.CBD-Packaging.webp'
import cosmetic from    '../assets/uploads_f/1708526260.Cosmetic-Boxes.webp'
import displypackage from    '../assets/uploads_f/1708085854.Display-Packaging.webp'
import foodpackage from    '../assets/uploads_f/1708087779.food-and-beverage.webp'
import otherproduct from    '../assets/uploads_f/1708526206.Other-Products.webp'


import product_icon_home from "../assets/front/product_icon_home.svg"
import homeiconred from "../assets/front/product_icon_home_red.svg"
 import button_icon_top from '../assets/front/button_icon_top.svg'
import button_icon_right from '../assets/front/button_icon_right.svg'







function home() {
  return (
 <>


 <div id="page">
  {/* /header */}
  <main>
    
    <h1 style={{ lineHeight: 0, position: "absolute" }}>The Mailer-Boxes</h1>
    {/* Full Page Image Background Carousel Header */}
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={6000}
    >
      <ol className="carousel-indicators home_slider">
        <li
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 0"
        />
        <li
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to={1}
          className=""
          aria-current="true"
          aria-label="Slide 1"
        />
        <li
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to={2}
          className=""
          aria-current="true"
          aria-label="Slide 2"
        />
        <li
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to={3}
          className=""
          aria-current="true"
          aria-label="Slide 3"
        />
      </ol>
      <div
        className="carousel-inner owl_height"
        style={{ backgroundColor: "#F0F0F0", color: "#333333" }}
      >
        <div className="carousel-item active">
          <div
            className="container-fluid "
            style={{ width: "90%", margin: "5% auto 0" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <div className="slide-right">
                  <h2 className="slider_yellow_text">
                    Worth-Ravishing Custom
                    <span className="slider_italic_black_text">
                      Retail Boxes
                    </span>
                  </h2>
                  <div className="slider_paragraph">
                    <p>
                      Conquer the retail world with customized packaging,
                      bestowing a new shelf life to your products.
                    </p>{" "}
                  </div>
                  <div className="owl-slide-animated owl-slide-cta">
                    <a
                      href="retail-boxes/index.html"
                      className="btn_1 mb-4 home_slider_yellow_bg"
                      role="button"
                    >
                      Choose your packaging style
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-left text-end">
                  <img
                    src={retailboxes}
                    className="carousel_home_image lazyload"
                    alt="Worth Ravishing Custom Retail Boxes"
                    width={800}
                    height={500}
                  />
                  <div className="top_right_slider">
                    <img
                      className="d-none-mobile fade-in-right "
                      style={{ float: "right", width: 200 }}
                      src={redline}
                      width={200}
                      height={29}
                      alt="red-line"
                    />
                  </div>
                </div>
              </div>
              <div className="slider_z-zag-line">
                <img
                  className="d-none-mobile fade-in-top"
                  width={172}
                  height={144}
                  src={blueline}
                  alt="blue-line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div
            className="container-fluid "
            style={{ width: "90%", margin: "5% auto 0" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <div className="slide-right">
                  <h2 className="slider_blue_text">
                    Worth-Ravishing Custom
                    <span className="slider_italic_black_text">
                      Eco Friendly Boxes
                    </span>
                  </h2>
                  <div className="slider_paragraph">
                    <p>
                      Sustainable, recyclable, and biodegradable boxes –
                      eco-friendly personalized packaging echoes the ethos of
                      nature conservation&nbsp;
                    </p>{" "}
                  </div>
                  <div className="owl-slide-animated owl-slide-cta">
                    <a
                      href="eco-friendly-boxes/index.html"
                      className="btn_1 mb-4 home_slider_blue_bg"
                      role="button"
                    >
                      Choose your packaging style
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-left text-end">
                  <img
                    src={ecoboxes}
                    className="carousel_home_image lazyload"
                    alt="Worth Ravishing Custom Eco Friendly Boxes"
                    width={800}
                    height={500}
                  />
                  <div className="top_right_slider">
                    <img
                      className="d-none-mobile fade-in-right "
                      style={{ float: "right", width: 200 }}
                      src={redline}
                      width={200}
                      height={29}
                      alt="red-line"
                    />
                  </div>
                </div>
              </div>
              <div className="slider_z-zag-line">
                <img
                  className="d-none-mobile fade-in-top"
                  width={172}
                  height={144}
                  src={blueline}
                  alt="blue-line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div
            className="container-fluid "
            style={{ width: "90%", margin: "5% auto 0" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <div className="slide-right">
                  <h2 className="slider_red_text">
                    Worth-Ravishing Custom
                    <span className="slider_italic_black_text">
                      Cardboard Packaging
                    </span>
                  </h2>
                  <div className="slider_paragraph">
                    <p>
                      Vibrant colors, subtle prints, and stunning appeal blend
                      seamlessly with the lightweight cardboard box, making it
                      an ideal branding tool.
                    </p>{" "}
                  </div>
                  <div className="owl-slide-animated owl-slide-cta">
                    <a
                      href="cardboard-packaging/index.html"
                      className="btn_1 mb-4 home_slider_red_bg"
                      role="button"
                    >
                      Choose your packaging style
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-left text-end">
                  <img
                    src={cardboxes}
                    className="carousel_home_image lazyload"
                    alt="Worth Ravishing Custom Cardboard Packaging"
                    width={800}
                    height={500}
                  />
                  <div className="top_right_slider">
                    <img
                      className="d-none-mobile fade-in-right "
                      style={{ float: "right", width: 200 }}
                      src={redline}
                      width={200}
                      height={29}
                      alt="red-line"
                    />
                  </div>
                </div>
              </div>
              <div className="slider_z-zag-line">
                <img
                  className="d-none-mobile fade-in-top"
                  width={172}
                  height={144}
                  src={blueline}
                  alt="blue-line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div
            className="container-fluid "
            style={{ width: "90%", margin: "5% auto 0" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <div className="slide-right">
                  <h2 className="slider_yellow_text">
                    Worth-Ravishing Custom
                    <span className="slider_italic_black_text">
                      Rigid Boxes
                    </span>
                  </h2>
                  <div className="slider_paragraph">
                    <p>
                      Premium rigid boxes are a must-have luxury product
                      accessory; they exude class and elegance, complemented by
                      an iconic appeal.&nbsp;
                    </p>{" "}
                  </div>
                  <div className="owl-slide-animated owl-slide-cta">
                    <a
                      href="rigid-boxes/index.html"
                      className="btn_1 mb-4 home_slider_yellow_bg"
                      role="button"
                    >
                      Choose your packaging style
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-left text-end">
                  <img
                    src={rigidboxes}
                    className="carousel_home_image lazyload"
                    alt="Worth Ravishing Custom Rigid Boxes"
                    width={800}
                    height={500}
                  />
                  <div className="top_right_slider">
                    <img
                      className="d-none-mobile fade-in-right "
                      style={{ float: "right", width: 200 }}
                      src={redline}
                      width={200}
                      height={29}
                      alt="red-line"
                    />
                  </div>
                </div>
              </div>
              <div className="slider_z-zag-line">
                <img
                  className="d-none-mobile fade-in-top"
                  width={172}
                  height={144}
                  src={blueline}
                  alt="blue-line"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/carousel*/}
    {/* Brand Section start */}
    <div className="bg_gray pt-5 pb-5 brand_section">
      <img
        className="d-none-mobile fade-in-right "
        style={{ float: "left", width: 200 }}
        src={brandline}
        alt="brand line"
        width={200}
        height={29}
      />
      <div className="container-fluid brand_margin_bottom_0">
        <div className="text-center brand_text_area">
          <p className="heading_32_500_black">
            Trust partners of{" "}
            <span className="heading_32_500_blue_italic">
              Zillions of Brands Worldwide
            </span>
          </p>
          <p className="mb-5 paragraph_18_400_black">
            We have supported high-profile brands in bringing their imagination
            to life. Take a step towards an unforgettable journey of non-stop
            success. Join forces with us!
          </p>
        </div>
        <div id="brands" className="owl-carousel owl-theme">
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948359.Red-Bull.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835734.redbul.svg"
                alt="redbulsvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948389.HP.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835744.hp.svg"
                alt="hpsvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948406.SeatGeek.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835766.seatgeek.svg"
                alt="seatgeeksvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948416.shopify.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835777.shopify.svg"
                alt="shopifysvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948428.addidas.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835790.adidas.svg"
                alt="adidassvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948439.lorael.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835800.loreal.svg"
                alt="lorealsvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948458.benefit.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835810.benefit.svg"
                alt="benefitsvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948467.google.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835821.google.svg"
                alt="googlesvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
          <div className="item">
            <a href="#">
              <img
                src="uploads_f/1701948477.times.webp"
                data-src="https://www.thecustomboxes.com/uploads_f/1703835835.yorktime.svg"
                alt="yorktimesvg"
                className="owl-lazy"
              />
            </a>
          </div>
          {/* /item */}
        </div>
        {/* /carousel */}
      </div>
      {/* /container */}
    </div>
    {/* Brand Section End */}
    {/*Home Information Tabs Section Start*/}
    <section style={{ backgroundColor: "#e47911" }}>
      <div className="brand_tab_bottom_left">
        <img
          src="frontend_f/front/brand_tab_bottom_left.webp"
          alt="brand bottom"
        />
      </div>
      <div className="container tabs_owl_pr_nx">
        <div className="row">
          <div className="col-md-12 mar-gin-0-top">
            <h3 className="heading_48_700_black mb-4">
              Custom Boxes and Packaging
              <span className="heading_48_500_white_italic">in 4 steps:</span>
            </h3>
            <div className="border_home_tab" />
            <div className="">
              <div className="item text-center d-inline-flex">
                <button
                  className="btn tablinks tab_btn_hom"
                  onclick="openCity(event, 1)"
                  id="defaultOpen"
                  style={{ marginRight: 10 }}
                >
                  Structural Design
                </button>
              </div>
              <div className="item text-center d-inline-flex">
                <button
                  className="btn tablinks tab_btn_hom"
                  onclick="openCity(event, 2)"
                  id=""
                  style={{ marginRight: 10 }}
                >
                  Graphic Design
                </button>
              </div>
              <div className="item text-center d-inline-flex">
                <button
                  className="btn tablinks tab_btn_hom"
                  onclick="openCity(event, 3)"
                  id=""
                  style={{ marginRight: 10 }}
                >
                  Prototyping
                </button>
              </div>
              <div className="item text-center d-inline-flex">
                <button
                  className="btn tablinks tab_btn_hom"
                  onclick="openCity(event, 4)"
                  id=""
                  style={{ marginRight: 10 }}
                >
                  Production Management
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div id={1} className="tabcontent">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-7">
                <div className="pt-4 paaddiinng_o">
                  <div className="tab_paragraph_home-">
                    <p>
                      The Custom Boxes printing experts know what the worst
                      mistakes they can ever commit. &nbsp;Luckily, they are
                      also familiar with how to eliminate it. From dimensions to
                      cuts, and die treatment to interlocking, they have
                      mastered every skill. So, lay the foundation of
                      exceptional boxes on unparalleled structural designs.
                    </p>
                    <ul>
                      <li>Offer Diverse Designs And Patterns&nbsp;</li>
                      <li>Functional Minimalism With Full Box Customization</li>
                      <li>Unique Cuts To Create Memorable Designs</li>
                      <li>
                        Practical Design Makes Your Box All-Purpose Marketing
                        Tool
                      </li>
                      <li>
                        Examples Of Great Structural Designs Include A Tuck End,
                        Auto Lock, Tray And Sleeves, And Double-Walled Tuck
                        Front.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-lg-5 on_mobile_center_btn on_mobile_d_none_button">
                  <a href="quote/index.html">
                    <button className="btn white_border_button">
                      Get a Free Quote
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="text-end ">
                  <img
                    src={structuraldesign}
                    alt="Structural Design"
                    className="tab_imag"
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="quote/index.html">
                <button className="btn white_border_button margin-top_20_gallery">
                  Get a Free Quote
                </button>
              </a>
            </div>
          </div>
          <div id={2} className="tabcontent">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-7">
                <div className="pt-4 paaddiinng_o">
                  <div className="tab_paragraph_home-">
                    <p>
                      Design of custom boxes, if well-generated, are made to get
                      additional benefits. To make a box more than a protective
                      covering, we hide advertising strategies as extras. Design
                      one-to-one with our expert designers to create wonderful
                      packaging for business purposes.
                    </p>
                    <ul>
                      <li>
                        One-Of-A-Kind Graphic Designer Creates Trendy Boxes
                      </li>
                      <li>
                        Make The Best Use Of Every Line And Dot To Deliver
                        Masterpiece
                      </li>
                      <li>
                        Great Overall Appeal And Feel Of The Final Package
                      </li>
                      <li>Spark Sense Of Excitement In Viewer’s Eye</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-lg-5 on_mobile_center_btn on_mobile_d_none_button">
                  <a href="quote/index.html">
                    <button className="btn white_border_button">
                      Get a Free Quote
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="text-end ">
                  <img
                    src={graphicaldesign}
                    alt="Graphic Design"
                    className="tab_imag"
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="quote/index.html">
                <button className="btn white_border_button margin-top_20_gallery">
                  Get a Free Quote
                </button>
              </a>
            </div>
          </div>
          <div id={3} className="tabcontent">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-7">
                <div className="pt-4 paaddiinng_o">
                  <div className="tab_paragraph_home-">
                    <p>
                      Prototyping is the art of transferring your ideas on the
                      canvas of your custom packages, as a template or sample.
                      We help you visualize what will be the final upshot,
                      before hitting the mass production. It saves time and
                      resources.
                    </p>
                    <ul>
                      <li>
                        Unlock Possibilities To See The Final Outlook Before
                        Time
                      </li>
                      <li>
                        Allow Customers To Build A Box With Real-Time Sampling
                        Support
                      </li>
                      <li>
                        Reconsider Your Vague Ideas And Go For The Best
                        Packaging Solution&nbsp;
                      </li>
                      <li>
                        Confidently Start The Customization Of Packaging Box
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-lg-5 on_mobile_center_btn on_mobile_d_none_button">
                  <a href="quote/index.html">
                    <button className="btn white_border_button">
                      Get a Free Quote
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="text-end ">
                  <img
                    src={Prototyping}
                    alt="Prototyping ()"
                    className="tab_imag"
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="quote/index.html">
                <button className="btn white_border_button margin-top_20_gallery">
                  Get a Free Quote
                </button>
              </a>
            </div>
          </div>
          <div id={4} className="tabcontent">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-7">
                <div className="pt-4 paaddiinng_o">
                  <div className="tab_paragraph_home-">
                    <p>
                      The last and foremost important step is to strive for
                      excellence while guaranteeing precision in high-volume
                      production. The quality is assured in six phases
                      including, artwork approval, CTP plate making, printing,
                      and lamination, die-cutting, finishing, and pasting. Get
                      Custom packaging boxes now!
                    </p>
                    <ul>
                      <li>Offer Diverse Designs And Patterns&nbsp;</li>
                      <li>Functional Minimalism With Full Customization</li>
                      <li>Unique Cuts To Create Memorable Designs</li>
                      <li>
                        Practical Design Makes Your Box All-Purpose Marketing
                        Tool
                      </li>
                      <li>
                        Examples Of Great Structural Designs Include A Tuck End,
                        Auto Lock, Tray And Sleeves, And Double-Walled Tuck
                        Front.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-lg-5 on_mobile_center_btn on_mobile_d_none_button">
                  <a href="quote/index.html">
                    <button className="btn white_border_button">
                      Get a Free Quote
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="text-end ">
                  <img
                    src={Production}
                    alt="Production Management ()"
                    className="tab_imag"
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="quote/index.html">
                <button className="btn white_border_button margin-top_20_gallery">
                  Get a Free Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Home Information Tabs Section End*/}
    {/*Home Product Section Start*/}
    <div className="home_product_section">
      <div className="container margin_60_35">
        <div className="product_title">
          <div className="row">
            <div className="col-md-9">
              <h3 className="mini_24_700_red_heading">industries</h3>
              <h4 className="heading_48_700_black">
                One-shop for all industries
                <span className="heading_48_500_blue_italic">
                  {" "}
                  Select Yours{" "}
                </span>
              </h4>
              <p className="paragraph_18_400_black mb-lg-5">
                Choose from an array of style and elegance exemplars at our
                extensive library. We give you complete freedom to shop by
                industry. Set your priorities before taking a look at our
                products. Cosmetics, Retail packaging, and CBD-specialized
                product boxes, everything is available at one store. Get a
                chance to avail yourself of our superfast yet perfect packaging
                in one go!
              </p>
            </div>
            <div className="col-md-3 on_mobile_d_none_button">
              <a className="button_position" href="industries/index.html">
                <button className="btn mt-lg-5 button_18_500_black mb-sm-2">
                  View All Industries
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a
                href="cardboard-packaging/index.html"
                aria-label="Read more"
              ></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="cardboard-packaging/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={cardboard}
                      alt="Cardboard Tuckin boxes"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a
                    href="cardboard-packaging/index.html"
                    aria-label="Read more"
                  >
                    <h3 className="heading_25_700_black headind_top-">
                      Cardboard Packaging
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        
                        <img
                          className="show_blue"
                         
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"

                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Die-cut friendly
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Protective product cases
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Unlimited sizing options
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <Link to="packaging"  aria-label="Read more"></Link>
                    <Link to="packaging"  aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                        
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="cbd-packaging/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="cbd-packaging/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={cbdpackage}
                      alt="CBD Packaging"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="cbd-packaging/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      CBD Packaging
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Endless Customization
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Preserve CBD Freshness
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Complete Moisture lock
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="cbd-packaging/index.html"
                      aria-label="Read more"
                    ></a>
                    <a href="cbd-packaging/index.html" aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="cosmetic-boxes/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="cosmetic-boxes/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={cosmetic}
                      alt="Cosmetic Boxes"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="cosmetic-boxes/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Cosmetic Boxes
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Wide color palettes
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Eco-friendly material
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Unrivaled theme
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="cosmetic-boxes/index.html"
                      aria-label="Read more"
                    ></a>
                    <a href="cosmetic-boxes/index.html" aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="display-packaging/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="display-packaging/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={displypackage}
                      alt="Display Packaging"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="display-packaging/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Display Packaging
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Reusable, durable
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Eye-catching display
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Maximize conversion
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="display-packaging/index.html"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="display-packaging/index.html"
                      aria-label="Read more"
                    >
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a
                href="eco-friendly-boxes/index.html"
                aria-label="Read more"
              ></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="eco-friendly-boxes/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={ecoboxes}
                      alt="Ecofriendly Boxes"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a
                    href="eco-friendly-boxes/index.html"
                    aria-label="Read more"
                  >
                    <h3 className="heading_25_700_black headind_top-">
                      Eco Friendly Boxes
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Prioritize earth serenity
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Open loop recycling
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        100% organic boxes
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="eco-friendly-boxes/index.html"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="eco-friendly-boxes/index.html"
                      aria-label="Read more"
                    >
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="food-and-beverage/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="food-and-beverage/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={foodpackage}
                      alt="food and beverage"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="food-and-beverage/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Food And Beverage
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Food grade, non-toxic
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Spill and leak-proof
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Smudge-free printing
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="food-and-beverage/index.html"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="food-and-beverage/index.html"
                      aria-label="Read more"
                    >
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="other-products/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="other-products/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={otherproduct}
                      alt="Other Products"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="other-products/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Other Products
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Cross-industry packaging
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        High-tech Printing
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Purposeful Branding
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="other-products/index.html"
                      aria-label="Read more"
                    ></a>
                    <a href="other-products/index.html" aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="retail-boxes/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="retail-boxes/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={retailboxes}
                      alt="Retail Boxes"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="retail-boxes/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Retail Boxes
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Resilient and durable
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        High-tech printing
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Informational clarity
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a
                      href="retail-boxes/index.html"
                      aria-label="Read more"
                    ></a>
                    <a href="retail-boxes/index.html" aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="product_box_">
              <a href="rigid-boxes/index.html" aria-label="Read more"></a>
              <div className="d-flex on_set_mobile_home_category_list">
                <a href="rigid-boxes/index.html" aria-label="Read more">
                  <div className="_image">
                    <img
                      src={rigidboxes}
                      alt="Rigid Boxes"
                      width={170}
                      height={170}
                    />
                  </div>
                </a>
                <div className="image_section_product">
                  <a href="rigid-boxes/index.html" aria-label="Read more">
                    <h3 className="heading_25_700_black headind_top-">
                      Rigid Boxes
                    </h3>
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Bestselling setup boxes
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Elevate products’ charisma
                      </li>
                      <li className="list_text">
                        <img
                          className="show_blue"
                          src={product_icon_home}
                          alt="blue icon"
                          style={{ marginRight: 7 }}
                        />
                        <img
                          className="show_red_hover"
                          src={homeiconred}
                          alt="red icon"
                          style={{ marginRight: 7 }}
                        />
                        Ultimate protection
                      </li>
                    </ul>
                  </a>
                  <div className="product_button">
                    <a href="rigid-boxes/index.html" aria-label="Read more"></a>
                    <a href="rigid-boxes/index.html" aria-label="Read more">
                      <button className="btn customize_btn">
                        Explore
                        <img
                          className="show_button_icon"
                          src={button_icon_right}
                          alt="button icon"
                        />
                        <img
                          className="show_hover_icon_button"
                          src={button_icon_top}
                          alt="button icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /box_news */}
        </div>
        {/* /row */}
        <div className="margin_top_bottom_20 show_mobile_response_end">
          <a className="button_position" href="industries/index.html">
            <button className="btn mt-lg-5 button_18_500_black mb-sm-2 mb-2">
              View All Industries
            </button>
          </a>
        </div>
      </div>
    </div>
    {/*Home Product Section End*/}
    {/*Product with Image Section Start*/}
    <section className="home_product_image_section">
      <div className="box_top_left_icon">
        <img
          src={lefticon}
          alt="box top"
          width={132}
          height={125}
        />
      </div>
      <div className="box_top_right_icon">
        <img
          src={toprighticon}
          alt="box right"
          width={300}
          height={64}
        />
      </div>
      <div className="box_bottom_right_icon">
        <img
          src={bottomiconright}
          alt="box bottom"
        />
      </div>
      <div className="box_bottom_left_icon">
        <img
          src={bottomiconleft}
          alt="box left"
          width={262}
          height={396}
        />
      </div>
      <div className="container">
        <div className="owl-carousel owl-theme product_image_carousel">
          <div className="item text-center">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="">
                  <img
                    src={retailboxes}
                    alt="Custom Retail Boxes"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="text-start margin_top_bottom_30_20">
                  <h3 className="mini_24_700_red_heading">Best seller</h3>
                  <h4 className="heading_48_700_black">
                    Custom{" "}
                    <span className="heading_48_500_blue_italic">
                      Retail Boxes{" "}
                    </span>
                  </h4>
                  <div className="best_seller_para">
                    <p style={{ textAlign: "justify" }}>
                      For the majority, the whole business game revolves around
                      the retail setting. It starts when your products are
                      fashionably presented or displayed on shelves or ends when
                      consumers select them. Custom retail boxes, with unique
                      presentation and great printing, present even ordinary
                      products exclusively. Our best-selling products like
                      retail boxes are perfect to pose a go-go situation for all
                      brands. Affordability and aesthetically, they enable you
                      to have all competitive edges. They are not mere
                      packaging, they go beyond the tangible presentation of
                      branding, and marketing. Get a perfectly crafted box that
                      fixes your sizes, shapes, and color requirements.
                    </p>{" "}
                  </div>
                  <div className="on_mobile_center_btn text-center">
                    <a className="" href="quote/index.html">
                      <button className="btn button_18_500_black margin_top_bottom_20">
                        Get a quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item text-center">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="">
                  <img
                    src="uploads_f/1710845487.Custom-boxes-and-Packaging.webp"
                    alt="Custom boxes and Packaging"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="text-start margin_top_bottom_30_20">
                  <h3 className="mini_24_700_red_heading">Best seller</h3>
                  <h4 className="heading_48_700_black">
                    Custom{" "}
                    <span className="heading_48_500_blue_italic">
                      Boxes and Packaging{" "}
                    </span>
                  </h4>
                  <div className="best_seller_para">
                    <p style={{ textAlign: "justify" }}>
                      Telling your brand tales on refined materials grabs the
                      attention of customers. &nbsp;Custom box printing is the
                      art of converting naturally derived materials into a box
                      of perfection. Meticulously crafted custom package by
                      experts' hands is completely spick and span. Spotless
                      finishing with hues of charms adds charisma to your
                      products. &nbsp;Majestic prints designed on purposeful
                      patterns foster sales and build a brand. People love to
                      have custom boxes and custom packaging as a brand
                      statement to narrate their brand story.
                    </p>{" "}
                  </div>
                  <div className="on_mobile_center_btn text-center">
                    <a className="" href="quote/index.html">
                      <button className="btn button_18_500_black margin_top_bottom_20">
                        Get a quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item text-center">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="">
                  <img
                    src={Ecofriendly}
                    alt="Custom Eco Friendly Boxes"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="text-start margin_top_bottom_30_20">
                  <h3 className="mini_24_700_red_heading">Best seller</h3>
                  <h4 className="heading_48_700_black">
                    Custom{" "}
                    <span className="heading_48_500_blue_italic">
                      Eco-friendly Boxes{" "}
                    </span>
                  </h4>
                  <div className="best_seller_para">
                    <p style={{ textAlign: "justify" }}>
                      We take immense pride in creating impressive boxes
                      renowned for their ability to be recycled and biodegraded.
                      Our custom packaging ideas, styles, and layouts are
                      tailored to meet your specific needs, ensuring they are
                      light on the planet. Surprisingly, you now have the option
                      to request unique patterns, figures, and external coatings
                      for your boxes. Join us in making the Earth a better
                      version through our commitment to crafting eco-friendly
                      packaging solutions.
                    </p>{" "}
                  </div>
                  <div className="on_mobile_center_btn text-center">
                    <a className="" href="quote/index.html">
                      <button className="btn button_18_500_black margin_top_bottom_20">
                        Get a quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item text-center">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="">
                  <img
                    src={rigidboxes}
                    alt="Custom Rigid Boxes"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="text-start margin_top_bottom_30_20">
                  <h3 className="mini_24_700_red_heading">Best seller</h3>
                  <h4 className="heading_48_700_black">
                    Custom{" "}
                    <span className="heading_48_500_blue_italic">
                      Rigid Boxes{" "}
                    </span>
                  </h4>
                  <div className="best_seller_para">
                    <p style={{ textAlign: "justify" }}>
                      Rigid boxes or set-up boxes are popular for their
                      luxurious appeal. The rigidity of the rigid boxes is
                      perfect for all delicate items. &nbsp;From gift-giving to
                      great product launching, luxury boxes raise the bar in
                      retail. Stay in memory of your customers with highly
                      affordable packing boxes with logos. These little
                      champions have become the biggest hit; exclusivity with
                      elegance is the ultimate reason for their popularity. Let
                      your brand glow with customized boxes for packaging- we
                      made with high-end material. We are on radars, tell us
                      what you want us to do for you.
                    </p>{" "}
                  </div>
                  <div className="on_mobile_center_btn text-center">
                    <a className="" href="quote/index.html">
                      <button className="btn button_18_500_black margin_top_bottom_20">
                        Get a quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item text-center">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="">
                  <img
                    src="uploads_f/1710845249.Custom-Mailer-Boxes.webp"
                    alt="Custom Mailer Boxes"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <div className="text-start margin_top_bottom_30_20">
                  <h3 className="mini_24_700_red_heading">Best seller</h3>
                  <h4 className="heading_48_700_black">
                    Custom{" "}
                    <span className="heading_48_500_blue_italic">
                      Mailer Boxes{" "}
                    </span>
                  </h4>
                  <div className="best_seller_para">
                    <p style={{ textAlign: "justify" }}>
                      Our mailer boxes keep you ready to always facilitate your
                      customers. It’s a way to maintain a healthy relationship
                      with clients in the best possible way. Stylish, durable,
                      and ready-to-ship mailers are the best friends of all
                      businesses. It is the most sought-after customize box
                      packaging for all. Whether you want to knock at customer’s
                      doors or send products to bulk purchasers, Mailers are
                      real Wizards. These Unsung heroes take care of your
                      products due to high resilience and tape-free
                      interlocking. Stay in the queue to customize your mailers
                      in any size, shape, or color.&nbsp;
                    </p>{" "}
                  </div>
                  <div className="on_mobile_center_btn text-center">
                    <a className="" href="quote/index.html">
                      <button className="btn button_18_500_black margin_top_bottom_20">
                        Get a quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Product with Image Section End*/}
    {/*Sale Banner Start*/}
    <section className="sale_banner_section">
      <div className="container">
        <div className="sale_banner_inside">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-12">
              <div className="" style={{ position: "relative" }}>
                <h3 className="heading_48_700_black">
                  Are you considering extravagant
                  <span className="heading_48_500_white_italic">
                    packaging for your business?
                  </span>
                </h3>
                <p className="paragraph_18_400_white">
                  Are you planning to make bulk custom box purchases from a
                  single platform? We caters to businesses across industries,
                  assisting them in meeting high-volume packaging requirements.
                </p>
                <div className="on_mobile_d_none_button">
                  <a href="contact-us/index.html">
                    <button className="btn button_18_500_white">
                      Get Started
                    </button>
                  </a>
                </div>
                <div className="sale_banner_icon">
                  <img
                    src={salebannersvg}
                    alt="sale banner"
                    width={107}
                    height={101}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="sale_banner_img">
                <img
                  src={homebanner}
                  alt="home banner sale"
                  width={415}
                  height={427}
                />
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="contact-us/index.html">
                <button className="btn button_18_500_white margin_top_40">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sale_banner_dots">
        <img
          src="frontend_f/front/sale_banner_dots.svg"
          alt="sale banner dot"
        />
      </div>
    </section>
    {/*Sale Banner End*/}
    {/*Box By Style Area Start*/}
    <section className="box_style">
      <div className="box_style_bottom_left">
        <img
          src={boxstyleleft}
          alt="box style bottom"
        />
      </div>
      <div className="box_style_top_right">
        <img
          src="frontend_f/front/box_style_top_right.webp"
          alt="box style right"
        />
      </div>
      <div className="box_style_bottom_right">
        <img
          src="frontend_f/front/box_style_bottom_right.webp"
          alt="box style right"
        />
      </div>
      <div className="container">
        <div className="text-center home_box_style_area">
          <h2 className="heading_48_700_black">
            Build Your Brand with Customized Packing
            <span className="heading_48_500_white_italic">
              Styles That Grab the Spotlight{" "}
            </span>
          </h2>
          <p className="mb-lg-5 mt-lg-3 paragraph_18_400_white">
          Hold onto the eyes of customers! Do you need something very similar? Stand by no more, counsels our first class box designers cum beauticians, to continuously remain prevalent. 'Box-by-style' alludes to a wide showcase of all flexible sorts of box styles that most likely dazzle you. Find Now!
          </p>
        </div>
        <div className="owl-carousel owl-theme products_carousel">
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="fence-partitions/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1710136008.fence-partitions.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1710136008.fence-partitions.webp"
                    alt="fence partitions"
                  />
                </a>
              </figure>
              <a href="fence-partitions/index.html">
                <h3 className="heading_25_700_black text-start">
                  Fence Partitions
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="fence-partitions/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="five-panel-hanger/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1710500231.five-panel-hanger-printed-boxes.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1710500231.five-panel-hanger-printed-boxes.webp"
                    alt="five panel hanger printed boxes"
                  />
                </a>
              </figure>
              <a href="five-panel-hanger/index.html">
                <h3 className="heading_25_700_black text-start">
                  Five Panel Hanger
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="five-panel-hanger/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="french-fry-boxes/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1709547966.custom-french-fry-boxes.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1709547966.custom-french-fry-boxes.webp"
                    alt="custom french fry boxes"
                  />
                </a>
              </figure>
              <a href="french-fry-boxes/index.html">
                <h3 className="heading_25_700_black text-start">
                  French Fry Boxes
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="french-fry-boxes/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="punch-partition/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1710136420.punch-partition-action.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1710136420.punch-partition-action.webp"
                    alt="punch partition action"
                  />
                </a>
              </figure>
              <a href="punch-partition/index.html">
                <h3 className="heading_25_700_black text-start">
                  Punch Partition
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="punch-partition/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="straight-tuck-end/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1710316049.custom-straight-tuck-end-box.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1710316049.custom-straight-tuck-end-box.webp"
                    alt="custom straight tuck end box"
                  />
                </a>
              </figure>
              <a href="straight-tuck-end/index.html">
                <h3 className="heading_25_700_black text-start">
                  Straight Tuck End
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="straight-tuck-end/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="tray-and-sleeve-box/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711356638.small-tray-and-sleeve-box.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711356638.small-tray-and-sleeve-box.webp"
                    alt="small tray and sleeve box"
                  />
                </a>
              </figure>
              <a href="tray-and-sleeve-box/index.html">
                <h3 className="heading_25_700_black text-start">
                  Tray and Sleeve Box
                </h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="tray-and-sleeve-box/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          <div className="item">
            <div className="grid_item product_all_box">
              {/*<span class="ribbon new">New</span>*/}
              <figure className="box_figure_img_bg">
                <a href="two-piece/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711356677.two-piece-sets.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711356677.two-piece-sets.webp"
                    alt="two piece sets"
                  />
                </a>
              </figure>
              <a href="two-piece/index.html">
                <h3 className="heading_25_700_black text-start">Two Piece</h3>
              </a>
              <div className="popular_product_button text-start mt-4">
                <a href="two-piece/index.html">
                  <button className="btn popular_customize_btn customize_18_500_button">
                    Explore
                    <img
                      className="show_button_icon"
                      src={button_icon_right}
                      alt="button right icon"
                      style={{ width: 15 }}
                    />
                    <img
                      className="show_hover_icon_button"
                      src={button_icon_top}
                      alt="button top icon"
                      style={{ width: 15 }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* /grid_item */}
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="boxstyles/index.html">
            <button className="btn button_18_500_white">
              View All Products
            </button>
          </a>
        </div>
        {/* /products_carousel */}
      </div>
    </section>
    {/*Box By Style Area End*/}
    {/*Home Page Form Start*/}
    <section className="home_page_form_section">
      <div className="form_top_right">
        <img src="frontend_f/front/form_top_right.webp" alt="form top" />
      </div>
      <div className="container">
        <div className="">
          <h3 className="heading_48_700_black">
            Request a Prompt
            <span className="heading_48_500_blue_italic">
              Response within 24 Hours
            </span>
          </h3>
          <p className="paragraph_18_400_black">
            Our hands-on involvement in customization enables us to provide
            extensive assistance to our customers. We are at your service and
            never disappoint you. To make the printing boxes customization
            easier than ever before, we invite you to fill out a Quote Request
            Form. Audio, video, and real-time support for sharing your
            requirements further contribute to making the process hassle-free.
          </p>
        </div>
        <div className="" style={{ position: "relative" }}>
          <form
            className="home_form"
            method="post"
            action="https://www.thecustomboxes.com/home_contact_form/"
            onsubmit="return submitUserForm();"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
            />{" "}
            <input
              type="hidden"
              name="subject"
              defaultValue="home_contact_form"
            />
            <div className="row">
              <div className="form-group col-md-4">
                <label className="mb-2 input_18_500_label_blue">
                  Your Name*
                </label>
                <input
                  type="text"
                  className="form-control input_home"
                  id="name"
                  placeholder="Enter Your Name"
                  name="name"
                  required=""
                />
              </div>
              <div className="form-group col-md-4">
                <label className="mb-2 input_18_500_label_blue">
                  Your Email Address*
                </label>
                <input
                  type="email"
                  className="form-control input_home"
                  placeholder="Enter Your Email"
                  id="search_input_home_contact"
                  name="email"
                  required=""
                />
              </div>
              <div className="form-group col-md-4">
                <label className="mb-2 input_18_500_label_blue">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  className="form-control input_home"
                  id="phone1"
                  placeholder="Enter Your Contact Number"
                  name="phone"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="mb-2 input_18_500_label_blue">
                  Description*
                </label>
                <textarea
                  placeholder="Tell us about your project! Box dimensions, industry, design, etc. — we can help."
                  className="form-control input_home"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  name="message"
                  defaultValue={""}
                />
                {/*<p style="color: red;margin:10px 0px 0px;">Minimum 10 characters, maximum 300 characters</p>*/}
              </div>
            </div>
            {/* Recaptcha start */}
            <div className="form-group mt-4">
              <div
                className="g-recaptcha"
                data-sitekey="6LcLRm4pAAAAAGeWZi8RN4Qjy5xlEBQ7rSDhaChg"
                data-callback="verifyCaptcha"
                required=""
              />
              <div id="g-recaptcha-error" />
            </div>
            {/* Recaptcha start */}
            <div className="mt-5 pb-5 text-center">
              <a href="#">
                <button
                  className="btn button_18_500_black"
                  type="submit"
                  name="submit"
                >
                  Submit
                </button>
              </a>
            </div>
          </form>
          <div className="form_bottom_left">
            <img
              src="frontend_f/front/form_bottom_left.webp"
              alt="bottom-left"
            />
          </div>
          <div className="form_bottom_right">
            <img
              src="frontend_f/front/form_bottom_right.webp"
              alt="bottom right "
            />
          </div>
        </div>
      </div>
    </section>
    {/*Home Page Form End*/}
    {/*Home Page Testimonial Section Start*/}
    <section className="client_testimonials_" style={{background:"#e47911"}}>
      <div className="testimonial_icon_left">
        <img
          src="frontend_f/front/testimonial_icon_left.svg"
          alt="testimonial icon"
        />
      </div>
      <div className="testimonial_icon_right">
        <img
          src="frontend_f/front/testimonial_icon_right.svg"
          alt="testimonial icon right"
        />
      </div>
      <div className="container">
        <div className="text-center">
          <div className="testimonial_area">
            <h3 className="mini_24_700_red_heading">testimonial's</h3>
            <h4 className="heading_48_700_black">
              See Why Customers Love
              <span className="heading_48_500_white_italic">TCB</span>
            </h4>
          </div>
          <p className="paragraph_18_400_white test_para_area mb-4">
            We take pride in the unparalleled success of our packaging boxes,
            benefiting both retailers and wholesalers. When the ultimate goal is
            to exclusively serve with the hallmark of quality, we make it happen
            for you. Our top-tier packaging standards, without compromising your
            environmental concerns, set us apart. We've assisted hundreds of
            thousands of brands in propelling their businesses to success.
            Premium quality, coupled with affordability, illuminates the paths
            to success. But you don't have to take our word for it; consider the
            customer feedback and satisfaction rates.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex" style={{ alignItems: "center" }}>
          <div className="col-md-5 col-sm-6 col-12">
            <div className="text-center testimonial_woman on_mobile_d_none_button">
              <img
                src={womentestimonial}
                alt="testimonial women"
                width={580}
                height={556}
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-12">
            <nav className="mb-5 nav_mar_bot home_tab_margin_bottom">
              <div
                className="nav nav-tabs"
                id="nav-tab"
                style={{ border: "none" }}
              >
                <button
                  className="nav-link active testimonial_btn"
                  id="nav-home-tab"
                >
                  <img
                    src={custombox}
                    width={97}
                    height={36}
                    className=""
                    alt="custom boxes testimonial"
                  />
                </button>
                <button className="nav-link testimonial_btn">
                  <a href="https://bit.ly/3HtBJOb">
                    <img
                      src={googlebox}
                      width={117}
                      height={36}
                      className=""
                      alt="google testimonial"
                    />
                  </a>
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="pt-5 pb-5 pad_on_mob_testi">
                  <div className="">
                    <div className="owl-carousel owl-theme testimonial_carousel mb-5">
                      {/* /item */}
                      <div className="item">
                        <div className="row">
                          <div className="col-md-6 mb-3 star_width">
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                          </div>
                          <div className="col-md-5" style={{}}>
                            <p className="m-0 text-end testimonial_date">
                              31 Jan 2023
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-container">
                          {/*<h4 class="testimonial_heading_name">The custom Boxes</h4>*/}
                          <div className="testimonial testimonial_para">
                            {/*635*/}
                            <p style={{ textAlign: "justify" }}>
                              I recently had the opportunity to work with The
                              Custom Boxes, and I must say, their services were
                              top-notch. From start to finish, they were
                              professional, proficient, and attentive to my
                              packaging needs. Their team is so friendly and
                              does everything to make me feel valued. I am
                              extremely satisfied with their services a ...{" "}
                              <a
                                href="testimonial/index.html"
                                style={{ color: "#fff", fontWeight: 600 }}
                              >
                                {" "}
                                Visit our Review Page{" "}
                              </a>
                            </p>
                          </div>
                          <div className="user">
                            <img
                              src="uploads_f/1706098753.Kelly-Green.webp"
                              alt="user"
                              className="user-image"
                              style={{ width: 50 }}
                            />
                            <div className="user-details">
                              <h4 className="username testimonial_username">
                                Kelly Green
                              </h4>
                              {/*<p class="role user_role_testimonial">mailer boxes, 48 hours</p>*/}
                            </div>
                          </div>
                        </div>
                        {/* /grid_item */}
                      </div>
                      {/* /item */}
                      {/* /item */}
                      <div className="item">
                        <div className="row">
                          <div className="col-md-6 mb-3 star_width">
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                          </div>
                          <div className="col-md-5" style={{}}>
                            <p className="m-0 text-end testimonial_date">
                              31 Jan 2023
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-container">
                          {/*<h4 class="testimonial_heading_name">The custom Boxes</h4>*/}
                          <div className="testimonial testimonial_para">
                            {/*368*/}
                            <p style={{ textAlign: "justify" }}>
                              I have been coming to the custom boxes for 2 years
                              now— and they have been with me every step of the
                              way on my journey in business!! They are super
                              reliable, quick turnaround, and very personable
                              people who responded so quickly and efficiently.
                              Good vibes all around and love that they are
                              located in Chicago near ...{" "}
                              <a
                                href="testimonial/index.html"
                                style={{ color: "#fff", fontWeight: 600 }}
                              >
                                {" "}
                                Visit our Review Page{" "}
                              </a>
                            </p>
                          </div>
                          <div className="user">
                            <img
                              src="uploads_f/1706098768.Alexis-Davis.webp"
                              alt="user"
                              className="user-image"
                              style={{ width: 50 }}
                            />
                            <div className="user-details">
                              <h4 className="username testimonial_username">
                                Alexis Davis
                              </h4>
                              {/*<p class="role user_role_testimonial">mailer boxes, 48 hours</p>*/}
                            </div>
                          </div>
                        </div>
                        {/* /grid_item */}
                      </div>
                      {/* /item */}
                      {/* /item */}
                      <div className="item">
                        <div className="row">
                          <div className="col-md-6 mb-3 star_width">
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                            <img src="frontend_f/front/star.webp" alt="star" />
                          </div>
                          <div className="col-md-5" style={{}}>
                            <p className="m-0 text-end testimonial_date">
                              31 Jan 2023
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-container">
                          {/*<h4 class="testimonial_heading_name">The custom Boxes</h4>*/}
                          <div className="testimonial testimonial_para">
                            {/*529*/}
                            <p style={{ textAlign: "justify" }}>
                              Since it was my first time coming up with my
                              ideas, the process was a little challenging, but
                              TCB' talented staff was a huge help. They assist
                              me in selecting the design trends that will draw
                              in more customers and in sizing the boxes to the
                              proper sizes. They also kept me informed about the
                              procedure and shipping. ...{" "}
                              <a
                                href="testimonial/index.html"
                                style={{ color: "#fff", fontWeight: 600 }}
                              >
                                {" "}
                                Visit our Review Page{" "}
                              </a>
                            </p>
                          </div>
                          <div className="user">
                            <img
                              src="uploads_f/1706098784.Ryan-George.webp"
                              alt="user"
                              className="user-image"
                              style={{ width: 50 }}
                            />
                            <div className="user-details">
                              <h4 className="username testimonial_username">
                                Ryan George
                              </h4>
                              {/*<p class="role user_role_testimonial">mailer boxes, 48 hours</p>*/}
                            </div>
                          </div>
                        </div>
                        {/* /grid_item */}
                      </div>
                      {/* /item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="testimonial/index.html" className="btn white_border_button">
          See All Testimonial's
        </a>
      </div>
    </section>
    {/*Home Page Testimonial Section End*/}
    {/*Home Page Slider Gallery Section Start*/}
    <section style={{ backgroundColor: "#FFF" }}>
      <div className="gallery_icon_right">
        <img
          src="frontend_f/front/gallery_icon_right.webp"
          alt="gallery icon"
        />
      </div>
      <div className="icon_bottom_left_blog">
        <img
          src="frontend_f/front/red_dot_blog.svg"
          width={125}
          alt="red dot"
        />
      </div>
      <div className="container ">
        <div className="product_title">
          <div className="row">
            <div className="col-md-11">
              <h4 className="mb-3 heading_48_700_black">
                Explore Artistic creations to cope
                <span className="heading_48_500_blue_italic">
                  with all Packaging Challenges
                </span>
              </h4>
              <p className="mb-lg-5 paragraph_18_400_black">
                Pretty boxes have been the biggest contributors in shaping the
                US market. As a pioneer in the packaging industry, we have all
                vital ingredients under one roof to establish market dominance.
                The perfect fusion of expertise with plentiful resources enables
                us to deliver perfection professionally. Esteemed packaging with
                glitters of purpose turns ordinary wrapping into a lucky charm
                for your brand. Look no more, bespoke packaging awaits!
              </p>
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme gallery_carousel mb-5 popular_product_grid">
          {/*   <div class="item">*/}
          {/*	<div class="" style="">*/}
          {/*		<figure>*/}
          {/*			<p class="gallery_word">*/}
          {/*				Gallery*/}
          {/*			</p>*/}
          {/*		</figure>*/}
          {/*	</div>*/}
          {/*</div>*/}
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1707582781.svg_gallery_01.svg"
                    data-src="https://www.thecustomboxes.com/uploads_f/1707582781.svg_gallery_01.svg"
                    alt="svg gallery svg"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1702559353.gallery3.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1702559353.gallery3.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1702559363.gallery4.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1702559363.gallery4.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1706087916.gallery-image-4.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1706087916.gallery-image-4.webp"
                    alt="gallery image "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1706088037.gallery-image-5.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1706088037.gallery-image-5.webp"
                    alt="gallery image "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1706087970.gallery-image-6.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1706087970.gallery-image-6.webp"
                    alt="gallery image "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1706087864.gallery-image-7.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1706087864.gallery-image-7.webp"
                    alt="gallery image "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1704982133.gallery-9.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1704982133.gallery-9.webp"
                    alt="gallery "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705061861.gallery10.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705061861.gallery10.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705061946.gallery11.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705061946.gallery11.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705061955.gallery12.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705061955.gallery12.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705061963.gallery13.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705061963.gallery13.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705061976.gallery14.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705061976.gallery14.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1705062084.gallery15.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1705062084.gallery15.webp"
                    alt="gallery"
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="gallery_box_shad">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="#">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1707581641.gallery_11.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1707581641.gallery_11.webp"
                    alt="gallery "
                  />
                </a>
              </figure>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
        </div>
        <div className="pt-5 text-center gallery_btn_">
          <a href="contact-us/index.html">
            <button className="btn button_18_500_black margin-top_20_gallery">
              Get to Know
            </button>
          </a>
        </div>
        {/* /products_carousel */}
      </div>
    </section>
    {/*Home Page Slider Gallery Section End*/}
    {/*Home Page Address Section Start*/}
    <section className="home_address_section">
      <div className="container">
        <div className="">
          <h3 className="heading_48_700_black">
            Where
            <span className="heading_48_500_blue_italic"> you’ll be</span>
          </h3>
          <p className="paragraph_18_400_black">
            9933 Franklin Ave, Franklin Park, IL 60131
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 col-12">
            <div className="map_height">
              <iframe
                title="The Custom Boxes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.9173191215828!2d-87.87453789999999!3d41.937628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb50ad26bccfd%3A0x348fdbdabe650e1b!2s9933%20Franklin%20Ave%2C%20Franklin%20Park%2C%20IL%2060131%2C%20USA!5e0!3m2!1sen!2s!4v1699908894123!5m2!1sen!2s"
                width=""
                height={600}
                style={{ border: 0, width: "100%", borderRadius: 25 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-12">
            <div className="query_address_form">
              <div className="">
                <h3 className="heading_48_700_black">
                  Book Your Appointment
                  <span className="heading_48_500_blue_italic">
                    With The Custom Boxes
                  </span>
                </h3>
              </div>
              <div className="">
                <form
                  className="home_address_form_map"
                  style={{ background: "#fff" }}
                  method="post"
                  action="https://www.thecustomboxes.com/book_appointment_form/"
                  onsubmit="return submitUserForm1();"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                  />{" "}
                  <input
                    type="hidden"
                    name="subject"
                    defaultValue="book_appoitment_form"
                  />
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="mb-2 label_form">
                        Select your time slot
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="date_time"
                        placeholder="Time Slot"
                        name="time_slot"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label className="mb-2 label_form">
                        Enter Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        id="search_input_home_appointment"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label className="mb-2 label_form">
                        Enter Your Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="+1 xxxxxxxxxx"
                        name="phone"
                      />
                    </div>
                  </div>
                  {/*<p class="form_para_">*/}
                  {/*   The Custom boxes is Looking forward to Meet & Greet You!*/}
                  {/*</p>*/}
                  {/* Recaptcha start */}
                  <div className="form-group mt-4">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LcLRm4pAAAAAGeWZi8RN4Qjy5xlEBQ7rSDhaChg"
                      data-callback="verifyCaptcha1"
                      required=""
                    />
                    <div id="g-recaptcha-error-1" />
                  </div>
                  {/* Recaptcha start */}
                  <div className="popular_industries_button mt-md-4 text-center">
                    <a href="#">
                      <button
                        className="btn appointment_btn"
                        style={{ width: "100%" }}
                        type="submit"
                        name="submit"
                        id="submit"
                      >
                        Book Appointment for visit
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Home Page Address Section End*/}
    {/*Home FAQs Section Start*/}
    <section className="home_faq_section">
      <div className="faq_line_icon">
        <img src="frontend_f/front/faq_line_icon.svg" alt="faq line" />
      </div>
      <div className="text-center faq_area">
        <p className="mini_24_700_red_heading">Your Queries, Our Expertise</p>
        <h3 className="heading_48_700_black">
          A single platform to manage your
          <span className="heading_48_500_blue_italic">
            end-to-end packaging workflow
          </span>
        </h3>
        <p className="paragraph_18_400_black">
          Clear all your ambiguities to make an informed decision. Ask whatever
          you want, and we will provide answers to help you feel relaxed. Stop
          wondering, start exploring. Find answers below to create a clear
          mental picture of custom boxes.
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading1"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse1"
                    aria-expanded="false"
                    aria-controls="flush-collapse1"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      How Would I Know The Current Status Of My Order?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    To know the current status of your order, check your email
                    where we send confirmation messages with tracking details at
                    the time of order placement. Use the provided tracking
                    number on the website to get the latest update about your
                    order. Alternatively, you can also contact our CSRs. Our
                    team can provide you with the most up-to-date information on
                    your order. We feel pride in keeping our valuable customers
                    aware of their current order status.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading2"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapse2"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What Kind Of Packaging Products Can I Order From The
                      Custom Boxes?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading2"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Just think of a thing you want to pack. You can get a
                    customized box for it at The Custom Boxes. We offer a range
                    of customizable packaging solutions including, display
                    boxes, eco-friendly packaging, retail boxes, custom printed
                    boxes, promotional packaging, custom inserts, cosmetic
                    packaging, food packaging, custom labels and stickers,
                    mailer boxes, and many more. Moreover, our specialized
                    tailored packaging ensures to meet your particular product
                    and branding needs.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading3"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapse3"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Can You Print Inside The Boxes?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, we can print inside the boxes. Whether you want to
                    print the interior side of a shipping box, product box, or
                    tuck-top box, we offer customizable printing options to meet
                    your requirements and preferences. However, our brown Kraft
                    boxes can stand tall among many. With the printing of just a
                    simple and delicate logo, they are ready to set the stage on
                    fire.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading4"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What If I Receive A Faulty/Damaged Product?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading4"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Our QC department is specially created to check the quality
                    of our packaging boxes before shipping. So, there is the
                    least chance of receiving any faulty/damaged product. But if
                    it still happens, unfortunately, then we take responsibility
                    to compensate you as maximum as possible. For this, you have
                    to follow a proper procedure. Submit your complaints within
                    7 working days after receiving the order. Our team will
                    contact you at your earliest convenience. Send us back the
                    damaged quantity on your behalf and we will happily replace
                    them.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading5"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapse5"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What Is Your Standard Lead Time?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading5"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Our standard lead time is around 7- 10 working days. This
                    lead time lacks transit time which is approximately 1-7
                    business days depending on your location. However, for
                    complexly designed boxes and at extremely busy times of the
                    year, some orders may take extra days. Your delivery date is
                    estimated at the time of your order placement. If your order
                    is time-sensitive then select our rush production option. It
                    normally takes 4-6 business days for production.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading6"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse6"
                    aria-expanded="false"
                    aria-controls="flush-collapse6"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Do You Offer Box Mock-Ups Before Actual Production?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading6"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, we offer box mock-ups before actual production. We
                    considered it necessary to ensure you how the actual product
                    will look like. It also serves to visually showcase and test
                    packaging designs before production. Moreover, we can send
                    you a physical sample at a minimal shipping cost so that you
                    can assess and approve the final packaging design. However,
                    we provide free samples in bulk quantities.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading7"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse7"
                    aria-expanded="false"
                    aria-controls="flush-collapse7"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Which Printing Method Do You Use To Print My Boxes?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading7"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    To print your boxes we use versatile printing methods.
                    Printing can play a significant role in enhancing the
                    overall appeal of your boxes. We hold expertise in digital
                    printing, screen printing, and offset printing methods.
                    Choose the one that better matches your preferences.
                    Moreover, you can also go for embossing, de-bossing,
                    metallic coating, or UV foil stamping for elevated
                    aesthetics. If you are confused about selecting the
                    appropriate printing method for your boxes, contact us. Our
                    experts can help you mitigate your worries and assist you in
                    selecting the most suitable option.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading101"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse101"
                    aria-expanded="false"
                    aria-controls="flush-collapse101"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      How Do I Choose The Right Material For My Custom Boxes?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse101"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading101"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Choosing the right material for your custom boxes is a
                    crucial decision because quality materials matter a lot in
                    making your boxes sturdy and visually appealing. Start by
                    understanding your own preferences and product requirements.
                    Select from our wide range of available options such as
                    cardboard, paperboard, Kraft paper, and many others. Our
                    versatile and superior materials can assist you in achieving
                    your desires and needs. Still, if you find it difficult,
                    just contact our CSRs. They can provide you with assistance
                    and make the selection process easy for you.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading102"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse102"
                    aria-expanded="false"
                    aria-controls="flush-collapse102"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Do I Get My Order Done On An Urgent Basis?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse102"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading102"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, you can get your order done on an urgent basis. For
                    this, you have to select the rush production option. It
                    takes 4 to 6 days to deliver your orders to your doorstep.
                    However, you have to pay slightly more to avail yourself of
                    this opportunity. Our well-organized production rate and
                    efficient shipping method make it possible to meet urgent
                    order requirements, ensuring prompt delivery and a timely
                    fulfillment process.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading103"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse103"
                    aria-expanded="false"
                    aria-controls="flush-collapse103"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Are All Your Packaging Boxes Composted?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse103"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading103"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, all our packaging boxes are composted because we craft
                    them with sustainable materials such as cardboard,
                    paperboard, or Kraft paper. Our focus on the use of
                    compostable finishes or additives makes them environmentally
                    friendly and conducive to composting practices.
                    Incorporation of compostable elements into our packaging
                    boxes is our initiative to minimize the environmental
                    impact. So, our packaging boxes are the perfect choice for
                    businesses seeking eco-friendly alternatives.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading104"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse104"
                    aria-expanded="false"
                    aria-controls="flush-collapse104"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What Payment Methods Do You Accept For Packaging Orders?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse104"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading104"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    We are always looking to provide ease to our customers. For
                    this, we ensure a smooth transaction process by offering a
                    variety of convenient payment methods for packaging orders.
                    Our accepted payment methods are usually based on online
                    payment platforms. PayPal is our most common and frequently
                    used payment method. To complete your order processing, it
                    is recommended to deposit the mentioned amount through
                    PayPal.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading105"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse105"
                    aria-expanded="false"
                    aria-controls="flush-collapse105"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What Kind Of Prints Do You Offer On Customized Packaging?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse105"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading105"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    We offer a variety of prints on customized packaging.
                    Whether you want minimalistic and classic prints or bold and
                    sober patterns, we provide a diverse range of print and
                    design options to cater to your specific and stylish
                    preferences. With our high-quality prints, your customized
                    packaging does not remain mere boxes to hold products;
                    rather they become masterpieces that can hypnotize the sense
                    of viewers.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading106"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse106"
                    aria-expanded="false"
                    aria-controls="flush-collapse106"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      Can I Get A Sample Of The Printed Box Before Placing A
                      Larger Order?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse106"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading106"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, you can get a sample of the printed box before placing
                    a larger order. We know the significance of ensuring the
                    quality and design to meet your expectations and
                    requirements. Our priority to facilitate our clients as
                    maximum as possible urges us to go the extra mile for their
                    satisfaction. Therefore, we can discuss the possibility of
                    providing a sample to help you make an informed decision.
                    Also, our dedicated team is committed to facilitating your
                    needs and fostering your trust in our products.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: "none" }}>
                <h2
                  className="accordion-header"
                  id="flush-heading107"
                  style={{ borderRadius: 10 }}
                >
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse107"
                    aria-expanded="false"
                    aria-controls="flush-collapse107"
                  >
                    <p className="m-0" style={{ paddingRight: 30 }}>
                      What Is The Maximum Size And Capacity You Can Print?{" "}
                    </p>
                  </button>
                </h2>
                <div
                  id="flush-collapse107"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading107"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    To determine the maximum size and capacity we can print, you
                    can contact our customer service team. We provide a wide
                    spectrum of printing capabilities tailored to your specific
                    needs. Our expert and knowledgeable staff can assist you by
                    providing detailed information on size specifications,
                    printing facilities, and customization possibilities based
                    on the type of packaging you select. Directly discuss your
                    project details with us so that we can ensure that the
                    printed boxes meet your required size and capacity. However,
                    we do print more than 5,000 boxes easily for an order.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Home FAQs Section End*/}
    {/*Home Call Banner Section Start*/}
    <section className="call_banner_section">
      <div className="container">
        <div className="call_banner_inside">
          <div className="row">
            <div className="col-md-7 col-sm-6 col-12">
              <div className="" style={{ position: "relative" }}>
                <h3 className="heading_48_700_black">
                  Seek Assistance?
                  <span className="heading_48_500_white_italic">
                    Start One-to-one conversations
                  </span>
                </h3>
                <p className="paragraph_white">
                  A subtle hint of doubt can restrain a business from witnessing
                  a boom. Clear your ambiguities and clean-bold competitors to
                  win your business game.
                </p>
                <div className="on_mobile_d_none_button">
                  <a href="contact-us/index.html">
                    <button className="btn white_border_button">
                      Contact Us
                    </button>
                  </a>
                </div>
                <div className="call_icon_line">
                  <img
                    src="frontend_f/front/call_icon_line.svg"
                    alt="call icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-12">
              <div className="call_banner_img_position">
                <img
                  src={talking_call}
                  alt="talking call"
                  width={415}
                  height={448}
                />
              </div>
            </div>
            <div className="show_mobile_response_end">
              <a href="contact-us/index.html">
                <button className="btn white_border_button margin_top_40">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Home Call Banner Section End*/}
    {/*Home Paragraph Section Start*/}
    <section className="home_text_section home_content">
      <div className="container">
        <div className="home_text_inside scroll_text_setting_content_scroll">
          <div id="scroll_id">
            <h2>
              <strong>Custom Boxes - Excellence For Existence</strong>
            </h2>
            <p>
            Various types of products require boxes of various styles. We offer boxes of many styles, including showcase exhibit, fold and assemble bottom closure, and top closure. These boxes are adjustable as per the necessities and wants of the brands. We offer many shapes, sizes, and colors for packaging box styles. You can get them printed with item related graphics and text. We likewise assist clients with picking up any font style for composing text. Additionally, our most recent printing advancements and prepared staff can create magnificent outcomes. We use paragon inks that are explicit for printing cardboard boxes. Subsequently, it might be ideal in the event that you contacted us to get any style of the box according to your expectations and desires.
            </p>
            <p>
              More than a decade of hands-on experience has made us a top-notch
              packaging service provider preferred by stellar brands.&nbsp;
              <Link    style={{ textDecoration: "underline" }} to="quote">  
              Fill in the form to get started now
              </Link>

              ! Our Customer Services Representatives are available 24/7 to
              entertain your queries and concerns. Let us be your trusted
              packaging partner of all tough times. Feeling difficulty in
              choosing the right box design to merchandize your product
              line?&nbsp; Chat with us and transform your specifications into a
              reality. Build a box now!
            </p>
            <h2>
              <strong>
            Variety of finishing choices:
              </strong>
            </h2>
            <p>
           We will provide you boxes with the ideal wrapping up. Be that as it may, we offer different box styles with extra coatings like matte or gloss. These coatings can give a charming allure for your boxes. Besides, we offer box styles with silver, copper, or gold thwarting. It will give a metallic appearance to your packaging arrangements. Numerous other completing choices like PVC, embellishing, raised ink, and others are accessible for these boxes. Consequently, it might be ideal assuming you came to themailerboxes.co.uk to get additional data.
            </p>
            <p>
            More durable packaging solutions: Every business needs stronger packaging to keep their products safe. During shipping and handling, there are many risks that can harm your items. That’s why we use tougher materials for our packaging boxes, such as bux board, kraft, and corrugated cardboard. You can choose the thickness you need, ranging from 10pt to 28pt. Additionally, these boxes are waterproof and protect against moisture, ensuring your products stay safe from damage during storage and shipping.
            </p>
            <h2>
              <strong> Faster handling of box styles:</strong>
            </h2>
            <p>
           
            Faster handling of orders has assisted us with making a great standing in the market. Our most recent machines helps with assembling these boxes as quick as could be expected. We send standard orders in 10-12 business days subsequent to concluding the plan. On the off chance that you want boxes even faster, consider our rush delivery administration. We dispatch rush requests in 6-8 working days. You should pay additional charges for rush delivery. Consequently, assuming you really want your box styles quicker, you should favor themailerboxes.co.uk
              <strong>branded boxes</strong>:
            </p>
            <ol start={1} style={{ listStyleType: "decimal" }}>
              <li>Material - Durable Yet Environment Friendly</li>
              <li>Styles- Captivating And Breathtaking</li>
              <li>
                Prints (<strong>custom printed boxes</strong>)- Artistic Yet
                Elegant
              </li>
              <li>Sizes- Innovative Yet Functional</li>
              <li>Embellishment- Sense Of Luxury And Sophistication</li>
              <li>Laminations- Additional Protection And Polish Finish</li>
              <li>Holographic- Mesmerizing And Futuristic&nbsp;Images</li>
            </ol>
            <p>
              Customization turns standard corrugated, Kraft, and even cardboard
              boxes into a perfect fit for your brands. We-&nbsp;while enjoying
              the status of the&nbsp;
              <strong>best custom packaging&nbsp;company in USA,</strong>
              &nbsp;Cost-effective and green materials: We acquire manufacturing materials for these boxes from regular and sustainable sources. Subsequently, our boxes are practical and reasonable for a wide range of businesses. Besides, these materials are ok for the climate since they are recyclable and decomposable. Accordingly, they can assist your business with remaining in legitimate consistence &nbsp;
            </p>
            <p>
              Let’s zero in on the straightforward details about how
              typical&nbsp;box customization will be a magical addition to your
              company.&nbsp;<em>The Custom Boxes</em>&nbsp;team, in compliance
              with our commitment to excellence, is debunking all myths of
              packaging. Even Our cheaper boxes are also made as per
              International Packaging standards or simply they are unparalleled
              as far as quality is concerned. Likewise,&nbsp;
              <strong>rigid boxes</strong>, magnetic closure boxes, cardboard
              boxes, offset or digitally printed luxurious boxes, and
              other&nbsp;<strong>custom-made boxes</strong>&nbsp;are themselves
              signs of quality. Long story short, from cheaper to all exclusive
              varieties in packaging, all customizable boxes are tailored to
              boost business revenue.
            </p>
            <p>
              <strong>Custom printed&nbsp;boxes</strong>&nbsp;and your products
              are just made for each other- from shapes to size, prints to
              designs, and cost to delivery, we ensure ease in every step.
              Featured unboxing aims to offer style with functionality alongside
              an outstanding outlook, compelling people to add your product to
              carts. The levels of detail and artistry of every box custom
              printed box are truly remarkable- capable enough to give you a
              competitive edge.
            </p>
            <p>
            In the event that you want information about corrugated box styles, you should contact us through live chats portals, email, or calls. Our expert customer care group will give all the information in the most ideal way.
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
    {/*Home Paragraph Section End*/}
    {/*Home Blog Section Start*/}
    <section style={{ backgroundColor: "#FCFCFD" }}>
      <div className="icon_bottom_left_blog">
        <img
          src="frontend_f/front/red_dot_blog.svg"
          width={125}
          alt="red dot"
        />
      </div>
      <div className="container ">
        <div className="product_title">
          <div className="row">
            <div className="col-md-11">
              <h3 className="mini_24_700_red_heading">blog</h3>
              <h4 className="heading_48_700_black">
                Learn about
                <span className="heading_48_500_blue_italic">
                  Custom Designer Boxes From The Pros
                </span>
              </h4>
              <p className="mb-lg-5 paragraph_18_400_black">
                We assist you in getting the nitty-gritty of packaging and
                customized boxes for businesses. Delve Deep into the depth of
                the customization process to opt for the trendiest design,
                prints, and technologies. Go ahead! We are right at your back!
              </p>
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme blog_carousel popular_product_grid mb-5">
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/custom-packaging-for-small-business/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1712048467.Custom-Packaging-for-Small-Business-Importance-and-Benefits.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1712048467.Custom-Packaging-for-Small-Business-Importance-and-Benefits.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702556115.Ryan-Hughes-2.webp"
                    alt="Ryan Hughes "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/ryan-hughes/index.html"
                      className="blog_a_home"
                    >
                      by Ryan Hughes
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/ryan-hughes/index.html"
                      className="blog_a_home"
                    >
                      July 08, 2024 ∙ 4 d, 5 h, 21 min, 6 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/ryan-hughes/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/custom-packaging-for-small-business/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    Custom Packaging for Small Business - Importance and
                    Benefits
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/custom-packaging-for-small-business/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/types-of-packaging-materials/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711712530.Types-Of-Packaging-Materials-Pick-The-Best-For-Your-Business.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711712530.Types-Of-Packaging-Materials-Pick-The-Best-For-Your-Business.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702555781.Emily-Parker-2.webp"
                    alt="Emily Parker "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/emily-parker/index.html"
                      className="blog_a_home"
                    >
                      by Emily Parker
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/emily-parker/index.html"
                      className="blog_a_home"
                    >
                      March 29, 2024 ∙ 11 d, 20 h, 47 min, 16 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/emily-parker/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/types-of-packaging-materials/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    Types Of Packaging Materials - Pick The Best For Your
                    E-Commerce Business
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/types-of-packaging-materials/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/how-to-brand-your-ecommerce-store/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711711781.How-To-Brand-Your-Ecommerce-Store.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711711781.How-To-Brand-Your-Ecommerce-Store.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702555986.Aidan-Patel-2.webp"
                    alt="Aidan Patel "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/aidan-patel/index.html"
                      className="blog_a_home"
                    >
                      by Aidan Patel
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/aidan-patel/index.html"
                      className="blog_a_home"
                    >
                      April 02, 2024 ∙ 22 d, 17 h, 15 min, 7 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/aidan-patel/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/how-to-brand-your-ecommerce-store/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    How To Brand Your Ecommerce Store: A Complete Guide
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/how-to-brand-your-ecommerce-store/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/how-to-submit-your-artwork-files-for-custom-printed-boxes/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711956489.Submit-Your-Artwork-Files-for-Custom-Printed-Boxes.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711956489.Submit-Your-Artwork-Files-for-Custom-Printed-Boxes.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702555515.Marcus-Reynolds-2.webp"
                    alt="Marcus Reynolds "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      by Marcus Reynolds
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      April 01, 2024 ∙ 20 d, 15 h, 51 min, 27 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/how-to-submit-your-artwork-files-for-custom-printed-boxes/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    How to Submit Your Artwork Files for Custom Printed Boxes?
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/how-to-submit-your-artwork-files-for-custom-printed-boxes/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/box-design-ideas/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1711958417.Box-Design-Ideas.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1711958417.Box-Design-Ideas.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702555957.Sophia-Grant-2.webp"
                    alt="Sophia Grant "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/sophia-grant/index.html"
                      className="blog_a_home"
                    >
                      by Sophia Grant
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/sophia-grant/index.html"
                      className="blog_a_home"
                    >
                      April 01, 2024 ∙ 16 d, 15 h, 41 min, 53 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/sophia-grant/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/box-design-ideas/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    15 Box Design Ideas To Amp Up Your Packaging
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/box-design-ideas/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
          <div className="item">
            <div className="blog_item_inner">
              {/*<span class="ribbon new">New</span>*/}
              <figure>
                <a href="blog/types-of-printing-methods-for-packaging/index.html">
                  <img
                    className="owl-lazy"
                    src="uploads_f/1709124590.Types-of-Printing-Methods-for-Packaging.webp"
                    data-src="https://www.thecustomboxes.com/uploads_f/1709124590.Types-of-Printing-Methods-for-Packaging.webp"
                    alt="blog picture"
                  />
                </a>
              </figure>
              <div className="d-flex set_blog_name_area">
                <div className="user_blog_image">
                  <img
                    src="uploads_f/1702555515.Marcus-Reynolds-2.webp"
                    alt="Marcus Reynolds "
                  />
                </div>
                <ul className="blog_ul_home">
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      by Marcus Reynolds
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      July 05, 2024 ∙ 15 d, 17 h, 46 min, 35 sec{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="author/marcus-reynolds/index.html"
                      className="blog_a_home"
                    >
                      Read
                    </a>
                  </li>
                </ul>
              </div>
              <div className="" style={{ padding: "10px 20px" }}>
                <a href="blog/types-of-printing-methods-for-packaging/index.html">
                  <h3 className="mb-2 blog_heading_home">
                    Different Types of Printing Methods for Packaging: A
                    Comprehensive Exploration
                  </h3>
                </a>
                <p className="blog_para_home">
                  Experience both style and convenience with the mailer box, a
                  shipping solution that combines sleek design and durability.
                  Send your items with elegance and confidence, knowing they
                  will arrive safely and in style...
                </p>
                <div className="popular_product_button text-start mt-4">
                  <a href="blog/types-of-printing-methods-for-packaging/index.html">
                    <button className="btn popular_customize_btn read_more_blog">
                      Explore
                      <img
                        className="show_button_icon"
                        src={button_icon_right}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                      <img
                        className="show_hover_icon_button"
                        src={button_icon_top}
                        alt="button icon"
                        style={{ width: 15 }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* /grid_item */}
          </div>
          {/* /item */}
        </div>
        <div className="pt-5 text-center gallery_btn_">
          <a href="blog/index.html">
            <button className="btn button_18_500_black">Visit the Blog</button>
          </a>
        </div>
        {/* /products_carousel */}
      </div>
    </section>
    {/*Home Blog Section End*/}
  </main>
  {/* /main */}
  {/*Think Outside Box Section Start*/}
  {/*Think Outside Box Section End*/}
  {/*/footer*/}
</div>

 </>
 
  )
}

export default home