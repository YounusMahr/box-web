import logo from '../assets/img/logo.png';
import emailicon from '../assets/front/email_icon.webp';
import sicon from '../assets/front/search-icon.webp';
import carticon from '../assets/front/cart_icon.svg';
import Whatsapp from '../assets/img/whatsapp_icon.svg'

import Links from './links';


import { Link } from 'react-router-dom';
import $ from 'jquery';
import React, { useEffect, useRef } from 'react';
function header() {
  useEffect(() => {
    // Sticky nav
var $headerStick = $('.Sticky');
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 80) {
    $headerStick.addClass("sticky_element");
  } else {
    $headerStick.removeClass("sticky_element");
  }; 
});

// Menu Categories
$(window).resize(function () {
  if ($(window).width() >= 768) {
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
    $('.categories').addClass('menu');
    $('.menu ul > li').on('mouseover', function (e) {
      $(this).find("ul:first").show();
      $(this).find('> span a').addClass('active');
    }).on('mouseout', function (e) {
      $(this).find("ul:first").hide();
      $(this).find('> span a').removeClass('active');
    });
    $('.menu ul li li').on('mouseover', function (e) {
      if ($(this).has('ul').length) {
        $(this).parent().addClass('expanded');
      }
      $('.menu ul:first', this).parent().find('> span a').addClass('active');
      $('.menu ul:first', this).show();
    }).on('mouseout', function (e) {
      $(this).parent().removeClass('expanded');
      $('.menu ul:first', this).parent().find('> span a').removeClass('active');
      $('.menu ul:first', this).hide();
    });
  } else {
    $('.categories').removeClass('menu');
  }
}).resize();

// Mobile Mmenu
// var $menu = $("#menu").mmenu({
//   "extensions": ["pagedim-black"],
//   counters: true,
//   keyboardNavigation: {
//     enable: true,
//     enhance: true
//   },
//   navbar: {
//     title: 'MENU'
//   },
//   offCanvas: {
//     pageSelector: "#page"
//    },
//   navbars: [{position:'bottom',content: ['<a href="#0">© 2022 Allaia</a>']}]}, 
//   {
//   // configuration
//   clone: true,
//   classNames: {
//     fixedElements: {
//       fixed: "menu_fixed"
//     }
//   }
// });

// Menu
$('a.open_close').on("click", function () {
  $('.main-menu').toggleClass('show');
  $('.layer').toggleClass('layer-is-visible');
});
$('a.show-submenu').on("click", function () {
  $(this).next().toggleClass("show_normal");
});
$('a.show-submenu-mega').on("click", function () {
  $(this).next().toggleClass("show_mega");
});

$('a.btn_search_mob').on("click", function () {
  $('.search_mob_wp').slideToggle("fast");
});

}, []);

  return (
    <>



    <header className="version_1">
  <div className="top-bar-bg">
    <div className="container">
      <div className="row text-center-mobile">
        <div className="col-md-4">
          <div className="">
            <img
              className="email_icon_785"
              src={emailicon}
              alt="email icon"
              width={20}
              height={15}
            />
            <div className="d-inline">
              <a
                href="mailto:support@thecustomboxes.com"
                style={{ color: "#ffffff", marginLeft: 10 }}
              >
                support@thecustomboxes.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-none-mobile">
            <div className="owl-carousel owl-theme topbar_carousel">
              <div className="item text-center">
                <a href="#" style={{ color: "#ffffff" }}>
                  Get Off Your First Order!
                </a>
              </div>
              <div className="item text-center">
                <a href="#" style={{ color: "#ffffff" }}>
                  Get Off Your First Order!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="float-end float-mobile-none-text-center">
            {/* <Link to={login} style={{ color: "#fff" }}>Login</Link>
            <Link to={signup} style={{ color: "#fff", padding: "0px 10px" }}>Sing-up</Link> */}
            <span style={{ fontSize: 12, fontWeight: 500, color: "#fff" }}>
              Call us Toll Free
            </span>
            <div className="d-inline">
              <a
                href="tel:1-800-396-1840"
                style={{ color: "#ffffff", marginLeft: 10 }}
              >
                1-800-396-1840
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="layer" />
  {/* Mobile menu overlay mask */}
  <div className="main_header main_nav Sticky">
    <div className="container">
      <div className="row small-gutters">
        <div className="col-xl-3 col-lg-3 d-lg-flex-home align-items-center">
          <div id="logo">
            <a className="show_logo_desktop" href="index.html">
              <img
                src={logo}
                alt="The Custom Boxes"
                width={150}
                height={60}
              />
            </a>
            <a loading="lazy" className="show_logo_mobile" href="index.html">
              <img
                src="uploads_f/1703836042.mobile_logo.webp"
                alt="The Custom Boxes"
                width={200}
                height={40}
              />
            </a>
          </div>
        </div>
        <nav className="col-xl-7 col-lg-7">
          <div className="menu-button">
            <span className="fa fa-reorder" />
          </div>
          {/* Mobile menu button */}
          <div className="main-menu">
            <div id="header_menu">
              <a href="index.html">
                <img
                  src={logo}
                  alt="The Custom Boxes"
                  width=""
                  height=""
                />
              </a>
              <a
                href="#"
                className="open_close"
                id="close_in"
                aria-label="Open Mobile Menu"
              >
                <i className="ti-close" />
              </a>
            </div>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li className="megamenu submenu">
                <Link to='industry'>Industries</Link>
                <div className="menu-wrapper">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="main_heading">
                        <p className="mega_menu_heading">SHOP ALL INDUSTRIES</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="cardboard-packaging/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720702761.Cardboard%20boxes%20(1).webp"
                                  alt="Cardboard boxes ()"
                                  width={70}
                                  height={70}
                                />
                                Cardboard Packaging
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="cbd-packaging/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720702849.CBD%20Packaging.webp"
                                  alt="CBD Packaging"
                                  width={70}
                                  height={70}
                                />
                                CBD Packaging
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="cosmetic-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720702869.cosmetic%20boxes.webp"
                                  alt="cosmetic boxes"
                                  width={70}
                                  height={70}
                                />
                                Cosmetic Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="display-packaging/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720702901.Display%20boxes.webp"
                                  alt="Display boxes"
                                  width={70}
                                  height={70}
                                />
                                Display Packaging
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="eco-friendly-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703366.Eco-friendly%20boxes.webp"
                                  alt="Eco friendly boxes"
                                  width={70}
                                  height={70}
                                />
                                Eco Friendly Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="food-and-beverage/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703079.Food%20And%20Beverages%20Boxes.webp"
                                  alt="Food And Beverages Boxes"
                                  width={70}
                                  height={70}
                                />
                                Food And Beverage
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="gift-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703096.Gift%20boxes.webp"
                                  alt="Gift boxes"
                                  width={70}
                                  height={70}
                                />
                                Gift Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="metalized-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703161.Metallized%20Boxes.webp"
                                  alt="Metallized Boxes"
                                  width={70}
                                  height={70}
                                />
                                Metalized Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="retail-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703179.Retail%20boxes.webp"
                                  alt="Retail boxes"
                                  width={70}
                                  height={70}
                                />
                                Retail Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="rigid-boxes/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1720703203.Rigid%20boxes.webp"
                                  alt="Rigid boxes"
                                  width={70}
                                  height={70}
                                />
                                Rigid Boxes
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mega_menu_sub_cat_pro_inside">
                          <div className="">
                            <form
                              className="example_header_navbar"
                              action="https://www.thecustomboxes.com/search/"
                              method="get"
                              style={{ margin: "0 auto", maxWidth: 500 }}
                            >
                              <input
                                type="hidden"
                                name="_token"
                                defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                              />{" "}
                              <input
                                type="text"
                                accessKey="s"
                                placeholder="Search.."
                                name="query"
                                id="query"
                                required=""
                              />
                              <button type="submit" aria-label="Search">
                                <i className="fa fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn mb-4"
                          style={{
                            padding: "10px 30px 9px 30px",
                            color: "#fff",
                            borderRadius: 5,
                            backgroundColor: "#c4161c",
                            fontFamily: "Epilogue"
                          }}
                        >
                          <a
                            href="industries/index.html"
                            style={{ color: "#fff" }}
                          >
                            View All
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4 last_column">
                      <div className="last_column_padding">
                        <div className="owl-carousel owl-theme mega_menu_slide">
                          <div className="item text-center">
                            <a href="#" style={{ color: "#ffffff" }}>
                              <img
                                src="frontend_f/front/mega_menu_slide.webp"
                                loading="lazy"
                                alt="menu slide image"
                              />
                            </a>
                          </div>
                          <div className="item text-center">
                            <a href="#" style={{ color: "#ffffff" }}>
                              <img
                                src="frontend_f/front/mega_menu_slide.webp"
                                loading="lazy"
                                alt="menu slide image"
                              />
                            </a>
                          </div>
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            color: "#000",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 27,
                            fontStyle: "normal",
                            fontWeight: 700,
                            textTransform: "capitalize"
                          }}
                        >
                          Get Help With
                        </p>
                        <p
                          className="mb-0"
                          style={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 27,
                            fontStyle: "normal",
                            fontWeight: 700,
                            textTransform: "capitalize"
                          }}
                        >
                          Expert Guidance
                        </p>
                        <p
                          className=""
                          style={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 11,
                            fontStyle: "normal",
                            fontWeight: 400
                          }}
                        >
                          Need help finding the perfect packaging? Contact us
                          now for a free consultation with a trained packaging
                          specialist.
                        </p>
                        <div className="mb-2">
                          <img
                            src="frontend_f/front/slide_img_3_test.webp"
                            alt="image 1"
                            width={36}
                            height={36}
                          />
                          <img
                            src="frontend_f/front/slide_img_2_test.webp"
                            alt="image 2"
                            width={36}
                            height={36}
                          />
                          <img
                            src="frontend_f/front/slide_img_1_test.webp"
                            alt="image 3"
                            width={36}
                            height={36}
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <a
                            href="tel:1-800-396-1840"
                            style={{
                              color: "#fff",
                              fontSize: 10,
                              fontWeight: 600,
                              fontFamily: "Epilogue"
                            }}
                          >
                            Call us Toll-Free: 1-800-396-1840
                          </a>
                          <a href="quote/index.html">
                            <button
                              className="btn"
                              style={{
                                color: "#fff",
                                borderRadius: 5,
                                backgroundColor: "#C4161C",
                                fontFamily: "Epilogue"
                              }}
                            >
                              Get Quote
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="megamenu submenu">
                <Link to='box_style'>Box By Style</Link>
                <div className="menu-wrapper">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="main_heading">
                        <p className="mega_menu_heading">SHOP ALL PRODUCTS</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="bottom-closure/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425175.Bottom%20Closure.png"
                                  alt="Bottom Closure"
                                  width={70}
                                  height={70}
                                />
                                Bottom Closure
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="cd-covers/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425198.CD%20Covers.png"
                                  alt="CD Covers"
                                  width={70}
                                  height={70}
                                />
                                CD Covers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="figure-and-pattern/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425265.Figure-Pattern.png"
                                  alt="Figure Pattern"
                                  width={70}
                                  height={70}
                                />
                                Figure &amp; Pattern
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="fold-and-assemble/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425296.Fold-Assemble.png"
                                  alt="Fold Assemble"
                                  width={70}
                                  height={70}
                                />
                                Fold &amp; Assemble
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="rectangular/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425320.Rectangular.png"
                                  alt="Rectangular"
                                  width={70}
                                  height={70}
                                />
                                Rectangular
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="showcase-exhibit/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425349.Showcase-Exhibit.png"
                                  alt="Showcase Exhibit"
                                  width={70}
                                  height={70}
                                />
                                Showcase Exhibit
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="list_TCB">
                              <a
                                href="top-closure/index.html"
                                className="mega_menu_sub_cat_name"
                              >
                                <img
                                  className="megamenu_img"
                                  src="uploads_f/1708425378.Top-Closure.png"
                                  alt="Top Closure"
                                  width={70}
                                  height={70}
                                />
                                Top Closure
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mega_menu_sub_cat_pro_inside">
                          <div className="">
                            <form
                              className="example_header_navbar"
                              action="https://www.thecustomboxes.com/search/"
                              method="get"
                              style={{ margin: "0 auto", maxWidth: 500 }}
                            >
                              <input
                                type="hidden"
                                name="_token"
                                defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                              />{" "}
                              <input
                                type="text"
                                accessKey="s"
                                placeholder="Search.."
                                name="query"
                                id="query"
                                required=""
                              />
                              <button type="submit" aria-label="Search">
                                <i className="fa fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn mb-4"
                          style={{
                            padding: "10px 30px 9px 30px",
                            color: "#fff",
                            borderRadius: 5,
                            backgroundColor: "#c4161c",
                            fontFamily: "Epilogue"
                          }}
                        >
                          <a
                            href="boxstyles/index.html"
                            style={{ color: "#fff" }}
                          >
                            View All
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4 last_column">
                      <div className="last_column_padding">
                        <div className="owl-carousel owl-theme mega_menu_slide">
                          <div className="item text-center">
                            <a href="#" style={{ color: "#ffffff" }}>
                              <img
                                src="frontend_f/front/mega_menu_slide.webp"
                                loading="lazy"
                                alt="menu slide image"
                              />
                            </a>
                          </div>
                          <div className="item text-center">
                            <a href="#" style={{ color: "#ffffff" }}>
                              <img
                                src="frontend_f/front/mega_menu_slide.webp"
                                loading="lazy"
                                alt="menu slide image"
                              />
                            </a>
                          </div>
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            color: "#000",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 27,
                            fontStyle: "normal",
                            fontWeight: 700,
                            textTransform: "capitalize"
                          }}
                        >
                          Get Help With
                        </p>
                        <p
                          className="mb-0"
                          style={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 27,
                            fontStyle: "normal",
                            fontWeight: 700,
                            textTransform: "capitalize"
                          }}
                        >
                          Expert Guidance
                        </p>
                        <p
                          className=""
                          style={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Epilogue",
                            fontSize: 11,
                            fontStyle: "normal",
                            fontWeight: 400
                          }}
                        >
                          Need help finding the perfect packaging? Contact us
                          now for a free consultation with a trained packaging
                          specialist.
                        </p>
                        <div className="mb-2">
                          <img
                            src="frontend_f/front/slide_img_3_test.webp"
                            alt="image 1"
                            width={36}
                            height={36}
                          />
                          <img
                            src="frontend_f/front/slide_img_2_test.webp"
                            alt="image 2"
                            width={36}
                            height={36}
                          />
                          <img
                            src="frontend_f/front/slide_img_1_test.webp"
                            alt="image 3"
                            width={36}
                            height={36}
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <a
                            href="tel:1-800-396-1840"
                            style={{
                              color: "#fff",
                              fontSize: 10,
                              fontWeight: 600,
                              fontFamily: "Epilogue"
                            }}
                          >
                            Call us Toll-Free: 1-800-396-1840
                          </a>
                          <a href="quote/index.html">
                            <button
                              className="btn"
                              style={{
                                color: "#fff",
                                borderRadius: 5,
                                backgroundColor: "#C4161C",
                                fontFamily: "Epilogue"
                              }}
                            >
                              Get Quote
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <Link to="other-product">Other Products</Link>
              </li>
              <li>
              <Link to="store">Store</Link>
              </li>
              <li>
              <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">
                  <img
                    className="Show_"
                    src={sicon}
                    alt="search icon"
                    width={17}
                    height={17}
                  />
                  <img
                    className="Hide_"
                    src={sicon}
                    alt="search icon"
                    width={17}
                    height={17}
                  />
                </a>
                <div id="target_">
                  <a href="#" className="search-toggle">
                    <i className="icon-magnifier" />
                  </a>
                  <form
                    action="https://www.thecustomboxes.com/search/"
                    method="get"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rPMCynZCCSE8NydMfKLqBxWbvfbx5olu8KQdTsvQ"
                    />{" "}
                    <div className="header-search-wrapper show">
                      <input
                        type="search"
                        className="form-control"
                        accessKey="s"
                        name="query"
                        id="query"
                        placeholder="Search..."
                        required=""
                      />
                      {/* End .select-custom */}
                      <button
                        className="btn p-0 icon-magnifier"
                        type="submit"
                        aria-label="Search"
                      >
                        <img
                          className=""
                          src={sicon}
                          alt="search icon"
                        />
                      </button>
                    </div>
                    {/* End .header-search-wrapper */}
                  </form>
                </div>
              </li>
            </ul>
          </div>
          {/*/main-menu */}
        </nav>
        <div className=" d-none-mobile col-xl-2 col-lg-2 d-lg-flex align-items-center justify-content-end text-end">
          <a  className="no_set_1000"> <Link to="quote" className='no_set_1000'> <button
              className="btn"
              style={{
                fontSize: 12,
                borderRadius: 5,
                background: "#C4161C",
                color: "#ffffff"
              }}
            >
              Get Quote
            </button> </Link>
           
          </a>
          <div
            className="tcb_cart "
            style={{ padding: "0px 20px", position: "relative" }}
          >
            <img
              src={carticon}
              alt="Cart Icon"
              width={22}
              height={22}
            />
            <div
              className="basket-item-count basketitems"
              style={{
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "#0074bd",
                position: "absolute",
                top: "35%",
                left: "70%",
                WebkitTransform: "translate(-50%,-90%)",
                MozTransform: "translate(-50%,-90%)",
                transform: "translate(-50%,-90%)",
                padding: "0 6px",
                borderRadius: 50
              }}
            >
              <span className="badge badge-pill red"> 0 </span>
            </div>
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
  </div>
  {/* /main_header */}
</header>

{/* //------- Mobile Navbar ------ */}

<div id="mobile-nav">
  <div class="menu-button"><span class="fa fa-reorder" ></span></div>
  <ul>
    <li>
      <a href="index.html">Home</a>
    </li>
    <li>
      <a href="industries/index.html">Industries</a>
    </li>
    <li>
      <a href="boxstyles/index.html">Box By Style</a>
    </li>
    <li>
      <a href="other-products/index.html">Other Products</a>
    </li>
    <li>
      <a href="blog/index.html">Blog</a>
    </li>
    <li>
      <a href="about-us/index.html">About us</a>
    </li>
    <li>
      <a href="contact-us/index.html">Contact us</a>
    </li>
    <li>
      <a href="quote/index.html">Get Quote</a>
    </li>
  </ul>
</div>

<style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n@media  only screen and (min-width: 1180px)\n{\n  .main-menu ul li.megamenu .menu-wrapper {width: 800px; height:auto;}\n}\n\n@media  only screen and (min-width: 1180px)\n{\n  .main-menu ul li.megamenu .menu-wrapper { margin-left: -250px; }\n}\n.last_column {text-align: center;background: #0074bd;}\n\n.main_heading {padding: 25px 5px 0px 5px;}\n.last_column_padding {padding: 25px 5px 25px 5px;}\n\n@media  only screen and (min-width: 1180px)\n{\n   .main-menu ul ul li:hover>a {color: #0074bd;background-color: transparent;}\n}\n\n\n.header-search-wrapper {\n    display: flex;\n    margin-top: 10px;\n    border: 5px solid #7aa93c;\n}\n.header-search-wrapper {\n    display: flex;\n    display: -ms-flexbox;\n    right: -2.3rem;\n    z-index: 999;\n    margin-top: 10px;\n    color: #8d8d8d;\n    box-sizing: content-box;\n    height: 40px;\n    border-radius: 5rem;\n    border: 5px solid #0074BD;\n}\n.header-search-wrapper .form-control {\n    min-width: 17rem;\n    width: 17rem;\n}\n.header-search-inline .form-control {\n    min-width: 21rem;\n    padding: 1rem 2rem;\n}\n.header-search-wrapper .form-control {\n    border-radius: 5rem 0 0 5rem;\n}\n.header-search-wrapper .form-control {\n    background: #eee;\n}\n.header-search-wrapper .btn {\n    position: relative;\n    padding: 0 0 3px 0;\n    border: 0;\n    border-left: 1px solid #0074BD;\n    min-width: 45px;\n    color: #777;\n    font-size: 16px;\n    background: #eee;\n}\n.header-search-wrapper .btn {\n    border-radius: 0 5rem 5rem 0;\n}\n#target_ i {\n    font-size: 2rem;\n}\n.search-toggle:after {\n    content: "";\n    position: absolute;\n    right: calc(90% - 10px);\n    bottom: -10px;\n    border: 10px solid transparent;\n    border-bottom-color: #0074BD;\n}\n\n\n    #tabs-nav_TCB2 p:after {\n    font-family: "themify";\n    font-size: 12px;\n    font-size: 0.75rem;\n    content: "\\e64b";\n    color: #000;\n    line-height: 3.5;\n    padding: 0;\n    margin: 0 0 0 5px;\n    font-weight: bold;\n    display: inline-block;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -webkit-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    transform: rotate(270deg);\n    float: right;\n}\n#tabs-nav_TCB p:after {\n    font-family: "themify";\n    font-size: 12px;\n    font-size: 0.75rem;\n    content: "\\e64b";\n    color: #000;\n    line-height: 3.5;\n    padding: 0;\n    margin: 0 0 0 5px;\n    font-weight: bold;\n    display: inline-block;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -webkit-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    transform: rotate(270deg);\n    float: right;\n}\n.example_header_navbar input[type="text"] {\n    padding: 10px;\n    font-size: 17px;\n    border: 1px solid #0074bd;\n    width: 90%;\n    background: #fff;\n    border-radius: 50px;\n    border: 1px solid #0074bd;\n}\n\n.example_header_navbar button {\n    padding: 10px;\n    color: #0074bd;\n    font-size: 17px;\n    border: none;\n    cursor: pointer;\n    margin-left: -50px;\n    background: transparent;\n}\n.example_header_navbar input::placeholder {\n    color: rgba(0, 116, 189, 0.38);\n    font-family: Epilogue;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.example_header_navbar button:hover {\n    background: transparent;\n}\n.mega_back {\n    background-color: #0074bd;\n    padding: 30% 15px 0px;\n    height: 720px;\n}\n.gallery {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.thumbnail {\n    width: 25.33%;\n    margin: 5px;\n    cursor: pointer;\n}\n.preview {\n    display: none;\n}\n.preview img {\n    max-width: 100%;\n}\n.gallery .thumbnail img {\n    width: 100px;\n    background: #f2f2f2;\n    padding: 10px 5px 10px 5px;\n    border-radius: 11px;\n    height: 100px;\n    margin: 5px 0px;\n}\n.fa.fa-remove {\n    float: right;\n    padding: 0px 10px;\n}\n.fa.fa-reorder {\n    float: right;\n    padding: 0px 10px;\n}\n.menu-button {\n    color: #0074bd;\n    cursor: pointer;\n    font-size: 2rem;\n    padding: 15px 0px 0px 23px;\n    right: 0;\n    position: absolute;\n    top: 0px;\n    /* left: 0px; */\n}\n\n.open-menu {\n    color: #fff;\n    cursor: pointer;\n    font-size: 0.8rem;\n    padding: 1rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: transform 250ms ease;\n}\n\n.rotate {\n    transform: rotate(135deg);\n}\n\n/* Generated Overflow Element */\n\n.overflow {\n    margin-top: 5px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    width: 100%;\n    height: 400px;\n    overflow: auto;\n}\n\n/* Menu Styles */\n\n#mobile-nav {\n    background-color: #0074bd;\n    position: fixed;\n    width: 100%;\n    z-index: 999;\n    display: none;\n}\n\n#mobile-nav ul {\n    background-color: #0074bd;\n    display: none;\n    margin: 0 1rem;\n    padding: 0;\n    position: relative;\n}\n\n#mobile-nav ul:first-child {\n    background-color: transparent;\n}\n\n#mobile-nav ul li {\n    border-top: 1px solid rgba(255, 255, 255, 0.075);\n    list-style: none;\n    margin-bottom: 0;\n    position: relative;\n}\n\n#mobile-nav ul li a {\n    color: #fff;\n    display: inline-block;\n    font-size: 0.8rem;\n    padding: 0.7rem 0;\n    text-decoration: none;\n    width: 100%;\n}\n\n#mobile-nav ul ul {\n    margin: 0;\n}\n\n#mobile-nav ul ul li {\n    border-top: none;\n    /*padding-left:1rem;*/\n}\n.h-tab {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 30px 15px 30px 30px;\n}\n.h-tab_tab-head {\n    /* display: flex; */\n    flex-direction: row;\n    margin: 0 0 5px 0 !important;\n    padding: 0 !important;\n    list-style: none;\n    width: 100%;\n}\n.h_tab_tab_head_li li {\n    font-size: 15px !important;\n    font-weight: 600;\n    margin: 0 0 1px 0 !important;\n    cursor: pointer;\n    padding: 0px 10px 0 0 !important;\n    height: 32px;\n    line-height: 31px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n}\n.h-tab_tab-head li {\n    font-size: 19px;\n    margin: 0 0 1px 0 !important;\n    cursor: pointer;\n    /* padding: 0px 100px 0 0 !important; */\n    height: 32px;\n    line-height: 31px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n}\n.h-tab_tab-head li:hover {\n    border-bottom: 3px solid #f5f5f5;\n    color: #000;\n}\n.h-tab_tab-head li.active {\n    border-bottom: 3px solid #0074bd;\n    background-color: #fff;\n    color: #0074bd;\n    display: block;\n}\n.h-tab_tab-head .h-tab_container {\n    width: 500px;\n    min-height: 200px;\n}\n.h-tab_tab-head .h-tab_content {\n    padding: 10px 20px;\n    display: none;\n}\n.h-tab_tab-head .h-tab_content > :first-child {\n    margin-top: 0;\n}\n.v-tab {\n    display: flex;\n}\n.v-tab_tab-head {\n    margin: 0;\n    padding: 0;\n    float: left;\n    list-style: none;\n    height: 32px;\n    width: 125px;\n}\n.v-tab_tab-head li {\n    font-size: 15px;\n    font-weight: 500;\n    margin-bottom: 10px !important;\n    cursor: pointer;\n    padding: 0px 4% 0 0 !important;\n    height: 40px;\n    line-height: 40px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n    width: 95%;\n    align-items: center;\n    display: flex;\n}\n.v-tab_tab-head li:hover {\n    background-color: #f5f5f5;\n    color: #000;\n    align-items: center;\n    /* display: flex; */\n    border-radius: 5px;\n}\n.v-tab_tab-head li.active {\n    /* border-right: 3px solid #94399e; */\n    background-color: #f2f2f2;\n    color: #0074bd;\n    display: block;\n    border-radius: 5px;\n    align-items: center;\n    /* display: flex; */\n}\n.v-tab_container {\n    border-left: 3px solid #0074bd;\n    float: left;\n    width: 970px;\n    min-height: 500px;\n}\n.v-tab_content {\n    padding: 10px 20px;\n    display: none;\n}\n.v-tab_content > :first-child {\n    margin-top: 0;\n}\n.megamenu_img {\n    margin-right: 7px;\n    background: #f0f0f0;\n    padding: 7px 6px 7px 6px;\n    border-radius: 5px;\n}\n.tab_color_1 {\n    color: #0074bd !important;\n    border-bottom: none !important;\n    font-weight: 700;\n    font-size: 17px;\n    padding: 0px 100px 0 0 !important;\n}\n.tab_color_2 {\n    color: #c4161c !important;\n    border-bottom: none !important;\n    font-weight: 700;\n    font-size: 17px;\n}\n.v-tab_tab-head li:after {\n    font-family: "themify";\n    font-size: 12px;\n    font-size: 0.75rem;\n    content: "\\e64b";\n    color: #000;\n    line-height: 3.5;\n    padding: 0;\n    margin: 0 0 0 5px;\n    font-weight: bold;\n    display: inline-block;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -webkit-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    transform: rotate(270deg);\n    float: right;\n}\n.link_page {\n    margin: 5px 0px 5px 0px;\n}\n.link_page a {\n    color: #000;\n    font-weight: 400;\n    font-size: 15px;\n    display: flex !important;\n    align-items: center;\n}\n.link_page img {\n    background: #f2f2f2;\n    padding: 6px 6px 6px 6px;\n    border-radius: 5px;\n    margin-right: 10px;\n}\n.set_other_gallery {\n    display: inline-flex;\n    /* float: inline-end; */\n}\n.h-tab {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n.h-tab_tab-head2 {\n    /* display: flex; */\n    flex-direction: row;\n    margin: 0 0 5px 0 !important;\n    padding: 0 !important;\n    list-style: none;\n    width: 100%;\n}\n.h_tab_tab_head_li li {\n    font-size: 15px !important;\n    font-weight: 600;\n    margin: 0 0 1px 0 !important;\n    cursor: pointer;\n    padding: 0px 10px 0 0 !important;\n    height: 32px;\n    line-height: 31px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n}\n.h-tab_tab-head2 li {\n    font-size: 19px;\n    margin: 0 0 1px 0 !important;\n    cursor: pointer;\n    /* padding: 0px 100px 0 0 !important; */\n    height: 32px;\n    line-height: 31px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n}\n.h-tab_tab-head2 li:hover {\n    border-bottom: 3px solid #f5f5f5;\n    color: #000;\n}\n.h-tab_tab-head2 li.active {\n    border-bottom: 3px solid #0074bd;\n    background-color: #fff;\n    color: #0074bd;\n    display: block;\n}\n.h-tab_tab-head2 .h-tab_container {\n    width: 500px;\n    min-height: 200px;\n}\n.h-tab_tab-head2 .h-tab_content2 {\n    padding: 10px 20px;\n    display: none;\n}\n.h-tab_tab-head2 .h-tab_content2 > :first-child {\n    margin-top: 0;\n}\n.v-tab {\n    display: flex;\n}\n.v-tab_tab-head2 {\n    margin: 0;\n    padding: 0;\n    float: left;\n    list-style: none;\n    height: 32px;\n    width: 125px;\n}\n.v-tab_tab-head2 li {\n    font-size: 15px;\n    font-weight: 500;\n    margin-bottom: 10px !important;\n    cursor: pointer;\n    padding: 0px 4% 0 0 !important;\n    height: 40px;\n    line-height: 40px;\n    color: #333;\n    border-bottom: 0px;\n    overflow: hidden;\n    position: relative;\n    width: 95%;\n    align-items: center;\n    display: flex;\n}\n.v-tab_tab-head2 li:hover {\n    background-color: #f5f5f5;\n    color: #000;\n    align-items: center;\n    /* display: flex; */\n    border-radius: 5px;\n}\n.v-tab_tab-head2 li.active {\n    /* border-right: 3px solid #94399e; */\n    background-color: #f2f2f2;\n    color: #0074bd;\n    display: block;\n    border-radius: 5px;\n    align-items: center;\n    /* display: flex; */\n}\n.v-tab_container {\n    border-left: 3px solid #0074bd;\n    float: left;\n    width: 100%;\n    min-height: 500px;\n}\n.v-tab_content2 {\n    padding: 10px 20px;\n    display: none;\n}\n.v-tab_content2 > :first-child {\n    margin-top: 0;\n}\n.megamenu_img {\n    margin-right: 10px;\n    background: #f0f0f0;\n    padding: 7px 6px 7px 6px;\n    border-radius: 5px;\n    width: 70px;\n}\n.tab_color_1 {\n    color: #0074bd !important;\n    border-bottom: none !important;\n    font-weight: 700;\n    font-size: 17px;\n    padding: 0px 100px 0 0 !important;\n}\n.tab_color_2 {\n    color: #c4161c !important;\n    border-bottom: none !important;\n    font-weight: 700;\n    font-size: 17px;\n}\n.v-tab_tab-head2 li:after {\n    font-family: "themify";\n    font-size: 12px;\n    font-size: 0.75rem;\n    content: "\\e64b";\n    color: #000;\n    line-height: 3.5;\n    padding: 0;\n    margin: 0 0 0 5px;\n    font-weight: bold;\n    display: inline-block;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -webkit-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    transform: rotate(270deg);\n    float: right;\n}\n.link_page {\n    margin: 5px 0px 5px 0px;\n}\n.link_page a {\n    color: #000;\n    font-weight: 400;\n    font-size: 13px;\n    display: flex !important;\n    align-items: center;\n}\n.link_page img {\n    background: #f2f2f2;\n    padding: 6px 6px 6px 6px;\n    border-radius: 5px;\n    margin-right: 10px;\n}\n.set_other_gallery {\n    display: inline-flex;\n    /* float: inline-end; */\n}\n\n.try-scrool {\n    overflow: auto;\n}\n/* width */\n.try-scrool::-webkit-scrollbar {\n    width: 7px !important;\n}\n\n/* Track */\n.try-scrool::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey !important;\n    border-radius: 10px !important;\n}\n\n/* Handle */\n.try-scrool::-webkit-scrollbar-thumb {\n    background: #0074bd !important;\n    border-radius: 5px !important;\n}\n\n/* Handle on hover */\n.try-scrool::-webkit-scrollbar-thumb:hover {\n    background: #b30000 !important;\n}\n\n#target_ {\n  /*background:#0099cc;*/\n  /*width:300px;*/\n  height:100px;\n  /*height:160px;*/\n  /*padding:5px;*/\n  display:none;\n  position:absolute;\n}\n\n.Hide_\n{\n  display:none;\n}\n'
      }}
    />
    <a
      id="quick-cart-pay"
      href="https://wa.me/+18722826124"
      className="wow tada animated animated pum-trigger animated"
      data-wow-delay="300ms"
      data-wow-iteration="infinite"
      data-wow-duration="2s"
      style={{
        visibility: "visible",
        animationDuration: "2s",
        animationDelay: "300ms",
        animationIterationCount: "infinite",
        animationName: "tada",
        cursor: "pointer"
      }}
      target="_blank"
      rel="nofollow"
    >
      <img
        className="left-image"
        src={Whatsapp}
        alt="Whatsapp"
        style={{ width: 70 }}
        width={70}
        height={70}
        loading="lazy"
      />
    </a>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 35px;\n  border: 3px solid #f1f1f1;\n  z-index: 999;\n  border-radius:10px;\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n  border-radius:10px;\n}\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #0074bd;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n"
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.fixed-button-position {\n    /* right: 0px; */\n    left: 35px;\n    top: 45%;\n    margin-top: 0px;\n    -ms-transform-origin: 100% 50%;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    z-index: 999997;\n    position: fixed;\n}\n.button-transform-position {\n    position: static;\n    cursor: pointer;\n    transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform-origin: 0% 0%;\n    -moz-transform-origin: 0% 0%;\n    -webkit-transform-origin: 0% 0%;\n    -o-transform-origin: 0% 0%;\n}\n\n.button-shadow-border {\n    cursor: pointer;\n    box-shadow: 0 0 3px #111111;\n    -moz-box-shadow: 0 0 3px #111111;\n    -webkit-box-shadow: 0 0 3px #111111;\n    border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -webkit-border-radius: 0 0 5px 5px;\n    vertical-align: top;\n    white-space: nowrap;\n    cursor: pointer;\n    padding: 3px 3px 3px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-align: center;\n    background-color: #000000;\n    border: 1px solid #000000;\n}\n.button-box-sizing {\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    -ms-box-sizing: content-box;\n    position: static;\n    line-height: 18px;\n    height: 18px;\n    padding: 8px 23px;\n    background-color: #C4161C;\n    color: #FFFFFF;\n    width: 80px;\n}\n\n    #quick-cart-pay {\n    border-radius: 50%;\n    top: 75%;\n    cursor: pointer;\n    display: block;\n    position: fixed;\n    left: 10px;\n    text-decoration: none;\n    z-index: 99;\n}\n"
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.tab_paragraph_home- p{color:#fff !important;}\n.tab_paragraph_home- span{color:#fff !important;}\n.tab_paragraph_home- li{color:#fff !important;font-family: Epilogue;font-size: 18px;font-style: normal;font-weight: 400;}\n .carousel-indicators .active {height:10px;width:40px;}\n .carousel-indicators [data-bs-target] {border-top:none;border-bottom:none;}\n .carousel-indicators [data-bs-target] {height: 10px;width: 10px;border-radius: 50px;}\n\n .home_slider button:nth-child(6) {\n  background: #0074BD;\n}\n.home_slider button:nth-child(5) {\n  background: #C4161C;\n}\n.home_slider button:nth-child(4) {\n  background: #FFCB05;\n}\n.home_slider button:nth-child(3) {\n  background: #C4161C;\n}\n.home_slider button:nth-child(2) {\n  background: #0074BD;\n}\n.home_slider button:nth-child(1) {\n  background: #FFCB05;\n}\n/***** Global Slide *****/\n.slide-right, .slide-left {\n  width: 100%;\n}\n.carousel-item \n{\n    margin-right:0% !important;\n}\n\n/***** Slide Right *****/\n.slide-right {\n  animation: 3s slide-right;\n}\n@keyframes  slide-right {\n  from {\n    margin-left: -100%;\n  }\n  to {\n    margin-left: 0%;\n  }\n}\n\n/***** Slide Left *****/\n.slide-left {\n  animation: 3s slide-left;\n}\n@keyframes  slide-left {\n  from {\n    margin-left: 100%;\n  }\n  to {\n    margin-left: 0%;\n  }\n}\n\n/***** Misc Styles *****/\n\n/***** FadeIn Underline *****/\n.fade-in {\n  animation: fadeIn ease 3s;\n}\n@keyframes  fadeIn{\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n"
      }}
    />

    </>
  )
}

export default header