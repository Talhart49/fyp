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
            <li><a href="#services" data-after="${headerElements.nav_element2}">${headerElements.nav_element12}</a></li>
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
  const Footer = `
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>${footerElem.hero_name}</h1>
      </div>
      <h2>${footerElem.message}</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src=${footerElem.image1} /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src=${footerElem.image2}/></a>
        </div>

        <div class="social-item">
          <a href="#"><img src=${footerElem.image3} /></a>
        </div>
      </div>
      <p>${footerElem.copyRight}</p>
    </div>
  </section>
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

          ${head ? globalDesign : ''}
          ${head ? headerDesign : ''}
          ${hero ? heroSectionDesign : ''}
          ${services ? serviceDesign : ''}
          ${projects ? projectDesign : ''}
          ${abouts ? aboutDesign : ''}
          ${contacts ? contactDesign : ''}
          ${footer ? footerDesign : ''}

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

          ${responsive ? Responsiveness : ''}
        </style>
      </head>
        
      ${head ? header : ''}
      ${hero ? heroSection : ''}
      ${service ? service : ''}
      ${project ? project : ''}
      ${about ? about : ''}
      ${contact ? contact : ''}
      ${footer ? Footer : ''}


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
          <h1>Generated Code</h1>
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