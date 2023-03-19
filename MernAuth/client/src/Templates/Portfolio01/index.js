import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/Portfolio01_redux/P01_Slice';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from '@mui/material/Modal';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import '../style.css';

import axios from 'axios';

import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

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
  const rootTheme = useSelector((state) => state.P01.rootTheme);
  const homeElements = useSelector((state) => state.P01.home);
  const homeElemDesign = useSelector((state) => state.P01.homeDesign);
  const aboutElements = useSelector((state) => state.P01.about);
  const aboutElemDesign = useSelector((state) => state.P01.aboutDesign);
  const skillsElements = useSelector((state) => state.P01.skills);
  const skillsElemDesign = useSelector((state) => state.P01.skillsDesign);
  const portfolioElements = useSelector((state) => state.P01.portfolio);
  const portfolioElemDesign = useSelector((state) => state.P01.portfolioDesign);
  const servicesElements = useSelector((state) => state.P01.service);
  const servicesElemDesign = useSelector((state) => state.P01.serviceDesign);
  const contactElements = useSelector((state) => state.P01.contact);
  const contactElemDesign = useSelector((state) => state.P01.contactDesign);

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

  const [completeCode, setCompleteCode] = useState();

  const [htmlComments, setHtmlComments] = useState(false);
  const [cssComments, setCssComments] = useState(false);

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);
  const [responsive, setResponsive] = useState(false);

  let homeCode = `
  <!-- === Home Section Start -->
  <section id="home">
    <div class="container">
      <div class="home-cols">
        <!-- img Col -->
        <div class="home-img-col">
          <img src=${homeElements.hero_image} alt="..." />
        </div>
        <!-- Center Col -->
        <div class="home-info-col">
          <h1>Hi, This Is <span>${homeElements.hero_name}.</span><br />${homeElements.hero_Title}</h1>
          <p>
            ${homeElements.hero_introduction}
          </p>
          <a href="#">${homeElements.cv_button} <i class="fa-solid fa-download"></i></a>
        </div>
        <!-- Menu Col -->
        <div class="home-menu-col">
          <div class="menu-item">
            <span>Home</span>
            <a href="#home" class="active"
              ><i class="fa-solid fa-house-chimney-user"></i
            ></a>
          </div>
          <div class="menu-item">
            <span>About Me</span>
            <a href="#about"><i class="fa-solid fa-user"></i></a>
          </div>
          <div class="menu-item">
            <span>My Work</span>
            <a href="#portfolio"><i class="fa-solid fa-briefcase"></i></a>
          </div>
          <div class="menu-item">
            <span>My Services</span>
            <a href="#service"><i class="fa-brands fa-servicestack"></i></a>
          </div>
          <div class="menu-item">
            <span>Contact Me</span>
            <a href="#contact"><i class="fa-solid fa-id-card-clip"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- === Home Section END === -->
  `;
  let homeDesign = `
  /* Googlw Fonts */
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  /* CSS Reset */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* Global Variables */
  

  :root {
    --hFont: '${rootTheme.headingFontFamily}', sans-serif;
    --pFont: '${rootTheme.paragraphFontFamily}', sans-serif;
    --themeColor: ${rootTheme.themeColor};
    --bgColor: ${rootTheme.backgroundColor};
    --Color: ${rootTheme.textColor};
  }

  /* --- Home Section Start --- */
  #home {
    background-color: var(--bgColor);
    position: relative;
  }
  #home::before {
    content: '';
    width: 20%;
    height: 100%;
    background-color: var(--themeColor);
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-right-radius: 20px;
  }
  .container {
    padding: 50px 5%;
  }
  #home .home-cols {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 70px;
    position: relative;
  }
  #home .home-cols .home-img-col img {
    background-color: black;
    border-radius: ${homeElemDesign.image_border_radius}px;
    filter: grayscale(100%);
    transition: 1s;
  }
  #home .home-cols .home-img-col img:hover {
    filter: grayscale(0);
  }
  #home .home-cols .home-info-col {
    padding-right: 40px;
  }
  #home .home-cols .home-info-col h1 {
    color: white;
    font-family: var(--hFont);
    font-size: ${homeElemDesign.heading_fontSize}px;
    font-weight: ${homeElemDesign.heading_fontWeight};
  }
  #home .home-cols .home-info-col h1 span {
    color: var(--themeColor);
  }
  #home .home-cols .home-info-col p {
    color: var(--Color);
    font-family: var(--pFont);
    font-size: ${homeElemDesign.paragraph_fontSize}px;
    letter-spacing: 0.5px;
    font-weight: ${homeElemDesign.paragraph_fontWeight};
    margin-top: ${homeElemDesign.paragraph_marginTop}px;
  }
  #home .home-cols .home-info-col a {
    display: inline-block;
    margin-top: 25px;
    text-decoration: none;
    color: var(--Color);
    font-family: var(--pFont);
    font-size: 17px;
    font-weight: 500;
    padding: 9px 0;
    padding-left: 20px;
    width: 190px;
    border: 2px solid var(--themeColor);
    border-radius: 25px;
    position: relative;
    transition: 0.3s;
  }
  #home .home-cols .home-info-col a:hover {
    background-color: var(--themeColor);
  }
  #home .home-cols .home-info-col a i {
    position: absolute;
    right: -1px;
    top: -1px;
    background-color: var(--themeColor);
    padding: 10px;
    border-radius: 50%;
    border: 2px solid var(--themeColor);
  }
  #home .home-cols .home-menu-col .menu-item {
    margin: 25px 0;
    position: relative;
  }
  #home .home-cols .home-menu-col .menu-item span {
    background-color: rgba(0, 0, 0, 0.678);
    color: white;
    font-family: var(--pFont);
    font-weight: 400;
    font-size: 15px;
    padding: 10px 0;
    width: 120px;
    text-align: center;
    position: absolute;
    top: 10px;
    left: -120px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    opacity: 0;
    transition: 0.5s;
  }
  #home .home-cols .home-menu-col .menu-item:hover span {
    opacity: 1;
  }
  #home .home-cols .home-menu-col .menu-item a {
    text-decoration: none;
    background-color: rgb(51, 51, 51);
    color: rgb(169, 169, 169);
    font-size: 25px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    line-height: 60px;
    transition: 0.4s;
    text-align: center;
  }
  #home .home-cols .home-menu-col .menu-item a:hover {
    background-color: var(--themeColor);
    color: white;
  }
  #home .home-cols .home-menu-col .menu-item .active {
    background-color: var(--themeColor);
    color: white;
  }
  `;
  let aboutCode = `
  <!-- === About Sction Start === -->
  <section id="about">
    <div class="container">
      <h1>About <span>me</span></h1>
      <div class="about-cols">
        <div class="about-left-col">
          <h2>${aboutElements.section_heading}</h2>
          <p>
            ${aboutElements.info_para_01}
          </p>
          <p>
            ${aboutElements.info_para_02}
          </p>
          <a href="#">${aboutElements.button_text} <i class="fa-solid fa-angles-right"></i></a>
        </div>
        <div class="about-right-col">
          <div class="about-box">
            <h2>${aboutElements.completed_projects}+</h2>
            <p>Projects completed</p>
          </div>
          <div class="about-box">
            <h2>${aboutElements.years_of_expericnce}+</h2>
            <p>Years of experience</p>
          </div>
          <div class="about-box">
            <h2>${aboutElements.happy_clients}+</h2>
            <p>Happy Clients</p>
          </div>
          <div class="about-box">
            <h2>${aboutElements.customers_reviews}+</h2>
            <p>Customer Reviews</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- === About Sction End === -->
  `;
  let aboutDesign = `
  /* --- About section Start --- */
  #about {
    background-color: var(--bgColor);
    padding: 30px 1%;
    position: relative;
  }
  #about::after {
    content: '';
    width: 30%;
    height: 1px;
    background-color: lightslategray;
    position: absolute;
    bottom: 0;
    left: 35%;
  }
  #about h1 {
    font-family: var(--hFont);
    color: ${aboutElemDesign.heading_color};
    text-align: center;
    font-size: ${aboutElemDesign.section_heading_fontSize}px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: 0 0 40px rgba(0, 0, 0, 0.555);
  }
  #about h1 span {
    color: var(--themeColor);
  }

  #about .about-cols {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
    margin-top: ${aboutElemDesign.section_content_marginTop}px;
  }
  #about .about-cols .about-left-col {
    flex-basis: 50%;
  }
  #about .about-cols .about-left-col h2 {
    font-family: var(--hFont);
    color: white;
    text-transform: capitalize;
    font-size: ${aboutElemDesign.column_heading_fontSize}px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  #about .about-cols .about-left-col p {
    font-family: var(--pFont);
    color: var(--Color);
    font-size: ${aboutElemDesign.paragraph_fontSize}px;
    letter-spacing: 0.5px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  #about .about-cols .about-left-col a {
    display: inline-block;
    text-decoration: none;
    color: var(--Color);
    border: 2px solid var(--themeColor);
    padding: 7px 25px;
    font-family: var(--pFont);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-top: 15px;
    border-radius: 4px;
    border-top-right-radius: 0;
    background-color: var(--themeColor);
  }
  #about .about-cols .about-left-col a:hover i {
    transform: translateX(5px);
  }
  #about .about-cols .about-left-col a i {
    background-color: #48dd85;
    padding: 6px 10px;
    border-radius: 4px;
    margin-left: 10px;
    transition: 0.5s;
  }
  #about .about-cols .about-right-col {
    flex-basis: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 0 50px;
  }
  #about .about-cols .about-right-col .about-box {
    border: 1px solid rgb(56, 55, 55);
    height: 200px;
    border-radius: 3px;
    padding: 30px;
    transition: 0.6s;
  }
  #about .about-cols .about-right-col .about-box h2 {
    font-size: ${aboutElemDesign.boxes_heading_fontSize}px;
    font-family: var(--hFont);
    color: var(--themeColor);
    font-weight: 700;
  }
  #about .about-cols .about-right-col .about-box p {
    font-family: var(--pFont);
    color: white;
    font-size: ${aboutElemDesign.heading_content_fontSize}px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  #about .about-cols .about-right-col .about-box:hover {
    border: 1px solid var(--themeColor);
    transform: translateY(${
      aboutElemDesign.boxes_animation_direction === 'up' ? '-' : '+'
    }${aboutElemDesign.boxes_animation_height}px);
    box-shadow: 0 03px 20px rgba(0, 0, 0, 0.472);
  }
    `;
  let skillsCode = `
 <!-- === Skill Section Start === -->
 <section id="skill">
   <div class="container">
     <h3 class="sub-title"><span>my</span> Skills</h3>
     <div class="skill-cols">
       <!-- skill 1 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_01}</h2>
           <h2>${skillsElements.skill_01_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_01_experince}%"></div>
         </div>
       </div>

       <!-- skill 2 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_02}</h2>
           <h2>${skillsElements.skill_02_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_02_experince}%"></div>
         </div>
       </div>

       <!-- skill 3 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_03}</h2>
           <h2>${skillsElements.skill_03_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_03_experince}%"></div>
         </div>
       </div>

       <!-- skill 4 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_04}</h2>
           <h2>${skillsElements.skill_04_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_04_experince}%"></div>
         </div>
       </div>

       <!-- skill 5 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_05}</h2>
           <h2>${skillsElements.skill_05_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_05_experince}%"></div>
         </div>
       </div>

       <!-- skill 6 -->
       <div class="skill-item">
         <div class="skill-name-per">
           <h2>${skillsElements.skill_06}</h2>
           <h2>${skillsElements.skill_06_experince}%</h2>
         </div>
         <div class="skill-outer-bar">
           <div class="skill-inner-bar" style="width: ${skillsElements.skill_06_experince}%"></div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- === Skill Section END === -->
 `;
  let skillsDesign = `
  /* --- Skill Section Start --- */

  #skill {
    background-color: var(--bgColor);
    padding: 30px 1%;
    position: relative;
  }
  #skill::after {
    content: '';
    width: 30%;
    height: 1px;
    background-color: lightslategray;
    position: absolute;
    bottom: 0;
    left: 35%;
  }
  .sub-title {
    text-align: center;
    font-family: var(--hFont);
    font-size: ${skillsElemDesign.skills_section_heading_fontSize}px;
    font-weight: 700;
    color: ${skillsElemDesign.skills_heading_fontColor};
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.537);
    text-transform: uppercase;
  }
  .sub-title span {
    color: var(--themeColor);
  }
  #skill .skill-cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin-top: 70px;
  }
  #skill .skill-cols .skill-item .skill-name-per {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #skill .skill-cols .skill-item .skill-name-per h2 {
    color: var(--Color);
    font-family: var(--pFont);
    font-weight: 700;
    font-style: italic;
    font-size: ${skillsElemDesign.skills_heading_fontSize}px;
  }
  #skill .skill-cols .skill-item .skill-outer-bar {
    width: 100%;
    height: ${skillsElemDesign.bars_height}px;
    background-color: rgb(46, 45, 45);
    margin-top: 10px;
  }
  #skill .skill-cols .skill-item .skill-outer-bar .skill-inner-bar {
    background-color: var(--themeColor);
    height: ${skillsElemDesign.bars_height}px;
  }
  
  `;
  let portfolioCode = `
  <!-- === Portfolio Section start === -->
  <section id="portfolio">
    <div class="container">
      <h3 class="sub-title">My <span>Portfolio</span></h3>
      <p>
        ${portfolioElements.portfolio_header_text}
      </p>

      <div class="portfolio-grid">
        <!-- img 1 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_01_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_01_title}</h2>
            <a href="#${portfolioElements.portfolio_01_link}"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <!-- img 2 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_02_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_02_title}</h2>
            <a href="#${portfolioElements.portfolio_02_link}"><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <!-- img 3 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_03_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_03_title}</h2>
            <a href="#${portfolioElements.portfolio_03_link}"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <!-- img 4 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_04_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_04_title}</h2>
            <a href="#${portfolioElements.portfolio_04_link}"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <!-- img 5 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_05_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_05_title}</h2>
            <a href="#${portfolioElements.portfolio_05_link}"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <!-- img 6 -->
        <div class="portfolio-item">
          <div class="port-img-box">
            <img src="${portfolioElements.portfolio_06_image}" alt="..." />
          </div>
          <div class="port-img-info">
            <h2>${portfolioElements.portfolio_06_title}</h2>
            <a href="#${portfolioElements.portfolio_06_link}"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- === Portfolio Section end === -->

  `;
  let portfolioDesign = `
  /* --- Portfolio Section Start ---- */
      #portfolio {
        background-color: var(--bgColor);
        padding: 30px 7%;
        position: relative;
      }
      #portfolio::after {
        content: '';
        width: 30%;
        height: 1px;
        background-color: lightslategray;
        position: absolute;
        bottom: 0;
        left: 35%;
      }
      #portfolio p {
        font-family: var(--pFont);
        font-weight: 400;
        color: var(--Color);
        font-size: ${portfolioElemDesign.text_fontSize}px;
        letter-spacing: ${portfolioElemDesign.letter_spacing}px;
        text-align: ${portfolioElemDesign.text_align};
        margin-top: 15px;
      }
      #portfolio .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(${portfolioElemDesign.cards_per_row}, 1fr);
        grid-gap: ${portfolioElemDesign.card_gap}rem;
        margin-top: 70px;
      }
      #portfolio .portfolio-grid .portfolio-item {
        position: relative;
        border-radius: 15px;
      }
      #portfolio .portfolio-grid .portfolio-item .port-img-box img {
        width: 100%;
        height: ${portfolioElemDesign.card_image_height}px;
        border-radius: 15px;
      }
      #portfolio .portfolio-grid .portfolio-item .port-img-info {
        width: 100%;
        height: 100%;
        background-color: var(--themeColor);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        gap: 20px;
        opacity: 0;
        transition: 0.4s;
        transform: scale(0);
      }
      #portfolio .portfolio-grid .portfolio-item:hover .port-img-info {
        opacity: 1;
        transform: scale(1);
      }
      #portfolio .portfolio-grid .portfolio-item .port-img-info h2 {
        font-family: var(--hFont);
        font-size: 30px;
        font-weight: 600;
        color: white;
      }
      #portfolio .portfolio-grid .portfolio-item .port-img-info a {
        background-color: var(--bgColor);
        color: white;
        font-size: 20px;
        padding: 14px 15px;
        border-radius: 50%;
      }

  `;
  let serviceCode = `
  <!-- Service Section Start -->
  <section id="service">
    <div class="container">
      <h3 class="sub-title"><span>My</span> Services</h3>

      <div class="services-grid">
        <!-- service 1 -->
        <div class="service-item">
          <i class="fa-solid fa-code"></i>
          <h2>${servicesElements.service_1_name}</h2>
          <p>
            ${servicesElements.service_1_description}
          </p>
        </div>

        <!-- service 2 -->
        <div class="service-item">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h2>${servicesElements.service_2_name}</h2>
          <p>
          ${servicesElements.service_2_description}
          </p>
        </div>

        <!-- service 3 -->
        <div class="service-item">
          <i class="fa-solid fa-palette"></i>
          <h2>${servicesElements.service_3_name}</h2>
          <p>
          ${servicesElements.service_3_description}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Service Section END -->
  `;
  let serviceDesign = `
  /* --- Services Section Start */
      #service {
        background-color: var(--bgColor);
        padding: ${servicesElemDesign.Padding}px 7%;
        position: relative;
      }
      #service::after {
        content: '';
        width: 30%;
        height: 1px;
        background-color: lightslategray;
        position: absolute;
        bottom: 0;
        left: 35%;
      }
      #service .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2.4rem;
        margin-top: ${servicesElemDesign.cards_marginTop}px;
      }
      #service .services-grid .service-item {
        text-align: center;
        padding: 50px 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.472);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        transition: 0.7s;
      }
      #service .services-grid .service-item i {
        background-color: var(--themeColor);
        color: ${servicesElemDesign.icons_color};
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: ${servicesElemDesign.icons_fontSize}px;
        margin-bottom: 10px;
        border-radius: 20px;
        border-bottom-right-radius: 0;
        transition: 0.5s;
      }
      #service .services-grid .service-item h2 {
        color: white;
        font-family: var(--hFont);
        font-size: ${servicesElemDesign.service_fontSize}px;
        font-weight: 500;
        letter-spacing: 0.3px;
      }
      #service .services-grid .service-item p {
        font-family: var(--pFont);
        color: var(--Color);
        font-size: ${servicesElemDesign.service_paragraph_fontSize}px;
        font-weight: 400;
        letter-spacing: 0.6px;
      }
      #service .services-grid .service-item:hover {
        background-color: var(--themeColor);
      }
      #service .services-grid .service-item:hover i {
        background-color: white;
        color: var(--themeColor);
      }
      /* --- Services Section END */
  `;
  let contactCode = `
  <!-- Contact Us Section Start -->
  <section id="contact">
    <div class="container">
      <h3 class="sub-title">Contact <span>me</span></h3>

      <div class="contct-cols">
        <div class="con-top-col">
          <!-- Contact item 1 -->
          <div class="con-item">
            <i class="fa-solid fa-envelope-open-text"></i>
            <h2>Email</h2>
            <p>${contactElements.email}</p>
          </div>

          <!-- Contact item 2 -->
          <div class="con-item">
            <i class="fa-solid fa-phone"></i>
            <h2>Phone</h2>
            <p>${contactElements.phone}</p>
          </div>

          <!-- Contact item 3 -->
          <div class="con-item">
            <i class="fa-solid fa-location-dot"></i>
            <h2>Address</h2>
            <p>${contactElements.address}</p>
          </div>
        </div>

        <div class="con-bottom-col">
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="msg"
              id="msg"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Us Section END -->

  <!-- Footer -->
  <!-- This code represents a section with an ID of "footer". Inside this section, there is a paragraph element that contains the copyright information and designer credit. -->

  <section id="footer">
    <p>&copy; ${contactElements.copyright}</p>
  </section>

  `;
  let contactDesign = `
  /* --- Contact Section Start --- */

      #contact {
        background-color: var(--bgColor);
        padding: 30px 7%;
        position: relative;
      }
      #contact .contct-cols {
        margin-top: 60px;
      }
      #contact .contct-cols .con-top-col {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: ${contactElemDesign.grid_gap}rem;
        margin-top: ${contactElemDesign.margin_top}px;
      }
      #contact .contct-cols .con-top-col .con-item {
        text-align: center;
        padding: 50px 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.472);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        transition: 0.7s;
      }
      #contact .contct-cols .con-top-col .con-item i {
        background-color: var(--themeColor);
        color: white;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 32px;
        margin-bottom: 10px;
        border-radius: 20px;
        border-bottom-right-radius: 0;
        transition: 0.5s;
      }
      #contact .contct-cols .con-top-col .con-item h2 {
        color: white;
        font-family: var(--hFont);
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 0.3px;
        font-style: ${contactElemDesign.font_style};
      }
      #contact .contct-cols .con-top-col .con-item p {
        font-family: var(--pFont);
        color: var(--Color);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.6px;
        font-style: italic;
      }
      #contact .contct-cols .con-bottom-col form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 100px;
      }
      #contact .contct-cols .con-bottom-col form input,
      #contact .contct-cols .con-bottom-col form textarea {
        width: 50%;
        font-family: var(--pFont);
        font-size: ${contactElemDesign.input_feilds_fontSize}px;
        letter-spacing: 1px;
        font-weight: 400;
        color: var(--Color);
        background-color: #0000004f;
        border: 2px solid lightgray;
        padding: 7px 20px;
        border-radius: 2px;
        outline: none;
        transition: 0.4s;
        resize: none;
      }
      #contact .contct-cols .con-bottom-col form input[type='submit']:hover {
        background-color: var(--themeColor);
        cursor: pointer;
        color: white;
        border: 2px solid var(--themeColor);
      }
      #footer {
        text-align: center;
        background-color: var(--themeColor);
        padding: 20px;
      }
      #footer p {
        font-family: var(--hFont);
        color: white;
        font-weight: 400;
        letter-spacing: 0.5px;
        font-size: 15px;
        font-style: italic;
      }

  `;
  let responsiveDesign = `
     /* MobileView */

     /* 
     This is a media query written in CSS. Specifically, it targets screens with a maximum width of 985 pixels.
     
     Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
     
     In this case, the code inside the media query would be applied only to devices with screens that are 985 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets.
     */

     
     @media only screen and (max-width: 985px) {
       #home .home-cols .home-menu-col {
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         position: fixed;
         bottom: 0;
         left: 0;
         width: 100%;
         padding: 20px;
         background-color: rgba(0, 0, 0, 0.678);
         margin: 0;
         z-index: 5;
       }
       #home .home-cols .home-menu-col .menu-item {
         margin: 0 10px;
         position: relative;
       }
       #home .home-cols .home-menu-col .menu-item a {
         background-color: var(--themeColor);
         color: white;
         width: 40px;
         height: 40px;
         font-size: 18px;
         line-height: 40px;
       }
       #home .home-cols .home-menu-col .menu-item span {
         top: -40px;
         left: -50px;
         transition: 0.5s;
         background-color: var(--bgColor);
       }
     }

     /* This is a media query written in CSS. Specifically, it targets screens with a maximum width of 830 pixels.

     Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
     
     In this case, the code inside the media query would be applied only to devices with screens that are 830 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets. */
  
     
     @media only screen and (max-width: 830px) {
       #home::before {
         width: 0;
       }
       #home .container {
         padding: 50px 4%;
       }
       #home .home-cols {
         flex-direction: column-reverse;
         gap: 30px;
       }
       #home .home-cols .home-info-col {
         text-align: center;
         padding: 0;
       }
       #home .home-cols .home-info-col h1 {
         font-size: 35px;
       }
       #home .home-cols .home-info-col h1 br {
         display: none;
       }
       #home .home-cols .home-info-col a {
         width: 230px;
         padding-left: 0;
         text-align: center;
       }
       #home .home-cols .home-img-col img {
         background-color: rgb(0, 0, 0);
         width: 100%;
       }
     }

     /* This is a media query written in CSS. Specifically, it targets screens with a maximum width of 950 pixels.

     Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
     
     In this case, the code inside the media query would be applied only to devices with screens that are 950 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets. */
  
     
     @media only screen and (max-width: 950px) {
       #about .about-cols {
         gap: 40px;
         flex-direction: column;
       }
       #about .about-cols .about-right-col {
         grid-gap: 1rem;
         padding: 0;
       }
     }

     /* This is a media query written in CSS. Specifically, it targets screens with a maximum width of 400 pixels.

     Media queries allow you to apply different styles to a web page depending on certain characteristics of the device or browser that's being used to view it, such as screen size, orientation, resolution, etc.
     
     In this case, the code inside the media query would be applied only to devices with screens that are 400 pixels wide or smaller. This can be useful for creating a responsive design that looks good and functions well on a variety of devices, from desktop computers to smartphones and tablets. */
   
     
     @media only screen and (max-width: 400px) {
       #about .about-cols .about-right-col {
         grid-template-columns: repeat(1, 1fr);
       }
     }

     /* This is a media query written in CSS. Specifically, it targets screens with a maximum width of 400 pixels.
 */
     
     @media only screen and (max-width: 400px) {
       #skill .skill-cols {
         grid-template-columns: repeat(1, 1fr);
         grid-gap: 30px;
       }
     }
   
     /* 
     These are media queries in CSS. Media queries are used to apply different styles to a webpage based on the characteristics of the device or screen size.
 
 In this particular code, there are two media queries that apply to the #portfolio .portfolio-grid element.
 
 The first query applies when the screen size is less than or equal to 975px. In this case, the grid-template-columns property is set to repeat 2 columns with a width of 1fr, and the grid-gap property is set to 2rem. This will create a grid layout with two columns and a gap of 2rem between them.
 
 The second media query applies when the screen size is less than or equal to 630px. In this case, the grid-template-columns property is set to repeat 1 column with a width of 1fr, and the grid-gap property is set to 2rem. This will create a grid layout with a single column and a gap of 2rem between the items.
 
 So, essentially, these media queries are used to adjust the number of columns in the grid layout and the gap between the items based on the screen size.
  */

     @media only screen and (max-width: 975px) {
       #portfolio .portfolio-grid {
         grid-template-columns: repeat(2, 1fr);
         grid-gap: 2rem;
       }
     }
     @media only screen and (max-width: 630px) {
       #portfolio .portfolio-grid {
         grid-template-columns: repeat(1, 1fr);
         grid-gap: 2rem;
       }
     }
  
     /* This is a media query that targets screens with a maximum width of 850 pixels. 
     It sets the width of the input and textarea elements inside the form in the bottom column of the #contact section to 100% when the screen width is below 850 pixels. This is likely to ensure that the form fields take up the full width of the screen on smaller devices to improve user experience. */
 
     @media only screen and (max-width: 850px) {
       #contact .contct-cols .con-bottom-col form input,
       #contact .contct-cols .con-bottom-col form textarea {
         width: 100%;
       }
     }
    `;

  let globalCssComments = `
  /* 
 This CSS code sets some default styles for all elements on the page.
margin: 0 removes all margins on the elements, so there is no extra space around them.
padding: 0 removes all padding on the elements, so there is no extra space inside them.
box-sizing: border-box changes the way the width and height of elements are calculated, so that the padding and border are included in the total size of the element, instead of being added on top of it. This makes it easier to work with the layout of the page.
scroll-behavior: smooth adds smooth scrolling behavior to the page when the user clicks on links that navigate to different parts of the page. Instead of jumping to the target section, the page will smoothly scroll to it.

    */
  `;

  let themeCssComments = `
  /* Global Variables
      in this section we will define all the global variables
      which will be respnmsidlbe to edit the whole theme of the webstie
      */
  `;

  let homeCssComments = `
  /* 
  This is a CSS code for the styling of a homepage.
The #home selector sets the background color and position of the home section.
The #home::before pseudo-element creates a colored section on the left side of the screen.
The .container class sets the padding of the content area.
The .home-cols class sets the layout of the columns within the home section.
The .home-img-col class styles the image column, adding a black background and grayscale filter which is removed on hover.
The .home-info-col class styles the information column, setting the font and color of the heading and paragraph text.
The .home-menu-col class styles the menu column, setting the layout and color of the menu items.
The .menu-item class styles the individual menu items, adding a hover effect and setting the color and size of the menu icons. The active menu item is also styled differently.
Overall, this code creates a clean and modern layout for a homepage with a colored sidebar and stylish menu.
Here are all the CSS classes and their details from the provided code:
#home: This class sets the background color and position of the element with ID "home".
#home::before: This pseudo-class styles a pseudo-element that is inserted before the element with ID "home". It sets the width, height, background color, position, top, left, and border radius of the element.
.container: This class sets padding for the container element.
#home .home-cols: This class targets the child elements of the element with ID "home". It sets display, justify-content, align-items, gap, and position properties for the child elements.
#home .home-cols .home-img-col img: This class targets the image element inside the child element with class "home-img-col". It sets the background color, border radius, filter, and transition properties for the image.
#home .home-cols .home-img-col img:hover: This class targets the same image element on hover, and sets the filter property to grayscale(0) to remove the grayscale filter.
#home .home-cols .home-info-col: This class targets the child element with class "home-info-col" and sets the padding-right property.
#home .home-cols .home-info-col h1: This class targets the heading element inside the child element with class "home-info-col". It sets the color, font family, font size, and font weight of the heading.
#home .home-cols .home-info-col h1 span: This class targets the span element inside the heading element and sets its color.
#home .home-cols .home-info-col p: This class targets the paragraph element inside the child element with class "home-info-col". It sets the color, font family, font size, letter spacing, font weight, and margin-top properties of the paragraph.
#home .home-cols .home-info-col a: This class targets the anchor element inside the child element with class "home-info-col". It sets the display, margin-top, text decoration, color, font family, font size, font weight, padding, width, border, border radius, position, and transition properties of the anchor.
#home .home-cols .home-info-col a:hover: This class targets the same anchor element on hover, and sets the background color to the theme color.
#home .home-cols .home-info-col a i: This class targets the icon element inside the anchor element and sets its position, background color, padding, border radius, and border properties.
#home .home-cols .home-menu-col .menu-item: This class targets the child element with class "menu-item" inside the child element with class "home-menu-col". It sets the margin and position properties of the element.
#home .home-cols .home-menu-col .menu-item span: This class targets the span element inside the child element with class "menu-item" and sets its background color, color, font family, font weight, font size, padding, width, text align, position, top, left, border radius, opacity, and transition properties.
#home .home-cols .home-menu-col .menu-item:hover span: This class targets the same span element on hover and sets its opacity to 1.
#home .home-cols .home-menu-col .menu-item a: This class targets the anchor element inside the child element with class "menu-item" and sets the text decoration, background color, color, font size, height, width, border radius, display, line height, and transition properties.
  */


  /* Animations */

  /* Animations used hover, transition, opacity as well before property and filter property
  
  The opacity property can be used to make elements gradually disappear, giving the impression of an animation.

This property is used to gradually fade in/out the span element inside .menu-item when hovering over it. The CSS transition property is also used to control the speed of this effect.

Transitions are used to create smooth transitions between different states of an element, such as when a user hovers over an element or when an element is clicked. In the provided code, transitions are used to create smooth transitions when the user hovers over an image, when the user hovers over a link, and when the user hovers over a menu item.

Transitions are set using the transition property, which specifies the property or properties to which the transition should be applied, the duration of the transition, the timing function to be used, and an optional delay. Filter property of the image should be transitioned over a duration of 1 second.
  */
 `;

  let aboutCssComments = `
  /*
  This is a CSS code that styles the "about" section of a webpage. Here is a breakdown of the different CSS rules used:

#about: This selects the element with the ID of "about". It sets the background color, adds some padding, and positions the element relatively.
#about::after: This uses a pseudo-element to create a horizontal line below the "about" section. It sets the width, height, and position of the element, as well as the background color of the line.
#about h1: This styles the main heading of the "about" section. It sets the font family, color, text alignment, font size, text transform, letter spacing, and adds a text shadow effect.
#about h1 span: This styles the span element inside the main heading. It sets the color to a different theme color.
#about .about-cols: This selects the element with the class of "about-cols". It styles the display, alignment, and gap between the flex items, as well as adds some margin to the top.
#about .about-cols .about-left-col: This selects the element with the class of "about-left-col" within the "about-cols" element. It sets the flex basis to 50%.
#about .about-cols .about-left-col h2: This styles the subheading within the left column. It sets the font family, color, text transform, font size, font weight, and margin.
#about .about-cols .about-left-col p: This styles the paragraph within the left column. It sets the font family, color, font size, letter spacing, font weight, and margin.
#about .about-cols .about-left-col a: This styles the link within the left column. It sets the display, text decoration, color, border, padding, font family, font size, font weight, letter spacing, margin, border radius, and background color.
#about .about-cols .about-left-col a:hover i: This selects the icon element within the link and applies a transform effect when hovered over.
#about .about-cols .about-left-col a i: This styles the icon element within the link. It sets the background color, padding, border radius, margin, and adds a transition effect.
#about .about-cols .about-right-col: This selects the element with the class of "about-right-col" within the "about-cols" element. It sets the flex basis to 50%, and styles the display, grid template columns, grid gap, and padding.
#about .about-cols .about-right-col .about-box: This selects the element with the class of "about-box" within the right column. It sets the border, height, border radius, and padding, as well as a transition effect.
#about .about-cols .about-right-col .about-box h2: This styles the heading within the "about-box". It sets the font size, font family, color, and font weight.
#about .about-cols .about-right-col .about-box p: This styles the paragraph within the "about-box". It sets the font family, color, font size, text transform, and letter spacing.
#about .about-cols .about-right-col .about-box:hover: This applies a hover effect to the "about-box" element. It sets the border, transform, and box shadow properties.



/*Animations  */

  /* 
here are several CSS properties used in this code that give animation effects, such as:
after: what will happen after certain trigger.
scroll-behavior: smooth;: This property smoothens the scrolling behavior of the page.
text-shadow: This property creates a shadow effect behind text, which moves as the user scrolls.
transition: This property defines the transition effect when a property changes its value.
transform: This property allows elements to be translated, rotated, scaled, and skewed in various ways, which can create animations. For example, transform: translateX(5px); used in #about .about-cols .about-left-col a:hover i causes the element to move 5 pixels to the right when the mouse hovers over it.
:hover pseudo-class: This is not a property, but a selector that targets an element when the mouse pointer is over it. It is used in several places in this code, such as #about .about-cols .about-left-col a:hover i and #about .about-cols .about-right-col .about-box:hover, to trigger animation effects when the user hovers over the element.
*/
`;

  let skillsCssComments = `

 /* This is a CSS code for styling the skills section of a web page. It includes:
 #skill - This selects the element with the ID "skill" and applies styles to it. In this code, it sets the background-color, padding, and position properties.
#skill::after - This is a pseudo-element that adds content after the #skill element. It is used to create a horizontal line below the #skill element. It sets the width, height, background-color, position, bottom, and left properties.
.sub-title - This selects all elements with the class "sub-title" and applies styles to them. It sets the text-align, font-family, font-size, font-weight, color, text-shadow, and text-transform properties.
.sub-title span - This selects all <span> elements that are children of elements with the class "sub-title" and applies styles to them. In this code, it sets the color property.
#skill .skill-cols - This selects all elements with the class "skill-cols" that are descendants of the #skill element and applies styles to them. It sets the display, grid-template-columns, grid-gap, and margin-top properties.
#skill .skill-cols .skill-item .skill-name-per - This selects all elements with the class "skill-name-per" that are descendants of elements with the class "skill-item" that are descendants of elements with the class "skill-cols" that are descendants of the #skill element and applies styles to them. It sets the display, align-items, and justify-content properties.
#skill .skill-cols .skill-item .skill-name-per h2 - This selects all <h2> elements that are children of elements with the class "skill-name-per" that are descendants of elements with the class "skill-item" that are descendants of elements with the class "skill-cols" that are descendants of the #skill element and applies styles to them. It sets the color, font-family, font-weight, font-style, and font-size properties.
#skill .skill-cols .skill-item .skill-outer-bar - This selects all elements with the class "skill-outer-bar" that are descendants of elements with the class "skill-item" that are descendants of elements with the class "skill-cols" that are descendants of the #skill element and applies styles to them. It sets the width, height, background-color, and margin-top properties.
#skill .skill-cols .skill-item .skill-outer-bar .skill-inner-bar - This selects all elements with the class "skill-inner-bar" that are children of elements with the class "skill-outer-bar" that are descendants of elements with the class "skill-item" that are descendants of elements with the class "skill-cols" that are descendants of the #skill element and applies styles to them. It sets the background-color and height properties.
The purpose of the styles applied to these classes is to create a styled section of the webpage that displays a set of skills and their respective percentages. The styles used help to create a clean and organized layout with an emphasis on typography, color, and spacing.
    */
    `;

  let portfolioCssComments = `
    /* This CSS code is defining the styles for a portfolio section on a webpage. Here is a summary of what each selector is doing:

    #portfolio: Sets the background color and padding of the portfolio section, and positions it relative to its parent element.
    #portfolio::after: Creates a horizontal line under the portfolio section using a pseudo-element. Sets the width, height, background color, and position.
    #portfolio p: Defines the style for a paragraph of text in the portfolio section, including font family, weight, color, size, letter spacing, and alignment.
    #portfolio .portfolio-grid: Creates a grid layout for the portfolio items using the CSS Grid property. Sets the number of columns, the gap between the columns, and the top margin.
    #portfolio .portfolio-grid .portfolio-item: Defines the style for each portfolio item, including the border radius.
    #portfolio .portfolio-grid .portfolio-item .port-img-box img: Sets the size and border radius of the portfolio images.
    #portfolio .portfolio-grid .portfolio-item .port-img-info: Defines the style for the overlay that appears when a user hovers over a portfolio item, including its size, background color, border radius, and position. Sets the display to flex so that the child elements are aligned within the overlay.
    #portfolio .portfolio-grid .portfolio-item:hover .port-img-info: Changes the opacity and transform properties of the overlay when a user hovers over a portfolio item, making it visible and scaling it up.
    #portfolio .portfolio-grid .portfolio-item .port-img-info h2: Defines the style for the overlay title text, including the font family, size, weight, and color.
    #portfolio .portfolio-grid .portfolio-item .port-img-info a: Defines the style for the overlay link button, including the background color, font color, size, padding, and border radius.
    
    
     */
    
        /* Portfolio animation
     The following classes give animation effects:
    
    #portfolio .portfolio-grid .portfolio-item .port-img-info: This class is used to animate the portfolio item information box. The properties opacity, transition, and transform are used to create a fade-in effect and scaling effect on hover.
    
    #portfolio .portfolio-grid .portfolio-item:hover .port-img-info: This class is used to change the opacity and transform properties when the portfolio item is hovered over, which creates the fade-in and scaling effect mentioned above.
    
    These classes are used to create animation effects on the portfolio items when they are hovered over by the user.
    
     */
    `;
  let serviceCssComments = `
  /* This is CSS code for styling the services section of a webpage. Here is a breakdown of the styles being applied:

  #service sets the background color of the section to a variable called "--bgColor", sets padding, and makes the position relative.
  #service::after uses the ::after pseudo-element to create a horizontal line below the section. It sets the content to an empty string, sets the width to 30% of the parent element, sets the height to 1px, sets the background color to lightslategray, positions it absolutely at the bottom of the section, and centers it horizontally using "left: 35%".
  .services-grid sets up a CSS grid with auto-filled columns that are at least 300px wide but can expand to fill the available space. It also sets the grid gap and adds some top margin to create spacing between the services.
  .service-item sets up the styling for each service item in the grid. It centers the content vertically and horizontally using flexbox, sets the padding, adds a box-shadow, and sets a border-radius of 7px. It also sets up some transitions for hover effects.
  .service-item i targets the icon element within each service item. It sets the background color to a variable called "--themeColor", makes it a circle with a width and height of 60px, sets the text color to white, and adds some margin and border-radius.
  .service-item h2 styles the heading for each service item, setting the font family, size, color, and weight.
  .service-item p styles the paragraph element for each service item, setting the font family, size, color, and weight.
  .service-item:hover creates a hover effect for the service item, changing the background color to the variable "--themeColor".
  .service-item:hover i creates a hover effect for the icon, changing the background color to white and the text color to the variable "--themeColor". */
   
  `;
  let contactCssComments = `
  /* --- Contact Section Start --- */
  /* This CSS code seems to be styling a contact section on a webpage.
The #contact selector styles the overall section by setting a background color, padding, and position.
The .contct-cols selector adds margin to the top of the contact columns, while .con-top-col styles the top part of the contact section by using a grid display with auto-fill columns and a gap between them. .con-item styles each item within this grid display with a centered text-align, padding, box-shadow, border-radius, and transition effect.
The .con-item i selector styles the icon within each con-item by setting a background-color, color, width, height, font-size, and border-radius.
The .con-item h2 and .con-item p selectors style the text content within each con-item by setting the font-family, font-size, font-weight, letter-spacing, color, and font-style.
The .con-bottom-col form selector styles the bottom part of the contact section by using a flex display with column direction, align-items, and gap between elements. input and textarea elements within this form have width, font-family, font-size, letter-spacing, font-weight, color, background-color, border, padding, border-radius, outline, and transition effects. Lastly, there is a hover effect for the submit button.
*/

  /* Animation
#contact .contct-cols .con-top-col .con-item: This class has a transition property that defines the duration and effect of the transition when an item is hovered over.

#contact .contct-cols .con-bottom-col form input[type='submit']:hover: This class has a hover effect that changes the background color, cursor, and border color when the submit button is hovered over.
*/
`;
  let footerCssComments = `
  /* This CSS code defines the styling for the footer section of a website. The #footer selector targets the footer element by its ID attribute.

The text-align: center property centers the content of the footer horizontally.

The background-color: var(--themeColor) property sets the background color of the footer to a custom variable defined elsewhere in the CSS.

The padding:  space between the content of the footer and its border.

The #footer p selector targets all p elements inside the footer. The following properties are applied to these p elements:

font-family: var(--hFont) sets the font family to a custom variable defined elsewhere in the CSS.
 */
  `;

  let homeHtmlComments = `
  <!-- This code represents the HTML markup for the home section of a website. It includes a container with three columns:

  home-img-col - This column contains an image of the website's owner or a relevant image.
  home-info-col - This column contains a heading, a paragraph of text, and a button to download the owner's CV.
  home-menu-col - This column contains a menu with links to various sections of the website, including Home, About Me, My Work, My Services, and Contact Me. Each link is represented by a menu-item div containing a span element with the link name and an anchor tag (a) with an icon indicating the link destination.
  The id attribute is used to give a unique identifier to the section, and the class attribute is used to define the styles of the columns and menu items using CSS. -->
     `;

  let aboutHtmlComments = `
     <!-- This is a section of an HTML code for an About Me page. It starts with a section tag with an id of "about". Inside the section, there is a div with a class of "container" that holds the content of the section.

The section starts with an h1 tag that says "About me" with a span tag containing the text. Below that, there is a div with a class of "about-cols" that contains two columns of content.

The left column has an h2 tag  and two paragraphs of Lorem Ipsum text. At the bottom, there is an a tag with a link to "Hire Me" and an icon of a right angle.

The right column has four div tags with a class of "about-box". Each div contains an h2 tag with a number and a p tag with a short text. The numbers and texts as well. -->
  
`;

  let skillsHtmlComments = `
<!-- This is a section of a webpage that displays the skills of a web developer. It contains a title "my Skills" and a sub-title "sub-title". The section is divided into two columns. The left column contains a list of skills, and the right column contains the percentage of proficiency in each skill. Each skill is displayed in a separate box. The box contains the skill name and the percentage of proficiency. The percentage is displayed as a progress bar with a percentage value. Each skill is enclosed in a div with a styling class skill-item. -->
 `;

  let portfolioHtmlComments = `
  <!-- This is a section of HTML code for a portfolio section on a website. It includes a container with a heading and a paragraph describing the work showcased in the portfolio. The portfolio is displayed using a grid layout with six portfolio items, each consisting of an image and a link to view the project. The images are sourced from external URLs using the "img" tag and the links are created using the "a" tag. The portfolio items are enclosed within "div" tags with the class "portfolio-item".
  As for tags used:
section: defines a section in a web page.
div: defines a container that is used to group other HTML elements together.
h3: defines a heading level 3.
span: defines a small piece of text within a larger text, typically used for styling purposes.
p: defines a paragraph.
img: displays an image on a web page.
a: defines a hyperlink.
i: defines an icon or image without semantic meaning.
class: specifies one or more class names for an HTML element. The class attribute is used to connect the element to a style in a CSS file.
href: specifies the URL of the page the link goes to.
  -->
  `;
  let serviceHtmlComments = `
  <!-- This is HTML code for a section that displays different services:

The section has an ID of "service".
The section is contained within a div with a class of "container".
The section has a heading with a class of "sub-title" and the text "My Services", with "My" enclosed in a span element.
The section contains a div with a class of "services-grid".
Within the "services-grid" div, there are three "service-item" divs.
Each "service-item" div contains an icon (using the Font Awesome icon library), a heading with the name of the service, and a paragraph with a brief description of the service. 
-->
     `;

  let contactHtmlComments = `
  <!-- 

  This is a section with the ID "contact" that contains a container div with a sub-title "Contact me".

Inside the container, there are two columns represented by divs with classes "con-top-col" and "con-bottom-col".

The "con-top-col" div contains three contact items, each represented by a div with class "con-item". Each "con-item" contains an icon from the FontAwesome icon library, a heading (Email, Phone, Address), and text content (email address, phone number, address).

The "con-bottom-col" div contains a form with input fields for name, email, subject, and message, and a submit button.
   -->


   `;

  const [sections, setSections] = useState([]);
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
      if (section == 'Home') {
        setHome(true);
      } else if (section == 'About') {
        setAbout(true);
      } else if (section == 'Skills') {
        setSkills(true);
      } else if (section == 'Portfolio') {
        setPortfolio(true);
      } else if (section == 'Service') {
        setService(true);
      } else if (section == 'Contact') {
        setContact(true);
      }
    });
    let code = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Portfolio Website</title>
    
        <style>

      ${cssComments ? globalCssComments : ''}
      ${cssComments ? themeCssComments : ''}
      ${cssComments && home ? homeCssComments : ''}
      ${home ? homeDesign : ''}
      ${cssComments && about ? aboutCssComments : ''}
      ${about ? aboutDesign : ''}
      ${cssComments && skills ? skillsCssComments : ''}
      ${skills ? skillsDesign : ''}
      ${cssComments && portfolio ? portfolioCssComments : ''}
      ${portfolio ? portfolioDesign : ''}
      ${cssComments && service ? serviceCssComments : ''}
      ${service ? serviceDesign : ''}
      ${cssComments && contact ? contactCssComments : ''}
      ${contact ? contactDesign : ''}
      ${cssComments && contact ? footerCssComments : ''}

      ${responsive ? responsiveDesign : ''}

       
        </style>
      </head>
    
      <body>

        ${htmlComments && home ? homeHtmlComments : ''}
        ${home ? homeCode : ''}
        ${htmlComments && about ? aboutHtmlComments : ''}
        ${about ? aboutCode : ''}
        ${htmlComments && skills ? skillsHtmlComments : ''}
        ${skills ? skillsCode : ''}
        ${htmlComments && portfolio ? portfolioHtmlComments : ''}
        ${portfolio ? portfolioCode : ''}
        ${htmlComments && service ? serviceHtmlComments : ''}
        ${service ? serviceCode : ''}
        ${htmlComments && contact ? contactHtmlComments : ''}
        ${contact ? contactCode : ''}



        
        <!-- FontAwesome JS File (Icon File) -->
        <script
          src="https://kit.fontawesome.com/aa5f332820.js"
          crossorigin="anonymous"
        ></script>
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

  const [buttonsOpen, setButtonsOpen] = useState(false);
  const [generate, setGenerate] = useState(false);

  const [description, setDescription] = useState('');

  const saveCode = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/usersTemplate',
        {
          authorName: name,
          templateName: 'PortfolioWeb Variation',
          templateCode: completeCode,
          templateDescription: description,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='templateCreation'>
      <div class='Preview_wrapper'>
        <div class='link_wrapper'>
          <a
            onClick={() => {
              navigate('/dashboard/Templates/PortfolioWeb/P01');
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
                  checked={sections.includes('Home')}
                  onChange={handleSectionsChange}
                />
              }
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
                  checked={sections.includes('Skills')}
                  onChange={handleSectionsChange}
                />
              }
              label='Skills'
              value='Skills'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Portfolio')}
                  onChange={handleSectionsChange}
                />
              }
              label='Portfolio'
              value='Portfolio'
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
                  checked={sections.includes('Contact')}
                  onChange={handleSectionsChange}
                />
              }
              label='Contact'
              value='Contact'
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
              setAbout(false);
              setHome(false);
              setSkills(false);
              setPortfolio(false);
              setContact(false);
              sectionsCode(sections);
              setGenerate(true);
            }}>
            Generate
          </Button>
        </FormGroup>
      </div>

      {sections.length > 0 ? (
        <Box className='customSection'>
          <h1>Sections Customizations</h1>

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
            if (section === 'Home') {
              return <Home />;
            } else if (section === 'About') {
              return <About />;
            } else if (section === 'Skills') {
              return <Skills />;
            } else if (section === 'Portfolio') {
              return <Portfolio />;
            } else if (section === 'Services') {
              return <Services />;
            } else if (section === 'Contact') {
              return <Contact />;
            }
          })}
        </Box>
      ) : (
        ''
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
              onClick={handleOpen}
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
                multiline
                rows={3}
                id='outlined-basic'
                label='Template Description'
                variant='outlined'
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <Button
                style={{ marginTop: 10 }}
                variant='contained'
                color='primary'
                onClick={() => {
                  saveCode();
                  handleClose();
                }}>
                Save
              </Button>
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
