import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/FoodSite01_redux/FS1_Slice';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Popular from './Popular';
import Gallery from './Gallery';
import Order from './Order';
import Footer from './Footer';

import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Fab,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';

function Index() {
  const navElements = useSelector((state) => state.FS1.navbar);
  const navDesign = useSelector((state) => state.FS1.navbarDesign);

  const homeElements = useSelector((state) => state.FS1.home);
  const homeElemDesign = useSelector((state) => state.FS1.homeDesign);

  const aboutElements = useSelector((state) => state.FS1.about);
  const aboutElemDesign = useSelector((state) => state.FS1.aboutDesign);

  const menuElements = useSelector((state) => state.FS1.menu);
  const menuElemDesign = useSelector((state) => state.FS1.menuDesign);

  const popularElements = useSelector((state) => state.FS1.popular);
  const popularElemDesign = useSelector((state) => state.FS1.popularDesign);

  const galleryElements = useSelector((state) => state.FS1.gallery);

  const orderElements = useSelector((state) => state.FS1.order);
  const orderElemDesign = useSelector((state) => state.FS1.orderDesign);

  const footerElements = useSelector((state) => state.FS1.footer);
  const footerElemDesign = useSelector((state) => state.FS1.footerDesign);

  const stars1 = () => {
    let stars = '';
    for (let i = 0; i < popularElements.card1_stars; i++) {
      stars += `<i class="fas fa-star"></i>`;
    }
    return stars;
  };

  const stars2 = () => {
    let stars = '';
    for (let i = 0; i < popularElements.card2_stars; i++) {
      stars += `<i class="fas fa-star"></i>`;
    }
    return stars;
  };
  const stars3 = () => {
    let stars = '';
    for (let i = 0; i < popularElements.card3_stars; i++) {
      stars += `<i class="fas fa-star"></i>`;
    }
    return stars;
  };
  const stars4 = () => {
    let stars = '';
    for (let i = 0; i < popularElements.card4_stars; i++) {
      stars += `<i class="fas fa-star"></i>`;
    }
    return stars;
  };

  useEffect(() => {
    console.log(homeElemDesign);
  }, [homeElemDesign]);

  const dispatch = useDispatch();

  const [completeCode, setCompleteCode] = useState();

  const [nav, setNav] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [menu, setMenu] = useState(false);
  const [popular, setPopular] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [order, setOrder] = useState(false);
  const [footer, setFooter] = useState(false);
  const [responsive, setResponsive] = useState(false);

  let navbarCode = `
  <!-- ====markup header element==== -->
  <header class="header">
    <!-- ---header logo--- -->
    <div class="header-logo">
      <img
        src="${navElements.nav_logo}"
        alt="logo-img"
        border="0"
      />
    </div>

    <!-- ---navigation--- -->
    <nav class="navbar">
      <ul>
        <li>
        ${
          navElements.nav_element1
            ? `<a class="active" href="#${navElements.nav_element1}">${navElements.nav_element1}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element2
            ? `<a  href="#${navElements.nav_element2}">${navElements.nav_element2}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element3
            ? `<a  href="#${navElements.nav_element3}">${navElements.nav_element3}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element4
            ? `<a  href="#${navElements.nav_element4}">${navElements.nav_element4}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element5
            ? `<a  href="#${navElements.nav_element5}">${navElements.nav_element5}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element6
            ? `<a  href="#${navElements.nav_element6}">${navElements.nav_element6}</a>`
            : ''
        }
        </li>
        
        ${
          navElements.nav_element7
            ? `<li><a href="#${navElements.nav_element7}">${navElements.nav_element7}</a></li>`
            : ''
        }
        ${
          navElements.nav_element8
            ? `<li><a href="#${navElements.nav_element8}">${navElements.nav_element8}</a></li>`
            : ''
        }

      </ul>
    </nav>

    <!-- ---menu bar--- -->
    <div id="menu-bar" class="fas fa-bars"></div>
  </header>
    `;
  let navbarDesign = `
    .header {

      ${navDesign.position === 'center' ? 'max-width: 1200px;' : 'right: 0;'}
      width: 100%;
      height: 6rem;
      padding: ${navDesign.padding}rem 8rem;
      background-color: ${navDesign.navBackgroundColor};
      -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 1rem;
      position: fixed;
      top: 0;
      z-index: 100;
    }

    .header .header-logo {
      text-align: center;
      padding: 0 1rem;
    }

    .header .header-logo img {
      width: 4rem;
      height: auto;
      cursor: pointer;
    }

    .header .navbar {
      padding: 0 1rem;
    }

    .header .navbar ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 1rem;
    }

    .header .navbar ul li {
      text-align: center;
    }

    .header .navbar ul li a {
      font-size: ${navDesign.fontSize}rem;
      font-family: ${navDesign.fontFamily}
      text-transform: capitalize;
      margin: 0 ${navDesign.margin}rem;
      font-weight: ${navDesign.fontWeight};
      color: ${navDesign.navTextColor};
    }

    .header .navbar ul li a:hover,
    .header .navbar ul li a.active {
      color: ${navDesign.navHoverColor};
      border-bottom: 0.2rem solid ${navDesign.navHoverColor};
    }

    .header #menu-bar {
      font-size: 3rem;
      padding: 1rem;
      cursor: pointer;
      display: none;
    }
    `;
  let homeCode = `
  <main>
      <!-- ====markup home section==== -->
      <section id="home" class="home">
        <div class="home-desc">
          <h1>${homeElements.home_heading}</h1>
          <p>
            ${homeElements.home_paragraph}
          </p>
          <input type="button" value=${homeElements.home_button} />
        </div>

        <div class="home-image">
          <img
            src="${homeElements.home_backgroundImage}"
            alt="home-img"
            border="0"
          />
        </div>
      </section>
  `;
  let homeDesign = `
  .home {
    margin: ${homeElemDesign.margin}rem 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 0;
  }

  .home .home-desc {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / 7;
    text-align: ${homeElemDesign.text_align};
  }

  .home .home-desc h1 {
    color: #000000;
    padding: 1rem;
    font-size: ${homeElemDesign.heading_fontSize}rem;
    font-weight: ${homeElemDesign.heading_fontWeight};
    text-transform: capitalize;
    text-align: center;
  }

  .home .home-desc p {
    color: #333333;
    padding: 1rem;
    font-size: ${homeElemDesign.paragraph_fontSize}rem;
    line-height: 1.5;
    font-weight: ${homeElemDesign.paragraph_fontWeight};
    text-transform: capitalize;
    text-align: left;
  }

  .home .home-desc input {
    margin-top: 3rem;
  }

  .home .home-image {
    grid-column: 7 / -1;
    text-align: center;
  }

  .home .home-image img {
    width: 100%;
  }

  .home::after,
  .home::before {
    content: '';
    position: absolute;
    top: 0;
    right: -6rem;
    background-color: ${homeElemDesign.animation_background_color};
    border-radius: 3rem;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: 40rem;
    width: 70rem;
    z-index: -2;
    -webkit-animation: animate 1.5s linear 1;
    animation: animate 1.5s linear 1;
  }

  .home::before {
    top: -7rem;
    background-color: #ffffff;
    -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  @-webkit-keyframes animate {
    0% {
      -webkit-transform: rotate(50deg) translateY(-40rem);
      transform: rotate(50deg) translateY(-40rem);
    }
  }

  @keyframes animate {
    0% {
      -webkit-transform: rotate(50deg) translateY(-40rem);
      transform: rotate(50deg) translateY(-40rem);
    }
  }
  `;
  let aboutCode = `
  <!-- ====markup about section==== -->
        <section id="about" class="about">
          <div class="about-image">
            <img
              src="${aboutElements.about_Image_Frame}"
              alt="about-frame-img"
              border="0"
            />
          </div>
  
          <div class="about-desc">
            <h2>${aboutElements.about_heading}</h2>
            <p>
              ${aboutElements.about_paragraph1}
            </p>
            <p>
              ${aboutElements.about_paragraph2}
            </p>
  
            <input type="button" value=${aboutElements.about_button} />
          </div>
        </section>
  `;
  let aboutDesign = `
  .about {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [12];
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    min-height: 50rem;
  }

  .about .about-image {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / 7;
    height: 100%;
    background-image: url(${aboutElements.about_Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-mix-blend-mode: screen;
  }

  .about .about-image img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .about .about-desc {
    grid-column: 7 / -1;
  }

  .about .about-desc h2 {
    color: #000000;
    padding: ${aboutElemDesign.padding}rem;
    font-size: ${aboutElemDesign.heading_fontSize}rem;
    font-weight: ${aboutElemDesign.heading_fontWeight};
    text-transform: capitalize;
    text-align: center;
  }

  .about .about-desc p {
    color: #333333;
    padding: ${aboutElemDesign.padding}rem;
    font-size: ${aboutElemDesign.paragraph_fontSize}rem;
    font-weight: ${aboutElemDesign.paragraph_fontWeight};
    line-height: 1.5;
    text-transform: capitalize;
    text-align: ${aboutElemDesign.text_align};
  }

  .about .about-desc input {
    margin: 2rem 3rem;
  }
  `;
  let menuCode = `
  <!-- ====markup menu section==== -->
  <section id="menu" class="menu">
    <h2>${menuElements.menu_heading} <span>menu</span></h2>
    <div class="catagory">
      <input type="button" value=${menuElements.menu_catagory1} />
      <input type="button" class="active" value=${menuElements.menu_catagory2} />
      <input type="button" value=${menuElements.menu_catagory3} />
      <input type="button" value=${menuElements.menu_catagory4} />
    </div>

    <div class="catagory-img">
      <img
        id="c-img"
        src="${menuElements.menu_catagory2_img}"
        alt="Net Error"
      />
    </div>

    <!-- ---info content 01--- -->
    <div class="menu-content">
      <div class="info">
        <h3><span>01.</span>${menuElements.menu_info1_heading}</h3>
        <p>
          ${menuElements.menu_info1_paragraph}
        </p>
      </div>

      <!-- ---info content 02--- -->
      <div class="info">
        <h3><span>02.</span>${menuElements.menu_info2_heading}</h3>
        <p>
          ${menuElements.menu_info2_paragraph}
        </p>
      </div>

      <!-- ---info content 03--- -->
      <div class="info">
        <h3><span>03.</span>${menuElements.menu_info3_heading}</h3>
        <p>
          ${menuElements.menu_info3_paragraph}
        </p>
      </div>

      <!-- ---info content 04--- -->
      <div class="info">
        <h3><span>04.</span>${menuElements.menu_info4_heading}</h3>
        <p>
          ${menuElements.menu_info4_paragraph}
        </p>
      </div>
    </div>
  </section>
  `;
  let menuDesign = `
  .menu {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr);
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
  }

  .menu h2 {
    grid-column: 1 / -1;
  }

  .menu .catagory {
    grid-column: 1 / -1;
    padding: 2rem 0;
    margin-bottom: ${menuElemDesign.buttons_margin_bottom}rem;
    border-top: 0.3rem ${menuElemDesign.buttons_headings_border_type} rgba(0, 0, 0, 0.2);
    border-bottom: 0.3rem ${menuElemDesign.buttons_headings_border_type} rgba(0, 0, 0, 0.2);
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .menu .catagory input.active {
    color: #ffffff;
    background-color: #f7ca3e;
  }
  
  .menu .catagory-img {
    padding: ${menuElemDesign.image_padding}rem;
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / 7;
    -webkit-box-shadow: 0.2rem 0.4rem 1rem #333333;
    box-shadow: 0.2rem 0.4rem 1rem #333333;
    border-radius: ${menuElemDesign.border_radius_frame}rem;
    height: 100%;
  }

  .menu .catagory-img img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: ${menuElemDesign.border_radius_img}rem;
  }

  .menu .menu-content {
    grid-column: 7 / -1;
    padding: 1rem;
  }

  .menu .menu-content .info {
    text-align: left;
  }

  .menu .menu-content .info h3 {
    padding-top: 1rem;
    font-size: ${menuElemDesign.info_heading_fontSize}rem;
    color: #000000;
    font-weight: ${menuElemDesign.info_heading_fontWeight};
    text-transform: capitalize;
  }

  .menu .menu-content .info h3 span {
    color: #f7ca3e;
    padding-right: 1rem;
  }

  .menu .menu-content .info p {
    color: #333333;
    padding: 1rem;
    font-size: ${menuElemDesign.info_paragraph_fontSize}rem;
    font-weight: ${menuElemDesign.info_paragraph_fontWeight};
    line-height: 1.5;
    text-transform: capitalize;
    text-align: ${menuElemDesign.text_align};
    padding: 0 4rem 0;
  }
  `;
  let popularCode = `
  <!-- ====markup popular section==== -->
        <section id="popular" class="popular">
          <h2>most <span>popular</span> foods</h2>
  
          <div class="popular-content">
            <!-- ---card 01--- -->
            <div class="p-card">
              <img src="${popularElements.card1_img}" alt="Net Error" />
              <h4>${popularElements.card1_heading}</h4>
              <div class="review">
                ${stars1()}
              </div>
              <p class="price">$ ${popularElements.card1_price}</p>
              <input type="button" value="${popularElements.cards_button}" />
            </div>
  
            <!-- ---card 02--- -->
            <div class="p-card">
              <img src="${popularElements.card2_img}" alt="Net Error" />
              <h4>${popularElements.card2_heading}</h4>
              <div class="review">
              ${stars2()}
              </div>
              <p class="price">$ ${popularElements.card2_price}</p>
              <input type="button" value="${popularElements.cards_button}" />
            </div>
  
            <!-- ---card 03--- -->
            <div class="p-card">
              <img src="${popularElements.card3_img}" alt="Net Error" />
              <h4>${popularElements.card3_heading}</h4>
              <div class="review">

              ${stars3()}
              </div>
              <p class="price">$ ${popularElements.card3_price}</p>
              <input type="button" value="${popularElements.cards_button}" />
            </div>
  
            <!-- ---card 04--- -->
            <div class="p-card">
              <img src="${popularElements.card4_img}" alt="Net Error" />
              <h4>${popularElements.card4_heading}</h4>
              <div class="review">
              ${stars4()}
              </div>
              <p class="price">$ ${popularElements.card4_price}</p>
              <input type="button" value="${popularElements.cards_button}" />
            </div>
          </div>
        </section>
  `;
  let popularDesign = `
  .popular {
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(255, 255, 255, 0.7)),
        to(rgba(255, 255, 255, 0.7))
      ),
      url(${popularElements.background_Picture});
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
      ),
      url(${popularElements.background_Picture});
    background-repeat: no-repeat;
    background-size: content;
    background-position: center;
    background-attachment: fixed;
  }


 
  .popular h2 {
    margin-top: ${popularElemDesign.main_heading_marginTop}rem;
  }

  .popular .popular-content {
    text-align: center;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr);
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    gap: 4rem;
  }

  .popular .popular-content .p-card {
    padding: ${popularElemDesign.card_padding}rem;
    background-color: ${popularElemDesign.card_background_color};
    -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    border-radius: ${popularElemDesign.card_border_radius}rem;
    -webkit-transition: all ${popularElemDesign.transition_time}s linear;
    transition: all ${popularElemDesign.transition_time}s linear;
  }

  .popular .popular-content .p-card img {
    display: block;
    width: 100%;
    height: 100%;
    border: 0.1rem solid #f7ca3e;
  }

  .popular .popular-content .p-card h4 {
    color: #000000;
    padding: 1rem;
    font-size: ${popularElemDesign.card_heading_fontSize}rem;
    font-weight: ${popularElemDesign.card_heading_fontWeight};
    text-transform: capitalize;
    text-align: center;
  }

  .popular .popular-content .p-card .review {
    text-align: center;
  }

  .popular .popular-content .p-card .review i {
    color: ${popularElemDesign.stars_color};
    font-size: ${popularElemDesign.stars_fontSize}rem;
  }

  .popular .popular-content .p-card .price {
    padding: 1rem;
    font-size: ${popularElemDesign.price_fontSize}rem;
  }

  .popular .popular-content .p-card input {
    margin-bottom: 1rem;
  }

  .popular .popular-content .p-card:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    -webkit-box-shadow: 0.4rem 0.8rem 2rem #333333;
    box-shadow: 0.4rem 0.8rem 2rem #333333;
  }

  .popular .popular-content .p-card:nth-child(odd) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 5;
    grid-column: 2 / 7;
  }

  .popular .popular-content .p-card:nth-child(even) {
    -ms-grid-column: 7;
    -ms-grid-column-span: 5;
    grid-column: 7 / 12;
  }
  `;
  let galleryCode = `
  <!-- ====markup gallery section==== -->
        <section id="gallery" class="gallery">
          <h2>our food <span>gallery</span></h2>
  
          <div class="gallery-content">
            <!-- ---gallery card 01--- -->
            <div class="g-card">
              <img src="${galleryElements.card1_img}" alt="Net Error" />
              <h3>${galleryElements.card1_heading}</h3>
            </div>
  
            <!-- ---gallery card 02--- -->
            <div class="g-card">
              <img src="${galleryElements.card2_img}" alt="Net Error" />
              <h3>${galleryElements.card2_heading}</h3>
            </div>
  
            <!-- ---gallery card 03--- -->
            <div class="g-card">
              <img src="${galleryElements.card3_img}" alt="Net Error" />
              <h3>${galleryElements.card3_heading}</h3>
            </div>
  
            <!-- ---gallery card 04--- -->
            <div class="g-card">
              <img src="${galleryElements.card4_img}" alt="Net Error" />
              <h3>${galleryElements.card4_heading}</h3>
            </div>
  
            <!-- ---gallery card 05--- -->
            <div class="g-card">
              <img src="${galleryElements.card5_img}" alt="Net Error" />
              <h3>${galleryElements.card5_heading}</h3>
            </div>
  
            <!-- ---gallery card 06--- -->
            <div class="g-card">
              <img src="${galleryElements.card6_img}" alt="Net Error" />
              <h3>${galleryElements.card6_heading}</h3>
            </div>
          </div>
        </section>
  `;
  let galleryDesign = `
  .gallery .gallery-content {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr);
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    gap: 4rem;
  }

  .gallery .gallery-content .g-card {
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .gallery .gallery-content .g-card img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .gallery .gallery-content .g-card h3 {
    position: absolute;
    top: 120%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #000000;
    padding: 1rem;
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    color: #fff;
    opacity: 0.5;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .gallery .gallery-content .g-card::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .gallery .gallery-content .g-card:hover h3 {
    top: 50%;
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .gallery .gallery-content .g-card:hover::before {
    top: 0;
  }

  .gallery .gallery-content .g-card:nth-child(3n + 1) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 4;
    grid-column: 1 / 5;
  }

  .gallery .gallery-content .g-card:nth-child(3n + 2) {
    -ms-grid-column: 5;
    -ms-grid-column-span: 4;
    grid-column: 5 / 9;
  }

  .gallery .gallery-content .g-card:nth-child(3n + 3) {
    grid-column: 9 / -1;
  }
  `;
  let orderCode = `
  <!-- ====markup order section==== -->
        <section id="order" class="order">
          <h2>make an <span>order</span></h2>
  
          <div class="order-content">
            <form action="#" class="order-form" autocomplete="off">
              <input type="text" placeholder="${orderElements.input_feild1}" required />
              <input type="email" placeholder="${orderElements.input_feild2}" required />
              <input type="password" placeholder="${orderElements.input_feild3}" required />
              <textarea cols="30" rows="8" placeholder="${orderElements.input_feild4}"></textarea>
              <textarea cols="30" rows="8" placeholder="${orderElements.input_feild5}"></textarea>
  
              <button type="submit">${orderElements.button}</button>
            </form>
            <img src="${orderElements.image}" alt="Net Error" />
          </div>
        </section>
        </main>
  `;
  let orderDesign = `
.order {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr);
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 1rem;
}

.order h2 {
  grid-column: 1 / -1;
}

.order .order-content {
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2 / 12;
  -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr);
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 1rem;
  gap: 0;
}

.order .order-content .order-form {
  -ms-grid-column: 1;
  -ms-grid-column-span: 6;
  grid-column: 1 / 7;
  padding: ${orderElemDesign.form_padding}rem;
  text-align: ${orderElemDesign.form_textAlign};
}

.order .order-content .order-form input,
.order .order-content .order-form textarea {
  display: block;
  width: 100%;
  font-size: ${orderElemDesign.input_feilds_fontSize}rem;
  padding: ${orderElemDesign.input_feilds_padding}rem 1rem;
  margin: ${orderElemDesign.input_feilds_margin}rem 0;
  text-transform: inherit;
  background-color: ${orderElemDesign.input_feilds_backgroundColor};
}

.order .order-content .order-form input::-webkit-input-placeholder,
.order .order-content .order-form textarea::-webkit-input-placeholder {
  text-transform: capitalize;
}

.order .order-content .order-form input:-ms-input-placeholder,
.order .order-content .order-form textarea:-ms-input-placeholder {
  text-transform: capitalize;
}

.order .order-content .order-form input::-ms-input-placeholder,
.order .order-content .order-form textarea::-ms-input-placeholder {
  text-transform: capitalize;
}

.order .order-content .order-form input::placeholder,
.order .order-content .order-form textarea::placeholder {
  text-transform: capitalize;
}

.order .order-content .order-form textarea {
  max-width: 100%;
  resize: none;
}

.order .order-content img {
  grid-column: 7 / -1;
  display: block;
  width: 100%;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;}
  `;
  let footerCode = `
  <!-- ====markup footer element==== -->
    <footer class="footer">
      <div class="contact-info">
        <h4>${footerElements.section1_heading}</h4>
        <p><i class="fas fa-location-dot"></i><span>${footerElements.section1_paragraph1}</span></p>
        <p><i class="fas fa-envelope"></i> <span>${footerElements.section1_paragraph2}</span></p>
        <p><i class="fas fa-phone"></i> <span>${footerElements.section1_paragraph3}</span></p>
        <p><i class="fas fa-phone"></i> <span>${footerElements.section1_paragraph4}</span></p>
      </div>

      <div class="location">
        <h4>${footerElements.section2_heading}</h4>
        <ul>
          <li><a href="#">${footerElements.section2_paragraph1}</a></li>
          <li><a href="#">${footerElements.section2_paragraph2}</a></li>
          <li><a href="#">${footerElements.section2_paragraph3}</a></li>
          <li><a href="#">${footerElements.section2_paragraph4}</a></li>
        </ul>
      </div>

      <div class="quick-links">
        <h4>${footerElements.section3_heading}</h4>
        <ul>
          <li><a href="#${footerElements.section3_paragraph1}">${footerElements.section3_paragraph1}</a></li>
          <li><a href="#${footerElements.section3_paragraph2}">${footerElements.section3_paragraph2}</a></li>
          <li><a href="#${footerElements.section3_paragraph3}">${footerElements.section3_paragraph3}</a></li>
          <li><a href="#${footerElements.section3_paragraph4}">${footerElements.section3_paragraph4}</a></li>
          <li><a href="#${footerElements.section3_paragraph5}">${footerElements.section3_paragraph5}</a></li>
          <li><a href="#${footerElements.section3_paragraph6}">${footerElements.section3_paragraph6}</a></li>

        </ul>
      </div>

      <div class="follow-us">
        <h4>${footerElements.section4_heading}</h4>
        <ul>
          <li>
            <a href="${footerElements.facebook_link}" target="blank">facebook</a>
          </li>
          <li>
            <a href="${footerElements.instagram_link}" target="blank">instagram</a>
          </li>
          <li><a href="${footerElements.twitter_link}" target="blank">twitter</a></li>
          <li>
            <a href="${footerElements.linkdin_link}" target="blank">linkedin</a>
          </li>
        </ul>
      </div>

      <div class="copyright">
        <p>${footerElements.copyright}</p>
      </div>
    </footer>
  `;
  let footerDesign = `
  .footer {
    padding: ${footerElemDesign.padding}rem 1rem;
    background-color: ${footerElemDesign.background_color};
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr);
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  .footer .contact-info {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1 / 4;
    padding: 1rem;
    min-height: 32rem;
  }

  .footer .contact-info p {
    padding: 1rem;
    font-size: ${footerElemDesign.description_fontSize}rem;
  }

  .footer .contact-info p i {
    font-size: ${footerElemDesign.icon_fontSize}rem;
    color: ${footerElemDesign.icon_color};
  }

  .footer .contact-info p span {
    padding-left: 1rem;
    color: ${footerElemDesign.description_color};
  }

  .footer .contact-info p:first-of-type i {
    width: 1.6rem;
  }

  .footer .contact-info p:first-of-type span {
    text-transform: capitalize;
  }

  .footer .location {
    -ms-grid-column: 4;
    -ms-grid-column-span: 3;
    grid-column: 4 / 7;
    padding: 1rem;
    min-height: 32rem;
  }

  .footer .location ul {
    padding: 1rem;
  }

  .footer .location ul li {
    padding: 1rem 0;
  }

  .footer .quick-links {
    -ms-grid-column: 7;
    -ms-grid-column-span: 3;
    grid-column: 7 / 10;
    padding: 1rem;
    min-height: 32rem;
  }

  .footer .quick-links ul {
    padding: 1rem;
  }

  .footer .quick-links ul li {
    padding: 1rem 0;
  }

  .footer .follow-us {
    grid-column: 10 / -1;
    padding: 1rem;
    min-height: 32rem;
  }

  .footer .follow-us ul {
    padding: 1rem;
  }

  .footer .follow-us ul li {
    padding: 1rem 0;
  }

  .footer .copyright {
    grid-column: 1 / -1;
    border-top: 0.1rem solid #f7ca3e;
  }

  .footer .copyright p {
    font-size: ${footerElemDesign.copyright_fontSize}rem;
    color: ${footerElemDesign.copyright_color};
    padding-top: 1rem;
    text-transform: capitalize;
    text-align: center;
  }

  .footer .copyright p span {
    color: #f7ca3e;
    font-weight: 500;
  }

  .footerTitle {
    font-size: 2.4rem;
    color: #ffffff;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    padding: 1rem;
  }

  .footerLink {
    font-size: 1.4rem;
    color: #ffffff;
    text-transform: capitalize;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .footerLink:hover {
    color: #f7ca3e;
  }

  .footerTitle,
  .footer .contact-info h4,
  .footer .location h4,
  .footer .quick-links h4,
  .footer .follow-us h4 {
    font-size: 2.4rem;
    color: #ffffff;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    padding: 1rem;
  }

  .footerLink,
  .footer .location ul li a,
  .footer .quick-links ul li a,
  .footer .follow-us ul li a {
    font-size: 1.4rem;
    color: #ffffff;
    text-transform: capitalize;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .footerLink:hover,
  .footer .location ul li a:hover,
  .footer .quick-links ul li a:hover,
  .footer .follow-us ul li a:hover {
    color: #f7ca3e;
  }
  `;
  let jsCode = `
  <script>
  // selecting all necessary dom element

  //select for menu
  const menuBar = document.querySelector('#menu-bar');
  const navbar = document.querySelector('.navbar');

  //select for menu image
  const catagory = document.querySelectorAll('.catagory input');
  const cataImg = document.querySelector('#c-img');

  // select for connect section with nav item
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  // event listener for toggle menu
  menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // scroll event
  document.addEventListener('scroll', () => {
    menuBar.classList.remove('fa-times');
    menuBar.classList.remove('active');
    navbar.classList.remove('active');

    // conect With nav link
    connectSecWithNavLink();
  });

  // controlling menu image
  catagory.forEach((element) => {
    element.addEventListener('click', () => {
      catagory.forEach((ele) => {
        ele.classList.remove('active');
      });

      let values = element.value;
      element.classList.add('active');
      if (values === '${menuElements.menu_catagory1}') {
        cataImg.src = '${menuElements.menu_catagory1_img}';
      } else if (values === '${menuElements.menu_catagory2}') {
        cataImg.src = '${menuElements.menu_catagory2_img}';
      } else if (values === '${menuElements.menu_catagory3}') {
        cataImg.src = '${menuElements.menu_catagory3_img}';
      } else if (values === '${menuElements.menu_catagory4}') {
        cataImg.src = '${menuElements.menu_catagory4_img}';
      }
    });
  });

  // handeling scroll event and mar nav item
  const connectSecWithNavLink = () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      let linkAttribute = link.attributes.href.value;
      link.classList.remove('active');

      if (linkAttribute === '#' + current) {
        link.classList.add('active');
      }
    });
  };
</script>
  `;
  let responsiveDesign = `
  @media screen and (max-width: 991px) {
    .header {
      padding: 1rem 5rem;
    }
    .menu .catagory-img {
      -ms-grid-column: 1;
      -ms-grid-column-span: 5;
      grid-column: 1 / 6;
    }
    .menu .menu-content {
      grid-column: 6 / -1;
    }
    .gallery .gallery-content {
      gap: 3rem;
    }
    .gallery .gallery-content .g-card:nth-child(2n + 1) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 6;
      grid-column: 1 / 7;
    }
    .gallery .gallery-content .g-card:nth-child(2n + 2) {
      grid-column: 7 / -1;
    }
    .order .order-content {
      grid-column: 1 / -1;
    }
    .order .order-content .order-form {
      -ms-grid-column: 1;
      -ms-grid-column-span: 7;
      grid-column: 1 / 8;
    }
    .order .order-content img {
      grid-column: 8 / -1;
    }
    .footer .contact-info {
      -ms-grid-column: 2;
      -ms-grid-column-span: 5;
      grid-column: 2 / 7;
    }
    .footer .location {
      -ms-grid-column: 7;
      -ms-grid-column-span: 5;
      grid-column: 7 / 12;
    }
    .footer .quick-links {
      -ms-grid-column: 2;
      -ms-grid-column-span: 5;
      grid-column: 2 / 7;
    }
    .footer .follow-us {
      -ms-grid-column: 7;
      -ms-grid-column-span: 5;
      grid-column: 7 / 12;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 55%;
    }
    .header {
      padding: 1rem 3rem;
    }
    .header .navbar {
      padding: 2rem 0;
      display: block;
      width: 40%;
      height: calc(100vh - 6rem);
      background-color: #f0f8ff;
      position: absolute;
      top: 6rem;
      right: -100%;
      z-index: 100;
      border-bottom-left-radius: 50%;
      -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }
    .header .navbar.active {
      right: 0;
    }
    .header .navbar ul {
      margin-top: 3rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      gap: 4rem;
    }
    .header .navbar ul li {
      width: 100%;
    }
    .header #menu-bar {
      display: block;
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }
    .header #menu-bar.active {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      color: #f7ca3e;
    }
    .home .home-desc {
      grid-column: 1 / -1;
    }
    .home .home-desc p {
      text-align: center;
      padding: 1rem 3rem;
    }
    .home .home-image {
      grid-column: 1 / -1;
    }
    .home .home-image img {
      width: 80%;
    }
    .home::after,
    .home::before {
      display: none;
    }
    .about .about-image {
      grid-column: 1 / -1;
    }
    .about .about-desc {
      grid-column: 1 / -1;
      text-align: center;
    }
    .about .about-desc p {
      text-align: center;
    }
    .menu .catagory-img {
      grid-column: 1 / -1;
    }
    .menu .menu-content {
      grid-column: 1 / -1;
    }
    .popular .popular-content .p-card:nth-child(odd) {
      -ms-grid-column: 2;
      -ms-grid-column-span: 10;
      grid-column: 2 / 12;
    }
    .popular .popular-content .p-card:nth-child(even) {
      -ms-grid-column: 2;
      -ms-grid-column-span: 10;
      grid-column: 2 / 12;
    }
    .gallery .gallery-content {
      gap: 2rem;
    }
    .gallery .gallery-content .g-card:nth-child(n) {
      grid-column: 1 / -1;
    }
    .order .order-content {
      grid-column: 1 / -1;
    }
    .order .order-content .order-form {
      grid-column: 1 / -1;
    }
    .order .order-content img {
      display: none;
    }
    .footer .contact-info {
      min-height: auto;
      grid-column: 1 / -1;
    }
    .footer .location {
      min-height: auto;
      grid-column: 1 / -1;
    }
    .footer .quick-links {
      min-height: auto;
      grid-column: 1 / -1;
    }
    .footer .follow-us {
      min-height: auto;
      grid-column: 1 / -1;
    }
  }

  @media screen and (max-width: 450px) {
    html {
      font-size: 50%;
    }
    .header {
      padding: 1rem 2rem;
    }
    .header .navbar {
      width: 70%;
    }
  }
  `;

  const [sections, setSections] = useState(['Navbar', 'Home']);
  const [extend, setExtend] = useState([]);

  const handleSectionsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSections((prev) => [...prev, value]);
    } else {
      setSections((prev) => prev.filter((item) => item !== value));
    }
  };

  const sectionsCode = (sections) => {
    console.log('sections', sections);
    sections.forEach((section) => {
      if (section == 'Navbar') {
        setNav(true);
      } else if (section === 'Home') {
        setHome(true);
      } else if (section === 'About') {
        setAbout(true);
      } else if (section === 'Menu') {
        setMenu(true);
      } else if (section === 'Popular') {
        setPopular(true);
      } else if (section === 'Gallery') {
        setGallery(true);
      } else if (section === 'Order') {
        setOrder(true);
      } else if (section === 'Footer') {
        setFooter(true);
      }
    });
    let code = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>food-website</title>
    <link
      rel="shortcut icon"
      href="https://i.ibb.co/Vgf46Dw/title-logo.png"
      type="image/x-icon"
    />

    <!-- ----linked font awesome cdn---- -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <style>

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500&family=Roboto:wght@100;300;400;500;700&display=swap');
    .buttonStyle,
    ${sections.includes('Home') ? '.home .home-desc input,' : ''}
    ${sections.includes('About') ? '.about .about-desc input,' : ''}
    ${sections.includes('Menu') ? '.menu .catagory input,' : ''}
    ${
      sections.includes('Popular')
        ? '.popular .popular-content .p-card input,'
        : ''
    }
    ${
      sections.includes('Order')
        ? '.order .order-content .order-form button'
        : ''
    }{
      padding: 0.5rem 3rem;
      border: 0.2rem solid #f7ca3e;
      border-radius: 50rem;
      font-size: 2rem;
      color: #000000;
      cursor: pointer;
      text-transform: capitalize;
      background-color: transparent;
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }

    .buttonStyle:hover,
    ${sections.includes('Home') ? '.home .home-desc input:hover,' : ''}
    ${sections.includes('About') ? '.about .about-desc input:hover,' : ''}
    ${sections.includes('Menu') ? '.menu .catagory input:hover,' : ''}
    ${
      sections.includes('Popular')
        ? '.popular .popular-content .p-card input:hover,'
        : ''
    }
    ${
      sections.includes('Order')
        ? '.order .order-content .order-form button:hover'
        : ''
    } {
      color: #ffffff;
      background-color: #f7ca3e;
    }

    .sectionHeading,
    ${sections.includes('Menu') ? '.menu h2,' : ''}
    ${sections.includes('Popular') ? '.popular h2,' : ''}
    ${sections.includes('Gallery') ? '.gallery h2,' : ''}
    ${sections.includes('Order') ? '.order h2' : ''} {
      font-size: 4rem;
      padding: 2rem;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
      color: #000000;
    }
    
    
    

    .sectionHeading span,
    ${sections.includes('Menu') ? '.menu h2 span,' : ''}
    ${sections.includes('Popular') ? '.popular h2 span,' : ''}
    ${sections.includes('Gallery') ? '.gallery h2 span,' : ''}
    ${sections.includes('Order') ? '.order h2 span' : ''} {
      padding: 0 1rem;
      color: #f7ca3e;
    }
    
    * {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      border: none;
      font-family: 'Roboto', sans-serif;
    }

    html {
      font-size: 62.5%;
      overflow-x: hidden;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    html::-webkit-scrollbar {
      width: 1.4rem;
    }

    html::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }

    html::-webkit-scrollbar-thumb {
      background: #f7ca3e;
    }

    body {
      max-width: 1200px;
      margin: auto;
      background-color: #ffffff;
      position: relative;
      overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: 'Oswald', sans-serif;
    }

    a {
      text-decoration: none;
    }

    a,
    button,
    input[button],
    input[submit] {
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }

    ul {
      list-style-type: none;
    }

    section {
      padding: 3rem 1rem;
    }



    .buttonStyle {
      padding: 0.5rem 3rem;
      border: 0.2rem solid #f7ca3e;
      border-radius: 50rem;
      font-size: 2rem;
      color: #000000;
      cursor: pointer;
      text-transform: capitalize;
      background-color: transparent;
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }

    .buttonStyle:hover {
      color: #ffffff;
      background-color: #f7ca3e;
    }

    .sectionHeading {
      font-size: 4rem;
      padding: 2rem;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
      color: #000000;
    }

    .sectionHeading span {
      padding: 0 1rem;
      color: #f7ca3e;
    }



      ${nav ? navbarDesign : ''}
      ${home ? homeDesign : ''}
      ${about ? aboutDesign : ''}
      ${menu ? menuDesign : ''}
      ${popular ? popularDesign : ''}
      ${gallery ? galleryDesign : ''}
      ${order ? orderDesign : ''}
      ${footer ? footerDesign : ''}

      ${responsive ? responsiveDesign : ''}


      </style>
    <body>
        ${nav ? navbarCode : ''} 
        ${home ? homeCode : ''}
        ${about ? aboutCode : ''}
        ${menu ? menuCode : ''}
        ${popular ? popularCode : ''}
        ${gallery ? galleryCode : ''}
        ${order ? orderCode : ''}
        ${footer ? footerCode : ''}


       ${jsCode} 
    </body>
  </html>
  
  <!-- happy coding!!!! -->
  
      `;

    setCompleteCode(code);
    console.log('code', code);
    dispatch(finalCode(code));
  };

  const handleCustomeSection = (section) => {
    if (!extend.includes(section)) {
      setExtend((prev) => [...prev, section]);
    } else {
      setExtend((prev) => prev.filter((item) => item !== section));
    }
  };

  return (
    <React.Fragment>
      <Fab
        color='secondary'
        aria-label='add'
        sx={{
          height: 100,
          position: 'absolute',
          bottom: '1rem',
          alignSelf: 'flex-end',
          zIndex: 100,
          width: 100,
        }}>
        <Link to='/FoodSite01'>
          <h4>Preview</h4>
        </Link>
      </Fab>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}>
        <FormGroup
          sx={{
            border: '1px solid',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            padding: 2,
            width: 300,
            '& > :not(style)': { m: 1 },
          }}>
          <FormControlLabel
            disabled
            control={<Checkbox defaultChecked />}
            label='Navbar'
            value='Navbar'
          />
          <FormControlLabel
            disabled
            control={<Checkbox defaultChecked />}
            label='Home'
            value='Home'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('About')}
                onChange={handleSectionsChange}
              />
            }
            label='About'
            value='About'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Menu')}
                onChange={handleSectionsChange}
              />
            }
            label='Menu'
            value='Menu'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Popular')}
                onChange={handleSectionsChange}
              />
            }
            label='Popular'
            value='Popular'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Gallery')}
                onChange={handleSectionsChange}
              />
            }
            label='Gallery'
            value='Gallery'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Order')}
                onChange={handleSectionsChange}
              />
            }
            label='Order'
            value='Order'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Footer')}
                onChange={handleSectionsChange}
              />
            }
            label='Footer'
            value='Footer'
          />

          <Button
            variant='contained'
            color='secondary'
            onClick={() => {
              setResponsive(!responsive);
            }}>
            {responsive ? 'Remove Responsiveness' : 'Add Responsiveness'}
          </Button>

          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              sectionsCode(sections);
            }}>
            Generate
          </Button>
        </FormGroup>
      </FormControl>

      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Sections Customizations
        </Typography>

        {sections.map((section) => {
          return (
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid',
                borderRadius: 3,
                width: 300,
                marginBottom: 2,
              }}>
              <h3
                style={{
                  textAlign: 'center',
                  marginLeft: 10,
                }}>
                {section}
              </h3>

              <Button
                onClick={() => {
                  handleCustomeSection(section);
                }}>
                Go
              </Button>
            </Box>
          );
        })}
        {extend.map((section) => {
          if (section === 'Navbar') {
            return <Navbar />;
          } else if (section === 'Home') {
            return <Home />;
          } else if (section === 'About') {
            return <About />;
          } else if (section === 'Menu') {
            return <Menu />;
          } else if (section === 'Popular') {
            return <Popular />;
          } else if (section === 'Gallery') {
            return <Gallery />;
          } else if (section === 'Order') {
            return <Order />;
          } else if (section === 'Footer') {
            return <Footer />;
          }
        })}
      </Box>
    </React.Fragment>
  );
}

export default Index;
