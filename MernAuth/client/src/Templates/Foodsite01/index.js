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
import '../style.css';

import Feedback from '../../parts/Feedback/Index';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Modal from '@mui/material/Modal';

import axios from 'axios';

import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Fab,
  TextField,
} from '@mui/material';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

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

  const [name, setName] = useState('');
  const userData = localStorage.getItem('email');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setName(res.data.fullName);
      console.log(res.data.fullName);
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [htmlComments, setHtmlComments] = useState(false);
  const [cssComments, setCssComments] = useState(false);

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

  /* Home animation */
  /* 
This code for home animation defines two keyframe animations using the @-webkit-keyframes and @keyframes rules, respectively. Keyframe animations allow for the creation of animations that change gradually over a series of keyframes, which define the properties of an element at various points during the animation.

The two animations defined here are named animate and have a duration of 1.5 seconds each, with a linear timing function. The keyframes are defined using the percentage-based notation, with the 0% keyframe defining the starting point of the animation.

In each animation, the -webkit-transform and transform properties are used to rotate an element by 50 degrees and move it upwards by 40rem (which is a relative unit of measurement, equivalent to the font size of the root element multiplied by the given value). The translateY() function is used to move the element along the vertical axis.

These animations are applied to the .home::after and .home::before pseudo-elements using the animation property, which specifies the name, duration, timing function, and iteration count of the animation. The z-index property is used to position these elements behind the main content of the .home section, and the background-color, border-radius, and box-shadow properties are used to style the elements.
*/
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
  <!-- JS for website
This JavaScript code that adds interactivity to a website. Here's a breakdown of what it does:

Selects necessary DOM elements such as menu bars, navbar, category input, and more using the document.querySelector() method.

Adds an event listener to the menu bar that toggles the active state of the menu bar and navbar when clicked.

Adds a scroll event listener to the document that removes the active state of the menu bar and navbar when the user scrolls.

Adds an event listener to the category inputs that changes the image displayed based on the category selected.

Defines a function connectSecWithNavLink() that connects the section with the corresponding nav item using the offsetTop property.

Calls the connectSecWithNavLink() function on the scroll event to handle scroll event and mark nav item as active.

Overall, this script provides functionality for the menu, navbar, category selection, and section navigation.
-->

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
  /* 
  This is a media query written in CSS. Specifically, it targets screens with a maximum width of 991 pixels.
  
  Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
  
  In this case, the code inside the media query would be applied only to devices with screens that are 991 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets.
  */

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

  /* 
  This is  a media query written in CSS. Specifically, it targets screens with a maximum width of 768 pixels.
  
  Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
  
  In this case, the code inside the media query would be applied only to devices with screens that are 768 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets.
  */

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
  /* 
  This is  a media query written in CSS. Specifically, it targets screens with a maximum width of 450 pixels.
  
  Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
  
  In this case, the code inside the media query would be applied only to devices with screens that are 450 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets.
  */

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

  let keywordsCssComments = `
  /* Keywords in website

  padding: Specifies the space between the element's content and its border.
  
  border: Specifies the width, style, and color of an element's border.
  
  border-radius: Specifies the radius of an element's border corners.
  
  font-size: Specifies the size of an element's font.
  
  color: Specifies the color of an element's text.
  
  cursor: Specifies the type of cursor to be displayed when the mouse pointer is over an element.
  
  text-transform: Specifies how to capitalize or lowercase an element's text.
  
  background-color: Specifies the background color of an element.
  
  transition: Specifies the CSS properties to be transitioned and the duration of the transition.
  
  :hover: Specifies the styles to be applied when the mouse pointer is over an element.
  
  font-weight: Specifies the weight of an element's font.
  
  text-align: Specifies the horizontal alignment of an element's text.
  
  margin: Specifies the space outside of an element's border.
  
  box-sizing: Specifies the sizing behavior of an element's box model.
  
  outline: Specifies the style of an element's outline.
  
  font-family: Specifies the font family of an element's text.
  
  overflow-x: Specifies how to handle the horizontal overflow of an element's content.
  
  scroll-behavior: Specifies the scrolling behavior of an element.
  
  ::-webkit-scrollbar: Specifies the appearance of the scrollbar in WebKit-based browsers.
  
  ::-webkit-scrollbar-track: Specifies the appearance of the track of the scrollbar in WebKit-based browsers.
  
  ::-webkit-scrollbar-thumb: Specifies the appearance of the thumb of the scrollbar in WebKit-based browsers.
  */
  `;
  let headerCssComments = `
  /* 
  The CSS code provided defines the styling for the header section of a web page. The header is typically the topmost section of a web page and serves as a way to identify the website and provide navigation for the user.
  
  The purpose of the CSS properties used in this code is to control the appearance and behavior of the header section.
  
  .header: This is a class that defines the styling for the header section of a web page. It sets the maximum width of the header, its height, padding, background color, and other properties. It also uses flexbox to align the logo and navigation links.
  
  .header-logo: This class defines the styling for the logo section of the header. It sets the padding around the logo and centers it within the header.
  
  .header-logo img: This class defines the styling for the logo image within the header. It sets the width of the image and sets the cursor to "pointer" to indicate that it is clickable.
  
  .navbar: This class defines the styling for the navigation links section of the header. It sets the padding around the links.
  
  .navbar ul: This class defines the styling for the unordered list that contains the navigation links. It uses flexbox to center the links horizontally and vertically within the header.
  
  .navbar ul li: This class defines the styling for each individual navigation link item. It sets the text alignment to center.
  
  .navbar ul li a: This class defines the styling for each individual navigation link. It sets the font size, font family, margin, font weight, and color.
  
  .navbar ul li a:hover, .navbar ul li a.active: This class defines the styling for the navigation link when the mouse is hovered over it, or when it is the active link. It changes the text color and adds a bottom border to indicate that it is currently selected.
  
  #menu-bar: This is an ID that defines the styling for a menu bar button. It sets the font size, padding, cursor, and display properties.
  */
  `;
  let homeCssComments = `
  /* 
The CSS code defines the styling for the home section of a web page. The home section typically contains a header and a main content area. The main content area is usually divided into two columns, one for text and one for an image.

The grid display property is used to create a grid layout for the home section. The grid has 12 columns, and the main content area is split into two columns with a ratio of 6:6. The gap property is used to add spacing between the columns.

The align-items and justify-content properties are used to center the content vertically and horizontally within the home section.

The ::before and ::after pseudo-elements are used to add a background color and shape to the home section. This is achieved by creating two overlapping shapes that are positioned absolutely using position: absolute. The background color and shape of the elements can be changed by modifying the appropriate CSS properties.

Overall, the CSS code is important for creating a visually appealing and organized layout for the home section of a web page. By using a grid layout and positioning elements absolutely, the code ensures that the layout is flexible and responsive across different screen sizes and devices. */

    /* Home animation */
    /* 
  This code for home animation defines two keyframe animations using the @-webkit-keyframes and @keyframes rules, respectively. Keyframe animations allow for the creation of animations that change gradually over a series of keyframes, which define the properties of an element at various points during the animation.

The two animations defined here are named animate and have a duration of 1.5 seconds each, with a linear timing function. The keyframes are defined using the percentage-based notation, with the 0% keyframe defining the starting point of the animation.

In each animation, the -webkit-transform and transform properties are used to rotate an element by 50 degrees and move it upwards by 40rem (which is a relative unit of measurement, equivalent to the font size of the root element multiplied by the given value). The translateY() function is used to move the element along the vertical axis.

These animations are applied to the .home::after and .home::before pseudo-elements using the animation property, which specifies the name, duration, timing function, and iteration count of the animation. The z-index property is used to position these elements behind the main content of the .home section, and the background-color, border-radius, and box-shadow properties are used to style the elements.
  */
 `;
  let aboutCssComments = `
 /* 

 The code is for styling the "about" section of a webpage. The "about" section is divided into two parts: an image on the left and a description on the right. The CSS grid layout is used to position these two elements side by side, with the image taking up six out of twelve columns and the description taking up the remaining six columns.
 
 The about-image class is used to style the left half of the grid container. 
 
 The grid-column property is set to 1 / 7 to span the class across the first six columns of the grid container.
 
 A background image is set using the background-image property with the URL of the image.
 
 The background-size property is set to cover to scale the image to cover the entire element.
 
 The background-repeat property is set to no-repeat to prevent the image from repeating.
 
 The background-position property is set to center to center the image within the element.
 
 The background-mix-blend-mode property is set to screen to blend the image with the background color.
 
 The "display" property is used to specify that the "about" section is a CSS grid container. The "-ms-grid-columns" and "grid-template-columns" properties define the layout of the grid, with each column being one fraction of the available space (i.e., "1fr"). The "gap" property adds spacing between grid items.
 
 The "justify-content" and "align-items" properties are used to center the grid items horizontally and vertically. The "background-image" property sets the image for the "about-image" element, and the "background-size", "background-repeat", and "background-position" properties are used to adjust how the image is displayed.
 
 The "h2" and "p" elements in the "about-desc" section are styled with various font properties like font size, weight, color, and text alignment. The "input" element has a margin of 2rem at the top and bottom and 3rem at the left and right.
 
 Overall, this code demonstrates how CSS grid layout can be used to create complex, responsive layouts for webpage content. It also shows how various CSS properties can be used to style different elements, such as fonts, background images, and spacing. */

 `;
  let menuCssComments = `
 /* Design for menu */
 /* 
The CSS code provided is for the menu section of a website.
 The menu section is designed to display different categories
  of food items in a grid layout with images and description.

The "menu" class is used to define the grid layout and alignment
 of the elements within the section. The "catagory" class is used
  to define the styling for the category divs, which contain the
   category images and descriptions.

The images for each category are defined using the "catagory-img" 
class, which includes a box-shadow, border-radius, and padding to
 give it a raised appearance. The actual image is set to fill the
  container using "width: 100%" and "height: 100%", and is also
   given a border-radius to match the container.

The "menu-content" class contains the description for each category, which includes the category name, price, and a short description. The "info" class is used to define the styling for the description, including font size, color, padding, and text alignment.

Overall, the CSS code for the menu section is important for creating an attractive and user-friendly design for a website that sells food items.

.menu: This class is used for the main container that holds the entire menu. It uses CSS Grid to display the menu items in a responsive manner.

.menu h2: This class is used for the heading of the menu.

.menu .catagory: This class is used for each category of menu items. It contains a heading, image, and a list of items.

.menu .catagory input.active: This class is used to style the active state of each menu item.

.menu .catagory-img: This class is used for the container that holds the image for each category.

.menu .catagory-img img: This class is used for the image itself. It is set to display as a block and to fill the container it is in.

.menu .menu-content: This class is used for the container that holds the details for each menu item.

.menu .menu-content .info: This class is used for the information about each menu item.

.menu .menu-content .info h3: This class is used for the heading of each menu item.

.menu .menu-content .info h3 span: This class is used to style a span element within the heading.

.menu .menu-content .info p: This class is used for the description of each menu item.

These classes are used to style different parts of the menu, making it responsive and easy to navigate.


*/
  `;
  let popularCssComments = `
  /* 
  This is a CSS code for styling a section of a webpage with a class name
   of "popular". 
  
  The section has a background image that uses a linear gradient with an
   opacity of 0.7 as well as a fixed attachment. 
  
  The section's content is centered and displayed in a 12-column grid
   layout with a gap.
  
  Each item within the grid has a card-like design with a padding,
   background color and a box-shadow effect. 
  
  The card contains an image with a border, a title, a review, a price,
   and an input field. On hover, the card scales up and has a darker
    box-shadow effect.
  
  The cards are arranged in a 2-column grid layout, with odd numbered
   cards taking up columns 2 to 7 and even numbered cards taking up
    columns 7 to 12. 
  
  .popular: This class is applied to a section element and sets the
   background image using linear gradient and a URL to an image. It
    also specifies the background repeat, size, position, and attachment.
     This class is used to style a section that displays popular products.
  
  .popular h2: This class is applied to an h2 element within the section
   with the .popular class and sets the top margin to 3rem. This class is
    used to style the heading within the popular products section.
  
  .popular .popular-content: This class is applied to a div element within
   the section with the .popular class and sets the display property to
    grid with 12 columns, gap, and alignment properties. This class is
     used to style the container that holds the popular product cards.
  
  .popular .popular-content .p-card: This class is applied to a div element
   that contains each popular product card and sets the background color,
    box-shadow, border-radius, transition, and hover effects. This class
     is used to style each popular product card.
  
  .popular .popular-content .p-card img: This class is applied to an img
   element within the popular product card and sets the width, height,
    and border properties. This class is used to style the image within
     the popular product card.
  
  .popular .popular-content .p-card h4: This class is applied to an h4
   element within the popular product card and sets the color, padding,
    font size, font weight, and text alignment properties. This class is
     used to style the title of each popular product.
  
  .popular .popular-content .p-card .review: This class is applied to a
   div element within the popular product card that contains the review
    icon and sets the text alignment property. This class is used to style
     the review section of each popular product card.
  
  .popular .popular-content .p-card .review i: This class is applied
   to an i element within the review section of each popular product
    card and sets the color and font size properties. This class is
     used to style the review icon within each popular product card.
  
  .popular .popular-content .p-card .price: This class is applied to a
   div element within the popular product card that contains the price
    and sets the padding and font size properties. This class is used
     to style the price section of each popular product card.
  
  .popular .popular-content .p-card input: This class is applied to an
   input element within the popular product card and sets the margin-bottom
    property. This class is used to style the input element within
     each popular product card.
  
  .popular .popular-content .p-card:nth-child(odd): This class is
   applied to every odd-numbered popular product card and sets the
    grid column position and span properties. This class is used to
     style every other popular product card to appear on the left side
      of the grid.
  
  .popular .popular-content .p-card:nth-child(even): This class is
   applied to every even-numbered popular product card and sets the
    grid column position and span properties. This class is used to
     style every other popular product card to appear on the right side
      of the grid.
  */
  `;
  let galleryCssComments = `
  /* 
  This is a CSS styling for a gallery of images, with the class
   ".gallery .gallery-content" representing the container of the gallery. 
  The CSS uses grid layout to position the images and their titles,
   with a grid-template-columns property of "repeat(12, 1fr)" indicating 12
    columns of equal width. 
  The ".g-card" class represents each individual image card, with
   properties such as height, width, overflow, and cursor to set
    the card dimensions and behavior. The hover state of the card
     is also defined, with a title element ("h3") and a darkened
      overlay added upon hover.
  The ":nth-child" pseudo-class is used to specify the positioning
   of the cards within the grid layout based on their index within
    the container.
  
  The gallery is designed to display the cards in a grid layout using
   the display: grid property. The grid-template-columns property is
    used to set the number of columns and their sizes in the grid.
  
  Each card in the gallery is given the class .g-card, which sets its
   height, width, and other properties. The ::before pseudo-element
    is used to create an overlay effect on the card, which appears
     when the mouse hovers over it.
  
  The nth-child selector is used to target every third card in the
   gallery and apply specific styles to them. The gap property is
    used to set the gap between each card in the gallery.
  
  The purpose of this CSS code is to create an aesthetically pleasing
   gallery layout for displaying images or other content. It is important
    because it can enhance the user experience and make the website or
     application more visually appealing.
  
  Classes used in this CSS code:
  
  .gallery: used to wrap the gallery content
  .gallery-content: used to set the grid layout for the gallery
  .g-card: used to style the cards in the gallery
  ::before: used to create an overlay effect on the cards
  
   */
      /* Gallery animation
   The transition property is used to add smooth transitions when
    hovering over the gallery cards.
    */
    `;
  let orderCssComments = `
    /*
    This is a CSS code for styling an order form in a grid layout. 
    
    The .order class sets the display as a grid and specifies grid column
     and row sizes. It also sets center alignment for content using
      justify-content and align-items.
    
    The .order h2 class specifies the grid column span for the header
     to span across all columns. The .order .order-content class sets
      the layout for the form and adds a box-shadow effect and border-radius.
    
    The .order .order-content .order-form class specifies the grid layout
     for the form inputs and sets padding and text-align for the form.
      The input fields and text area are styled to have a background color
       and placeholder text with capitalized formatting.
    
    The .order .order-content img class specifies the layout for the
     image to display on the right side of the form with rounded borders.
      Overall, this code demonstrates the use of grid layout for organizing
       form elements in a visually appealing way.
    
    The ".order" class is the main container for the gallery. It uses
     CSS grid to create a 12-column layout, with a gap of 1rem between
      columns. It also centers its contents both horizontally and vertically.
    
    The ".order h2" selector targets the heading element within the
     ".order" container and sets its grid column to span from the first
      to the last column. This centers the heading across all columns.
    
    The ".order .order-content" selector targets the container element
     within the ".order" container that holds the gallery content. It
      uses CSS grid to create a 12-column layout, but with no gap this time. It also centers its contents both horizontally and vertically. In addition, it sets a box shadow and border radius to give the container a rounded, shadowed appearance.
    
    The ".order .order-content .order-form" selector targets the form
     element within the gallery content container. It sets the form to
      span columns 1 through 6 of the 12-column layout, with padding and
       centered text alignment.
    
    The ".order .order-content .order-form input" and ".order .order-content
     .order-form textarea" selectors target the form's input and textarea
      elements respectively. They set the width to 100%, a font size ,
       padding, and margin. They also set a background color  and transform
        the placeholder text to uppercase.
    
    The ".order .order-content img" selector targets the image element within
     the gallery content container. It sets the image to span columns 7
      through 12 of the 12-column layout and gives it a width and height
       of 100%. It also sets the image's border radius to create a rounded
        appearance on the top and bottom right corners.
    
    The text-transform property to capitalize for different types of
     placeholders used in the order form. The placeholder is the text
      that appears inside an input field or a textarea element before
       the user enters any text. The text-transform property is used to
        control the capitalization of the text. Here, it is set to
         capitalize to ensure that the first letter of each word in
          the placeholder text is capitalized.
    
    .order .order-content .order-form input::-webkit-input-placeholder:
     This sets the text-transform property for the input element's
      placeholder text in webkit-based browsers such as Google Chrome
       and Safari.
    .order .order-content .order-form textarea::-webkit-input-placeholder:
     This sets the text-transform property for the textarea element's
      placeholder text in webkit-based browsers.
    .order .order-content .order-form input:-ms-input-placeholder:
     This sets the text-transform property for the input element's
      placeholder text in Microsoft Edge browser.
    .order .order-content .order-form textarea:-ms-input-placeholder:
     This sets the text-transform property for the textarea element's
      placeholder text in Microsoft Edge.
    .order .order-content .order-form input::-ms-input-placeholder:
     This sets the text-transform property for the input element's
      placeholder text in Microsoft Internet Explorer.
    .order .order-content .order-form textarea::-ms-input-placeholder:
     This sets the text-transform property for the textarea element's
      placeholder text in Internet Explorer.
    .order .order-content .order-form input::placeholder: This sets the
     text-transform property for the input element's placeholder text in
      all other browsers.
    .order .order-content .order-form textarea::placeholder: This sets the
     text-transform property for the textarea element's placeholder text
      in all other browsers.
    */
   `;
  let footerCssComments = `
  /* 
  This is a CSS code for styling a website footer.
  
  .footer: This class is used to style the entire footer section of the
   website. It sets the background color, padding, and display properties
    for the footer, as well as defines the grid layout and alignment for
     its child elements.
  
  .contact-info: This class is used to style a section within the footer
   that contains contact information, such as phone numbers,
    email addresses, or physical addresses. It sets a specific grid
     column span and minimum height for this section, and styles the
      text elements within it with padding and font size.
  
  .location: This class is used to style a section within the footer
   that contains location information, such as maps or directions.
    It also sets a specific grid column span and minimum height for
     this section, and styles the text elements within it with padding
      and font size.
  
  .quick-links: This class is used to style a section within the footer
   that contains links to other pages on the website. It also sets a
    specific grid column span and minimum height for this section, and
     styles the text elements within it with padding and font size.
  
  .follow-us: This class is used to style a section within the footer
   that contains links to the website's social media accounts. It also
    sets a specific grid column span and minimum height for this section,
     and styles the text elements within it with padding and font size.
  
  .footerTitle: This class is used to style section titles within the footer,
   such as "Contact Us" or "Follow Us". It sets the font size, color,
    and text alignment for these titles.
  
  .footerLink: This class is used to style links within the footer.
   It sets the font size, color, and text transformation for these links,
    and defines a color change on hover to make them stand out.
  
  The main purpose of these classes is to create a visually appealing
   and organized footer section for a website, with clearly defined
    sections for different types of content. The use of grid layout
     and alignment properties helps to create a consistent and structured
      design, while the font sizes and color schemes provide a cohesive
       look and feel for the entire footer.
   */
  `;

  let headerHtmlComments = `
  <!-- 
Header section HTML detail
This is HTML code for a website header, including a logo, navigation menu, and a menu bar icon.
The header is enclosed within a <header> tag and has a class "header" assigned to it. Within the header,
 there are three main components:
The header logo, enclosed within a <div> tag with a class "header-logo".
 It contains an image with a source URL and alt text.
The navigation menu, enclosed within a <nav> tag with a class "navbar".
 It contains an unordered list <ul> of navigation links <a> with href 
 attributes linking to different sections of the website.
The menu bar icon, enclosed within a <div> tag with an id "menu-bar".
 It has a font-awesome icon class "fas fa-bars".
Header Logo:
The header logo is an important component of the website header. It
 represents the brand or business and helps establish its visual identity.
  It's essential to use a logo that is recognizable, clear, and aligned
   with the overall design of the website. The image should also be
    optimized for web use to ensure fast loading times.

Navigation Menu:
The navigation menu is used to guide website visitors to different
 sections of the site. It's crucial to make the menu easy to use and
  understand so that visitors can quickly find what they're looking for.
   The navigation links should be clear, concise, and relevant to the
    content of the site. The use of hover effects or active states can
     help to make the navigation more intuitive and user-friendly.

Menu Bar:
The menu bar is an icon that triggers the display of the navigation
 menu on mobile devices or smaller screens. It's important to have a
  responsive design that adapts to different screen sizes, and the menu
   bar icon helps to conserve space while still providing access to the
    navigation menu.

In summary, the header is a critical component of any website as it
 provides visitors with a first impression of the brand or business.
  It's essential to make sure the header design is visually appealing,
   easy to use, and optimized for different devices. By following best
    practices for header design, you can help ensure that visitors have
     a positive experience on your website and are more likely to engage
      with your content.
-->
`;

  let homeHtmlComments = `
<!-- Home section HTML detail
This is a section of HTML code for a website's home page. The section
 has an ID of "home" and a class of "home". The section is divided into
  two parts: "home-desc" and "home-image".

The code represents a section of a webpage with the ID "home" and the
 class "home". The section is divided into two parts using two div
  elements: "home-desc" and "home-image".

The "home-desc" div contains a heading element with the text . This
 heading is the most prominent text in the section and is likely to
  be the main message that the webpage is trying to convey to its visitors.

Below the heading, there is a paragraph element with some placeholder
 text in Lorem Ipsum. This text is commonly used as a placeholder
  when designing websites, as it resembles real text in terms of
   its length and structure, but does not distract from the overall design.

To the right of the text, there is an input button element, it is 
 intended to prompt visitors to take a specific action, such as 
 signing up for a service or exploring more content on the website.

The "home-image" div contains an image element with a source URL
 pointing to an image file hosted on the website.  
  -->
  `;
  let aboutHtmlComments = `
  <!-- About section HTML detail

This is a section of HTML code that represents a webpage's "about"
 section. The section has an ID of "about" and a class of "about",
  which allows developers to target and style this section specifically
   using CSS.

The section is divided into two main div elements: "about-image" and
 "about-desc". The purpose of these two divs is to visually separate
  and organize the content of the section.

The "about-image" div contains an image element that is used to
 display an image on the webpage. The image element has a source
  URL that points to the location of the image file, and an alt
   attribute that provides alternative text for screen readers
    and search engines.

The "about-desc" div contains text-based content related to the
 "about" section. It has a heading element that provides a brief
  description of the content in the section. Below the heading,
   there are two paragraph elements that contain some placeholder text.

Finally, the section ends with an input button element. The button's
 purpose is to trigger a specific action on the website, such as
  directing visitors to another page or opening a form for them
   to fill out.
-->

  `;
  let menuHtmlComments = `
  <!-- Menu section HTML detail

  This is a section of HTML code that represents a webpage's "menu" section. The section has an ID of "menu" and a class of "menu", which allows developers to target and style this section specifically using CSS.

The section begins with a heading element that describes the content
 of the section. The heading contains a span element  that is styled
  differently from the rest of the heading.

Below the heading, there is a div element with a class of "category".
 This div contains four input button elements that are used to filter
  the menu items by category. One of the buttons has a class of "active",
   indicating that it is currently selected.

Below the category div, there is another div element with a class of
 "category-img". This div contains an image element with an ID of "c-img".
  The image element has a source URL that points to the location of
   an image file and an alt attribute that provides alternative text
    for screen readers and search engines. 

Below the category image div, there is a div element with a class of
 "menu-content". This div contains four child divs with a class of
  "info". Each "info" div represents a menu item and contains a
   heading element with a span element for a number (e.g. "01.")
    and a descriptive text. 

The use of input buttons allows users to easily filter the options 
by category, and the use of images and descriptive text provides users
 with a visual and informative representation of each item. The structure
  of the code also allows for easy styling and customization through the
   use of CSS.
-->
`;
  let popularHtmlComments = `
  <!-- Popular section HTML detail
This is a section of HTML code that represents a "popular "
 section on a webpage. The section has an ID of "popular" and
  a class of "popular", which allows developers to target and
   style this section specifically using CSS.

The section begins with a heading element that describes the
 content of the section. The heading contains a span element
  that is styled differently from the rest of the heading.

Below the heading, there is a div element with a class of
 "popular-content". This div contains four child divs with
  a class of "p-card". Each "p-card" div represents a popular
   item and contains an image element with a source URL that
    points to the location of an image file and an alt attribute
     that provides alternative text for screen readers and search
      engines. Each "p-card" div also contains a heading element
       with the name of the item, a div element with a class of
        "review" that displays star icons to indicate the item's
         rating, a paragraph element with the price of the item,
          and an input button element .

Overall, this section of code is important for showcasing the
 most popular items offered by a establishment. The use of images,
  ratings, and prices provides users with a visual and informative
   representation of each item. The structure of the code also allows
    for easy styling and customization through the use of CSS.
-->
`;

  let galleryHtmlComments = `
<!-- Gallery section HTMl detail
  This is a section of HTML code that creates a gallery of food
   items on a webpage. It includes a header with a title , and
    six gallery cards with images and titles. The cards are created
     using a div element with the class "g-card", and each card
      includes an image tag with the source of the image, and
       an h3 tag with the title of the item. The entire gallery
        is contained within a section element with the ID "gallery".
  -->
  `;

  let orderHtmlComments = `
  <!-- Order section HTML detail
  This is a section of a webpage that allows users to place an order. The section has a title  with the span word emphasized.
  
  The order form includes fields for the user to input their name, email, phone number, and address, along with a message section for any additional comments. There is also a button labeled to submit the form.
  
  On the right side of the section is an image with alt network error.
  -->
  `;

  let footerHtmlComments = `
  <!-- footer section HTML detail
The code represents a footer section of a website, which typically
 contains contact information, quick links to important pages, social
media links, and copyright information. The specific elements in this code include:
A div with class contact-info, which contains an address, email, and two phone numbers.
A div with class location, which lists the addresses of different branches.
A div with class quick-links, which contains links to important pages on the website.
A div with class follow-us, which contains links to the website's social media profiles.
A div with class copyright, which contains the year and copyright information.
Overall, this footer section provides visitors with important information about
 the business and makes it easy for them to navigate the website and
  stay connected on social media.
  -->
  `;
  const [sections, setSections] = useState(['Navbar', 'Home']);
  const [extend, setExtend] = useState([]);

  const [description, setDescription] = useState('');

  const handleSectionsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSections((prev) => [...prev, value]);
    } else {
      setSections((prev) => prev.filter((item) => item !== value));
    }
  };

  const saveCode = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/usersTemplate',
        {
          authorName: name,
          authorEmail: userData,
          templateName: 'FoodSite Variation',
          templateCode: completeCode,
          templateDescription: description,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
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
    
    ${cssComments ? keywordsCssComments : ''}

    /* This section applies styles to various elements using CSS selectors
    separated by commas. The elements targeted are buttons,
    input fields in different sections of the website 
    (home, about, menu, popular, and order),
    and submit buttons in the order section. The styles include padding,
    border width,
    border color,
    border radius,
    font size,
    color,
    cursor,
    text-transform,
    background-color,
    and transitions for hover effects.  */

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

    /* This section applies hover styles to the same elements 
    as in the first section. The hover styles change the text 
    color to white and the background color to the same color as the border. */


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

    /* This section applies styles to headings in different sections 
    of the website,
    such as the section heading,
    menu heading,
    popular heading,
    gallery heading,
    and order heading. The styles include font size,
    padding,
    font weight,
    text alignment,
    text-transform,
    and color.  */

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
    
    /* This section applies styles to the span elements within the 
    headings in different sections of the website.
     The styles include padding and color. */


    .sectionHeading span,
    ${sections.includes('Menu') ? '.menu h2 span,' : ''}
    ${sections.includes('Popular') ? '.popular h2 span,' : ''}
    ${sections.includes('Gallery') ? '.gallery h2 span,' : ''}
    ${sections.includes('Order') ? '.order h2 span' : ''} {
      padding: 0 1rem;
      color: #f7ca3e;
    }
    
    /* This section applies styles to all elements using the 
    universal selector.The styles include margin, padding,
     box-sizing, outline, border, and font family. */


    * {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      border: none;
      font-family: 'Roboto', sans-serif;
    }
 /* The section applies styles to the HTML element. 
    The styles include font size, overflow, and scroll behavior. */
    

    html {
      font-size: 62.5%;
      overflow-x: hidden;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
/* This section applies styles to the scrollbar in the HTML element. 
    The styles include width, background color for the track,
     and background color for the thumb. */
  

    html::-webkit-scrollbar {
      width: 1.4rem;
    }

    html::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }

    html::-webkit-scrollbar-thumb {
      background: #f7ca3e;
    }

    
    /* The body element is selected and styled with a max-width of 1200px,
     centered with margin: auto, given a background-color of #ffffff,
      positioned relative, and its overflow-x is set to hidden.
 These styles apply to the entire body of the HTML document. */
  
    body {
      max-width: 1200px;
      margin: auto;
      background-color: #ffffff;
      position: relative;
      overflow-x: hidden;
    }

    /* The h1, h2, h3, and h4 elements are styled with the font-family
     property set to 'Oswald', sans-serif. */

    h1,
    h2,
    h3,
    h4 {
      font-family: 'Oswald', sans-serif;
    }

    /* The a element is styled with text-decoration: none to remove
     any underlines from links. */

    a {
      text-decoration: none;
    }

    /* This block of code is adding a transition effect to links,
     buttons, and input elements with either a "button" or "submit"
      attribute. The -webkit-transition property is used for webkit-based
    browsers (such as Safari and Chrome),
    while the transition property is used for other browsers.
     The all value specifies that all properties should be transitioned,
      and the duration of the transition is set to 0.4 seconds with a
       linear timing function. */
  
    a,
    button,
    input[button],
    input[submit] {
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }

    /* The ul element is styled with list-style-type: none to remove any
     bullet points from unordered lists. */

    ul {
      list-style-type: none;
    }

    /* The section element is styled with padding: 3rem 1rem, which
     sets padding on the top and bottom to 3rem and padding on the
      left and right to 1rem. your padding will change according to
       your values */

    section {
      padding: 3rem 1rem;
    }

    /* The .buttonStyle class is defined with various styles for
     buttons, including padding, border, font-size, color, cursor,
      text-transform, and transitions. 
    These styles are applied to any element with the .buttonStyle class. */
    

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

    /* The .buttonStyle:hover selector applies styles to the
     .buttonStyle element when it is hovered over by the user,
      changing the color and background-color. */

    .buttonStyle:hover {
      color: #ffffff;
      background-color: #f7ca3e;
    }

    /* The .sectionHeading class is defined with various styles
     for section headings, including font-size, padding, font-weight,
      text-align, text-transform, and color. */

    .sectionHeading {
      font-size: 4rem;
      padding: 2rem;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
      color: #000000;
    }

    /* The .sectionHeading span selector applies styles to any
     span elements within a section heading, setting the padding
      and color properties. */

    .sectionHeading span {
      padding: 0 1rem;
      color: #f7ca3e;
    }


      ${nav && cssComments ? headerCssComments : ''}
      ${nav ? navbarDesign : ''}
      ${home && cssComments ? homeCssComments : ''}
      ${home ? homeDesign : ''}
      ${about && cssComments ? aboutCssComments : ''}
      ${about ? aboutDesign : ''}
      ${menu && cssComments ? menuCssComments : ''}
      ${menu ? menuDesign : ''}
      ${popular && cssComments ? popularCssComments : ''}
      ${popular ? popularDesign : ''}
      ${gallery && cssComments ? galleryCssComments : ''}
      ${gallery ? galleryDesign : ''}
      ${order && cssComments ? orderCssComments : ''}
      ${order ? orderDesign : ''}
      ${footer && cssComments ? footerCssComments : ''}
      ${footer ? footerDesign : ''}

      ${responsive ? responsiveDesign : ''}


      </style>
    <body>

        ${nav && htmlComments ? headerHtmlComments : ''}
        ${nav ? navbarCode : ''} 
        ${home && htmlComments ? homeHtmlComments : ''}
        ${home ? homeCode : ''}
        ${about && htmlComments ? aboutHtmlComments : ''}
        ${about ? aboutCode : ''}
        ${menu && htmlComments ? menuHtmlComments : ''}
        ${menu ? menuCode : ''}
        ${popular && htmlComments ? popularHtmlComments : ''}
        ${popular ? popularCode : ''}
        ${gallery && htmlComments ? galleryHtmlComments : ''}
        ${gallery ? galleryCode : ''}
        ${order && htmlComments ? orderHtmlComments : ''}
        ${order ? orderCode : ''}
        ${footer && htmlComments ? footerHtmlComments : ''}
        ${footer ? footerCode : ''}


       ${jsCode} 
    </body>
  </html>
  
  <!-- happy coding!!!! -->
  
      `;

    setCompleteCode(code);
    console.log(code);
    dispatch(finalCode(code));
  };

  const handleCustomeSection = (section) => {
    if (!extend.includes(section)) {
      setExtend((prev) => [...prev, section]);
    } else {
      setExtend((prev) => prev.filter((item) => item !== section));
    }
  };
  const [generate, setGenerate] = useState(false);

  const SETCODE = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/newCode/`, {
        code: completeCode,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='main_container_code'>
      <div class='Preview_wrapper'>
        <div class='link_wrapper'>
          <a
            onClick={() => {
              navigate('/dashboard/Templates/FoodSite/FS1');
            }}>
            Preview
          </a>
          <div class='Preview_icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 268.832 268.832'>
              <path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='formControl_sections'>
        <div className='formControl_sections_header'>
          <h3>Sections</h3>
          <p>Select the sections you want to include in your website</p>
        </div>
        <FormGroup className='formGroup_sections'>
          <div className='formControl_sections_home'>
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
          </div>

          <div className='design_selection_buttons'>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                setHtmlComments(!htmlComments);
              }}>
              {htmlComments
                ? 'Remove HTML Documentation'
                : 'Add HTML Documentation'}
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                setCssComments(!cssComments);
              }}>
              {cssComments
                ? 'Remove CSS Documentation'
                : 'Add CSS Documentation'}
            </Button>
          </div>
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
              setNav(false);
              setHome(false);
              setAbout(false);
              setMenu(false);
              setPopular(false);
              setGallery(false);
              setOrder(false);
              setFooter(false);
              setSections([]);
              setExtend([]);
              sectionsCode(sections);
              setGenerate(true);
            }}>
            Generate
          </Button>
        </FormGroup>
      </div>

      {sections.length > 0 ? (
        <Box className='customSection'>
          <h1
            style={{
              marginTop: 100,
              textAlign: 'center',
            }}>
            Sections Customizations
          </h1>

          {sections.map((section) => {
            return (
              <Box className='section_rows'>
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
                  <UnfoldLessIcon />
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
      ) : (
        ' '
      )}

      {generate ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1 className='THeading'>Generated Code</h1>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <button
              style={{
                width: '40%',
                maxWidth: '200px',
                height: '50px',
                margin: 'auto',
                marginBottom: '20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#1565C0',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}>
              <CopyToClipboard text={completeCode}>
                <span>Copy to clipboard</span>
              </CopyToClipboard>
            </button>

            <button
              style={{
                width: '40%',
                maxWidth: '200px',
                height: '50px',
                margin: 'auto',
                marginBottom: '20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#1565C0',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
              onClick={() => {
                handleOpen();
              }}>
              Save Template
            </button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Please Enter Template Description
              </Typography>
              <TextField
                sx={{ width: '100%', marginTop: 3 }}
                multiline
                rows={3}
                id='outlined-basic'
                label='Template Description'
                variant='outlined'
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  style={{ marginTop: 10 }}
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    saveCode();
                    SETCODE();
                    handleClose();
                  }}>
                  Save
                </Button>
                <Feedback
                  style={{ marginTop: 10 }}
                  email={userData}
                  template='FoodSite'
                />
              </div>
            </Box>
          </Modal>
          <div
            style={{
              width: '75%',
              margin: 'auto',
              boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
            }}>
            <SyntaxHighlighter language='html' style={lucario}>
              {completeCode}
            </SyntaxHighlighter>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Index;
