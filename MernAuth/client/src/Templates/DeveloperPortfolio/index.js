import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/PortfolioWeb_redux/PW_slice';

import HeaderSection from './Header';
import HeroSection from './Hero';
import ServiceSection from './Service';
import ProjectSection from './Project';
import AboutSection from './About';
import ContactSection from './Contact';
import FooterSection from './Footer';

import '../style.css';

import Feedback from '../../parts/Feedback/Index';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Modal from '@mui/material/Modal';

import axios from 'axios';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

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
  const globalElementsDesign = useSelector((state) => state.PW.globalDesign);
  const headerElements = useSelector((state) => state.PW.header);
  const headerElemDesign = useSelector((state) => state.PW.headerDesign);
  const heroElemSection = useSelector((state) => state.PW.heroSection);
  const heroElemSectionDesign = useSelector(
    (state) => state.PW.heroSectionDesign
  );
  const serviceElem = useSelector((state) => state.PW.service);
  const serviceDesignElem = useSelector((state) => state.PW.serviceDesign);
  const projectElem = useSelector((state) => state.PW.project);
  const projectDesignElem = useSelector((state) => state.PW.projectDesign);
  const aboutElem = useSelector((state) => state.PW.about);
  const aboutDesignElem = useSelector((state) => state.PW.aboutDesign);
  const contactElem = useSelector((state) => state.PW.contact);
  const contactDesignElem = useSelector((state) => state.PW.contactDesign);
  const footerElem = useSelector((state) => state.PW.Footer);
  const footerDesignElem = useSelector((state) => state.PW.footerDesign);

  const [name, setName] = useState('');
  const userData = localStorage.getItem('email');

  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setName(res.data.fullName);
      setTotalTemp(res.data.totalTemplates);
      setStatus(res.data.status);
      console.log(res.data.fullName);
    });
    timeSinceFirstTemplate();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [htmlComments, setHtmlComments] = useState(false);
  const [cssComments, setCssComments] = useState(false);

  const [completeCode, setCompleteCode] = useState();
  const [head, setHead] = useState(false);
  const [hero, setHero] = useState(false);
  const [services, setService] = useState(false);
  const [projects, setProject] = useState(false);
  const [abouts, setAbout] = useState(false);
  const [contacts, setContact] = useState(false);
  const [footer, setFooter] = useState(false);

  const [responsive, setResponsive] = useState(false);

  let globalDesignComments = `
  /* 
  General:
  
  The universal selector * is used to reset padding and margin to 0 and set box-sizing to border-box for all elements.
  
  The base font size for the html element is set to 10px and the font family is set to 'Montserrat', sans-serif.
  
  The scroll-behavior property is set to smooth to enable smooth scrolling behavior.
  
  The anchor (a) elements have their text decoration removed.
  
  The .container class is a flex container that centers its content both vertically and horizontally within the viewport.
  
  Images (img) are set to cover the available space and maintain aspect ratio.
  
  Paragraphs (p) have a default color of black, font size of 1.4rem, some margin, line height, and letter spacing.
  
  The .section-title class styles section titles with a larger font size, bold font weight, and uppercase text. The color is black, and there is some margin at the bottom. The span elements within section titles have a crimson color.
  
  The .cta class styles call-to-action buttons with specific padding, colors, border, font size, text transformation, letter spacing, and transitions. On hover, the background color and text color change.
  
  The .brand h1 styles the main heading of the brand with a larger font size, uppercase text, and white color. The span element within the heading has a crimson color.
  */
  `;
  const globalDesign = `
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 100%;
  width: 100%;
  object-fit: ${globalElementsDesign.imageObjectFit};
}

p {
  color: black;
  font-size: ${globalElementsDesign.paragraph_fontsize}rem;
  margin-top:  ${globalElementsDesign.paragraph_marginTop}px;
  line-height: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
}

.section-title {
  font-size: ${globalElementsDesign.sectionTitle_FontSize}rem;
  font-weight: ${globalElementsDesign.sectionTitle_FontWeight};
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
}

.section-title span {
  color: crimson;
}

.cta {
  display: inline-block;
  padding: 10px 30px;
  color: white;
  background-color: transparent;
  border: 2px solid crimson;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 30px;
  transition: 0.3s ease;
  transition-property: background-color, color;
}

.cta:hover {
  color: white;
  background-color: crimson;
}

.brand h1 {
  font-size: 3rem;
  text-transform: uppercase;
  color: white;
}

.brand h1 span {
  color: crimson;
}
 
  `;

  let headerComments = `
  <!-- Header
  the header section serves as the topmost part of the website, typically containing the website logo and main navigation menu.
  
  It includes a container to hold the header content.
  
  Within the header container, there is a navigation bar (class="nav-bar") that consists of a brand logo and a navigation list.
  
  The brand logo is represented by a link (a tag) with an href attribute pointing to the "#hero" section. 
  
  It contains the website name  with the first letter of each word stylized.
  
  The navigation list is structured as an unordered list (ul tag) and contains individual list items (li tags) representing each menu item.
  
  Each list item has an anchor tag (a tag) with an href attribute pointing to a specific section on the page. The link text is displayed as the menu item name, such as "Home," "Services," "Projects," "About," and "Contact."
    -->
  `;
  const header = `
  <!-- Header -->
  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1>${headerElements.logoText}</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="${headerElements.nav_element1}">${headerElements.nav_element1}</a></li>
            <li><a href="#services" data-after="${headerElements.nav_element2}">${headerElements.nav_element2}</a></li>
            <li><a href="#projects" data-after="${headerElements.nav_element3}">${headerElements.nav_element3}</a></li>
            <li><a href="#about" data-after="${headerElements.nav_element4}">${headerElements.nav_element4}</a></li>
            <li><a href="#contact" data-after="${headerElements.nav_element5}">${headerElements.nav_element5}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header -->
  `;

  let headerDesignComments = `
  /* Header section
  The #header selector styles the main container of the header section. It is fixed positioned at the top left corner of the viewport and has a width of nvw.
  
  The .header class styles the header element within the #header container. It has a minimum height, a semi-transparent background color, and a transition for the background color.
  
  The .nav-bar class styles the navigation bar within the header. It is a flex container with space-between alignment and limited to a maximum width. It has padding on the horizontal sides.
  
  The .nav-list ul styles the unordered list within the navigation bar. It is absolutely positioned and hidden by default. It has a background color, covers the entire viewport, and is vertically and horizontally centered. It has a higher z-index to appear on top of other elements.
  
  The .nav-list ul.active class is used to show the navigation menu when it is active. It moves the list from the left side of the viewport to 0% left position.
  
  The .nav-list ul a styles the anchor links within the navigation menu. They have a large font size, font weight, letter spacing, and text decoration. They are white in color and have padding for spacing. They are displayed as block elements.
  
  The .nav-list ul a::after styles the pseudo-element ::after of the anchor links. It is positioned in the center of the link, has a large font size, and a specific letter spacing. It is initially hidden (scaled to 0) and transitions to become visible (scaled to 1) with a different letter spacing on hover.
  
  The .nav-list ul li:hover a::after styles the ::after pseudo-element of the anchor links when hovered. It transforms to its visible state and resets the letter spacing.
  
  The .nav-list ul li:hover a styles the anchor links when hovered. They change to a crimson color.
  
  The .hamburger class styles the hamburger menu button. It has a specific height, width, border, border-radius, and is positioned relatively. It is a flex container with center alignment for its content. It has a pulsating effect using CSS animation.
  
  The .hamburger:after styles the pseudo-element ::after of the hamburger menu button. It is a circle with a border that pulses using CSS animation.
  
  The .hamburger .bar class styles the bars within the hamburger menu button. They have a specific height, width, background color, and are positioned relatively.
  
  The .hamburger .bar::after and .hamburger .bar::before styles the pseudo-elements ::after and ::before of the bars within the hamburger menu button. They have specific positions (top and bottom) and background colors. They transition their position on click to create an "X" shape when the menu is active.
      
      
      */
  `;
  const headerDesign = `
  /* Header section */
  #header {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: auto;
  }

  #header .header {
    min-height: ${headerElemDesign.minHeight}vh;
    background-color: #${headerElemDesign.bgColor};
    transition: 0.3s ${headerElemDesign.transitionType} background-color;
  }

  #header .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: ${headerElemDesign.navbarMAxWidth}px;
    padding: 0 ${headerElemDesign.navbarPadding}px;
  }

  #header .nav-list ul {
    list-style: none;
    position: absolute;
    background-color: rgb(31, 30, 30);
    width: 100vw;
    height: 100vh;
    left: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s ease left;
  }

  #header .nav-list ul.active {
    left: 0%;
  }

  #header .nav-list ul a {
    font-size: ${headerElemDesign.linkFontSize}rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    padding: ${headerElemDesign.padding}px;
    display: block;
  }

  #header .nav-list ul a::after {
    content: attr(data-after);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: rgba(240, 248, 255, 0.021);
    font-size: 13rem;
    letter-spacing: 50px;
    z-index: -1;
    transition: 0.3s ease letter-spacing;
  }

  #header .nav-list ul li:hover a::after {
    transform: translate(-50%, -50%) scale(1);
    letter-spacing: initial;
  }

  #header .nav-list ul li:hover a {
    color: crimson;
  }

  #header .hamburger {
    height: 60px;
    width: 60px;
    display: inline-block;
    border: 3px solid white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    transform: scale(0.8);
    margin-right: ${headerElemDesign.hamburgerMargin}px;
  }

  #header .hamburger:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid white;
    animation: hamburger_puls 1s ease infinite;
  }

  #header .hamburger .bar {
    height: 2px;
    width: 30px;
    position: relative;
    background-color: white;
    z-index: -1;
  }

  #header .hamburger .bar::after,
  #header .hamburger .bar::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: white;
    transition: 0.3s ease;
    transition-property: top, bottom;
  }

  #header .hamburger .bar::after {
    top: 8px;
  }

  #header .hamburger .bar::before {
    bottom: 8px;
  }

  #header .hamburger.active .bar::before {
    bottom: 0;
  }

  #header .hamburger.active .bar::after {
    top: 0;
  }

  /* End Header section */
  `;

  let heroSectionComments = `
  <!-- Hero Section 
Hero Section (id="hero"):

The hero section is typically a prominent banner or section at the top of the website,

grabbing the user's attention and introducing the website.

It includes a container to hold the hero content.

Within the container, there is a heading hierarchy represented by h1 tags.

The heading hierarchy is split into multiple lines, creating an animated effect where each line appears sequentially.

The last line of the heading includes the name with each letter wrapped in a span tag.

A call-to-action button (a tag with class "cta") is provided with an href attribute pointing to the "#projects" section. Clicking the button will scroll the page to the projects section.
    -->
  `;
  const heroSection = `
  <section id="hero">
    <div class="hero container">
      <div>
        <h1>${heroElemSection.hero_greeting}</h1>
        <h1>${heroElemSection.hero_intro} </h1>
        <h1>${heroElemSection.hero_name}</h1>
        <a href="#projects" type="button" class="cta">${heroElemSection.portfolio_button}</a>
      </div>
    </div>
  </section>
  `;

  let heroSectionDesignComments = `
  
  /* Hero Section 
  The #hero selector styles the main container of the hero section. It sets a background image, adjusts its size to cover the container, positions it at the center, and gives it a relative position. 
  
  It also sets the z-index to n to ensure it appears above other elements.
  
  The #hero::after selector styles the pseudo-element ::after of the hero section. 
  
  It is positioned absolutely at the top left corner of the container and covers the entire height and width. It has a black background color with n opacity, creating a translucent overlay effect. It has a lower z-index to appear behind the content.
  
  The #hero .hero class styles the content within the hero section. 
  
  It sets a maximum width, centers the content horizontally with left and right auto margins, and adjusts the padding values for spacing.
  
  The #hero h1 styles the heading element within the hero section. 
  
  It has a display block, a width that fits its content, a large font size, and a relative position. The text color is transparent, and it has an animation for text reveal effect with a delay.
  
  The #hero h1:nth-child(n) selectors target specific h1 elements within the hero section and apply different animation delays to create a sequential reveal effect.
  
  The #hero h1 span styles the spans within the heading element. They are positioned absolutely at the top left corner of the heading, have a height of 100%, and a width of 0 initially. 
  
  They have a background color and an animation for a box reveal effect with a delay.
  
  The #hero h1:nth-child(n) span selectors target specific spans within the heading element and apply different animation delays to create a sequential box reveal effect.
      
      */
  `;
  const heroSectionDesign = `
  #hero {
    background-image: url(${heroElemSectionDesign.backgroundImage});
    background-size: ${heroElemSectionDesign.backgroundImageSize};
    background-position: ${heroElemSectionDesign.backgroundImagposition};
    position: relative;
    z-index: 1;
  }

  #hero::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: -1;
  }

  #hero .hero {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 0;
    padding-left: ${heroElemSectionDesign.heroContainer_paddingLeft};
    justify-content: ${heroElemSectionDesign.heroContainer_justifyContent};
  }

  #hero h1 {
    display: block;
    width: fit-content;
    font-size: ${heroElemSectionDesign.heroText_fontSize}rem;
    position: relative;
    color: ${heroElemSectionDesign.heroText_Color};
    animation: text_reveal 0.5s ease forwards;
    animation-delay: 1s;
  }

  #hero h1:nth-child(1) {
    animation-delay: 1s;
  }

  #hero h1:nth-child(2) {
    animation-delay: 2s;
  }

  #hero h1:nth-child(3) {
    animation: text_reveal_name 0.5s ease forwards;
    animation-delay: 3s;
  }

  #hero h1 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: crimson;
    animation: text_reveal_box 1s ease;
    animation-delay: 0.5s;
  }

  #hero h1:nth-child(1) span {
    animation-delay: 0.5s;
  }

  #hero h1:nth-child(2) span {
    animation-delay: 1.5s;
  }

  #hero h1:nth-child(3) span {
    animation-delay: 2.5s;
  }

  `;

  let serviceComments = `
  <!-- Service Section

  Service Section (id="services"):

The service section is used to showcase the services provided by the website owner or business.

It includes a container to hold the service content.

The service section is divided into two parts: service top and service bottom.

The service top consists of a section title (h1 tag) and a brief paragraph describing the services.

The service bottom contains multiple service items.

Each service item includes an icon represented by an image (img tag).

The service items also include a heading (h2 tag) describing the service and a paragraph (p tag) providing additional details about the service.

-->
  `;
  const service = `
  <section id="services">
  <div class="services container">
    <div class="service-top">
      <h1 class="section-title">${serviceElem.sectionName}</h1>
      <p>
      ${serviceElem.serviceParagraphDescription}
      </p>
    </div>
    <div class="service-bottom">
      <div class="service-item">
        <div class="icon">
          <img src=${serviceElem.service_1_image} />
        </div>
        <h2>${serviceElem.service_1_name}</h2>
        <p>
        ${serviceElem.service_1_description}
        </p>
      </div>
      <div class="service-item">
        <div class="icon">
        <img src=${serviceElem.service_2_image} />
        </div>
        <h2>${serviceElem.service_2_name}</h2>
        <p>
        ${serviceElem.service_2_description}
        </p>
      </div>
      <div class="service-item">
        <div class="icon">
        <img src=${serviceElem.service_3_image} />
        </div>
        <h2>${serviceElem.service_3_name}</h2>
        <p>
        ${serviceElem.service_3_description}
        </p>
      </div>
      <div class="service-item">
        <div class="icon">
        <img src=${serviceElem.service_4_image} />
        </div>
        <h2>${serviceElem.service_4_name}</h2>
        <p>
        ${serviceElem.service_4_description}
        </p>
      </div>
    </div>
  </div>
</section>
  `;

  let serviceDesignComments = `
  
  /* Services Section 
  The #services .services class styles the container of the services section. It sets the flex-direction to column, aligns the text in the center, and adjusts the maximum width, margins, and padding for spacing.
  
  The #services .service-top class styles the top section within the services container. 
  
  It adjusts the maximum width and margins to center the content horizontally.
  
  The #services .service-bottom class styles the bottom section within the services container. 
  
  It displays the items as a flex container, aligns them in the center, allows them to wrap to the next line, and adds margin at the top for spacing.
  
  The #services .service-item class styles each service item within the services container. 
  
  It sets the flex-basis to 80%, aligns the items at the start, justifies the content in the center, and arranges them in a column. 
  
  It adds padding, border radius, and a background image with cover size. It also sets margins, a relative position, and a higher z-index to appear above other elements. 
  
  The overflow: hidden property ensures that any content exceeding the container's dimensions is clipped.
  
  The #services .service-item::after styles the pseudo-element ::after of each service item. 
  
  It is positioned absolutely at the top left corner of the item and covers the entire height and width. It has a background image with a linear gradient from #29323c to #485563, and an opacity of n.
  
  It has a lower z-index to appear behind the item's content.
  
  The #services .service-bottom .icon class styles the icons within the service items. It sets a fixed height and width, and adds margin at the bottom for spacing.
  
  The #services .service-item h2 class styles the heading within each service item. It sets the font size, color to white, adds margin at the bottom, and applies text transformation to uppercase.
  
  The #services .service-item p class styles the paragraphs within each service item. It sets the color to white and aligns the text to the left.
      
      */
  `;
  const serviceDesign = `
  #services .services {
    flex-direction: column;
    text-align: center;
    max-width: 1500px;
    margin: 0 auto;
    padding: 100px 0;
  }

  #services .service-top {
    max-width: 500px;
    margin: 0 auto;
  }

  #services .service-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: ${serviceDesignElem.serviceCards_marginTop}px;
  }

  #services .service-item {
    flex-basis: 80%;
    display: flex;
    align-items: ${serviceDesignElem.serviceCards_items};
    justify-content: center;
    flex-direction: column;
    padding: ${serviceDesignElem.serviceCards_padding}px;
    border-radius: ${serviceDesignElem.serviceCards_borderRadius}px;
    background-image: url(${serviceDesignElem.serviceCards_backGroundImage});
    background-size: cover;
    margin: 10px 5%;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  #services .service-item::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: ${serviceDesignElem.serviceCards_backGroundImage_opacity};
    z-index: -1;
  }

  #services .service-bottom .icon {
    height: 80px;
    width: 80px;
    margin-bottom: 20px;
  }

  #services .service-item h2 {
    font-size: ${serviceDesignElem.serviceName_fontSize}rem;
    color: ${serviceDesignElem.serviceName_Color};
    margin-bottom: ${serviceDesignElem.serviceName_marginBottom}px;
    text-transform: uppercase;
  }

  #services .service-item p {
    color: ${serviceDesignElem.serviceDescription_Color};
    text-align: ${serviceDesignElem.serviceDescription_textAlign};
  }

  `;

  let projectComments = `
  <!-- Projects Section 

  Projects Section (id="projects"):

The projects section showcases recent projects completed by the website owner or business.

It includes a container to hold the project content.

The section starts with a section title (h1 tag) and a span tag used for additional styling.

Multiple project items are displayed within the all-projects container.

Each project item consists of a project-info div and a project-img div.

The project-info div contains a heading (h1 tag) representing the project title, a subheading (h2 tag) describing the project,

and a paragraph (p tag) providing details about the project.

The project-img div includes an image (img tag) representing the project.
-->
  `;
  const project = `
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">${projectElem.sectionTitle}</h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>${projectElem.project_1_name}</h1>
            <h2>${projectElem.project_1_heading2}</h2>
            <p>
            ${projectElem.project_1_description}
            </p>
          </div>
          <div class="project-img">
            <img src=${projectElem.project_1_image} />
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1>${projectElem.project_2_name}</h1>
          <h2>${projectElem.project_2_heading2}</h2>
          <p>
          ${projectElem.project_2_description}
          </p>
        </div>
        <div class="project-img">
          <img src=${projectElem.project_2_image} />
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1>${projectElem.project_3_name}</h1>
          <h2>${projectElem.project_3_heading2}</h2>
          <p>
          ${projectElem.project_3_description}
          </p>
        </div>
        <div class="project-img">
          <img src=${projectElem.project_3_image} />
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1>${projectElem.project_4_name}</h1>
          <h2>${projectElem.project_4_heading2}</h2>
          <p>
          ${projectElem.project_4_description}
          </p>
        </div>
        <div class="project-img">
          <img src=${projectElem.project_4_image} />
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1>${projectElem.project_5_name}</h1>
          <h2>${projectElem.project_5_heading2}</h2>
          <p>
          ${projectElem.project_5_description}
          </p>
        </div>
        <div class="project-img">
          <img src=${projectElem.project_5_image} />
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  let projectDesignComments = `
  /* Projects section

  The #projects .projects class styles the container of the projects section. It sets the flex-direction to column, adjusts the maximum width, and centers the container horizontally using margin: 0 auto. 
  
  It also adds padding for spacing.
  
  The #projects .projects-header h1 class styles the heading within the projects section. 
  
  It adds margin at the bottom for spacing.
  
  The #projects .all-projects class styles the container for all project items. 
  
  It displays the items as a flex container, aligns them in the center, and arranges them in a column.
  
  The #projects .project-item class styles each project item. It displays the item as a flex container, aligns the items in the center, and arranges them in a column.
  
  It sets the width to 'nn%', centers the item horizontally using margin: 'n'npx auto, and applies overflow: hidden to clip any content exceeding the item's dimensions. 
  
  It also adds border-radius for rounded corners.
  
  The #projects .project-info class styles the information section within each project item. 
  
  It sets the padding, flex-basis to 'n'n%, and adjusts the background color using a linear gradient. It also sets the text color to white and aligns the content in a column.
  
  The #projects .project-info h1 class styles the heading within the project information section. 
  
  It sets the font size and font weight.
  
  The #projects .project-info h2 class styles the subheading within the project information section. It sets the font size, font weight, and adds margin at the top for spacing.
  T
  he #projects .project-info p class styles the paragraphs within the project information section. It sets the color to white.
  
  The #projects .project-img class styles the image section within each project item. 
  
  It sets the flex-basis to 'n'n%, sets a fixed height, and applies overflow: hidden to clip any content exceeding the image's dimensions. It also sets a relative position.
  
  The #projects .project-img:after styles the pseudo-element ::after of the project image. It is positioned absolutely at the top left corner of the image and covers the entire height and width. 
  
  It has a background image with a linear gradient from #color to #color, and an opacity of n.
  
  The #projects .project-img img class styles the image within each project item. It adds a transition effect for smooth transformation.
  
  The #projects .project-item:hover .project-img img class styles the image within a project item when hovering over the item.
  
  It applies a scale transformation to the image to create a zoom effect.
      
      
      */
  `;
  const projectDesign = `
  #projects .projects {
    flex-direction: column;
    /* projects conatimer wifth*/
    max-width: ${projectDesignElem.projectsContainer_maxWidth}px;
    margin: 0 auto;
    padding: 100px 0;

  }

  #projects .projects-header h1 {
    margin-bottom: 50px;
  }

  #projects .all-projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #projects .project-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 10px;
  }

  #projects .project-info {
    /* project info padding */
    padding: ${projectDesignElem.projectInfo_padding}px;
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: ${projectDesignElem.projectInfo_alignItems};
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color:${projectDesignElem.projectInfo_color};
  }

  #projects .project-info h1 {
    font-size: ${projectDesignElem.projectName_fontSize}rem;
    font-weight: ${projectDesignElem.projectName_fontWeight};
  }

  #projects .project-info h2 {
    font-size: ${projectDesignElem.projectHeading2_fontSize}rem;
    font-weight: ${projectDesignElem.projectHeading2_fontWeight};
    margin-top: ${projectDesignElem.projectHeading2_marginTop}px;
  }

  #projects .project-info p {
    color: ${projectDesignElem.projectParagraohInfo_color};
  }

  #projects .project-img {
    flex-basis: 50%;
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  #projects .project-img:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: ${projectDesignElem.projectBackgroundImage_opacity};
  }

  #projects .project-img img {
    transition: 0.3s ease transform;
  }

  #projects .project-item:hover .project-img img {
    transform: scale(1.1);
  }

  `;

  let aboutComments = `
  <!-- About Section

  The About Section provides information about the website owner or business and gives visitors an insight into who they are and what they do.
  
  It includes a container (div tag) to hold the about content, ensuring proper alignment and spacing.
  
  The section is divided into two columns using the col-left and col-right classes, allowing for a visually appealing layout.
  
  The col-left column (class="col-left") contains an about-img div, which holds an image (img tag) representing the person or business.
  
  The image is typically a photograph or logo, visually representing the entity being described.
  
  The col-right column (class="col-right") includes the main content of the About Section.
  
  It begins with a section title (h1 tag), such as "About Us" or "Our Story," prominently displayed at the top.
  
  A subheading (h2 tag) may follow, providing a brief description or highlighting the person's role or the business's core values.
  
  The main content of the About Section is typically a paragraph or series of paragraphs (p tags) providing detailed information about the person or business.
  
  The content may include details such as the person's background, qualifications, experience, or the business's mission, vision, history, or accomplishments.
  
  The text may be formatted with appropriate headings, subheadings, and bullet points to enhance readability and structure.
  
  It is common to use persuasive language or storytelling techniques to engage the reader and create a connection.
  
  Additional elements like icons, quotes, or testimonials may be included to add credibility or reinforce key messages.
  
  The About Section aims to establish trust, credibility, and a personal connection with the audience, highlighting what makes the person or business unique or qualified to meet their needs.
  
  The About Section is an essential component of a website, allowing visitors to understand the person or business behind it and fostering a sense of familiarity and trust.
    -->
  `;
  const about = `
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src=${aboutElem.about_image} />
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">${aboutElem.about_heading}</h1>
        <h2>${aboutElem.about_intro}</h2>
        <p>
        ${aboutElem.info_para}
        </p>
        <a href="#" class="cta">${aboutElem.button}</a>
      </div>
    </div>
  </section>
  `;

  let aboutDesignComments = `

  /* About Section

  The #about .about class styles the container of the about section. 
  
  It sets the flex-direction to column-reverse, aligns the text in the center, adjusts the maximum width, and centers the container horizontally using margin: n auto.
  
  It also adds padding to the top, bottom, left, and right for spacing.
  
  The #about .col-left class styles the left column within the about section. 
  
  It sets the width to npx and the height to npx.
  
  The #about .col-right class styles the right column within the about section. It sets the width to n%.
  
  The #about .col-right h2 class styles the heading within the right column of the about section. 
  
  It sets the font size, font weight, letter spacing, and adds margin at the bottom for spacing.
  
  The #about .col-right p class styles the paragraphs within the right column of the about section. It adds margin at the bottom for spacing.
  
  The #about .col-right .cta class styles the call-to-action element within the right column of the about section. 
  
  It sets the color to black, adds margin at the bottom for spacing, sets padding, and adjusts the font size.
  
  The #about .col-left .about-img class styles the image section within the left column of the about section. 
  
  It sets the height and width to n%, creates a relative position, and adds a border of npx solid color.
  
  The #about .col-left .about-img::after styles the pseudo-element ::after of the about image. 
  
  It is positioned absolutely with left: -npx and top: npx. 
  
  It covers n% of the height and width of the image and adds a border of npx solid color. The z-index is set to -n to position it behind the image.   
      */

  `;
  const aboutDesign = `
  #about .about {
    flex-direction: column-reverse;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: ${aboutDesignElem.about_paddingLeft}px ;
    padding-bottom: 100px;
    padding-left:${aboutDesignElem.about_paddingTop}px;
    padding-right: 20px;
  }

  #about .col-left {
    width: 250px;
    height: 360px;
  }

  #about .col-right {
    width: 100%;
  }

  #about .col-right h2 {
    font-size: ${aboutDesignElem.about_intro_fontSize}rem;
    font-weight: ${aboutDesignElem.about_intro_fontWeight};
    letter-spacing: ${aboutDesignElem.about_intro_letterSpacing}rem;
    margin-bottom: ${aboutDesignElem.about_intro_marginBottom}px;
  }

  #about .col-right p {
    margin-bottom: 20px;
  }

  #about .col-right .cta {
    color: black;
    margin-bottom: 50px;
    padding: 10px 20px;
    font-size: 2rem;
  }

  #about .col-left .about-img {
    height: 100%;
    width: 100%;
    position: relative;
    border: ${aboutDesignElem.imageBorderRadius}px solid white;
  }

  #about .col-left .about-img::after {
    content: '';
    position: absolute;
    left: -33px;
    top: 19px;
    height: 98%;
    width: 98%;
    border: 7px solid crimson;
    z-index: -1;
  }

  `;

  let contactComments = `
    
  <!-- Contact Section

  The Contact Section is designed to provide visitors with the necessary information to get in touch with the website owner or business.
  
  It starts with a container (div tag) to hold the contact content, ensuring proper alignment and spacing.
  
  The section typically consists of a heading or section title (h1 tag) that indicates the purpose of the section, such as "Contact" or "Contact Information."
  
  The contact information is presented in a structured manner using the contact-items div, which contains individual contact-item divs.
  
  Each contact-item represents a specific type of contact information and consists of two main components: an icon and contact-info.
  
  The icon is typically an image (img tag) that visually represents the type of contact information, such as a phone icon for phone numbers or an envelope icon for email addresses.
  
  The contact-info div contains the details associated with the specific type of contact information, such as phone numbers, email addresses, or physical addresses.
  
  The details are typically displayed using heading elements (h1, h2, etc.) to indicate the type of information (e.g., Phone, Email, Address) and regular text (h2, h3, etc.) to display the actual contact details.
  
  Multiple instances of contact-info divs can be included to provide multiple contact options, such as multiple phone numbers or email addresses.
  
  Common types of contact information displayed in the Contact Section include phone numbers, email addresses, and physical addresses.
  
  The Contact Section aims to make it easy for visitors to reach out to the website owner or business by providing clear and accessible contact information.
  
  The section can be styled to match the overall design and branding of the website, making it visually appealing and easy to locate.
  
  Depending on the needs and preferences of the website owner or business, additional elements such as a contact form or map may be included to enhance the user experience and provide more interactive ways for visitors to get in touch.
    -->
  `;
  const contact = `
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">${contactElem.contactSection}</h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon">
            <img src=${contactElem.phoneImage} />
          </div>
          <div class="contact-info">
            <h1${contactElem.phoneTitle}</h1>
            <h2>${contactElem.phone1}</h2>
            <h2>${contactElem.phone2}</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src=${contactElem.emailImage} />
          </div>
          <div class="contact-info">
            <h1>${contactElem.emailTitle}</h1>
            <h2>${contactElem.email1}</h2>
            <h2>${contactElem.email2}</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src=${contactElem.addressImage} />
          </div>
          <div class="contact-info">
            <h1>${contactElem.addressTitle}</h1>
            <h2>${contactElem.address}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  let contactDesignComments = `
  /* contact Section 
  The provided code contains styles for the contact section:
  
  The #contact .contact class styles the container of the contact section. 
  
  It sets the flex-direction to column, adjusts the maximum width, centers the container horizontally using margin: n auto, and sets the width to n%.
  
  The #contact .contact-items class styles the container for contact items within the contact section. It sets the width to n%.
  
  The #contact .contact-item class styles each individual contact item. It sets the width to n%, aligns the text in the center, 
  
  adds border-radius for rounded corners, sets padding and margin for spacing, displays the items as a flex container, centers the content vertically and horizontally, 
  
  and adds a box shadow with a transition effect on box-shadow property.
  
  The #contact .contact-item:hover class styles the contact item when hovered. It changes the box-shadow to a different value, creating a hover effect.
  
  The #contact .icon class styles the icon within each contact item. It sets the width, centers the icon horizontally using margin: 0 auto, and adds margin at the bottom for spacing.
  
  The #contact .contact-info h1 class styles the heading within each contact item. It sets the font size, font weight, and adds margin at the bottom for spacing.
  
  The #contact .contact-info h2 class styles the subheading within each contact item. It sets the font size, line height, font weight, and adjusts the spacing between lines.
      
      */
  `;
  const contactDesign = `
  #contact .contact {
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  #contact .contact-items {
    /* max-width: 400px; */
    width: 100%;
  }

  #contact .contact-item {
    width: 80%;
    text-align: center;
    border-radius: ${contactDesignElem.contactBox_borderRaduis}px;
    padding: ${contactDesignElem.contactBox_padding}px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 18px 0 #0000002c;
    transition: 0.3s ease box-shadow;
  }

  #contact .contact-item:hover {
    box-shadow: 0px 0px 5px 0 #0000002c;
  }

  #contact .icon {
    width: ${contactDesignElem.ContactIconWidth}px;
    margin: 0 auto;
    margin-bottom: ${contactDesignElem.ContactIcon_marginBottom}px;
  }

  #contact .contact-info h1 {
    font-size: ${contactDesignElem.ContactHeadings_fontSize}rem;
    font-weight: ${contactDesignElem.ContactHeadings_fontWeight};
    margin-bottom: 5px;
  }

  #contact .contact-info h2 {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
  }

  `;

  let FooterComments = `
  
  <!-- Footer 
  The Footer Section is located at the bottom of the webpage and typically contains information related to the website, business, or organization.
  
  It begins with a container (div tag) that holds the footer content, ensuring proper alignment and spacing.
  
  The section usually includes a brand or logo element (div or h1 tag) to display the name or branding of the website, business, or individual associated with the site.
  
  The <section> tag defines a section of the webpage and assigns it the identifier "footer" using the id attribute.
  
  Within the section, a container <div> is used to group the footer content and apply styling and alignment.
  
  The brand or logo is displayed within the <div> element with the class "brand." In this example, an <h1> heading is used with the text "Shaif Arfan." The <span> tag can be used for additional styling if desired.
  
  A subheading is included using the <h2> tag with the text"
  
    -->
  `;
  const Footer = `
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>${footerElem.hero_name}</h1>
      </div>
      <h2>${footerElem.message}</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src='${footerElem.image1}' /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src='${footerElem.image2}' /></a>
        </div>

        <div class="social-item">
          <a href="#"><img src='${footerElem.image3}' /></a>
        </div>
      </div>
      <p>${footerElem.copyRight}</p>
    </div>
  </section>
  `;

  let footerDesignComments = `
  /* Footer 
  The #footer selector sets a background image for the footer using a linear gradient. The gradient starts with the color  at 0% and ends with the color.
  
  The #footer .footer selector styles the container of the footer section. It sets the minimum height,
  
  flex-direction to column, and adds padding at the top and bottom.
  
  The #footer h2 selector styles the heading within the footer. 
  
  It sets the color to white, font weight to 500, font size,letter spacing and adds margin at the top and bottom.
  
  The #footer .social-icon selector styles the container for social icons within the footer. It displays the icons as a flex container and adds margin at the bottom.
  
  The #footer .social-item selector styles each individual social icon within the footer. It sets the height and width and adds margin on the left and right.
  
  The #footer .social-item img selector styles the image within each social icon. It applies a grayscale filter with a value of 1, creating a grayscale effect, 
  
  and adds a transition effect on the filter property with a duration of ns.
  
  The #footer .social-item:hover img selector styles the image within each social icon when hovered. It changes the grayscale filter to 0, restoring the color of the image.
  
  The #footer p selector styles the paragraph text within the footer. It sets the color to white and font size to 1.3rem.
      
      */
  `;
  const footerDesign = `
  #footer {
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  }

  #footer .footer {
    min-height: 200px;
    flex-direction: column;
    padding-top: ${footerDesignElem.footerPaddingTop}px;
    padding-bottom: ${footerDesignElem.footerPaddingBottom}px;
  }

  #footer h2 {
    color:${footerDesignElem.footerMessageColor};
    font-weight: ${footerDesignElem.footerMessageFontWeight};
    font-size: ${footerDesignElem.footerMessageFontSize}rem;
    letter-spacing: 0.1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #footer .social-icon {
    display: flex;
    margin-bottom: 30px;
  }

  #footer .social-item {
    height: 50px;
    width: 50px;
    margin: 0 5px;
  }

  #footer .social-item img {
    filter: grayscale(1);
    transition: 0.3s ease filter;
  }

  #footer .social-item:hover img {
    filter: grayscale(0);
  }

  #footer p {
    color: white;
    font-size: 1.3rem;
  }
  `;

  let responsiveDesignComments = `
  /* Media Query For Tablet 

  Media Query for Tablet:
  
  It targets screens with a minimum width of 768px.
  The .cta class is modified with a font size of 2.5rem and padding of 20px 60px.
  The .section-title class within an h1 element is modified with a font size of 6rem.
  The #hero h1 selector is modified with a font size of 7rem.
  The #services .service-bottom .service-item selector is modified with a flex-basis of 45% and a margin of 2.5%.
  The #projects .project-item selector is modified to have a flex-direction of row, a height of 400px, no margin, a width of 100%, and no border radius.
  The #projects .all-projects .project-info selector is modified with a height of 100%.
  The #projects .all-projects .project-img selector is modified with a height of 100%.
  The #about .about selector is modified with a flex-direction of row.
  The #about .col-left selector is modified with a width of 600px, a height of 400px, and a padding-left of 60px.
  The #about .about .col-left .about-img::after selector is modified with a left position of -45px, a top position of 34px, a height of 98%, a width of 98%, and a border of 10px solid #dc1461.
  The #about .col-right selector is modified with a text-align of left and a padding of 30px.
  The #about .col-right h1 selector is modified with a text-align of left.
  The #contact .contact selector is modified with a flex-direction of column, a padding of 100px 0, and the alignment properties for items.
  The #contact .contact-items selector is modified with a width of 100%, a display of flex, a flex-direction of row, a justified content of space-evenly, and no margin.
  The #contact .contact-item selector is modified with a width of 30%, no margin, and a flex-direction of row.
  The #contact .contact-item .icon selector is modified with a height of 100px and a width of 100px.
  The #contact .contact-item .icon img selector is modified with an object-fit of contain.
  The #contact .contact-item .contact-info selector is modified with a width of 100%, a text-align of left, and a padding-left of 20px.
  
  Media Query for Desktop:
  
  It targets screens with a minimum width of 1200px.
  The .hamburger class within #header is modified with a display of none.
  The #header .nav-list ul selector is modified with a position of initial, a display of block, a height of auto, a width of fit-content, and a transparent background-color.
  The #header .nav-list ul li selector is modified with a display of inline-block.
  The #header .nav-list ul li a selector is modified with a font size of 1.8rem.
  The #header .nav-list ul a:after selector is modified with a display of none.
  The #services .service-bottom .service-item selector is modified with a flex-basis of 22% and a margin of 1.5%.
  These media queries allow you to apply different CSS styles based on the screen size or device being used to view the website.
      
      */
  `;
  const Responsiveness = `
  @media only screen and (min-width: 768px) {
    .cta {
      font-size: 2.5rem;
      padding: 20px 60px;
    }

    h1.section-title {
      font-size: 6rem;
    }

    /* Hero */
    #hero h1 {
      font-size: 7rem;
    }

    /* End Hero */

    /* Services Section */
    #services .service-bottom .service-item {
      flex-basis: 45%;
      margin: 2.5%;
    }

    /* End Services Section */

    /* Project */
    #projects .project-item {
      flex-direction: row;
    }

    #projects .project-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    #projects .project-item {
      height: 400px;
      margin: 0;
      width: 100%;
      border-radius: 0;
    }

    #projects .all-projects .project-info {
      height: 100%;
    }

    #projects .all-projects .project-img {
      height: 100%;
    }

    /* End Project */

    /* About */
    #about .about {
      flex-direction: row;
    }

    #about .col-left {
      width: 600px;
      height: 400px;
      padding-left: 60px;
    }

    #about .about .col-left .about-img::after {
      left: -45px;
      top: 34px;
      height: 98%;
      width: 98%;
      border: 10px solid #dc1461
    }

    #about .col-right {
      text-align: left;
      padding: 30px;
    }

    #about .col-right h1 {
      text-align: left;
    }

    /* End About */

    /* contact  */
    #contact .contact {
      flex-direction: column;
      padding: 100px 0;
      align-items: center;
      justify-content: center;
      min-width: 20vh;
    }

    #contact .contact-items {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 0;
    }

    #contact .contact-item {
      width: 30%;
      margin: 0;
      flex-direction: row;
    }

    #contact .contact-item .icon {
      height: 100px;
      width: 100px;
    }

    #contact .contact-item .icon img {
      object-fit: contain;
    }

    #contact .contact-item .contact-info {
      width: 100%;
      text-align: left;
      padding-left: 20px;
    }

    /* End contact  */
  }

  /* End Media Query For Tablet */

  /* Media Query For Desktop */
  @media only screen and (min-width: 1200px) {

    /* header */
    #header .hamburger {
      display: none;
    }

    #header .nav-list ul {
      position: initial;
      display: block;
      height: auto;
      width: fit-content;
      background-color: transparent;
    }

    #header .nav-list ul li {
      display: inline-block;
    }

    #header .nav-list ul li a {
      font-size: 1.8rem;
    }

    #header .nav-list ul a:after {
      display: none;
    }

    /* End header */

    #services .service-bottom .service-item {
      flex-basis: 22%;
      margin: 1.5%;
    }
  }
  `;

  const jsCode = `
  <script>
  const hamburger = document.querySelector(
    '.header .nav-bar .nav-list .hamburger'
  );
  const mobile_menu = document.querySelector(
    '.header .nav-bar .nav-list ul'
  );
  const menu_item = document.querySelectorAll(
    '.header .nav-bar .nav-list ul li a'
  );
  const header = document.querySelector('.header.container');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });

  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = '#29323c';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });

  menu_item.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });
  });
</script>
  `;
  const [sections, setSections] = useState([]);
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
  const [Tname, setTName] = useState('');

  const saveCode = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/usersTemplate',
        {
          authorName: name,
          authorEmail: userData,
          templateName: Tname,
          templateCode: completeCode,
          templateDescription: description,
        }
      );
      setLoading(false);

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sectionsCode = (sections) => {
    console.log('sections', sections);
    sections.forEach((section) => {
      if (section == 'Header') {
        setHead(true);
      } else if (section == 'Hero') {
        setHero(true);
      } else if (section == 'Services') {
        setService(true);
      } else if (section == 'Projects') {
        setProject(true);
      } else if (section == 'About') {
        setAbout(true);
      } else if (section == 'Contact') {
        setContact(true);
      } else if (section == 'Footer') {
        setFooter(true);
      }
    });
    let code = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Developer Portfolio</title>
        <style>
          @import 'https://fonts.googleapis.com/css?family=Montserrat:300, 400, 700&display=swap';

          ${cssComments ? globalDesignComments : ''}
          ${head ? globalDesign : ''}

          ${cssComments && head ? headerDesignComments : ' '}
          ${head ? headerDesign : ''}

          ${cssComments && hero ? heroSectionDesignComments : ' '}
          ${hero ? heroSectionDesign : ''}

          ${cssComments && services ? serviceDesignComments : ' '}
          ${services ? serviceDesign : ''}

          ${cssComments && projects ? projectDesignComments : ' '}
          ${projects ? projectDesign : ''}

          ${cssComments && abouts ? aboutDesignComments : ' '}
          ${abouts ? aboutDesign : ''}

          ${cssComments && contacts ? contactDesignComments : ' '}
          ${contacts ? contactDesign : ''}

          ${cssComments && footer ? footerDesignComments : ' '}
          ${footer ? footerDesign : ''}

          /* Keyframes 
The @keyframes hamburger_puls animation:

At 0% keyframe, it sets the opacity to 1 and the scale to 1, representing the initial state of the animation.

At 100% keyframe, it sets the opacity to 0 and the scale to 1.4, representing the final state of the animation.

The @keyframes text_reveal_box animation:

At 50% keyframe, it sets the width to 100% and the left position to 0, representing the halfway point of the animation where the text is fully revealed.

At 100% keyframe, it sets the width to 0 and the left position to 100%, representing the final state of the animation where the text is hidden.

The @keyframes text_reveal animation:

At 100% keyframe, it sets the color to white, representing the final state of the animation where the text is fully revealed with a white color.

The @keyframes text_reveal_name animation:

At 100% keyframe, it sets the color to crimson and the font weight to 500, representing the final state of the animation where the text is fully revealed with a crimson color and a font weight of 500.

These keyframes animations can be used in CSS rules to apply animated effects to elements.
    */
          /* Keyframes */
          @keyframes hamburger_puls {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1.4);
            }
          }
          @keyframes text_reveal_box {
            50% {
              width: 100%;
              left: 0;
            }
            100% {
              width: 0;
              left: 100%;
            }
          }
          @keyframes text_reveal {
            100% {
              color: white;
            }
          }
          @keyframes text_reveal_name {
            100% {
              color: crimson;
              font-weight: 500;
            }
          }
          /* End Keyframes */

          ${cssComments && responsive ? responsiveDesignComments : ' '}
          ${responsive ? Responsiveness : ''}
        </style>
      </head>
      ${htmlComments && head ? headerComments : ' '}
      ${head ? header : ''}
      ${htmlComments && hero ? heroSectionComments : ' '}
      ${hero ? heroSection : ''}
      ${htmlComments && service ? serviceComments : ' '}
      ${services ? service : ''}
      ${htmlComments && project ? projectComments : ' '}
      ${projects ? project : ''}
      ${htmlComments && about ? aboutComments : ' '}
      ${abouts ? about : ''}
      ${htmlComments && contact ? contactComments : ' '}
      ${contacts ? contact : ''}
      ${htmlComments && footer ? FooterComments : ' '}
      ${footer ? Footer : ''}



      ${jsCode}
      <body>
        
        
      </body>
    </html>
    
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

  const totalTemplate = async () => {
    try {
      const response = await axios.post(`
      http://localhost:8080/api/users/totalTemplates/${userData}`);
      console.log('faf', response);
    } catch (err) {
      console.log(err);
    }
  };

  const [totalTemp, setTotalTemp] = useState(-99);
  const firstTemplate = async () => {
    if (totalTemp == 0) {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/users/firstTemplate/${userData}`
        );

        console.log('fafdd', response);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('faf;ldd', totalTemp);
    }

    totalTemplate();
  };

  const [timeSinceFirst, setTimeSinceFirst] = useState(0);

  const timeSinceFirstTemplate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/timeSince/${userData}`
      );
      setTimeSinceFirst(response.data.daysElapsed);
      console.log('faf', response);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfCanSave = () => {
    console.log('totalTemp:', totalTemp);
    console.log('timeSinceFirst:', timeSinceFirst);
    if (status == 'Normal' && totalTemp > 2 && timeSinceFirst < 30) {
      console.log('you cannot save');
      setOpenPayment(true);
    } else {
      handleOpen();
    }
  };

  const [openPayment, setOpenPayment] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [loading, setLoading] = useState(false);

  return (
    <div className='main_container_code'>
      {loading ? (
        <div className='Loader'>
          <ClimbingBoxLoader
            color={'#eeb85c'}
            loading={loading}
            size={15}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
          <h3
            style={{
              color: '#eeb85c',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginTop: '1rem',
            }}>
            Please Wait while we Save your Template
          </h3>
        </div>
      ) : null}
      <div class='Preview_wrapper'>
        <div class='link_wrapper'>
          <a
            onClick={() => {
              navigate('/dashboard/Templates/DeveloperPortfolio/DP');
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
              control={
                <Checkbox
                  checked={sections.includes('Header')}
                  onChange={handleSectionsChange}
                />
              }
              label='Header'
              value='Header'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Hero')}
                  onChange={handleSectionsChange}
                />
              }
              label='Hero'
              value='Hero'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Services')}
                  onChange={handleSectionsChange}
                />
              }
              label='Services'
              value='Services'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Projects')}
                  onChange={handleSectionsChange}
                />
              }
              label='Projects'
              value='Projects'
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
                  checked={sections.includes('Contact')}
                  onChange={handleSectionsChange}
                />
              }
              label='Contact'
              value='Contact'
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
              setHead(false);
              setHero(false);
              setService(false);
              setProject(false);
              setAbout(false);
              setContact(false);
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
            if (section === 'Header') {
              return <HeaderSection />;
            } else if (section === 'Hero') {
              return <HeroSection />;
            } else if (section === 'Services') {
              return <ServiceSection />;
            } else if (section === 'Projects') {
              return <ProjectSection />;
            } else if (section === 'About') {
              return <AboutSection />;
            } else if (section === 'Contact') {
              return <ContactSection />;
            } else if (section === 'Footer') {
              return <FooterSection />;
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
                checkIfCanSave();
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
              <form
                onSubmit={() => {
                  setLoading(true);
                  firstTemplate();
                  saveCode();
                  SETCODE();
                  handleClose();
                }}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  Template Name
                </Typography>
                <TextField
                  required
                  sx={{
                    width: '100%',
                    marginTop: 3,
                  }}
                  id='outlined-basic'
                  label='Template Name'
                  variant='outlined'
                  onChange={(e) => {
                    setTName(e.target.value);
                  }}
                />
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
                  <button
                    type='submit'
                    style={{ marginTop: 10 }}
                    className='Save_btn_primary'>
                    Save
                  </button>
                  <Feedback
                    style={{ marginTop: 10 }}
                    email={userData}
                    template='Developer Portfolio'
                  />
                </div>
              </form>
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
      <div>
        <Modal
          open={openPayment}
          onClose={() => {
            setOpenPayment(false);
          }}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Your Free Trail has Expired Please Upgrade to Premium
            </Typography>
            <Button
              variant='contained'
              onClick={() => {
                navigate('/dashboard/Payments');
                setOpenPayment(false);
              }}>
              Upgrade
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Index;
