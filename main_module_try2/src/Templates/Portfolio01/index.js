import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/Portfolio01_redux/P01_Slice';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
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

  useEffect(() => {
    console.log(homeElemDesign);
  }, [homeElemDesign]);

  const dispatch = useDispatch();

  const [completeCode, setCompleteCode] = useState();

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
     @media only screen and (max-width: 400px) {
       #about .about-cols .about-right-col {
         grid-template-columns: repeat(1, 1fr);
       }
     }
     
     @media only screen and (max-width: 400px) {
       #skill .skill-cols {
         grid-template-columns: repeat(1, 1fr);
         grid-gap: 30px;
       }
     }
   

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
  

     @media only screen and (max-width: 850px) {
       #contact .contct-cols .con-bottom-col form input,
       #contact .contct-cols .con-bottom-col form textarea {
         width: 100%;
       }
     }
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
          
      ${home ? homeDesign : ''}
      ${about ? aboutDesign : ''}
      ${skills ? skillsDesign : ''}
      ${portfolio ? portfolioDesign : ''}
      ${service ? serviceDesign : ''}
      ${contact ? contactDesign : ''}

      ${responsive ? responsiveDesign : ''}

       
        </style>
      </head>
    
      <body>

        ${home ? homeCode : ''}
        ${about ? aboutCode : ''}
        ${skills ? skillsCode : ''}
        ${portfolio ? portfolioCode : ''}
        ${service ? serviceCode : ''}
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
        <Link to='/Portfolio01'>
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
    </React.Fragment>
  );
}

export default Index;
