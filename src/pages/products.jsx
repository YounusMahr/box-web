import React from 'react'
import { useEffect,useRef,useState } from 'react';


function products() {
    const headingRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          if (window.innerWidth <= 768) {
            headingRef.current.style.display = 'block';
          } else {
            headingRef.current.style.display = 'block';
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
        <div id="page">
  {/* /header */}
  <main>
    {/* Mobile Menu start */}
    {/* Mobile Menu End */}
    
    <link href="../assets/css/only_product.css" rel="stylesheet" />
    <section className="bg_fc" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="">
          <div className="breadcrumbs">
            <ul>
              <li className="set_after">
                <a
                  className="color_0074 breadcrumb_white_20_400"
                  href="../index.html"
                >
                  Home
                </a>
              </li>
              <li className="set_after">
                <a
                  className="color_0074 breadcrumb_white_20_400"
                  href="../industries/index.html"
                >
                  Industries
                </a>
              </li>
              <li className="set_after">
                <a
                  className="color_0074 breadcrumb_white_20_400"
                  href="../cardboard-packaging/index.html"
                >
                  Cardboard Packaging
                </a>
              </li>
              <li className="">
                <span className="breadcrumb_white_20_400 color_0074">
                  Cardboard Boxes
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="heading_79_700_black">
              Cardboard{" "}
              <span className="heading_79_500_blue_italic"> Boxes </span>
            </h1>
            <div className="product_short_des">
              <p>
                When doing something extra for your product and clients
                simultaneously- look no further than a custom cardboard box!
                Amidst all product packaging options,&nbsp;
                <strong>custom cardboard packaging</strong>&nbsp;offers the most
                significant opportunities to set the stage before your product
                launch. Even take your already launched product to a new hike
                and think about a range of versatile custom packaging options.
                As a sturdy, durable, and reliable packaging solution, it can
                quickly streamline all your packaging needs. Above all, the
                customization turns a simple brown or even white cardboard
                (large, small, or mini) into a box to conveniently grab the
                customers by telling them your authentic brand story. With&nbsp;
                <em>The Custom Boxes</em>- order cardboard boxes&nbsp;for all
                your product lines. Make your brand the best shopping partner
                for everyone with all new varieties of custom
                <strong>&nbsp;cardboard boxes for packaging</strong>.&nbsp;
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div id="sync1" className="owl-carousel owl-theme">
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/Cardboard-boxes.webp"
                    alt="Cardboard-boxes.webp"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/cardboard-boxes-for-moving.webp"
                    alt="cardboard-boxes-for-moving.webp"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/Custom-Cardboard-boxes.webp"
                    alt="Custom-Cardboard-boxes.webp"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/custom-printed-cardboard-boxes-usa.webp"
                    alt="custom-printed-cardboard-boxes-usa.webp"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
            <div id="sync2" className="owl-carousel owl-theme">
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/Cardboard-boxes.webp"
                    alt="Cardboard-boxes.webp"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/cardboard-boxes-for-moving.webp"
                    alt="cardboard-boxes-for-moving.webp"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/Custom-Cardboard-boxes.webp"
                    alt="Custom-Cardboard-boxes.webp"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img
                    src="../uploads_f/custom-printed-cardboard-boxes-usa.webp"
                    alt="custom-printed-cardboard-boxes-usa.webp"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
            </div>
            <div className="product_specification_on_product mt-4">
              <div className="d-flex on_set_mobile">
                <ul>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Low Minimums of 100 Boxes
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Free Die and Plates
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Competitive Pricing
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Customized Sizes &amp; Styles
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Fast Turnaround Times
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    High Quality Offset Printing
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Free Design Support
                  </li>
                  <li>
                    <img
                      src="../frontend_f/front/tick_icon.svg"
                      alt="tick icon"
                      width={32}
                      height={31}
                    />
                    Free Shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product_gallery_4_form scrool_product_form">
              <div className="only_border_bottom">
                <div className="row">
                  <div className="col-md-6">
                    <div className="">
                      <p className="request_quote_heading_form">
                        Request a Quote
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end on_mobile_left">
                      <p className="share_link">
                        <img
                          className="share_link_image"
                          src="../frontend_f/front/share_icon.svg"
                          alt="share icon"
                          width={28}
                          height={28}
                        />
                        share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_form_tab mt-5">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Get a quote
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex={0}
                  >
                    <div className="">
                      <p className="mt-4 paragraph_18_400_black">
                        You should hear from our sales team soon. However, if
                        it’s the weekend, we’re propably barbequing.
                      </p>
                      <form
                        className="product_form_single_tab "
                        method="post"
                        action="https://www.thecustomboxes.com/product_form/"
                        onsubmit="return submitUserForm1();"
                        encType="multipart/form-data"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                        />{" "}
                        <input
                          type="hidden"
                          name="subject"
                          defaultValue="product_form"
                        />
                        <div className="row">
                          <div className="form-group col-md-6 col-sm-6 col-12">
                            <label className="input_24_600_label_blue">
                              Enter your Full Name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              id="name"
                              name="name"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-12">
                            <label className="input_24_600_label_blue">
                              Enter your Email*
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
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6 col-sm-6 col-12">
                            <label className="input_24_600_label_blue">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone Number"
                              id="phone"
                              name="phone"
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-12">
                            <label
                              htmlFor="Box"
                              className="input_24_600_label_blue"
                            >
                              Your Box Style
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="box"
                              aria-label="Box"
                              defaultValue="Cardboard Boxes"
                              readOnly=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-3 col-sm-6 col-12">
                            <label className="input_24_600_label_blue">
                              Length*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Length"
                              id="length"
                              name="length"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-3 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Width*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Width"
                              id="width"
                              name="width"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-3 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Height*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Height"
                              id="height"
                              name="height"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-3 col-sm-6 col-12">
                            <label
                              className="input_24_600_label_blue"
                              htmlFor="inputState"
                            >
                              Unit
                            </label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="unit"
                            >
                              <option value="Inches">Inches</option>
                              <option value="CM">CM</option>
                              <option value="MM">MM</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-4 col-sm-6 col-12">
                            <label className="input_24_600_label_blue">
                              Quantity 1*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Quantity 1"
                              id="qty1"
                              name="qty1"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-4 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Quantity 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Quantity 2"
                              id="qty2"
                              name="qty2"
                            />
                          </div>
                          <div className="form-group col-md-4 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Quantity 3
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Quantity 3"
                              id="qty3"
                              name="qty3"
                            />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="form-group col-md-12 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Addons:
                            </label>
                          </div>
                          <select
                            id="inputState"
                            className="form-control"
                            name="addons"
                          >
                            <option>Select Addons</option>
                            <option value="Debossing">Debossing</option>
                            <option value="Embossing">Embossing</option>
                            <option value="Foiling">Foiling</option>
                            <option value="Gloss">Gloss</option>
                            <option value="Matte">Matte</option>
                            <option value="Soft Touch">Soft Touch</option>
                            <option value="Spot-UV">Spot-UV</option>
                            <option value="UV Finish">UV Finish</option>
                          </select>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label
                              className="input_24_600_label_blue"
                              htmlFor="exampleFormControlTextarea1"
                            >
                              Add project details{" "}
                              <span className="input_24_600_label_blue">*</span>
                            </label>
                            <p className="paragraph_18_400_black">
                              (the more information you provide, the faster
                              we’ll be able to get you what you need)
                            </p>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              name="message"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <input
                              type="file"
                              id="file"
                              className="p-0"
                              name="file"
                            />
                            <label htmlFor="file">
                              <img
                                className="mr-10"
                                src="../frontend_f/front/file_input_icon.svg"
                                alt="file icon"
                                width={40}
                                height={30}
                              />
                              Choose File...
                            </label>
                            <br />
                            <small className="form-text text-muted paragraph_18_400_gray">
                              <span className="input_18_500_label_blue">
                                Note:
                              </span>
                              Allowed file extensions to upload AI , PDF, EPS,
                              TIFF
                            </small>
                          </div>
                        </div>
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
                        <button
                          type="submit"
                          className="btn btn-primary btn_req"
                        >
                          Request Quote
                        </button>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabIndex={0}
                  >
                    <div className="">
                      <p className="mt-4 paragraph_18_400_black">
                        You should hear from our sales team soon. However, if
                        it’s the weekend, we’re propably barbequing.
                      </p>
                      <form
                        className="product_form_single_tab"
                        method="post"
                        action="https://www.thecustomboxes.com/contact_form_product/"
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
                          defaultValue="contact_form_product"
                        />
                        <div className="row">
                          <div className="form-group col-md-12 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Enter your Full Name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Name"
                              id="name"
                              name="name"
                            />
                          </div>
                          <div className="form-group col-md-12 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Enter your Email*
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Your Email Address"
                              id="search_input_home_contact"
                              required=""
                              name="email"
                            />
                          </div>
                          <div className="form-group col-md-12 col-sm-12 col-12">
                            <label className="input_24_600_label_blue">
                              Phone Number*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Mobile Number"
                              id="phone"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label
                              className="input_24_600_label_blue"
                              htmlFor="exampleFormControlTextarea1"
                            >
                              Add project details{" "}
                              <span className="input_24_600_label_blue">*</span>
                            </label>
                            <p className="paragraph_18_400_black">
                              (the more information you provide, the faster
                              we’ll be able to get you what you need)
                            </p>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              name="message"
                              rows={7}
                              defaultValue={""}
                            />
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
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 btn_req"
                        >
                          Request Quote
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-fc scrool_product_form">
      <div className="container">
        <div className="">
          <ul
            className="nav nav-tabs category_product_tab"
            id="myTab"
            role="tablist"
          >
            {/*product Specification start*/}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="eight-tab"
                data-bs-toggle="tab"
                data-bs-target="#eight-tab-pane"
                type="button"
                role="tab"
                aria-controls="eight-tab-pane"
                aria-selected="false"
              >
                Specifications
              </button>
            </li>
            {/*product specification end*/}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
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
              className="tab-pane fade"
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
                  When packaging is meant for protecting and prompting products,
                  the material/paper stock ensures integrity and safety.
                  Well-known cardboard packaging material is synonymous with
                  durability and resilience. Kraft is delicate to take care of
                  your fragile items. Corrugated boxes are tough to bear the
                  tear and shear of external stresses. We have arranged the
                  world’s finesse stock of papers full of qualities;
                  sustainability, affordability, and elegance.
                </p>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_1.webp"
                        alt="duplex chipboard"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Duplex Chipboard
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_2.webp"
                        alt="grey chipboard cardboard"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Grey Chipboard Cardboard
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_3.webp"
                        alt="black kraft"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Black-Kraft
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_4.webp"
                        alt="holographic"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Holographic
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_5.webp"
                        alt="metallic paper"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Metallic Paper
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_6.webp"
                        alt="natural brown kraft"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Natural Brown Kraft
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_7.webp"
                        alt="SBS C2S"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">SBS C2S</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_8.webp"
                        alt="textured"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">Textured</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_9.webp"
                        alt="white kraft"
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
                  <button
                    aria-label="Learn more about Paper Stock"
                    className="btn red_border_button"
                  >
                    Explore
                  </button>
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
                  traditional yet classic, ensures consistent image resolution.
                  The screen printing allows textured prints inside and out of
                  the boxes. We offer all the latest types of printing methods
                  to imprint all your thoughts on custom boxes.
                </p>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_13.webp"
                        alt="uv print"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">UV Print</p>
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
                  Joyful prints and consistent brand images all are blessings of
                  the vibrancy of printing inks. We have a wide variety of
                  in-stock inks including funky Pantone, shiny Pantone Metallic,
                  smooth oil-based inks, and sparkling fluorescent color ink.
                  For bold and bright options, explore soy vegetable inks and
                  water-based inks. Ignite your creativity- brush your ideas
                  Now!
                </p>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_16.webp"
                        alt="pantone"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">Pantone</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <span className="heading_79_500_blue_italic">finishing</span>
                </p>
                <p className="paragraph_18_400_black">
                  Finishing is considered to have a crucial impact on overall
                  aesthetics. At The Custom Boxes, we view it as more than just
                  an eye-appealing factor; it's a statement. Customized
                  packaging simply radiates brilliance. Based on your
                  preferences, we can add a touch of glamour with glitter on a
                  metallic finish. We infuse a sense of exclusivity through
                  silver and gold foiling or coating on custom packaging.
                  Explore the myriad of options available – discover more now.
                </p>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_24.webp"
                        alt="soft toucg silk lamination cards"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">
                        Soft Touch/Silk Lamination Cards
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  We assist you in elevating beyond ordinary packaging. Add-ons
                  are artistic touches that captivate customers' attention.
                  These extras work wonders in enhancing the perceived value of
                  boxes. By adding glamour to your custom packages, they also
                  enhance functionality. Embossing, debossing, foiling,
                  screening, PVC windows, and inserts not only ensure the safety
                  of products but also ignite excitement in every unboxing
                  adventure.
                </p>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_27.webp"
                        alt="debossing"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">Debossing</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="category_product_image_section_bg">
                      <img
                        src="../frontend_f/front/material_image_28.webp"
                        alt="embossing"
                      />
                      <p className="mb-0 m-0 heading_25_700_black">Embossing</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                        Why Custom Boxes Are So Important For Product Packaging?
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        7.
                      </th>
                      <td className="black_td">
                        A List Of Packaging Industry Tools, Equipment, And Major
                        Machines
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
            <div
              className="tab-pane fade show active"
              id="eight-tab-pane"
              role="tabpanel"
              aria-labelledby="eight-tab"
              tabIndex={0}
            >
              <div>
                <p className="heading_79_700_black">
                  Specifications
                  <span className="heading_79_500_blue_italic" />
                </p>
                <p className="paragraph_18_400_black">
                  We give you complete freedom to tell your brand tale via
                  dazzling packaging prints. Well, we don’t know what you want
                  unless you specify us. It’s a give-and-take process; select
                  box dimensions, choose material, and upload pictures of the
                  most inspiring packaging. In return, we will deliver your
                  dream packages. Fill in the specifications and get a chance to
                  win your business game.
                </p>
              </div>
              <div className="mt-5">
                <table className="table table-bordered category_product_tab_table specification">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="bg_blue_table text-center first_links"
                      >
                        Dimensions
                      </th>
                      <th scope="col" className="bg_blue_table second_links">
                        All Custom Sizes &amp; Shapes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="blue_no">
                        Printing
                      </th>
                      <td className="black_td">CMYK, PMS, No Printing</td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Paper Stock
                      </th>
                      <td className="black_td">
                        10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute
                        Corrugated, Bux Board, Cardstock
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Quantities
                      </th>
                      <td className="black_td">100 - 500,000</td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Coating
                      </th>
                      <td className="black_td">Gloss, Matte, Spot UV</td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Default Process
                      </th>
                      <td className="black_td">
                        Die Cutting, Gluing, Scoring, Perforation
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Options
                      </th>
                      <td className="black_td">
                        Custom Window Cut Out, Gold/Silver Foiling, Embossing,
                        Raised Ink, PVC Sheet.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Proof
                      </th>
                      <td className="black_td">
                        Flat View, 3D Mock-up, Physical Sampling (On request)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="blue_no">
                        Turn Around Time
                      </th>
                      <td className="black_td">4-6 Business Days , Rush</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home_text_section home_content">
      <div className="container">
        <div className="home_text_inside">
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".home_text_inside a {color:#0074bd;text-decoration:underline;}"
            }}
          />
          <div className="mb-4 home_text_area"></div>
          <div id="scroll_id">
            <div className="scroll_text_setting_content_scroll">
              <h2>
                <strong>
                  Custom Cardboard Boxes: A Complete Package&nbsp;
                </strong>
              </h2>
              <p>
                Extra cushioning, partitions, dividers, materials, sizes,
                shapes, layouts, and world-class printing, get everything under
                one roof. Keeping in view most of your queries, such as where to
                get/ buy cardboard boxes? Are all cardboard boxes recyclable?
                How to make cardboard boxes extravagantly exciting and
                appealing? Fully&nbsp;
                <strong>personalized cardboard boxes</strong>&nbsp;with
                eye-catching colors, great prints, and the world’s best material
                are what we call a great solution. Don’t let the little things
                get to you. Just have a look at what services we are offering to
                bring ease to your business journey. From little modification on
                traditional cartons to high-quality&nbsp;
                <strong>cardboard packs</strong>, we have everything for you.
                Read more, and explore more about our services.&nbsp;
              </p>
              <h3>
                <strong>
                  Style Your Products with Our Opulent Cardboard Boxes
                </strong>
              </h3>
              <p>
                Elevate your products’ overall shelf appearance with our sleek
                styles, eye-catching colors, and exquisite cardboard box
                packaging. Each of our opulent packaging options is meant to
                encapsulate the essence of luxury and sophistication. We do our
                best to transcend conventional packaging norms by introducing
                the newest styles while keeping our eyes on all your brands’
                requirements and customers’ expectations. With minimalist design
                options and impeccable structural integrity, our box collection
                encompasses a broad array of choices for all. You may ponder
                what’s special in our wide array of&nbsp;display cardboard
                boxes. It’s simply the&nbsp;
                <strong>corrugated cardboard box&nbsp;</strong>customized to
                have your brand logo and other business elements all meet all
                brand marketing requirements.
              </p>
              <h3>
                <strong>
                  Print Your Stories with Our Advanced Printing Options
                </strong>
              </h3>
              <p>
                Printed cardboard boxes captivate and evoke your clients and
                give you a competitive edge. They provide ample space to publish
                your brand story. Stories full of emotions and sentiments touch
                hearts; however, selecting a perfect theme is a must to make
                your story brand more compelling.&nbsp;
              </p>
              <p>
                Thanks to our state-of-the-art printing and pressing
                technologies for provide a high-end outlook to your brand
                stories. With some high-resolution imagery elements to intricate
                details, our prints transform the world’s way of printing. You
                can quickly print your struggling efforts on the boxes, as&nbsp;
                <strong>small cardboard packaging boxes</strong>&nbsp;with brand
                history connect consumers for longer.
              </p>
              <p>
                With our prints on cardboard&nbsp;
                <a href="../gift-boxes/index.html">gift boxes</a>, your stories
                will be more than just words - they become an immersive journey
                that inspires, connects, and retains your potential customers.
                So place your finger on our latest Cardboard box printing
                options like offset and digital printing to introduce your
                various products in lavish packaging.&nbsp;&nbsp;
              </p>
              <h3>
                <strong>Join Us In Our Go Green Campaigns:</strong>
              </h3>
              <p>
                Decorative{" "}
                <a href="../blog/how-to-make-a-beautiful-and-functional-cardboard-box-with-dividers/index.html">
                  cardboard boxes&nbsp;with dividers
                </a>
                &nbsp;or handles are precisely what your clients love to add to
                their carts. From top lid or handles to bottom trays, with all
                add-on embellishments, you can customize every inch of your
                cardboard packaging to make it environmentally friendly. Keeping
                the earth clean is our mission, so we have introduced all trendy
                packaging options in materials to design that can easily be
                recycled, degenerated, or dissolved on their own. The best part
                is even the&nbsp;<strong>heavy duty cardboard box</strong>
                &nbsp;is gentle to our eco-system. We are simply working to
                prevent the earth from being a trash box- preventing all
                packaging waste from ruining its natural beauty. So, from our
                comprehensive online library of&nbsp;
                <strong>cardboard boxes for sale&nbsp;</strong>pick
                any&nbsp;eco-friendly packaging material&nbsp;and make your way
                towards sustainable business.
              </p>
              <h3>
                <strong>
                  Try Out The Most-Demanded Featured Cardboard Boxes:
                </strong>
              </h3>
              <p>
                We have a perfect solution for all those searching for a box in
                compliance with their business requirements. You may wonder how
                we always come up with the most suitable package for people with
                different interests at different localities. Yes, it’s all
                possible when you request us with a quote- filling all the
                requirements about packaging from quantities to designing.
                Furthermore, we have a 24/7 live chat support system to guide
                you at every step. Just use the right tool to get your packaging
                problems resolved from a trusted voice of the nation- The
                cardboard box suppliers,&nbsp;<em>The Custom Boxes.</em>
              </p>
              <h3>
                <strong>Enjoy a Trouble-free Shipment process:</strong>
              </h3>
              <p>
                Get cardboard packing boxes near you and set yourself apart from
                others. Our shipping process is smooth enough to never put you
                in any inconvenience. As a basic formula, bulk orders are
                protected with additional cushioning&nbsp;to let the people get
                the best out of us. With our exciting free shipping services,
                you don’t need to pay a single penny for custom&nbsp;
                <strong>cardboard boxes wholesale&nbsp;</strong>delivery. As far
                as record time is concerned, don’t worry; we always reach on
                time. This is because we are closer to all residents of Canada
                and the US.&nbsp;
              </p>
              <h3>
                <strong>
                  Strive For An Incomparable User Unboxing Experience:
                </strong>
              </h3>
              <p>
                Whether you are impressed by the round-large, square-small, or
                big cardboard boxes for storage, we have dozens of options. Feel
                free to reject one style and size just to rush towards another
                type of packaging for a better unboxing experience. Deep
                insights by conducting industry-specific research unlock a
                plethora of options for giving an incomparable product
                unwrapping experience. The&nbsp;
                <strong>recycled cardboard boxes&nbsp;</strong>with child locks
                make dealing with medicines and other sensitive products
                easier.&nbsp;
              </p>
              <p>
                <strong>Cardboard packs&nbsp;</strong>make it easier for all to
                transport, ship, and deliver items on recorded time without
                damage. Join hands with us and access unlimited customization
                and personalization options in one shop with excellent services.
                Craft your&nbsp;<strong>blank cardboard boxes&nbsp;</strong>and
                get them customized to have all that to want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home_faq_section">
      <div className="faq_line_icon">
        <img src="../frontend_f/front/faq_line_icon.svg" alt="faq" />
      </div>
      <div className="text-center faq_area">
        <p className="mini_read_heading">Frequently Asked Questions</p>
        <span className="heading_black">
          A single platform to manage your
          <span className="heading_blue">end-to-end packaging workflow</span>
        </span>
        <p className="paragraph_black">
          Below you'll find answers to some common questions around creating a
          custom box. Every order is little different though, so don't hesitate
          to reach out with anything else you might be wondering.
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading1">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse1"
                    aria-expanded="false"
                    aria-controls="flush-collapse1"
                  >
                    <p className="m-0 pr-30">
                      Why Are Your Cardboard Boxes Famous For A Variety Of
                      Products?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    These boxes are highly in demand by our customers due to
                    their usefulness in terms of presentation and security. You
                    can consider this packaging for glass items or delicate
                    luxury products like jewelry, watches, etc. as it is highly
                    durable. For more protection, you can demand double or
                    triple-layered boxes for your products. Moreover, these
                    boxes are flexible in terms of customization; you can have
                    them in various shapes and sizes. There are several
                    value-added features like die-cut windows, embellishments,
                    and matte, or glossy coatings, that elevate the aesthetics
                    of these boxes. So, they are ideal for the attractive
                    display of any brand.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading2">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapse2"
                  >
                    <p className="m-0 pr-30">
                      Can I Make A Large Order In Thousands Of Units For These
                      Boxes?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading2"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, you can make a large order without paying any extra
                    fee. We offer our services to small as well as medium and
                    large businesses. You can place a minimum order of around
                    100 pieces. In this way, small vendors, or sole proprietors
                    can utilize these boxes for their products. On the other
                    hand, the maximum order limit for these boxes is around
                    500,000 pieces so large enterprises can order according to
                    their capacity. You can ask our experts about suitable
                    printing and finishing options according to your order
                    sizes. They will guide you about the pros and cons of each
                    option.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading3">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapse3"
                  >
                    <p className="m-0 pr-30">
                      Which Model Is Good For Custom Cardboard Boxes? CMYK, Or
                      PMS?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Both CMYK and PMS are our color settings for printing these
                    boxes. If you want to have consistent quality of the prints
                    on these boxes, then we recommend you go for the PMS model.
                    It also offers you vast options for selecting any color for
                    making prints. However, this model is not budget-friendly in
                    case of small orders. It is best for large orders where the
                    cost per unit reduces in this setting. If you are looking
                    for a cost-effective option for small orders, then our CMYK
                    color model is best. It also gives you freedom in selecting
                    a wide range of colors.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading4">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    <p className="m-0 pr-30">
                      How White Cardboard Boxes Are Different From Others?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading4"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    White cardboard boxes are a type of packaging material that
                    is widely used in various industries for different purposes.
                    These boxes are different from other cardboard boxes in
                    their color, composition, and properties. The primary
                    difference between white boxes and other types of cardboard
                    boxes is the way they are manufactured. White cardboard
                    boxes are made of white paperboard, which is a type of
                    cardboard that is made from high-quality wood pulp. Also,
                    the bleaching process makes the paperboard more durable and
                    resistant to moisture and other environmental factors.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading5">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapse5"
                  >
                    <p className="m-0 pr-30">
                      Is The White Box Cost-effective Or Expensive?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading5"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    The cost of white cardboard boxes can vary depending on
                    several factors, such as the size and quantity of boxes
                    required, the type of printing or labeling required, and the
                    level of customization needed. Compared to other types of
                    packaging materials, white cardboard boxes can be more
                    expensive due to their higher quality and durability.
                    However, the cost-effectiveness of white cardboard boxes
                    depends on the specific needs of the business or individual
                    using them. These boxes can be cheap if there is not much
                    customization.
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
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading101">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse101"
                    aria-expanded="false"
                    aria-controls="flush-collapse101"
                  >
                    <p className="m-0 pr-30">
                      Why Do Luxury Products Need Cardboard Boxes?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse101"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading101"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Luxury products often require high-quality packaging
                    materials that can provide both protection and aesthetic
                    appeal. Custom white boxes are a popular choice for
                    packaging luxury products because they are durable and can
                    offer excellent protection for the products during shipping
                    and handling. They can be designed and manufactured to
                    provide additional cushioning and support, which can help
                    prevent damage to the products. These boxes have a luxury
                    appearance so they look very good with luxury products. Also
                    with the help of printing you can make them according to
                    your requirements with the help of our support team.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading102">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse102"
                    aria-expanded="false"
                    aria-controls="flush-collapse102"
                  >
                    <p className="m-0 pr-30">
                      Can I Print My Logo Or Design On Custom Cardboard Boxes?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse102"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading102"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, you can print your logo or design on custom cardboard
                    boxes. We, at The Custom Boxes, accommodate all
                    customization options, allowing you to incorporate your
                    distinctive logo or design on custom cardboard boxes.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading103">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse103"
                    aria-expanded="false"
                    aria-controls="flush-collapse103"
                  >
                    <p className="m-0 pr-30">
                      Are Cardboard Boxes Recyclable?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse103"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading103"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, cardboard boxes are recyclable because it is a
                    paper-based material. All recycling facilities usually
                    accept it for recycling purposes.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading104">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse104"
                    aria-expanded="false"
                    aria-controls="flush-collapse104"
                  >
                    <p className="m-0 pr-30">
                      How To Get Huge Cardboard Boxes?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse104"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading104"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    To get huge cardboard boxes you can contact The Custom
                    Boxes. Here, we can fulfill your size requirements and craft
                    huge cardboard boxes for you. Our large wholesale cardboard
                    boxes are the most durable and affordable packaging solution
                    for you.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading105">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse105"
                    aria-expanded="false"
                    aria-controls="flush-collapse105"
                  >
                    <p className="m-0 pr-30">
                      How Much Do Custom Cardboard Boxes Cost?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse105"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading105"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    The cost of custom cardboard boxes depends on various
                    factors like box material, size, quality, printing options,
                    and any additional features. Customization like unique
                    shapes, intricate designs, and special finishes may impact
                    the overall cost. As an estimate, small volumes of custom
                    cardboard boxes may range from a few dollars per box.
                    However, bulk ordering may lower this cost. For the cheapest
                    custom cardboard boxes, you can contact The Custom Boxes.
                  </div>
                </div>
              </div>
              <div className="accordion-item b-no">
                <span className="accordion-header bor-10" id="flush-heading106">
                  <button
                    className="faq_btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse106"
                    aria-expanded="false"
                    aria-controls="flush-collapse106"
                  >
                    <p className="m-0 pr-30">
                      Can You Use Any Cardboard Box To Ship?{" "}
                    </p>
                  </button>
                </span>
                <div
                  id="flush-collapse106"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading106"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body faq_para">
                    Yes, you can use any cardboard boxes to ship items but it is
                    necessary to check whether the box size, material, and
                    quality are capable of providing better protection to your
                    products during transportation. Boxes that are strong enough
                    to bear the weight and to safeguard the product effectively
                    should be used.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="box_style">
      <div className="box_style_bottom_left">
        <img
          src="../frontend_f/front/box_style_bottom_left.png"
          alt="box style bottom"
          width={198}
          height={197}
        />
      </div>
      <div className="box_style_top_right">
        <img
          src="../frontend_f/front/box_style_top_right.png"
          alt="box style top"
        />
      </div>
      <div className="box_style_bottom_right">
        <img
          src="../frontend_f/front/box_style_bottom_right.png"
          alt="box style right"
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
            promote products effectively. Crafting a unique brand voice requires
            a fresh and innovative appearance. 'Box by Style' stands out as a
            distinctive feature on our official website, guiding you in
            selecting the perfect style for your delicate, high-selling items.
            Assemble various pieces of cardboard or other packaging materials to
            experience the final result. We infuse delight into every unboxing
            through exceptional interlocking. Explore creative concepts and
            captivate your customers with playful shapes without compromising
            functionality.
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
                    Customize
                    <img
                      className="show_button_icon w-15"
                      src="../frontend_f/front/button_icon_right.svg"
                      alt="button icon"
                    />
                    <img
                      className="show_hover_icon_button w-15"
                      src="../frontend_f/front/button_icon_top.svg"
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
    {/*Think Outside Box Section Start*/}
    {/*/footer*/}
  </main>
</div>

<script src="../assets/js/only_product.js"></script>



    </div>
  )
}

export default products