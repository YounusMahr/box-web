import React from 'react'
import { Link } from 'react-router-dom'

function packaging() {
  return (
    <div>
        <div id="page">
  {/* /header */}
  <main>
    {/* Mobile Menu start */}
    <main>
      <section
        className="banner_768_image"
        id="yourDivId"
        style={{ backgroundColor: "#e47911" }}
      >
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-7 width_90_per">
              <div className="breadcrumbs">
                <ul>
                  <li className="">
                    <a className="breadcrumb_white_20_400" href="../index.html">
                      Home
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="breadcrumb_white_20_400"
                      href="../industries/index.html"
                    >
                      Industries
                    </a>
                  </li>
                  <li className="">
                    <span className="breadcrumb_white_20_400">
                      Cardboard Packaging
                    </span>
                  </li>
                </ul>
              </div>
              <div className="">
                <h1 className="heading_79_700_black mb-0">
                  Stunning, Sober
                  <span className="heading_79_500_white_italic">
                    Cardboard Packaging
                  </span>
                </h1>
                <p className="paragraph_18_400_white">
                  Customized cardboard packaging symbolizes perfection and
                  professionalism. Transform your product's outlook to outshine
                  all competitors.
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
            <div className="col-md-5 width_0_per">
              <div className="" id="imageContainer">
                {/*<img id="yourImageId" src="https://www.thecustomboxes.com/uploads_f/1705322966.Cardboard-Packaging.png" style="width: 100%;" alt="Cardboard Packaging"/>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /top_banner */}
      {/*Trending and Popular Product Start*/}
      <div className="home_trending_popular">
        <div className="container margin_60_35">
          <div className="product_title">
            <div className="row">
              <div className="col-md-9">
                <p className="mini_24_700_red_heading mb-0">Industries</p>
                <h2 className="heading_48_700_black">
                  <span className="heading_48_500_blue_italic">
                    Cardboard Packaging
                  </span>
                </h2>
                <p className="paragraph_18_400_black mb-lg-5">
                  Uplift your product presentation by tailoring cardboard
                  packaging into a bespoke ensemble. Products gain allure when
                  adorned with high-resolution images and strategically placed
                  brand elements. Encase your merchandise in creatively designed
                  cardboard boxes featuring eye-catching prints, legible fonts,
                  and purposeful themes. Embrace peak seasons with durable boxes
                  that appeal to a broad audience. Our customization options
                  range from sparkling glossy aesthetics to understated matte
                  finishes, offering everything in a single destination. Bulk
                  orders translate into cost-effectiveness. Obtain cardboard
                  boxes embellished with logos, handles, lids, and other
                  exciting features with just one click!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="loop_class">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="category_bg_area mb-5">
                  <Link to="packaging/product">
                    <div className="category_imag_width">
                      <img
                        src="../uploads_f/1715162893.Custom-Cardboard-boxes.webp"
                        alt="Custom Cardboard boxes"
                        width={400}
                        height={400}
                      />
                    </div>
                    </Link>
                  <h3>
                  <Link to="packaging/product"  className="heading_25_700_black">
                      Cardboard Boxes
                    </Link>
                  </h3>
                  <div className="text-start mt-4">
                    <a href="../cardboard-boxes/index.html">
                      <button className="btn category_customize_btn customize_18_500_button">
                        Customize
                        <img
                          className="show_button_icon"
                          src="../frontend_f/front/button_icon_right.svg"
                          alt="button right"
                          width={15}
                          height={15}
                        />
                        <img
                          className="show_hover_icon_button"
                          src="../frontend_f/front/button_icon_top.svg"
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
      {/*category product contact blue section start*/}
      <section style={{ backgroundColor: "#FFF" }}>
        <div className="container">
          <div className="call_banner_inside">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-7 col-sm-6 col-12">
                <div className="" style={{ position: "relative" }}>
                  <span className="heading_48_700_black">
                    Looking for other custom
                    <span className="heading_48_500_white_italic">
                      boxes and packaging?
                    </span>
                  </span>
                  <p className="paragraph_18_400_white">
                    Chat live with our packaging experts now for a free
                    consultation and instant price quote.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-12">
                <div
                  className="text-end on_mobile_center_btn padd_o"
                  style={{ padding: "0px 50px" }}
                >
                  <a href="../contact-us/index.html">
                    <button className="btn button_18_500_white">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*category product contact blue section end*/}
      {/*Category Product Materials Tabs Start*/}
      <section className="tabs_materials_pad_0" style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="">
            <ul
              className="nav nav-tabs category_product_tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="one-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#one-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="one-tab-pane"
                  aria-selected="true"
                >
                  Material / Paper Stock We Use
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="three-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#three-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="three-tab-pane"
                  aria-selected="false"
                >
                  Printing Methods
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="four-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#four-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="four-tab-pane"
                  aria-selected="true"
                >
                  Inks
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="five-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#five-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="five-tab-pane"
                  aria-selected="false"
                >
                  Finishing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="six-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#six-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="six-tab-pane"
                  aria-selected="false"
                >
                  Add-Ons
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seven-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seven-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="seven-tab-pane"
                  aria-selected="false"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 category_product_open_tab">
          <div className="container">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="one-tab-pane"
                role="tabpanel"
                aria-labelledby="one-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    Material / Paper Stock
                    <span className="heading_79_500_blue_italic">We Use</span>
                  </p>
                  <p className="paragraph_18_400_black">
                    When packaging is meant for protecting and prompting
                    products, the material/paper stock ensures integrity and
                    safety. Well-known cardboard packaging material is
                    synonymous with durability and resilience. Kraft is delicate
                    to take care of your fragile items. Corrugated boxes are
                    tough to bear the tear and shear of external stresses. We
                    have arranged the world’s finesse stock of papers full of
                    qualities; sustainability, affordability, and elegance.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_1.webp"
                          alt="Duplex Chipboard"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Duplex Chipboard
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_2.webp"
                          alt="Grey chipboard cardboard"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Grey Chipboard Cardboard
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_3.webp"
                          alt="black kraft"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Black-Kraft
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_4.webp"
                          alt="holographic"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Holographic
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_5.webp"
                          alt="metallic paper"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Metallic Paper
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_6.webp"
                          alt="natural brown kraft"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Natural Brown Kraft
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_7.webp"
                          alt="SBS C2S"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">SBS C2S</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_8.webp"
                          alt="textured"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Textured
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_9.webp"
                          alt="white kraft"
                          width={315}
                          height={315}
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          White Kraft
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="../paper-stock/index.html">
                    <button className="btn red_border_button">Explore</button>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="three-tab-pane"
                role="tabpanel"
                aria-labelledby="three-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    type of Printing Methods
                    <span className="heading_79_500_blue_italic">We Use</span>
                  </p>
                  <p className="paragraph_18_400_black">
                    We all have stepped into the world of digitalization. The
                    packaging and printing have also been digitalized. Digital
                    printing on blank eco-friendly surfaces of boxes delivers a
                    sense of creativity. The offset printing method, though
                    traditional yet classic, ensures consistent image
                    resolution. The screen printing allows textured prints
                    inside and out of the boxes. We offer all the latest types
                    of printing methods to imprint all your thoughts on custom
                    boxes.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_10.webp"
                          alt="digital print"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Digital Print
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_11.webp"
                          alt="offset print"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Offset Print
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_12.webp"
                          alt="scodix digital enhancement"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Scodix Digital Enhancement
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_13.webp"
                          alt="uv print"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          UV Print
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="../printing-methods/index.html">
                    <button className="btn red_border_button">Explore</button>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="four-tab-pane"
                role="tabpanel"
                aria-labelledby="four-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    type of inks
                    <span className="heading_79_500_blue_italic">We Use</span>
                  </p>
                  <p className="paragraph_18_400_black">
                    Joyful prints and consistent brand images all are blessings
                    of the vibrancy of printing inks. We have a wide variety of
                    in-stock inks including funky Pantone, shiny Pantone
                    Metallic, smooth oil-based inks, and sparkling fluorescent
                    color ink. For bold and bright options, explore soy
                    vegetable inks and water-based inks. Ignite your creativity-
                    brush your ideas Now!
                  </p>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_14.webp"
                          alt="fluorescent color inks"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Fluorescent Color Inks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_15.webp"
                          alt="oil based inks"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Oil Based Inks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_16.webp"
                          alt="pantone"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">Pantone</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_17.webp"
                          alt="pantone metallic"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Pantone Metallic
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_18.webp"
                          alt="soy vegetable based inks"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Soy Vegetable Based Inks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_19.webp"
                          alt="water based inks"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Water Based Inks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="../inks/index.html">
                    <button className="btn red_border_button">Explore</button>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="five-tab-pane"
                role="tabpanel"
                aria-labelledby="five-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    Our
                    <span className="heading_79_500_blue_italic">
                      finishing
                    </span>
                  </p>
                  <p className="paragraph_18_400_black">
                    Finishing is considered to have a crucial impact on overall
                    aesthetics. At The Custom Boxes, we view it as more than
                    just an eye-appealing factor; it's a statement. Customized
                    packaging simply radiates brilliance. Based on your
                    preferences, we can add a touch of glamour with glitter on a
                    metallic finish. We infuse a sense of exclusivity through
                    silver and gold foiling or coating on custom packaging.
                    Explore the myriad of options available – discover more now.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_20.webp"
                          alt="anti scratch lamination"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Anti Scratch Lamination
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_21.webp"
                          alt="aqueous coating"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Aqueous Coating
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_22.webp"
                          alt="lamination"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Lamination
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_23.webp"
                          alt="soft touch coating"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Soft Touch Coating
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_24.webp"
                          alt="soft touch silk lamination cards"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Soft Touch/Silk Lamination Cards
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_25.webp"
                          alt="spot gloss uv"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Spot Gloss UV
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="../finishing/index.html">
                    <button className="btn red_border_button">Explore</button>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="six-tab-pane"
                role="tabpanel"
                aria-labelledby="six-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    Add-
                    <span className="heading_79_500_blue_italic">ons</span>
                  </p>
                  <p className="paragraph_18_400_black">
                    We assist you in elevating beyond ordinary packaging.
                    Add-ons are artistic touches that captivate customers'
                    attention. These extras work wonders in enhancing the
                    perceived value of boxes. By adding glamour to your custom
                    packages, they also enhance functionality. Embossing,
                    debossing, foiling, screening, PVC windows, and inserts not
                    only ensure the safety of products but also ignite
                    excitement in every unboxing adventure.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_26.webp"
                          alt="cold foil printing"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Cold Foil Printing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_27.webp"
                          alt="debossing"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Debossing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_28.webp"
                          alt="embossing"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Embossing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_29.webp"
                          alt="full embossing"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Full Embossing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_30.webp"
                          alt="hot foil stamping"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Hot Foil Stamping
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_31.webp"
                          alt="proper embossing"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Proper Embossing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_32.webp"
                          alt="pvc patching cards"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          PVC Patching Cards
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <div className="category_product_image_section_bg">
                        <img
                          src="../frontend_f/front/material_image_33.webp"
                          alt="ribbon handles"
                        />
                        <p className="mb-0 m-0 heading_25_700_black">
                          Ribbon Handles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="../add-ons/index.html">
                    <button className="btn red_border_button">Explore</button>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="seven-tab-pane"
                role="tabpanel"
                aria-labelledby="seven-tab"
                tabIndex={0}
              >
                <div>
                  <p className="heading_79_700_black">
                    our valuable
                    <span className="heading_79_500_blue_italic">
                      resources links
                    </span>
                  </p>
                </div>
                <div className="mt-5">
                  <table className="table table-bordered category_product_tab_table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="bg_blue_table text-center first_links"
                        >
                          NO
                        </th>
                        <th scope="col" className="bg_blue_table second_links">
                          Links
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="blue_no">
                          1.
                        </th>
                        <td className="black_td">
                          Choose From Multiple Artworks For Your Same-Sized
                          Packaging
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          2.
                        </th>
                        <td className="black_td">
                          Custom Cardboard Boxes: The Best Way To Protect Your
                          Products During Shipping?
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          3.
                        </th>
                        <td className="black_td">
                          What Are The Standard Sizes And Dimensions For Mailer
                          Boxes?
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          4.
                        </th>
                        <td className="black_td">
                          10 Tips For Designing Retail Packaging That Sells
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          5.
                        </th>
                        <td className="black_td">
                          Why Is Customer Experience Important In 2023?
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          6.
                        </th>
                        <td className="black_td">
                          Why Custom Boxes Are So Important For Product
                          Packaging?
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          7.
                        </th>
                        <td className="black_td">
                          A List Of Packaging Industry Tools, Equipment, And
                          Major Machines
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          8.
                        </th>
                        <td className="black_td">
                          Top 5 Different Benefits Of Custom Boxes For Your New
                          Brand In 2023
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          9.
                        </th>
                        <td className="black_td">Custom Printed Boxes</td>
                      </tr>
                      <tr>
                        <th scope="row" className="blue_no">
                          10.
                        </th>
                        <td className="black_td">How To Make Custom Boxes?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Category Product Materials Tabs End*/}
      {/*Home Paragraph Section Start*/}
      <section className="home_text_section home_content">
        <div className="container">
          <div className="home_text_inside">
            <div id="scroll_id">
              <div className="scroll_text_setting_content_scroll">
                <h2>
                  <strong>Custom Cardboard Packaging</strong>
                </h2>
                <p>
                  Whether you are in search of a sturdy packaging solution to
                  manage your store, warehouses, or retail setups, cardboard
                  packaging is the best fit for all. Other than that, if your
                  search history comprises queries like what is the best
                  packaging for storing all hot-selling products until they get
                  out of stock, we are here to help you figure out something
                  that never lets you down.
                </p>
                <p>
                  Our cutting-edge or state-of-the-art technology makes even the
                  finest line of difference between do’s and don’ts of packaging
                  visible. It offers a wide range of repurposing options like
                  storing the clutter with leftover cardboard box material.
                  Branding is an integral part of defining a business's
                  popularity and identity by focusing on some core elements.
                  Firstly, it sets you apart from similar brands; secondly, it
                  paves the path to unparalleled success. Thirdly, helps
                  businesses shine by maintaining a consistent brand reputation.
                  It’s the customization possibilities that let your brand
                  ignite, flourish, and trump.
                </p>
                <p>
                  To explore what is special we have to turn an ordinary
                  cardboard box into an extraordinary embellished branded box.
                </p>
                <h2>
                  <strong>
                    Why Cardboard Box Packaging Is More Than Just A Box?
                  </strong>
                </h2>
                <p>
                  Unfortunately, cardboard packaging is still considered a
                  simple and disposable container; debunking the myth, they are
                  more than just a disposable box. Cardboard is a versatile
                  and&nbsp;
                  <a href="../eco-friendly-boxes/index.html">
                    eco-friendly packaging materials
                  </a>
                  &nbsp;that can be used to fulfill a variety of packaging
                  needs. From shipping products to displaying them on store
                  shelves, cardboard packaging offers numerous advantages over
                  other packaging materials. It delivers a sense of cleanliness
                  and hygiene, especially for&nbsp;
                  <a href="../food-and-beverage/index.html">food boxes</a>
                  &nbsp;delivery&nbsp;based on their origin from plant-based
                  material like wood.
                </p>
                <h3>
                  <strong>Exemplary Protection for Your Products</strong>
                </h3>
                <p>
                  One of the most important benefits of cardboard product
                  packaging is its ability to protect products during shipping
                  and handling. Cardboard boxes are tough, sustainable, and
                  durable made to withstand the wear and tear of transportation,
                  preventing damage to items inside. Additionally, cardboard can
                  be customized with inserts and dividers to keep fragile
                  products securely in place to reduce the risk of breakage.
                </p>
                <h3>
                  <strong>Sustainable Packaging Cardboard Solutions</strong>
                </h3>
                <p>
                  Eco-friendliness is not a concern for only environmentalists;
                  rather, it’s a way to conserve the serenity of natural
                  sources. In collaboration with&nbsp;<em>The Custom Boxes</em>
                  &nbsp;– a renowned US cardboard packaging manufacturer and
                  supplier, now you can find the industry’s best packaging
                  material to make your business journey guilt-free. We claim to
                  provide our clients with only 100% recyclable and
                  biodegradable raw materials- hold your head high with pride in
                  the market. Additionally, cardboard is lightweight and
                  requires less energy to produce and transport, reducing the
                  carbon footprint of your business.
                </p>
                <h3>
                  <strong>Cost-Effective Packaging With Customization</strong>
                </h3>
                <p>
                  Customized Cardboard packaging is not only eco-friendly but
                  also cost-effective. Compared to other packaging materials,
                  cardboard is relatively inexpensive to produce, which
                  translates into savings for businesses. Additionally,
                  cardboard is lightweight and compact, which reduces shipping
                  costs and allows for more efficient use of storage space.
                </p>
                <p>
                  The affordability of our cardboard packaging can also be
                  translated in another way by declaring it the cheapest
                  marketing tool ever. It knocks door-to-door and makes a
                  special place for years in customers’ storing spaces, as a
                  tint of resemblance to your brand. It can also be designed to
                  be visually appealing, which can attract customers and
                  increase sales.
                </p>
                <p>
                  All in all, custom cardboard packaging offers many benefits
                  that make it a smart choice for businesses. From protecting
                  products to reducing environmental impact, cardboard is a
                  versatile and cost-effective material that can create your
                  brand’s positive reputation. So why won’t you just fill in the
                  quote and wave off all your worries in a few minutes?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Home Paragraph Section End*/}
      {/*Box By Style Area Start*/}
      <section className="box_style">
        <div className="box_style_bottom_left">
          <img
            src="../frontend_f/front/box_style_bottom_left.png"
            alt="box style left"
          />
        </div>
        <div className="box_style_top_right">
          <img
            src="../frontend_f/front/box_style_top_right.png"
            alt="box style right"
          />
        </div>
        <div className="box_style_bottom_right">
          <img
            src="../frontend_f/front/box_style_bottom_right.png"
            alt="box style bottom"
          />
        </div>
        <div className="container">
          <div className="text-center home_box_style_area">
            <span className="heading_48_700_black">
              Build Your Brand with Customized Packing
              <span className="heading_48_500_white_italic">
                Styles That Grab the Spotlight{" "}
              </span>
            </span>
            <p className="mb-lg-5 mt-lg-3 paragraph_18_400_white">
              We fully comprehend that packaging boxes not only present but also
              promote products effectively. Crafting a unique brand voice
              requires a fresh and innovative appearance. 'Box by Style' stands
              out as a distinctive feature on our official website, guiding you
              in selecting the perfect style for your delicate, high-selling
              items. Assemble various pieces of cardboard or other packaging
              materials to experience the final result. We infuse delight into
              every unboxing through exceptional interlocking. Explore creative
              concepts and captivate your customers with playful shapes without
              compromising functionality.
            </p>
          </div>
          <div className="owl-carousel owl-theme products_carousel">
            <div className="item">
              <div className="grid_item product_all_box">
                {/*<span class="ribbon new">New</span>*/}
                <figure className="box_figure_img_bg">
                  <a href="../fence-partitions/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1710136008.fence-partitions.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1710136008.fence-partitions.webp"
                      alt="fence partitions"
                    />
                  </a>
                </figure>
                <a href="../fence-partitions/index.html">
                  <h3 className="heading_25_700_black text-start">
                    Fence Partitions
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../fence-partitions/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../five-panel-hanger/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1710500231.five-panel-hanger-printed-boxes.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1710500231.five-panel-hanger-printed-boxes.webp"
                      alt="five panel hanger printed boxes"
                    />
                  </a>
                </figure>
                <a href="../five-panel-hanger/index.html">
                  <h3 className="heading_25_700_black text-start">
                    Five Panel Hanger
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../five-panel-hanger/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../french-fry-boxes/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1709547966.custom-french-fry-boxes.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1709547966.custom-french-fry-boxes.webp"
                      alt="custom french fry boxes"
                    />
                  </a>
                </figure>
                <a href="../french-fry-boxes/index.html">
                  <h3 className="heading_25_700_black text-start">
                    French Fry Boxes
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../french-fry-boxes/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../punch-partition/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1710136420.punch-partition-action.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1710136420.punch-partition-action.webp"
                      alt="punch partition action"
                    />
                  </a>
                </figure>
                <a href="../punch-partition/index.html">
                  <h3 className="heading_25_700_black text-start">
                    Punch Partition
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../punch-partition/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../straight-tuck-end/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1710316049.custom-straight-tuck-end-box.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1710316049.custom-straight-tuck-end-box.webp"
                      alt="custom straight tuck end box"
                    />
                  </a>
                </figure>
                <a href="../straight-tuck-end/index.html">
                  <h3 className="heading_25_700_black text-start">
                    Straight Tuck End
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../straight-tuck-end/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../tray-and-sleeve-box/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1711356638.small-tray-and-sleeve-box.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1711356638.small-tray-and-sleeve-box.webp"
                      alt="small tray and sleeve box"
                    />
                  </a>
                </figure>
                <a href="../tray-and-sleeve-box/index.html">
                  <h3 className="heading_25_700_black text-start">
                    Tray and Sleeve Box
                  </h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../tray-and-sleeve-box/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
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
                  <a href="../two-piece/index.html">
                    <img
                      className="owl-lazy"
                      src="../uploads_f/1711356677.two-piece-sets.webp"
                      data-src="https://www.thecustomboxes.com/uploads_f/1711356677.two-piece-sets.webp"
                      alt="two piece sets"
                    />
                  </a>
                </figure>
                <a href="../two-piece/index.html">
                  <h3 className="heading_25_700_black text-start">Two Piece</h3>
                </a>
                <div className="popular_product_button text-start mt-4">
                  <a href="../two-piece/index.html">
                    <button className="btn popular_customize_btn customize_18_500_button">
                      Explore
                      <img
                        className="show_button_icon"
                        src="../frontend_f/front/button_icon_right.svg"
                        width={15}
                        height={15}
                        alt="button right"
                      />
                      <img
                        className="show_hover_icon_button"
                        src="../frontend_f/front/button_icon_top.svg"
                        width={15}
                        height={15}
                        alt="button top"
                      />
                    </button>
                  </a>
                </div>
              </div>
              {/* /grid_item */}
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="../boxstyles/index.html">
              <button className="btn button_18_500_white">
                View All Products
              </button>
            </a>
          </div>
          {/* /products_carousel */}
        </div>
      </section>
      {/*Box By Style Area End*/}
    </main>
    {/*Think Outside Box Section Start*/}
    {/*Think Outside Box Section End*/}
    {/*/footer*/}
  </main>
</div>

    </div>
  )
}

export default packaging