import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

import file_icon from '../assets/front/file_input_icon.svg'
function quote() {
  return (
    <div>
     
        <div id="page">
  {/* /header */}
  <main>
    {/* Mobile Menu start */}
    {/* Mobile Menu End */}
    <section
      className="banner_768_image static_pages"
      id="yourDivId"
      style={{ backgroundColor: "#e47911" }}
    >
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-8 width_90_per">
            <div className="breadcrumbs">
              <ul>
                <li className="">
                  <a className="breadcrumb_white_20_400" href="../index.html">
                    Home
                  </a>
                </li>
                <li className="">
                  <span className="breadcrumb_white_20_400">Request Quote</span>
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
                <a href="#">
                  <button className="margin-bottom-20 btn button_18_500_white">
                    Get Quote
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 width_0_per">
            <div className="" id="imageContainer">
              {/*<img src="https://www.thecustomboxes.com/frontend_f/front/contact-us.webp" alt="contact us" style="width: 100%;" />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /top_banner */}
    <section style={{ backgroundColor: "#fcfcfc" }}>
      <div className="container">
        <div className="">
          <h1 className="heading_48_700_black">
            Request a<br />
            <spane className="heading_48_500_blue_italic">
              {" "}
              Quote &amp; Consultation
            </spane>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                {/*map start*/}
                <div className="map_height">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.9173191215828!2d-87.87453789999999!3d41.937628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb50ad26bccfd%3A0x348fdbdabe650e1b!2s9933%20Franklin%20Ave%2C%20Franklin%20Park%2C%20IL%2060131%2C%20USA!5e0!3m2!1sen!2s!4v1699908894123!5m2!1sen!2s"
                    width=""
                    height={600}
                    style={{ border: 0, width: "100%", borderRadius: 25 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Custom Boxes Location Map"
                  />
                </div>
                {/*map end*/}
              </div>
              <div className="col-md-12">
                <div className="query_address_form mt-3">
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
                      <p className="form_para_">
                        Book now to receive the The Custom Boxes address details
                        and phone number
                      </p>
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
          <div className="col-md-6">
            <div className="mt-2 contact_form_div">
              <form
                className="contact_us_form_page"
                method="post"
                action="https://www.thecustomboxes.com/quote_form/"
                onsubmit="return submitUserForm();"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                />{" "}
                <input type="hidden" name="subject" defaultValue="quote_form" />
                <div className="row">
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      id="name"
                      name="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Your Email Address*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email Address"
                      required=""
                      name="email"
                      id="search_input_home_contact"
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Your Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Mobile Number"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Your Box Style
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="box"
                    >
                      <option>Select Your Box Style</option>
                      <option value="1-2-3 Bottom">1-2-3 Bottom</option>
                      <option value="1-2-3 Bottom Display Lid">
                        1-2-3 Bottom Display Lid
                      </option>
                      <option value="4 Corner Tray Tuck Top">
                        4 Corner Tray Tuck Top
                      </option>
                      <option value="4 Corner Tray With Lid">
                        4 Corner Tray With Lid
                      </option>
                      <option value="4 PK Bottle Carrier">
                        4 PK Bottle Carrier
                      </option>
                      <option value="Archive Boxes">Archive Boxes</option>
                      <option value="Auto Bottom Tray">Auto Bottom Tray</option>
                      <option value="Auto Bottom with Display Lid">
                        Auto Bottom with Display Lid
                      </option>
                      <option value="Auto Lock Bottom Box">
                        Auto Lock Bottom Box
                      </option>
                      <option value="Auto Lock Cap">Auto Lock Cap</option>
                      <option value="Bag Shaped Box Auto Bottom">
                        Bag Shaped Box Auto Bottom
                      </option>
                      <option value="Bags">Bags</option>
                      <option value="Bakery Boxes">Bakery Boxes</option>
                      <option value="Ballot Box">Ballot Box</option>
                      <option value="Bangle Boxes">Bangle Boxes</option>
                      <option value="Baseball Cap Box">Baseball Cap Box</option>
                      <option value="Beard Oil Box">Beard Oil Box</option>
                      <option value="Beverage Boxes">Beverage Boxes</option>
                      <option value="Blister Cards">Blister Cards</option>
                      <option value="Book Boxes">Book Boxes</option>
                      <option value="Bookend">Bookend</option>
                      <option value="Bookend CD Case">Bookend CD Case</option>
                      <option value="Booklets">Booklets</option>
                      <option value="Bookmarks">Bookmarks</option>
                      <option value="Bottle Necker">Bottle Necker</option>
                      <option value="Bowl Sleeve">Bowl Sleeve</option>
                      <option value="Box Sunglasses">Box Sunglasses</option>
                      <option value="Box With Hanging and Locking Tabs">
                        Box With Hanging and Locking Tabs
                      </option>
                      <option value="Boxes for Hotels and Spas">
                        Boxes for Hotels and Spas
                      </option>
                      <option value="Boxes with Foams">Boxes with Foams</option>
                      <option value="Brochure Display Holder">
                        Brochure Display Holder
                      </option>
                      <option value="Brochures">Brochures</option>
                      <option value="Burger Boxes">Burger Boxes</option>
                      <option value="Business Card Boxes">
                        Business Card Boxes
                      </option>
                      <option value="Business Cards">Business Cards</option>
                      <option value="Bux Board Boxes">Bux Board Boxes</option>
                      <option value="Cake Boxes">Cake Boxes</option>
                      <option value="Candle Boxes">Candle Boxes</option>
                      <option value="Candy Boxes">Candy Boxes</option>
                      <option value="Cannabis Packaging">
                        Cannabis Packaging
                      </option>
                      <option value="Cardboard Boxes">Cardboard Boxes</option>
                      <option value="Cat Food Boxes">Cat Food Boxes</option>
                      <option value="CBD Bath Bomb Boxes">
                        CBD Bath Bomb Boxes
                      </option>
                      <option value="CBD Boxes">CBD Boxes</option>
                      <option value="CBD Cream Boxes">CBD Cream Boxes</option>
                      <option value="CBD Gummies Packaging">
                        CBD Gummies Packaging
                      </option>
                      <option value="CBD Massage Oil Packaging">
                        CBD Massage Oil Packaging
                      </option>
                      <option value="CBD Oil Packaging">
                        CBD Oil Packaging
                      </option>
                      <option value="CBD Vape Juice Packaging">
                        CBD Vape Juice Packaging
                      </option>
                      <option value="CBD Vape Kit Boxes">
                        CBD Vape Kit Boxes
                      </option>
                      <option value="CBD Vape Packaging">
                        CBD Vape Packaging
                      </option>
                      <option value="CD Jackets">CD Jackets</option>
                      <option value="Cereal Boxes">Cereal Boxes</option>
                      <option value="Chinese Food Boxes">
                        Chinese Food Boxes
                      </option>
                      <option value="Chinese Takeout Boxes">
                        Chinese Takeout Boxes
                      </option>
                      <option value="Chocolate Boxes">Chocolate Boxes</option>
                      <option value="Christmas Boxes">Christmas Boxes</option>
                      <option value="Cigarette Boxes">Cigarette Boxes</option>
                      <option value="Clamshell Boxes">Clamshell Boxes</option>
                      <option value="Coffee Boxes">Coffee Boxes</option>
                      <option value="Collapsible Boxes">
                        Collapsible Boxes
                      </option>
                      <option value="Cone Boxes">Cone Boxes</option>
                      <option value="Contact Lens Boxes">
                        Contact Lens Boxes
                      </option>
                      <option value="Cookie Boxes">Cookie Boxes</option>
                      <option value="Corrugated Boxes">Corrugated Boxes</option>
                      <option value="Cosmetic Display Boxes">
                        Cosmetic Display Boxes
                      </option>
                      <option value="Counter Display Boxes">
                        Counter Display Boxes
                      </option>
                      <option value="Covid Test Kit Boxes">
                        Covid Test Kit Boxes
                      </option>
                      <option value="Cream Boxes">Cream Boxes</option>
                      <option value="Credit Card Boxes">
                        Credit Card Boxes
                      </option>
                      <option value="Cube Boxes">Cube Boxes</option>
                      <option value="Cube Shaped Carrier">
                        Cube Shaped Carrier
                      </option>
                      <option value="Cufflink Boxes">Cufflink Boxes</option>
                      <option value="CupCake Boxes">CupCake Boxes</option>
                      <option value="Custom Glitter Boxes">
                        Custom Glitter Boxes
                      </option>
                      <option value="Custom Shipping Boxes">
                        Custom Shipping Boxes
                      </option>
                      <option value="Decals">Decals</option>
                      <option value="Dessert Boxes">Dessert Boxes</option>
                      <option value="Die Cut Boxes">Die Cut Boxes</option>
                      <option value="Disc Folder">Disc Folder</option>
                      <option value="Dispenser">Dispenser</option>
                      <option value="Display Box Auto Bottom">
                        Display Box Auto Bottom
                      </option>
                      <option value="Display Boxes">Display Boxes</option>
                      <option value="Document Folder">Document Folder</option>
                      <option value="Dog Food Boxes">Dog Food Boxes</option>
                      <option value="Donut Boxes">Donut Boxes</option>
                      <option value="Door Hanger">Door Hanger</option>
                      <option value="Double Glue Side Wall">
                        Double Glue Side Wall
                      </option>
                      <option value="Double Glued Side Wall Tray and Sleeve">
                        Double Glued Side Wall Tray and Sleeve
                      </option>
                      <option value="Double Locked Wall Lid">
                        Double Locked Wall Lid
                      </option>
                      <option value="Double Wall Display Lid">
                        Double Wall Display Lid
                      </option>
                      <option value="Double Wall Frame Tray">
                        Double Wall Frame Tray
                      </option>
                      <option value="Double Wall Frame Tray Lid">
                        Double Wall Frame Tray Lid
                      </option>
                      <option value="Double Wall Tray">Double Wall Tray</option>
                      <option value="Double Wall Tuck Front">
                        Double Wall Tuck Front
                      </option>
                      <option value="Double Wall Tuck Top">
                        Double Wall Tuck Top
                      </option>
                      <option value="E-Cigarette Boxes">
                        E-Cigarette Boxes
                      </option>
                      <option value="E-liquid Boxes">E-liquid Boxes</option>
                      <option value="Earring Boxes">Earring Boxes</option>
                      <option value="Easel Counter Display">
                        Easel Counter Display
                      </option>
                      <option value="Easel Display Stand">
                        Easel Display Stand
                      </option>
                      <option value="Ecommerce Boxes">Ecommerce Boxes</option>
                      <option value="Economy Disc Folder">
                        Economy Disc Folder
                      </option>
                      <option value="Essential Oil Boxes">
                        Essential Oil Boxes
                      </option>
                      <option value="Eyelash Boxes">Eyelash Boxes</option>
                      <option value="Eyeliner Boxes">Eyeliner Boxes</option>
                      <option value="Eyeshadow Boxes">Eyeshadow Boxes</option>
                      <option value="Face Mask Boxes">Face Mask Boxes</option>
                      <option value="Favor Boxes">Favor Boxes</option>
                      <option value="Fence Partitions">Fence Partitions</option>
                      <option value="Fish Fillet Box">Fish Fillet Box</option>
                      <option value="Five Panel Hanger">
                        Five Panel Hanger
                      </option>
                      <option value="Flap Boxes">Flap Boxes</option>
                      <option value="Flip Out Open Dispenser Box">
                        Flip Out Open Dispenser Box
                      </option>
                      <option value="Flip Top Boxes">Flip Top Boxes</option>
                      <option value="Floral Boxes">Floral Boxes</option>
                      <option value="Flower Shaped Top Closure">
                        Flower Shaped Top Closure
                      </option>
                      <option value="Folder Business Card">
                        Folder Business Card
                      </option>
                      <option value="Folders Printing">Folders Printing</option>
                      <option value="Folding Boxes">Folding Boxes</option>
                      <option value="Food Double Wall Lid Boxes">
                        Food Double Wall Lid Boxes
                      </option>
                      <option value="Food Tray Packaging">
                        Food Tray Packaging
                      </option>
                      <option value="Foot Lock Tray">Foot Lock Tray</option>
                      <option value="Foundation Boxes">Foundation Boxes</option>
                      <option value="Four Corner Cake Box">
                        Four Corner Cake Box
                      </option>
                      <option value="Four Corner Tray">Four Corner Tray</option>
                      <option value="Four Corner with Display Lid">
                        Four Corner with Display Lid
                      </option>
                      <option value="Four Panel CD Jacket">
                        Four Panel CD Jacket
                      </option>
                      <option value="French Fry Boxes">French Fry Boxes</option>
                      <option value="Front Cut Out Display Tray">
                        Front Cut Out Display Tray
                      </option>
                      <option value="Full Flap Auto Bottom">
                        Full Flap Auto Bottom
                      </option>
                      <option value="Full Flat Double Tray">
                        Full Flat Double Tray
                      </option>
                      <option value="Full Overlap Seal End">
                        Full Overlap Seal End
                      </option>
                      <option value="Gable Bag">Gable Bag</option>
                      <option value="Gable Bag Auto Bottom">
                        Gable Bag Auto Bottom
                      </option>
                      <option value="Gable Bag Bottom Hanger">
                        Gable Bag Bottom Hanger
                      </option>
                      <option value="Gable Box Auto Bottom">
                        Gable Box Auto Bottom
                      </option>
                      <option value="Gable Boxes">Gable Boxes</option>
                      <option value="Game Boxes">Game Boxes</option>
                      <option value="Gift Card Boxes">Gift Card Boxes</option>
                      <option value="Glass Carrier">Glass Carrier</option>
                      <option value="Gold Foil Boxes">Gold Foil Boxes</option>
                      <option value="Hair Extension Boxes">
                        Hair Extension Boxes
                      </option>
                      <option value="Hairspray Boxes">Hairspray Boxes</option>
                      <option value="Half Circular Interlocking">
                        Half Circular Interlocking
                      </option>
                      <option value="Halloween Boxes">Halloween Boxes</option>
                      <option value="Handle Bag Shape Box">
                        Handle Bag Shape Box
                      </option>
                      <option value="Handle Boxes">Handle Boxes</option>
                      <option value="Hanger Product Holder">
                        Hanger Product Holder
                      </option>
                      <option value="Hat Boxes">Hat Boxes</option>
                      <option value="Header Card">Header Card</option>
                      <option value="Header Card Bag Topper">
                        Header Card Bag Topper
                      </option>
                      <option value="Hemp Boxes">Hemp Boxes</option>
                      <option value="Hexagon">Hexagon</option>
                      <option value="Hexagon 2 PC">Hexagon 2 PC</option>
                      <option value="Holographic Boxes">
                        Holographic Boxes
                      </option>
                      <option value="Hotdog Boxes">Hotdog Boxes</option>
                      <option value="Ice Cream Boxes">Ice Cream Boxes</option>
                      <option value="Ice Cream Cone Holder">
                        Ice Cream Cone Holder
                      </option>
                      <option value="Incense Boxes">Incense Boxes</option>
                      <option value="Invitation Boxes">Invitation Boxes</option>
                      <option value="Jewelry Boxes">Jewelry Boxes</option>
                      <option value="Kraft Boxes">Kraft Boxes</option>
                      <option value="Lighter Boxes">Lighter Boxes</option>
                      <option value="Lip Balm Boxes">Lip Balm Boxes</option>
                      <option value="Lip Gloss Boxes">Lip Gloss Boxes</option>
                      <option value="Lip Kit boxes">Lip Kit boxes</option>
                      <option value="Lipstick Boxes">Lipstick Boxes</option>
                      <option value="Lollipop Box">Lollipop Box</option>
                      <option value="Lotion Boxes">Lotion Boxes</option>
                      <option value="Luxury Boxes">Luxury Boxes</option>
                      <option value="Macaron Boxes">Macaron Boxes</option>
                      <option value="Magnetic Closure Boxes">
                        Magnetic Closure Boxes
                      </option>
                      <option value="Mailer Boxes">Mailer Boxes</option>
                      <option value="Mailer With Zipper">
                        Mailer With Zipper
                      </option>
                      <option value="Makeup Boxes">Makeup Boxes</option>
                      <option value="Mascara Boxes">Mascara Boxes</option>
                      <option value="Medicine Boxes">Medicine Boxes</option>
                      <option value="Muffin Boxes">Muffin Boxes</option>
                      <option value="Mug Boxes">Mug Boxes</option>
                      <option value="Multi Purpose Header">
                        Multi Purpose Header
                      </option>
                      <option value="Mushroom Boxes">Mushroom Boxes</option>
                      <option value="Nail Polish Boxes">
                        Nail Polish Boxes
                      </option>
                      <option value="Necklace Boxes">Necklace Boxes</option>
                      <option value="Noodle Boxes">Noodle Boxes</option>
                      <option value="One Piece">One Piece</option>
                      <option value="Ornament Boxes">Ornament Boxes</option>
                      <option value="Panel Hanger Snap Lock Bottom">
                        Panel Hanger Snap Lock Bottom
                      </option>
                      <option value="Paper Boxes">Paper Boxes</option>
                      <option value="Paper Brief Case">Paper Brief Case</option>
                      <option value="Paper Cones">Paper Cones</option>
                      <option value="Pastry Boxes">Pastry Boxes</option>
                      <option value="Perforated Dispenser Box">
                        Perforated Dispenser Box
                      </option>
                      <option value="Perfume Boxes">Perfume Boxes</option>
                      <option value="Pet Food Boxes">Pet Food Boxes</option>
                      <option value="Pie Boxes">Pie Boxes</option>
                      <option value="Piece Tray With Reinforced Side Wall">
                        Piece Tray With Reinforced Side Wall
                      </option>
                      <option value="Pillow Boxes">Pillow Boxes</option>
                      <option value="Pinch Lock Tray">Pinch Lock Tray</option>
                      <option value="Pizza Boxes">Pizza Boxes</option>
                      <option value="Playing Card Boxes">
                        Playing Card Boxes
                      </option>
                      <option value="Pop Counter Display Tray">
                        Pop Counter Display Tray
                      </option>
                      <option value="Popcorn Boxes">Popcorn Boxes</option>
                      <option value="Postage Boxes">Postage Boxes</option>
                      <option value="PR Box">PR Box</option>
                      <option value="Pre Roll Packaging">
                        Pre Roll Packaging
                      </option>
                      <option value="Presentation Boxes">
                        Presentation Boxes
                      </option>
                      <option value="Prism Shaped Box">Prism Shaped Box</option>
                      <option value="Product Boxes">Product Boxes</option>
                      <option value="Punch Partition">Punch Partition</option>
                      <option value="PVC Bags">PVC Bags</option>
                      <option value="Pyramid Boxes">Pyramid Boxes</option>
                      <option value="Regular Six Corner">
                        Regular Six Corner
                      </option>
                      <option value="Reinforced Sides With Hinged Top">
                        Reinforced Sides With Hinged Top
                      </option>
                      <option value="Reverse Tuck End">Reverse Tuck End</option>
                      <option value="Reverse Tuck End With Lock">
                        Reverse Tuck End With Lock
                      </option>
                      <option value="Rigid Gift Boxes">Rigid Gift Boxes</option>
                      <option value="Roll End Tray">Roll End Tray</option>
                      <option value="Roll End Tuck Top">
                        Roll End Tuck Top
                      </option>
                      <option value="Roll Ends With Lid">
                        Roll Ends With Lid
                      </option>
                      <option value="Sandwich Boxes">Sandwich Boxes</option>
                      <option value="Seal End">Seal End</option>
                      <option value="Seal End Auto Bottom">
                        Seal End Auto Bottom
                      </option>
                      <option value="Seal End With Perforated Top">
                        Seal End With Perforated Top
                      </option>
                      <option value="Seal End With Tear Open">
                        Seal End With Tear Open
                      </option>
                      <option value="Seal End With Tear Open and Lock">
                        Seal End With Tear Open and Lock
                      </option>
                      <option value="Self Lock Cake Box">
                        Self Lock Cake Box
                      </option>
                      <option value="Self-Locked Counter Display Tray">
                        Self-Locked Counter Display Tray
                      </option>
                      <option value="Serum Boxes">Serum Boxes</option>
                      <option value="Shirt Boxes">Shirt Boxes</option>
                      <option value="Side Lock Six Corner">
                        Side Lock Six Corner
                      </option>
                      <option value="Side Lock Tuck Top Display Box">
                        Side Lock Tuck Top Display Box
                      </option>
                      <option value="Silver Foil Boxes">
                        Silver Foil Boxes
                      </option>
                      <option value="Simplex Tray">Simplex Tray</option>
                      <option value="Six Panel CD Jacket">
                        Six Panel CD Jacket
                      </option>
                      <option value="Six Pk Bottle Carrier">
                        Six Pk Bottle Carrier
                      </option>
                      <option value="Sleeve Boxes">Sleeve Boxes</option>
                      <option value="Sleeve With Cap Lock">
                        Sleeve With Cap Lock
                      </option>
                      <option value="Sleeve With Product Retainers">
                        Sleeve With Product Retainers
                      </option>
                      <option value="Sleeve With Tapered Side Panel">
                        Sleeve With Tapered Side Panel
                      </option>
                      <option value="Slope Top Reverse Tuck End">
                        Slope Top Reverse Tuck End
                      </option>
                      <option value="Snack Boxes">Snack Boxes</option>
                      <option value="Soap Boxes">Soap Boxes</option>
                      <option value="Socks Boxes">Socks Boxes</option>
                      <option value="Software Boxes">Software Boxes</option>
                      <option value="Sports Boxes">Sports Boxes</option>
                      <option value="Square Box With Ladder Top">
                        Square Box With Ladder Top
                      </option>
                      <option value="Stand Up Pouch">Stand Up Pouch</option>
                      <option value="Star Shaped Boxes">
                        Star Shaped Boxes
                      </option>
                      <option value="Straight Tuck End">
                        Straight Tuck End
                      </option>
                      <option value="Straight Tuck With Customizable Window">
                        Straight Tuck With Customizable Window
                      </option>
                      <option value="Straight Tuck With Rise Up Insert">
                        Straight Tuck With Rise Up Insert
                      </option>
                      <option value="Subscription Boxes">
                        Subscription Boxes
                      </option>
                      <option value="Sushi Boxes">Sushi Boxes</option>
                      <option value="T Box">T Box</option>
                      <option value="Table Tents">Table Tents</option>
                      <option value="Tags Printing">Tags Printing</option>
                      <option value="Tea Boxes">Tea Boxes</option>
                      <option value="Tie Boxes">Tie Boxes</option>
                      <option value="Tissue Boxes">Tissue Boxes</option>
                      <option value="Tobacco Boxes">Tobacco Boxes</option>
                      <option value="Toy Boxes">Toy Boxes</option>
                      <option value="Tray and Sleeve Box">
                        Tray and Sleeve Box
                      </option>
                      <option value="Triangular Tray Lid">
                        Triangular Tray Lid
                      </option>
                      <option value="Truffle Boxes">Truffle Boxes</option>
                      <option value="Tuck Boxes">Tuck Boxes</option>
                      <option value="Tuck End Auto Bottom">
                        Tuck End Auto Bottom
                      </option>
                      <option value="Tuck End Cover">Tuck End Cover</option>
                      <option value="Tuck End Snap Lock Bottom">
                        Tuck End Snap Lock Bottom
                      </option>
                      <option value="Tuck With Bellow Dust Flap Lock">
                        Tuck With Bellow Dust Flap Lock
                      </option>
                      <option value="Two Panel CD Jacket">
                        Two Panel CD Jacket
                      </option>
                      <option value="Two Piece">Two Piece</option>
                      <option value="Vacuum Bag">Vacuum Bag</option>
                      <option value="Vape Packaging">Vape Packaging</option>
                      <option value="Vinyl Banners">Vinyl Banners</option>
                      <option value="Waffle Boxes">Waffle Boxes</option>
                      <option value="Wallet Boxes">Wallet Boxes</option>
                      <option value="Watch Boxes">Watch Boxes</option>
                      <option value="Wax Packaging">Wax Packaging</option>
                      <option value="Wedding Card Boxes">
                        Wedding Card Boxes
                      </option>
                      <option value="White Boxes">White Boxes</option>
                      <option value="Window Boxes">Window Boxes</option>
                      <option value="Wine Bottle Carriers">
                        Wine Bottle Carriers
                      </option>
                      <option value="Wrap Boxes">Wrap Boxes</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Length*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="length"
                      name="length"
                      id="length"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-3 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Width*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="width"
                      name="width"
                      id="width"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-3 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Height*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="height"
                      name="height"
                      id="height"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-3 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Unit</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="size"
                    >
                      <option value="Inches">Inches</option>
                      <option value="CM">CM</option>
                      <option value="MM">MM</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Quantity 1*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity 1"
                      name="qty1"
                      id="qty1"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Quantity 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity 2"
                      name="qty2"
                      id="qty2"
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">
                      Quantity 3
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity 3"
                      name="qty3"
                      id="qty3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 col-sm-12 col-12">
                    <label className="input_18_500_label_blue">Addons:</label>
                    <select
                      id="exampleFormControlSelect1"
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
                </div>
                <div className="row" style={{ display: "none" }}>
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Color</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="color"
                    >
                      <option value="None">None</option>
                      <option value="1 Colour">1 Colour</option>
                      <option value="2 Colour">2 Colour</option>
                      <option value="3 Colour">3 Colour</option>
                      <option value="4 Colour">4 Colour</option>
                      <option value="4/1 Colour">4/1 Colour</option>
                      <option value="4/2 Colour">4/2 Colour</option>
                      <option value="4/3 Colour">4/3 Colour</option>
                      <option value="4/4 Colour">4/4 Colour</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-12">
                    <label className="input_18_500_label_blue">Type</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="type"
                    >
                      <option value="Request for Quote">Get Quote</option>
                      <option value="Request for Template">Get Template</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="input_18_500_label_blue">
                    Descriptions*
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    minLength={0}
                    maxLength={300}
                    required=""
                    rows={6}
                    name="message"
                    placeholder="Tell us about your project! Box dimensions, industry, design, etc. — we can help."
                    defaultValue={""}
                  />
                  {/*<p style="color: red;margin:10px 0px 0px;">Minimum 10 characters, maximum 300 characters</p>*/}
                </div>
                <div className="form-group">
                  <input type="file" id="file" className="p-0" name="file" />
                  <label htmlFor="file">
                    <img
                      style={{ marginRight: 10 }}
                      src={file_icon}
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
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.form-check .form-check-input {padding:0px 0px;}\n.form-check label {font-size:17px;}\n.form-check input {margin-top:0.25em !important;}\n[type=file] {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n}\n[type=file] + label {\n  background: #FCFCFD;\n  border: none;\n  border-radius: 5px;\n  color: #0074BD;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Epilogue;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  outline: none;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.3s;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n[type=file] + label:hover {\n  background-color: #C4161C;\n  color:#fff;\n}\n   .contact_us_form_page input {\n    margin-top:15px;\n    background-color: #f0f0f0;\n    padding: 25px 15px;\n    border-radius: 5px;\n}\n    .contact_us_form_page select {\n    margin-top:15px;\n    background-color: #f0f0f0;\n    padding: 25px 15px;\n    border-radius: 5px;\n}\n    .contact_us_form_page textarea {\n    margin-top:15px;\n    background-color: #f0f0f0;\n    padding: 25px 15px;\n    border-radius: 5px;\n}\n"
      }}
    />
    {/*Think Outside Box Section Start*/}
    {/*/footer*/}
  </main>
</div>

    </div>
  )
}

export default quote