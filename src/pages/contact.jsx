import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

import call_icon from "../assets/front/call_icon.svg";
import email_icon from "../assets/front/email_icon.svg"
import map_icon from "../assets/front/map_icon.svg"
import time_click from "../assets/front/time_clock.svg"
import file_input_icon from "../assets/front/file_input_icon.svg"
import brand_4 from "../assets/front/brand_4.svg"
import brand_6 from "../assets/front/brand_6.svg"
import brand_2 from "../assets/front/brand_2.svg"
import brand_3 from "../assets/front/brand_3.svg"
import brand_7 from "../assets/front/brand_7.svg"
import brand_5 from "../assets/front/brand_5.svg"
import brand_9 from "../assets/front/brand_9.svg"
import brand_1 from "../assets/front/brand_1.svg"

function contact() {
  return (
    <div>

      <div id="page">
        {/* /header */}
        {/* Mobile Menu start */}
        <main>
          {/* Mobile Menu End */}
          <section className="banner_768_imagev static_pages" id="yourDivId" style={{ background: "#e47911" }}>
            <div className="container">
              <div className="row align-center">
                <div className="col-md-8 width_90_per">
                  <div className="breadcrumbs">
                    <ul>
                      <li className="">
                        <a className="breadcrumb_white_20_400" href="../index.html">
                          Home
                        </a>
                      </li>
                      <li className="">
                        <a className="breadcrumb_white_20_400">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <h4 className="heading_79_700_black">
                      Ready to Think Outside the Box?
                      <span className="heading_79_500_white_italic">
                        Let's Get Started.
                      </span>
                    </h4>
                    <p className="paragraph_18_400_white">
                      It's simple, speedy and free to request a quote from us - just
                      let us know what you're looking for, and our experienced team
                      will come back to you within 24 hours or less. If you're not
                      sure what packaging solution is best for your brand, or you need
                      a little guidance, contact our packaging wizards below - we're
                      just a call or click away!
                    </p>
                    <div className="mt-5">
                      <a href="../quote/index.html">
                        <button className="margin-bottom-20 btn button_18_500_white">
                          Get Free Quote
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 width_0_per">
                  <div className="" id="imageContainer" />
                </div>
              </div>
            </div>
          </section>
          <section className="color_fc">
            <div className="container">
              <h1 className="heading_48_700_black">
                Your Inquiry
                <br />
                <spane className="heading_48_500_blue_italic"> Our Priority</spane>
              </h1>
              <p className="paragraph_18_400_black">
                At Custom Boxes, we are committed to upholding the highest standards
                of quality, transparency, and excellence for each and every customer
                we serve. Experience our top-notch service by filling out our quote
                request form, and rest assured that we'll respond to your inquiry
                within 24 hours or even sooner!
              </p>
              <p className="paragraph_18_400_black">
                Our team of dedicated packaging specialists is here to support you
                throughout the entire custom packaging journey. From the initial
                consultation to the final production and delivery, we handle it all
                seamlessly, ensuring a stress-free experience for you
              </p>
              <div className="row">
                <div className="text-center">
                  <h4 className="contact_form_heading_margin heading_48_700_black">
                    let’s <span className="heading_48_500_blue_italic">talk</span>
                  </h4>
                </div>
                <div className="col-md-5">
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={call_icon}
                        alt="call icon"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Toll - Free:</p>
                      <p className="mb-0 paragraph_18_400_white">
                        Our customer care is open 24/ 7 Online Support
                      </p>
                      <a href="#" className="heading_24_600_black">
                        1800-396-1840
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={call_icon}
                        alt="call ion"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Sales:</p>
                      <p className="mb-0 paragraph_18_400_white">
                        24/7 online our Sales team available for all customer care
                        needs.
                      </p>
                      <a href="#" className="heading_24_600_black">
                        777-364-4443
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={email_icon}
                        alt="email icon"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Mail Address:</p>
                      <p className="mb-0 paragraph_18_400_white">
                        Our support team will get back to in 24-h during standard
                        business hours.
                      </p>
                      <a href="#" className="heading_24_600_black">
                        support@thecustomboxes.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={map_icon}
                        alt="map icon"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Location:</p>
                      <p className="mb-0 a_18_700_white">Head Office:</p>
                      <a href="#" className="paragraph_18_400_white">
                        {" "}
                        9933 Franklin Ave Franklin Park IL 60131
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={map_icon}
                        alt="map icon"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Location:</p>
                      <p className="mb-0 a_18_700_white">Branch office 2:</p>
                      <a href="#" className="paragraph_18_400_white">
                        {" "}
                        1830 Commerscenter East Suite # 8 Bernardino, CA 92408
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 set_form_icon_data">
                    <div className="mb-3">
                      <img
                        src={time_click}
                        alt="time clock"
                        className="width_50"
                      />
                    </div>
                    <div className="">
                      <p className="mb-0 heading_24_700_black">Working hours:</p>
                      <p className="mb-0 heading_24_600_white">
                        Mon 00:00 to Sun 23:59
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 offset-md-1">
                  <div className="mt-2 contact_form_div">
                    <form
                      className="contact_us_form_page"
                      method="post"
                      action="https://www.thecustomboxes.com/contact_form/"
                      onsubmit="return submitUserForm();"
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
                        defaultValue="contact_form"
                      />
                      <div className="form-group">
                        <label className="input_18_500_label_blue">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                          id="name"
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="input_18_500_label_blue">
                          Your Email Address
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
                      <div className="form-group">
                        <label className="input_18_500_label_blue">
                          Your Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Contact Number"
                          id="phone"
                          name="phone"
                        />
                      </div>
                      <div className="form-group">
                        <label className="input_18_500_label_blue">
                          Descriptions*
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={6}
                          name="message"
                          placeholder="Tell us about your project! Box dimensions, industry, design, etc. — we can help."
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <input type="file" id="file" className="p-0" name="file" />
                        <label htmlFor="file">
                          <img
                            style={{ marginRight: 10 }}
                            src={file_input_icon}
                            alt="file icon"
                          />
                          Choose File...
                        </label>
                        <br />
                        <small className="form-text text-muted paragraph_18_400_gray">
                          <span className="input_18_500_label_blue">Note:</span>
                          Allowed file extensions to upload AI , PDF, EPS, TIFF
                        </small>
                      </div>
                      <div className="form-group mt-4">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LcLRm4pAAAAAGeWZi8RN4Qjy5xlEBQ7rSDhaChg"
                          data-callback="verifyCaptcha"
                          required=""
                        />
                        <div id="g-recaptcha-error" />
                      </div>
                      <div className="mt-5">
                        <button
                          className="btn button_18_500_blue_background"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home_address_section">
            <div className="container">
              <h3 className="heading_48_700_black">
                Where
                <span className="heading_48_500_blue_italic"> you’ll be</span>
              </h3>
              <p className="paragraph_black">
                9933 Franklin Ave, Franklin Park, IL 60131
              </p>
              <div className="row">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                  <div className="map_height">
                    <iframe
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
                      <h3 className="heading_40_700_black">
                        Book Your Appointment
                        <span className="heading_40_700_blue_italic">
                          With The Custom Boxes
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <form
                        className="home_address_form_map contact_form_"
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
                            <label className="mb-2 input_18_500_label_blue">
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
                        <p className="form_para_">
                          Book now to receive the The Custom Boxes address details and
                          phone number
                        </p>
                        <div className="form-group mt-4">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LcLRm4pAAAAAGeWZi8RN4Qjy5xlEBQ7rSDhaChg"
                            data-callback="verifyCaptcha1"
                            required=""
                          />
                          <div id="g-recaptcha-error-1" />
                        </div>
                        <div className="mt-md-4 text-center">
                          <a href="#">
                            <button className="btn button_18_500_blue_background width_100">
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
          <section className="brand_section_contact">
            <div className="container">
              <div className="mb-5">
                <p className="heading_36_700_black">
                  Trusted By{" "}
                  <span className="heading_36_500_blue_italic">
                    The World's Top Brands
                  </span>
                </p>
              </div>
              <div id="brands" className="owl-carousel owl-theme">
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_4}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_4.svg"
                      alt="Brand 4"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_6}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_6.svg"
                      alt="Brand 6"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img

                      src={brand_2}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_2.svg"
                      alt="Brand 2"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_3}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_3.svg"
                      alt="Brand 3"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_7}
                      width={120}
                      height={30}
                      data-src=""
                      alt="Brand 7"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_5}
                      width={120}
                      height={30}
                      data-src=""
                      alt="Brand 5"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_9}
                      width={120}
                      height={30}
                      data-src=""
                      alt="Brand 9"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img

                      src={brand_1}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_1.svg"
                      alt="Brand 1"
                      className="owl-lazy"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#0">
                    <img
                      src={brand_9}
                      width={120}
                      height={30}
                      data-src="https://www.thecustomboxes.com/frontend_f/front/brand_9.svg"
                      alt="Brand 9"
                      className="owl-lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*/footer*/}
        </main>
      </div>

    </div>
  )
}

export default contact