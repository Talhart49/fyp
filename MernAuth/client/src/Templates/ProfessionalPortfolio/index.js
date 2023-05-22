import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/Portfolio02_redux/P02_Slice';

import Header from './Header';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Project';
import Skills from './Skill';
import FooterSection from './Footer';

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
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

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
  const globalElementsDesign = useSelector((state) => state.P02.globalDesign);
  const headerElements = useSelector((state) => state.P02.header);
  const headerElemDesign = useSelector((state) => state.P02.headerDesign);
  const homeSection = useSelector((state) => state.P02.home);
  const homeSectionDesign = useSelector((state) => state.P02.homeDesign);
  const aboutElem = useSelector((state) => state.P02.about);
  const aboutDesignElem = useSelector((state) => state.P02.aboutDesign);
  const educationElem = useSelector((state) => state.P02.education);
  const educationDesignElem = useSelector((state) => state.P02.educationDesign);
  const skillsElem = useSelector((state) => state.P02.skills);
  const skillsDesignElem = useSelector((state) => state.P02.skillsDesign);
  const projectElem = useSelector((state) => state.P02.project);
  const projectDesignElem = useSelector((state) => state.P02.projectDesign);
  const FooterElem = useSelector((state) => state.P02.Footer);
  const FooterDesignElem = useSelector((state) => state.P02.footerDesign);

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
  const [homes, setHomes] = useState(false);
  const [abouts, setabouts] = useState(false);
  const [educations, seteducations] = useState(false);
  const [skill, setskill] = useState(false);
  const [projects, setprojects] = useState(false);
  const [footers, setfooters] = useState(false);

  const [responsive, setResponsive] = useState(false);

  let globalDesignComments = `
  /* 
  :root selector:
  
  In CSS, :root refers to the root element of the document, which is usually the <html> element.
  By using :root, you can define CSS variables that can be accessed and used throughout the document.
  CSS variables:
  
  CSS variables allow you to define reusable values that can be used in multiple places within your CSS code.
  In the code snippet you provided, there are six CSS variables defined using the --variable-name: value; syntax.
  
  Font and typography variables:
  
  The second block of code within the :root selector defines variables related to font and typography.
  
  These variables are also defined using the --variable-name: value; syntax.
  
  The variables defined are:
  
  --body-font: Represents the font family , which is the preferred font for the body text.
  
  --big-font-size: Represents the font size, which is a large font size.
  
  --h2-font-size: Represents the font size, which is a slightly smaller font size for heading level 2 (<h2>) elements.
  
  --normal-font-size: Represents the font size , which is a smaller font size for regular text.
  
  By defining these CSS variables within the :root selector, you can easily reference and use them throughout your CSS code, providing consistent and reusable values for colors and typography.
  */
  
  /* 
The code you provided contains several CSS rules. Here's an explanation of each rule:

@keyframes blinker:

This rule defines a CSS animation called "blinker" using the @keyframes at-rule.

The animation is applied to an element over a specified duration and consists of keyframes with different styles at different percentages of the animation's progress.

In the code snippet, the animation has only one keyframe defined at 70% progress.

Within this keyframe, the opacity property is set to .2, which means the element will have 20% opacity at that point in the animation.
h1, h2, p:

This rule selects the <h1>, <h2>, and <p> elements.

The properties margin: 0; are applied to remove any default margins on these elements.

This ensures that there is no spacing between the elements and their parent or sibling elements.
ul:

This rule selects <ul> elements.

The properties margin: 0; and padding: 0; are applied to remove any default margins and paddings on unordered lists.

The property list-style: none; removes the default bullet points from the list items.
a:

This rule selects <a> elements (anchor links).

The property text-decoration: none; is applied to remove the default underline decoration on anchor links.

This ensures that anchor links are displayed without any text decoration.
img:

This rule selects <img> elements (images).

The property max-width: 100%; ensures that images do not exceed their container's width and are scaled down if necessary.

The property height: auto; ensures that the image maintains its aspect ratio while resizing.

The property display: block; makes the image a block-level element, which means it will take up the full width available within its parent container.

These CSS rules help to define consistent styles and behavior for various elements, such as headings, paragraphs, lists, anchor links, and images.
*/

  `;
  const globalDesign = `
  
:root {
  --header-height: 3rem;
  --font-semi: 600;
}

/*===== Colores =====*/
:root {
  --first-color: #4070f4;
  --second-color: #0e2431;
  --third-color: #ffffff;
}

/*===== Fuente y tipografia =====*/
:root {
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
}

/*===== Margenes =====*/
:root {
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
}

/*===== z index =====*/
:root {
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*===== BASE =====*/
*,
::before,
::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  background-color: ${globalElementsDesign.backgroundColor};
  margin: 3rem 0 0 0;
  font-family: ${globalElementsDesign.fontFamily}, sans-serif;
  ;
  font-size: ${globalElementsDesign.fontSize}rem;
  color: ${globalElementsDesign.color};
}

.dark-mode{
  background-color: black;
  color: var(--third-color);

}


  

  `;

  let headerComments = `
  <!--===== HEADER
  <header>: This tag defines a container for the header section of the website. It typically contains introductory content, logos, navigation menus, or other elements that appear at the top of the page.
  
  <nav>: The <nav> tag represents a navigation menu, usually containing a list of links that allow users to navigate different parts of the website.
  
  <ul>: This tag defines an unordered list, which is a list of items that don't have a specific order or sequence. In this case, it represents a list of navigation links.
  
  <li>: The <li> tag defines a list item within an unordered or ordered list. Each <li> element represents an individual item in the list.
  
  <a>: The <a> tag creates a hyperlink to other web pages or sections within the same page. It is typically used within the <li> tags to create clickable navigation links.
  
  <img>: This tag is used to embed an image in the web page. It requires a src attribute that specifies the URL or file path of the image to be displayed.
      =====-->
  `;
  const header = `
  <header class="l-header">
  <nav class="nav bd-grid">
    <div>
      <!-- &#60;&#62; -->
      <a href="#home" class="nav-logo"><img src='${headerElements.nav_logo}' height="70px" alt="H" /></a>
    </div>

    <div class="nav-menu" id="nav-menu">
      <ul class="nav-list">
        <li class="nav-item">
    
          <a href="#home" class="nav-link home ">${headerElements.nav_element1}</a>
        </li>
        <li class="nav-item">
          <a href="#about" class="nav-link about">${headerElements.nav_element2}</a>
        </li>
        <li class="nav-item">
          <a href="#skills" class="nav-link skills">${headerElements.nav_element3}</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link projects">${headerElements.nav_element4}</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link contact">${headerElements.nav_element5}</a>
        </li>
        <li class="nav-item">
          <a href="#" onclick="myFunction()"> <img src="https://i.ibb.co/zJy2RR8/sumoon.png" alt="" height="20px" width="20px"
              style="background-color: transparent;"> </a>
        </li>
      </ul>
    </div>

    <div class="nav-toggle" id="nav-toggle">
      <i class="bx bx-menu"></i>
    </div>
  </nav>
</header>

  `;

  let headerDesignComments = `
  /*===== NAV 
  
  Height:
  
  This rule sets the height of the .nav element.
  
  The height value can be adjusted as needed to control the vertical space occupied by the element.
  
  display:
  
  This rule makes the .nav element a flex container.
  
  Flexbox is a layout model that allows elements within a container to be flexibly arranged.
  
  By setting display: flex;, the child elements of the .nav container can be aligned and positioned using flexbox properties.
  
  justify-content:
  
  This rule specifies how the flex items should be positioned along the horizontal axis.
  
  justify-content, distributes the flex items evenly along the main axis, with the first item aligned to the start of the container and the last item aligned to the end of the container.
  
  This creates equal spacing between the flex items, pushing them to opposite ends of the container.
  
  align-items: center;:
  
  This rule specifies how the flex items should be positioned along the vertical axis.
  
  align-items: center; centers the flex items vertically within the .nav container
  .
  This ensures that the items are aligned in the middle of the container's height.
  
  font-weight:
  
  This rule sets the font weight of the text inside the .nav element.
  
  A font weight of heigth corresponds to a bold font weight.
  
  This property can be adjusted to control the thickness of the text within the .nav element.
  
  .nav-item: This class selector targets elements with the class "nav-item" and applies the following style:
  
  margin-bottom: The margin-bottom property sets the margin (spacing) at the bottom of the targeted elements.
  
  .nav-link: This class selector targets elements with the class "nav-link" and applies the following styles:
  
  position: relative;: The position property specifies the positioning method for the targeted elements.
  
  colorThe color property sets the text color of the targeted elements.
  
  .nav-link:hover: This class selector targets elements with the class "nav-link" when they are being hovered over and applies the following style:
  
  position: relative;: The position property specifies the positioning method for the targeted elements.
  
  .nav-link:hover::after: This class selector targets pseudo-elements (::after) of elements with the class "nav-link" when they are being hovered over and applies the following styles:
  
  position: absolute;: The position property specifies the positioning method for the pseudo-element.
  
  content: The content property inserts content into the pseudo-element.
  
  width: The width property sets the width of the pseudo-element.
  
  height:The height property sets the height of the pseudo-element.
  
  left:The left property sets the distance from the left edge of the pseudo-element's containing element.
  
  top:The top property sets the distance from the top edge of the pseudo-element's containing element.
  
  background-color:The background-color property sets the background color of the pseudo-element.
  
  .nav-logo img: This class selector targets <img> elements that are descendants of elements with the class "nav-logo" and applies the following styles:
  
  color:The color property sets the text color of the targeted elements.
  
  font-weight:The font-weight property sets the font weight (thickness) of the targeted elements.
  
  width:The width property sets the width of the targeted elements.
  
  .nav-toggle:This class selector targets elements with the class "nav-toggle" and applies the following styles:
  
  color:The color property sets the text color of the targeted elements.
  
  font-size:The font-size property sets the size of the font used for the text within the targeted elements.
  
  cursor:The cursor property specifies the type of cursor to be displayed when hovering over the targeted elements.
    =====*/
  `;
  const headerDesign = `
 
  .l-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: ${headerElemDesign.navbar_Bg};
    box-shadow: 0 1px 4px ${headerElemDesign.navbar_box_shadow_Bg};
  }

  .nav {
    height: ${headerElemDesign.navbar_height}rem;
    display: flex;
    justify-content: ${headerElemDesign.navbarMenu_justify_content};
    align-items: center;
    font-weight: ${headerElemDesign.navbarMenu_font_weight};
  }

  .nav-item {
    margin-bottom: 2rem;
  }

  .nav-link {
    position: relative;
    color: #b92525;
  }

  .nav-link:hover {
    position: relative;
  }

  .nav-link:hover::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: #4070f4;
  }

  .nav-logo img {
    color: #0e2431;
    font-weight: 600;
    width: ${headerElemDesign.navbarImage_width}rem;
  }

  .nav-toggle {
    color: #0e2431;
    font-size: 1.5rem;
    cursor: pointer;
  }

 
  `;

  let homeComments = `
  <!--===== HOME

  <section>: The <section> tag defines a section of the web page.
  
  It is a semantic element used to group related content together.
  
  <h1>: The <h1> tag represents the main heading of the section. 
    
  It is typically used to display a prominent title or heading.
  
  <p>: The <p> tag defines a paragraph of text. 
  
  It is used to enclose and format blocks of plain text.
        
        =====-->
  `;
  const home = `
  <main class="l-main">

  <section class="home bd-grid section" id="home">
  <div class="home-data">
    <h2 class="home-title">
    ${homeSection.hero_greeting},<br />${homeSection.hero_intro} <span class="home-title-color">${homeSection.hero_name}</span><br />
      <span id="jobTitle">${homeSection.hero_jobTitle}</span>
    </h2>

    <a href="" target="_blank" class="button">${homeSection.resume_button}</a>

  </div>

  <div class="home-social">
    <a href="" target="_blank" class="home-social-icon"><i class="bx bxl-linkedin"></i></a>
    <a href="" target="_blank" class="home-social-icon"><i class="bx bxl-github"></i></a>
  </div>

  <div class="home-img">
    <img src='${homeSection.homeSide_image}' alt="" />
  </div>
</section>

  `;

  let homeDesignComments = `
/*===== HOME =====*/
/* 
.home: This class selector targets elements with the class "home" and applies the following styles:

heightThe height property sets the height of the targeted elements to the calculated value of the viewport height minus value.

row-gap:The row-gap property sets the gap between rows of a grid layout within the targeted elements.

.home-data: This class selector targets elements with the class "home-data" and applies the following style:

align-self: center;: The align-self property specifies the alignment of the targeted elements along the cross-axis of their container. In this case, it centers the elements vertically.

.home-title: This class selector targets elements with the class "home-title" and applies the following styles:

font-size:The font-size property sets the size of the font used for the text within the targeted elements.

margin-bottom:The margin-bottom property sets the margin (spacing) at the bottom of the targeted elements.

.home-title-color: This class selector targets elements with the class "home-title-color" and applies the following style:

color:The color property sets the text color of the targeted elements.

.home-social: This class selector targets elements with the class "home-social" and applies the following style:

display:The display property specifies the type of display used for the targeted elements. In this case, it creates a flex container.

flex-direction:The flex-direction property specifies the direction of the flex container. In this case, it arranges the flex items vertically.

.home-social-icon: This class selector targets elements with the class "home-social-icon" and applies the following styles:

width:The width property sets the width of the targeted elements to the width of their content.

margin-bottom:The margin-bottom property sets the margin (spacing) at the bottom of the targeted elements.

font-size:The font-size property sets the size of the font used for the text within the targeted elements.

color:The color property sets the text color of the targeted elements.

.home-social-icon:hover, .footer-icon:hover: This selector targets elements with the class "home-social-icon" or "footer-icon" when they are being hovered over and applies the following style:

color:The color property sets the text color of the targeted elements when hovered.

.home-img: This class selector targets elements with the class "home-img" and applies the following styles:

position:The position property specifies the positioning method for the targeted elements.

right:The right property sets the distance from the right edge of the containing element.

bottom:The bottom property sets the distance from the bottom edge of the containing element.

width:The width property sets the width of the targeted elements.

*/


/*BUTTONS
  
.button: This class selector targets elements with the class "button" and applies the following styles:

display:The display property specifies the type of display used for the targeted elements. 

background-color:The background-color property sets the background color of the targeted elements.

border:The border property sets the border of the targeted elements with a width.

color:The color property sets the text color of the targeted elements.

padding:The padding property sets the spacing between the content and the borders of the targeted elements.

font-weight:The font-weight property sets the weight (boldness) of the text within the targeted elements.

border-radius:The border-radius property sets the radius of the rounded corners of the targeted elements.
  */

`;
  const homeDesign = `
  .home {
    height: calc(100vh - 3rem);
    row-gap: 1rem;
  }

  .home-data {
    align-self: center;
  }

  .home-title {
    font-size: ${homeSectionDesign.homeTitle_fontSize}rem;
    margin-bottom: 2.5rem;
  }

  .home-title-color {
    color: ${homeSectionDesign.homeTitle_color};
  }

  .home-social {
    display: flex;
    flex-direction: column;
  }

  .home-social-icon {
    width: max-content;
    margin-bottom: 0.5rem;
    font-size: ${homeSectionDesign.homeIcons_fontSize}rem;
    color: #0e311b;
  }

  .home-social-icon:hover,
  .footer-icon:hover {
    color: #4070f4;
  }

  .home-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 65%;
  }

  .button {
    display: inline-block;
    background-color: ${homeSectionDesign.homeButton_Bg};
    border: 1px solid #4070f4;
    color: #ffffff;
    padding: 0.75rem 2.5rem;
    font-weight: ${homeSectionDesign.homeButton_fontWeight};
    border-radius: ${homeSectionDesign.homeButton_borderRadius}rem;
  }

  .button:hover {
    background-color: #fff;
    color: #4070f4;
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
  }

  `;

  let aboutComments = `
  <!--===== ABOUT
  <section>: Defines a section of the web page.
  
  <h2>: Represents a subheading of the section.
  
  <p>: Defines a paragraph of text.
        =====-->
  `;
  const about = `
  <section class="about section" id="about">
      <h2 class="section-title">${aboutElem.about_heading}</h2>

      <div class="about-container bd-grid">
        <div class="about-img">
          <img src='${aboutElem.about_image}' alt="" />
        </div>

        <div style="text-align: center">
          <h2 class="about-subtitle">${aboutElem.about_intro}</h2>
          <p class="about-text">
          ${aboutElem.info_para_01}
          </p>
          <br />

          <p>
          ${aboutElem.info_para_02}
            <i style="color: #4070f4; font-size: 1.2rem; cursor: pointer" class="bx bx-copy" id="copy"></i>
          </p>
        </div>
      </div>
    </section>


  `;

  let aboutDesignComments = `
  /* ===== ABOUT =====
  
  section.about: This selector targets the section element with the class "about" and applies the following styles:
  
  padding-top:Sets the padding at the top of the section to a value of the viewport height.
  
  padding-left: Sets the padding on the left side of the section.
  
  .about-container: This class selector targets elements with the class "about-container" and applies the following styles:
  
  row-gap:Sets the gap between rows in a grid layout within the targeted elements (a unit relative to the font size of the root element).
  
  text-align: center;: Aligns the text content within the targeted elements to the center.
  
  .about-subtitle: This class selector targets elements with the class "about-subtitle" and applies the following style:
  
  margin-bottom:Sets the margin (spacing) at the bottom of the targeted elements.
  
  .about-img: This class selector targets elements with the class "about-img" and applies the following style:
  
  justify-self: center;: Aligns the targeted elements horizontally to the center within their parent container.
  
  .about-img img: This selector targets the img elements within the elements with the class "about-img" and applies the following styles:
  
  width:Sets the width of the targeted images .
  
  border-radius: Sets the border radius of the targeted images, giving them rounded corners.
  
  cursor: pointer;: Specifies that the cursor should change to a pointer when hovering over the targeted images.
  
  .about-img img:hover: This selector targets the img elements within the elements with the class "about-img" when they are being hovered over and applies the following styles:
  
  -webkit-transform:Applies a scaling transformation to the targeted images, increasing their size to n times their original size. This property is specific to WebKit-based browsers.
  
  -ms-transform: scale(n);: Applies a scaling transformation to the targeted images, increasing their size to n times their original size. This property is specific to Microsoft browsers.
  
  transform: scale(n);: Applies a scaling transformation to the targeted images, increasing their size to n times their original size.
  
  transition: 1s ease;: Specifies the duration and easing function for the transition effect applied to the targeted images. In this case, it has a duration of n second and an ease timing function.
    
    */
  `;
  const aboutDesign = `
  section.about {
    padding-top: ${aboutDesignElem.aboutPaddingTop}vh;
    padding-bottom: ${aboutDesignElem.aboutPaddingTop}vh;

    padding-left: ${aboutDesignElem.aboutPaddingLeft}px;
    padding-right: ${aboutDesignElem.aboutPaddingLeft}px;

  }

  .about-container {
    row-gap: 2rem;
    text-align: center;
  }

  .about-subtitle {
    margin-bottom: ${aboutDesignElem.about_intro_marginBottom}rem;
  }

  .about-img {
    justify-self: ${aboutDesignElem.imagePosition};
  }

  .about-img img {
    width: ${aboutDesignElem.imageWidth}px;
    border-radius: ${aboutDesignElem.imageBorderRadius}rem;
    cursor: pointer;
  }

  .about-img img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ${aboutDesignElem.imageTransition};
  }


  `;

  let educationComments = `
  <!---========Education
  <section>: it defines a section of the webpage.
  
  <h2>: Once again, it defines a heading level 2 for the "Education" section.
  
  <ul>: The <ul> tag is used again to create an unordered list of educational qualifications.
  
  <li>: The <li> tag is used within the <ul> tag to define individual list items.
  
  Inside the <li> tags, you can provide the details of each educational qualification, such as the degree, institution, and year of completion.
        ======--->
  `;
  const education = `
  <section class="education section" id="education">
  <h2 class="section-title">${educationElem.education_heading}</h2>
  <div class="education-container bd-grid">

    <div class="education-data">
      <div class="education-names">
        <!-- <i class="bx bxl-html5 skills-icon"></i> -->
        <span class="education-name">${educationElem.education_name1}</span>
        <p class="education-platform ">${educationElem.education_plateform1}</p>
        <p class="education-duration ">${educationElem.education_duration1}</p>

      </div>
    </div>
  </div>
  <div class="education-container bd-grid">

    <div class="education-data">
      <div class="education-names">
        <!-- <i class="bx bxl-html5 skills-icon"></i> -->
        <span class="education-name">${educationElem.education_name2}</span>
        <p class="education-platform ">${educationElem.education_plateform2}</p>
        <p class="education-duration ">${educationElem.education_duration2}</p>

      </div>
    </div>
  </div>
</section>
  `;

  let educationDesignComments = `
  /* ===== EDUCATION 

  .education-data: This class selector targets elements with the class "education-data" and applies the following styles:
  
  position: relative;: Sets the position of the targeted elements to relative, which means they will be positioned relative to their normal position in the document flow.
  
  font-weight:Sets the font weight of the text within the targeted elements, which represents a bold font.
  
  padding: nrem;: Sets the padding within the targeted elements to a value of n rem (a unit relative to the font size of the root element).
  
  border-radius: nrem;: Sets the border radius of the targeted elements to a value of n rem, giving them rounded corners.
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  box-shadow:  Adds a box shadow effect to the targeted elements, creating a shadow below them. The box shadow has horizontal and vertical offsets, a blur radius, and a color specified in RGBA format.
  
  transition: ns ease;: Specifies the duration and easing function for the transition effect applied to the targeted elements. In this case, it has a duration of n second and an ease timing function.
  
  .education-name, .education-platform, .education-duration: These class selectors target elements with the classes "education-name", "education-platform", and "education-duration" respectively, and apply similar styles to each:
  
  margin: npx;: Sets the margin (spacing) around the targeted elements to a value of n pixels.
  
  display:Specifies that the targeted elements should be displayed as flex items, allowing for flexible layouts.
  
  justify-content:Aligns the content within the targeted elements horizontally to the center.
  
  align-items: Aligns the content within the targeted elements vertically to the center.
  
  font-size: npx;, font-size: npx;, font-size: npx;: Sets the font size of the text within the targeted elements to different values for each class.
  
  cursor: pointer;: Specifies that the cursor should change to a pointer when hovering over the targeted elements.
  
  .education-data:hover: This selector targets the elements with the class "education-data" when they are being hovered over and applies the following styles:
  
  -webkit-transform: scale(n);: Applies a scaling transformation to the targeted elements, increasing their size to n times their original size. This property is specific to WebKit-based browsers.
  
  -ms-transform: scale(n);: Applies a scaling transformation to the targeted elements, increasing their size to n times their original size. This property is specific to Microsoft browsers.
  
  transform: scale(n);: Applies a scaling transformation to the targeted elements, increasing their size to n times their original size.
  
  transition: ns ease;: Specifies the duration and easing function for the transition effect applied to the targeted elements. In this case, it has a duration of n second and an ease timing function.
    
    =====*/
  
  `;
  const educationDesign = `
  .education-data {
    position: relative;
    font-weight: ${educationDesignElem.fontweight};
    padding: ${educationDesignElem.boxPadding}rem;
    border-radius: ${educationDesignElem.boxRadius}rem;
    margin-bottom: ${educationDesignElem.boxMarginBottom}rem;
    box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
    transition: 1s ${educationDesignElem.Transition};
  }


  .education-name {
    margin: ${educationDesignElem.education_name_margin}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${educationDesignElem.education_name_fontSize}px;
    cursor: pointer;
  }

  .education-platform {
    margin: ${educationDesignElem.education_platform_margin}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${educationDesignElem.education_plateform_fontSize}px;
    cursor: pointer;
  }

  .education-duration {
    margin: ${educationDesignElem.education_duration_margin}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${educationDesignElem.education_duration_fontSize}px;
    cursor: pointer;
  }

  .education-data:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 1s ease;
  }

  `;

  let skillsComments = `
    
  <!--===== SKILLS
  <section>: This tag defines a section of the webpage. It helps organize content into logical parts.
  
  <h2>: Similar to before, it defines a heading level 2 for the "Skills" section.
  
  <ul>: The <ul> tag represents an unordered list. It is used to create a bulleted list of items.
  
  <li>: The <li> tag is used to define individual list items within an unordered list.
  
  Within the <ul> tag, you can have multiple <li> tags to represent each skill as a list item.
        =====-->
  `;
  const skills = `
  <section class="skills section" id="skills">
  <h2 class="section-title">${skillsElem.skills_heading}</h2>

  <div class="skills-container bd-grid">
    <div>
      <!-- <h2 class="skills-subtitle">Front-end Skills</h2> -->
      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-html5 skills-icon"></i>
          <span class="skills-name">${skillsElem.skill_01}</span>
        </div>
        <!-- <div class="skills-bar skills-html"></div> 
         <div>
            <span class="skills-percentage">75%</span>
          </div>  -->
      </div>
      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-css3 skills-icon"></i>
          <span class="skills-name">${skillsElem.skill_02}</span>
        </div>
        <!-- <div class="skills-bar skills-css"></div>  -->
        <!-- <div>
            <span class="skills-percentage">70%</span>
          </div>  -->
      </div>
      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-javascript skills-icon"></i>
          <span class="skills-name">${skillsElem.skill_03}</span>
        </div>
        <!-- <div class="skills-bar skills-css"></div>  -->
        <div>
          <!-- <span class="skills-percentage">70%</span> -->
        </div>

      </div>
      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-react skills-icon"></i>
          <span class="skills-name">${skillsElem.skill_04}</span>
        </div>
        <!-- <div class="skills-bar skills-react"></div> -->
        <div>
          <!-- <span class="skills-percentage">50%</span> -->
        </div>
      </div>
      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-redux skills-icon"></i>
          <span class="skills-name">${skillsElem.skill_05}</span>
        </div>
        <!-- <div class="skills-bar skills-redux"></div>  -->
        <!-- <div class="skills-bar skills-css"></div>  -->
        <div>
          <!-- <span class="skills-percentage">50%</span> -->
        </div>

      </div>

      <div class="skills-data">
        <div class="skills-names">
          <img class="skills-icon" src='${skillsElem.skill_06_image}' alt="" />
          <span class="skills-name">${skillsElem.skill_06}</span>
        </div>
      </div>
    </div>
    <div>
      <!-- <h2 class="skills-subtitle">Back-end Skills</h2> -->
      <div class="skills-data">
        <div class="skills-names">
          <img class="skills-icon" src='${skillsElem.skill_07_image}' alt="" />
          <span class="skills-name">${skillsElem.Skill_07}</span>
        </div>
        <!-- <div class="skills-bar skills-css"></div>  -->
        <div>
          <!-- <span class="skills-percentage">70%</span> -->
        </div>
      </div>

      <div class="skills-data">
        <div class="skills-names">
          <i class="bx bxl-nodejs skills-icon"></i>
          <span class="skills-name">${skillsElem.Skill_08}</span>
        </div>
        <!-- <div class="skills-bar skills-css"></div> -->
        <div>
          <!-- <span class="skills-percentage">70%</span> -->
        </div>
      </div>

      <div class="skills-data">
        <div class="skills-names">
          <img class="skills-icon" src='${skillsElem.skill_09_image}' alt="" />
          <span class="skills-name">${skillsElem.Skill_09}</span>
        </div>
        <!-- <div class="skills-bar skills-css"></div>  -->
        <div>
          <!-- <span class="skills-percentage">70%</span> -->
        </div>
      </div>
      <div>
        <!-- <h2 class="skills-subtitle">TOOLS</h2> -->
        <div class="skills-data">
          <div class="skills-names">
            <img class="skills-icon" src='${skillsElem.skill_010_image}' alt="" />
            <span class="skills-name">${skillsElem.Skill_010}</span>
          </div>
        </div>
        <div class="skills-data">
          <div class="skills-names">
            <img class="skills-icon" src=${skillsElem.skill_011_image} alt="" />
            <span class="skills-name">${skillsElem.Skill_011}</span>
          </div>

        </div>
        <div class="skills-data">
          <div class="skills-names">
            <img class="skills-icon" src='${skillsElem.skill_012_image}' alt="" />
            <span class="skills-name">${skillsElem.Skill_012}</span>
          </div>

        </div>

      </div>
    </div>
</section>
  `;

  let skillsDesignComments = `
  /* ===== SKILLS
  
  .skills-container: This class selector targets elements with the class "skills-container" and applies the following styles:
  
  row-gap: nrem;: Sets the gap between rows within the targeted container to a value of n rem.
  
  text-align:Aligns the text content within the targeted container.
  
  .skills-subtitle: This class selector targets elements with the class "skills-subtitle" and applies the following style:
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  .skills-text: This class selector targets elements with the class "skills-text" and applies the following style:
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  .skills-data: This class selector targets elements with the class "skills-data" and applies the following styles:
  
  display:Specifies that the targeted elements should be displayed as flex items, allowing for flexible layouts.
  
  justify-content:Distributes the content within the targeted elements evenly along the horizontal axis.
  
  align-items: Aligns the content within the targeted elements vertically.
  
  position: Sets the position of the targeted elements which means they will be positioned to their normal position in the document flow.
  
  font-weight: Sets the font weight of the text within the targeted elements which represents a bold font.
  
  padding-top: nrem;: Sets the padding at the top of the targeted elements to a value of n rem.
  
  padding-left: nrem;: Sets the padding at the left side of the targeted elements to a value of n rem.
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  border-radius: nrem;: Sets the border radius of the targeted elements to a value of n rem, giving them rounded corners.
  
  box-shadow:Adds a box shadow effect to the targeted elements, creating a shadow below them. The box shadow has horizontal and vertical offsets, a blur radius, and a color specified in hexadecimal format.
  
  transition: ns ease;: Specifies the duration and easing function for the transition effect applied to the targeted elements. In this case, it has a duration of n second and an ease timing function.
  
  cursor: pointer;: Specifies that the cursor should change to a pointer when hovering over the targeted elements.
  
  .skills-icon, img.man-icons: These class selectors target elements with the classes "skills-icon" and "man-icons" respectively and apply the following styles to each:
  
  width: nrem;: Sets the width of the targeted elements to a value of n rem.
  
  font-size: nrem;: Sets the font size of the text within the targeted elements to a value of n rem.
  
  margin-right: nrem;: Sets the margin (spacing) at the right side of the targeted elements to a nalue of n rem.
  
  color:Sets the color of the targeted elements to a specific shade.
    
    =====*/
  `;
  const skillsDesign = `
  .skills-container {
    row-gap: 2rem;
    text-align: center;
  }



  .skills-subtitle {
    margin-bottom: 1rem;
  }

  .skills-text {
    margin-bottom: 2rem;
  }

  .skills-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-weight: ${skillsDesignElem.Skills_font_weight};
    padding-top: ${skillsDesignElem.skills_box_paddingTop}rem;
    padding-left: ${skillsDesignElem.skills_box_paddingleft}rem;
    margin-bottom: ${skillsDesignElem.skills_box_marginBottom}rem;
    border-radius: ${skillsDesignElem.skills_box_borderRadius}rem;
    box-shadow: 0 4px 25px ${skillsDesignElem.Skills_boxShadow_bg};
    transition: 1s ease;
    cursor: pointer;
  }

  .skills-icon {
    width: 2rem;
    font-size: 2rem;
    margin-right: 1rem;
    color: #4070f4;
  }

  img.man-icons {
    font-size: 2rem;
    margin-right: 1rem;
    color: #4070f4;
  }

  .skills-names {
    display: flex;
    align-items: center;
  }


  .skills-names:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 1s ease;
  }

  .skills-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #4070f4;
    height: 0.25rem;
    border-radius: 0.5rem;
    z-index: var(--z-back);
  }

  .skills-html {
    width: 75%;
  }

  .skills-css {
    width: 70%;
  }

  .skills-js {
    width: 85%;
  }

  .skills-react,
  .skills-mongo {
    width: 80%;
  }

  .skills-redux {
    width: 90%;
  }

  .skills-mui,
  .skills-sql {
    width: 65%;
  }

  .skills-ts {
    width: 70%;
  }

  .skills-express,
  .skills-node {
    width: 85%;
  }

  .skills-img {
    border-radius: 0.5rem;
  }
  `;

  let projectComments = `
  <!--===== Projects 
  <section>: Same as above, it defines a section of the web page.
  
  <h2>: Same as above, it represents a subheading of the section.
  
  <div>: The <div> tag is a generic container element that groups and organizes other elements.
  
  It is often used to create a block or container for a specific area of content.
  
  <figure>: The <figure> tag represents self-contained content, such as an image
    
  that is referenced in the main content of the page. It can also include an optional caption using the <figcaption> tag.
  
  <img>: Same as above, it embeds an image in the web page.
  
  <figcaption>: The <figcaption> tag is used to provide a caption or description for the content within a <figure> element. 
    
  It is typically used in conjunction with the <figure> and <img> tags.
        =====-->
  `;
  const project = `
  <section class="projects section" id="projects">
  <h2 class="section-title">${projectElem.project_heading}</h2>

  <div class="project-container">
    <div class="project-img">
      <img src='${projectElem.project_01_image}' alt="cult.fit" />
      <p class="project-title">${projectElem.project_01_title}</p>
      <p class="project-subtitle">
      ${projectElem.project_01_subtitle}
       <br />
        <br />
        ${projectElem.project_01_detail}
        <br />
        <br />${projectElem.project_01_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">

          <i class="bx bxl-github"></i>
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_01_button}
          <!-- <i class="bx bx-link-external"></i> -->
        </a>
        <!-- <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
          class="small-btn button">
          Blog
          <i class="bx bx-blog"></i> -->
        </a>
      </div>
    </div>


    <div class="project-img">
      <img src='${projectElem.project_02_image}' />
      <p class="project-title">${projectElem.project_02_title}</p>
      <p class="project-subtitle">
      ${projectElem.project_02_subtitle} <br />
        <br />
        ${projectElem.project_02_detail}
        <br />
        <br />${projectElem.project_02_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">

          <i class="bx bxl-github"></i>
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_02_button1}
          <!-- <i class="bx bx-link-external"></i> -->
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_02_button2}
          <i class="bx bx-blog"></i>
        </a>
      </div>
    </div>

    <div class="project-img">
      <img src='${projectElem.project_03_image}' alt="cult.fit" />
      <p class="project-title">${projectElem.project_03_title}</p>
      <p class="project-subtitle">
      ${projectElem.project_03_subtitle}
        <br />
        <br />
        ${projectElem.project_03_detail}
        . <br />
        <br />${projectElem.project_03_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">

          <i class="bx bxl-github"></i>
        </a>

        <!-- <a href="https://tusharsahu2599.github.io/medplus/homepage" target="_blank" class="small-btn button">
          Live
          <i class="bx bx-link-external"></i>
        </a>
        <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
          class="small-btn button">
          Blog
          <i class="bx bx-blog"></i> -->
        </a>
      </div>
    </div>

    <div class="project-img">
      <img src='${projectElem.project_04_image}' alt="cult.fit" />
      <p class="project-title">${projectElem.project_04_title}</p>
      <p class="project-subtitle">
      ${projectElem.project_04_subtitle}
        <br />
        <br />
        ${projectElem.project_04_detail} <br />
        <br />${projectElem.project_04_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">

          <i class="bx bxl-github"></i>
        </a>

        <!-- <a href="" target="_blank" class="small-btn button">
          Live
          <i class="bx bx-link-external"></i>
        </a> -->

        <!----
        <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
          class="small-btn button">
          Blog
          <i class="bx bx-blog"></i> -->
        </a>
      </div>
    </div>

    <div class="project-img">
      <img src='${projectElem.project_05_image}' />
      <p class="project-title">${projectElem.project_05_title}</p>
      <p class="project-subtitle">
      ${projectElem.project_05_subtitle}
        <br />
        <br />
        ${projectElem.project_05_detail}
        <br />
        <br />
        ${projectElem.project_05_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_05_button1}<i class="bx bxl-github"></i>
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_05_button2}<i class="bx bx-link-external"></i>
        </a>
      </div>
    </div>

    <div class="project-img">
      <img src='${projectElem.project_06_image}' alt="Tinde chat" />
      <p class="project-title">
      ${projectElem.project_06_title}
      </p>
      <p class="project-subtitle">
      ${projectElem.project_06_subtitle}

        <br />
        <br />
        ${projectElem.project_06_detail}
        <br />
        <br />
        ${projectElem.project_06_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_06_button1}<i class="bx bxl-github"></i>
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_06_button2}<i class="bx bx-link-external"></i>
        </a>
      </div>
    </div>

    <div class="project-img">
      <img src='${projectElem.project_07_image}' />
      <p class="project-title">
      ${projectElem.project_07_title}
      </p>
      <p class="project-subtitle">
      ${projectElem.project_07_subtitle}

        <br />
        <br />
        ${projectElem.project_07_detail}
        <br />
        <br />
        ${projectElem.project_07_languages}
      </p>
      <div class="project-btns">
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_07_button1}<i class="bx bxl-github"></i>
        </a>
        <a href="" target="_blank" class="small-btn button">
        ${projectElem.project_07_button2}<i class="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  </div>
  </main>


  `;

  let projectDesignComments = `
    
  /* ===== Projects 
  .project-container: This class selector targets elements with the class "project-container" and applies the following styles:
  
  gap: nrem;: Sets the gap between grid items within the targeted container to a value of n rem.
  
  max-width: npx;: Sets the maximum width of the targeted container to n pixels.
  
  display: Specifies that the targeted container should be displayed as a grid.
  
  grid-template-columns: repeat(auto-fit, minmax(npx, 1fr));: Defines the columns of the grid within the targeted container. 
  
  The columns are created using the repeat function, which automatically fits as many columns as possible with a minimum width of n pixels and a maximum width of 1 fraction unit (1fr) to distribute the remaining space evenly.
  
  width: calc(100% - nrem);: Sets the width of the targeted container to the width of the parent container minus a spacing of n rem on both sides.
  
  margin: auto;: Centers the targeted container horizontally within its parent container.
  
  .project-img: This class selector targets elements with the class "project-img" and applies the following styles:
  
  box-shadow:Adds a box shadow effect to the targeted elements, creating a shadow below them. The box shadow has horizontal and vertical offsets, a blur radius, and a color specified in hexadecimal format.
  
  border-radius: nrem;: Sets the border radius of the targeted elements to a value of n rem, giving them rounded corners.
  
  overflow:Specifies that the content of the targeted elements should be clipped and not visible outside the box.
  
  .project-img img: This selector targets img elements within elements with the class "project-img" and applies the following styles:
  
  transition: ns;: Specifies the duration and timing function for the transition effect applied to the targeted elements. In this case, it has a duration of n second.
  
  cursor: pointer;: Specifies that the cursor should change to a pointer when hovering over the targeted elements.
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  .project-img img:hover: This selector targets img elements within elements with the class "project-img" when hovering over them and applies the following styles:
  
  transform: scale(n);: Applies a scale transformation to the targeted elements, increasing their size by 10% when hovered over. The transition effect defined in the previous style will animate this transformation.
  
  .project-container p: This class selector targets p elements within elements with the class "project-container" and applies the following style:
  
  margin: Sets the top margin of the targeted elements to auto, the right and left margins to 1rem, and the bottom margin to 1rem. This centers the paragraphs horizontally within their parent containers and adds a spacing of 1rem at the top and bottom.
  
  .project-title: This class selector targets elements with the class "project-title" and applies the following styles:
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  margin-top: var(--mb-3);: Sets the top margin of the targeted elements to the value of a custom CSS variable --mb-3. The value of this variable can be defined elsewhere in the CSS code.
  
  .project-subtitle: This class selector targets elements with the class "project-subtitle" and applies the following styles:
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted elements to a value of n rem.
  
  padding-bottom: nrem;: Sets the padding at the bottom of the targeted elements to a value of n rem.
  
  .small-btn: This class selector targets elements with the class "small-btn" and applies the following styles:
  
  padding:Sets the padding (spacing) around the targeted elements the top and bottom and at the left and right.
  
  font-weight: n;: Sets the font weight of the text within the targeted elements to a value of n.
  
  .project-btns: This class selector targets elements with the class "project-btns" and applies the following style:
  
  position: relative;: Sets the position of the targeted elements to relative, which means they will be positioned relative to their normal position in the document flow.
  
  bottom: n;: Sets the distance from the bottom edge of the targeted elements to n, aligning them to the bottom of their parent container.
    
    =====*/


    
  /* ===== CONTACT
  .contact-input: This class selector targets input elements with the class "contact-input" and applies the following styles:
  
  width: Sets the width of the targeted input elements of their parent container.
  
  font-size: var(--normal-font-size);: Sets the font size of the text within the targeted input elements to the value of a custom CSS variable --normal-font-size. The value of this variable can be defined elsewhere in the CSS code.
  
  font-weight: n;: Sets the font weight of the text within the targeted input elements to a value of n (bold).
  
  padding: nrem;: Sets the padding (spacing) around the content of the targeted input elements to a value of n rem.
  
  border-radius: nrem;: Sets the border radius of the targeted input elements to a value of n rem, giving them rounded corners.
  
  border:Sets the border of the targeted input elements to a solid line with a width of 1.5 pixels and a color specified in hexadecimal format.
  
  outline:Removes the outline (focus ring) from the targeted input elements.
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted input elements to a value of n rem.
  
  .contact-button: This class selector targets button elements with the class "contact-button" and applies the following styles:
  
  display: block;: Sets the display property of the targeted button elements to block, causing them to take up the full width of their parent container.
  
  border: Removes the border from the targeted button elements.
  
  outline: Removes the outline (focus ring) from the targeted button elements.
  
  font-size: var(--normal-font-size);: Sets the font size of the text within the targeted button elements to the value of a custom CSS variable --normal-font-size. The value of this variable can be defined elsewhere in the CSS code.
  
  cursor: pointer;: Specifies that the cursor should change to a pointer when hovering over the targeted button elements.
  
  margin-left: auto;: Sets the left margin of the targeted button elements to auto, pushing them to the right side of their parent container.
    
    =====*/
  `;
  const projectDesign = `
  .project-container {
    gap: 2rem;
    max-width: ${projectDesignElem.projectConatiner_maxWidth}px;
    display: ${projectDesignElem.projectConatiner_display};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* column-gap: 2rem; */
    width: calc(100% - 2rem);
    margin: auto;
  }

  .project-img {
    box-shadow: 0 4px 25px ${projectDesignElem.projectImage_box_shadow_bg};
    border-radius: ${projectDesignElem.projectImage_borderRaduis}rem;
    overflow: hidden;
  }

  .project-img img {
    transition: ${projectDesignElem.projectImage_transition}s;
    cursor: pointer;
    margin-bottom: ${projectDesignElem.projectImage_marginBottom}rem;
  }

  .project-img img:hover {
    transform: scale(1.1);
  }

  .project-container p {
    margin: auto 1rem 1rem;
  }

  .project-title {
    margin-bottom: 1rem;
    margin-top: var(--mb-3);
    font-size: ${projectDesignElem.projectTitle_fontSize}rem;
  }

  .project-subtitle {
    margin-bottom: 2rem;
    padding-bottom: 3.5rem;
  }

  .small-btn {
    padding: 0.3rem 1.3rem;
    font-weight: 400;
    margin: 1rem;
  }

  .project-btns {
    position: relative;
    bottom: 0;
  }

  `;

  let footerComments = `
  <!--===== FOOTER + CONTACT
  <section>: it defines a section of the web page.
  
  <h2>: it represents a subheading of the section.
  
  <form>: The <form> tag creates a form for user input. It typically contains input controls, such as text fields, checkboxes, or buttons.
  
  <input>: The <input> tag represents an input control within a form. It can be used to create various types of form inputs, such as text fields, checkboxes, radio buttons, or submit buttons.
  
  <textarea>: The <textarea> tag represents a multi-line input.
  
  <footer>: This tag defines a container for the footer section of the web page. It typically contains information about the website, copyright notices, and links to related pages or resources.
  
  <p>: it defines a paragraph of text.
  
  <a>: it creates a hyperlink to other web pages or sections within the same page.
      
      =====-->
  
  `;
  const Footer = `
  <footer class="footer section" id="contact">
  <h2 class="section-title">${FooterElem.message}</h2>
  <p class="footer-title">${FooterElem.hero_name}</p>
  <div class="footer-social">
    <a href="" target="_blank" class="footer-icon"><i class="bx bxl-linkedin">
        <br />
        ${FooterElem.text1}</i></a>
    <a href="" target="_blank" class="footer-icon"><i class="bx bxl-twitter">
        <br />
        ${FooterElem.text2}</i></a>
    <a href="" target="_blank" class="footer-icon"><i class="bx bx-mail-send">
        <br />
        ${FooterElem.text3}</i></a>
    <a href="" target="_blank" class="footer-icon"><i class="bx bx-phone">
        <br />
        ${FooterElem.Phone}</i></a>
    <a href="" target="_blank" class="footer-icon"><i class="bx bxl-github">
        <br />
        ${FooterElem.linkToGithub}
      </i></a>
  </div>
  <p> ${FooterElem.copyRight}</p>
</footer>
  `;

  let footerDesignComments = `
  /* ===== FOOTER 
  .footer: This class selector targets an element with the class "footer" and applies the following styles:
  
  background-color:Sets the background color of the targeted element.
  color: Sets the text color of the content within the targeted element.
  text-align: Centers the text content within the targeted element.
  font-weight: n;: Sets the font weight of the text within the targeted element to a value of n (bold).
  padding:Sets the padding (spacing) at the top and bottom of the targeted element vertically and 0 horizontally.
  .footer-title: This class selector targets an element with the class "footer-title" within the footer and applies the following styles:
  
  font-size: nrem;: Sets the font size of the text within the targeted element to n rem.
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted element to n rem.
  .footer-social: This class selector targets an element with the class "footer-social" within the footer and applies the following styles:
  
  margin-bottom: nrem;: Sets the margin (spacing) at the bottom of the targeted element to n rem.
  .footer-icon: This class selector targets an element with the class "footer-icon" within the footer and applies the following styles:
  
  font-size: nrem;: Sets the font size of the text within the targeted element to n rem.
  color: Sets the text color of the content within the targeted element.
  margin: nrem;: Sets the margin (spacing) around the targeted element to n rem on all sides.
    
    =====*/
  `;

  const footerDesign = `
  .contact-input {
    width: 100%;
    font-size: var(--normal-font-size);
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1.5px solid #0e2431;
    outline: none;
    margin-bottom: 2rem;
  }

  .contact-button {
    display: block;
    border: none;
    outline: none;
    font-size: var(--normal-font-size);
    cursor: pointer;
    margin-left: auto;
  }


  .footer {
    background-color: ${FooterDesignElem.background_color};
    color: #fff;
    text-align: ${FooterDesignElem.text_align};
    font-weight: ${FooterDesignElem.font_weight};
    padding: 3.5rem 0;
  }

  .footer-title {
    font-size: ${FooterDesignElem.footerTitle_fontSize}rem;
    margin-bottom: ${FooterDesignElem.footerTitle_marginBottom}rem;
  }

  .footer-social {
    margin-bottom: 2rem;
  }

  .footer-icon {
    font-size: ${FooterDesignElem.footerIcon_margin}rem;
    color: #fff;
    margin: 1rem;
  }

  `;

  let responsiveComments = `
  /* 
  @media screen and (max-width: 768px): This is a media query that targets screens with a maximum width of 768 pixels. The styles within this media query will be applied when the screen width is less than or equal to 768 pixels.

.nav-menu: This class selector targets elements with the class "nav-menu" and applies the following styles within the media query:

position: fixed;: The position property specifies that the targeted elements should be positioned relative to the browser window.

top:The top property sets the distance from the top edge of the browser window.

right:The right property sets the distance from the right edge of the browser window. In this case, it is set to -100% to position the element off-screen to the right.

width:The width property sets the width of the targeted elements.

height:The height property sets the height of the targeted elements.

padding:The padding property sets the spacing between the content and the borders of the targeted elements.

background-color:The background-color property sets the background color of the targeted elements.

transition:The transition property specifies the transition effect applied to the targeted elements.

These styles are specific to screens with a maximum width of 768 pixels and are used to create a responsive navigation menu that slides in from the right side of the screen when activated.
  */

/* ===== MEDIA QUERIES
The provided code includes media queries targeting different screen widths to apply specific styles for different screen sizes:

@media screen and (min-width: 768px):

Adjusts the layout for screens with a minimum width of 768px.

Sets the body margin to 0.

Increases the padding of sections.

Modifies the margin-bottom of section titles.

Adjusts the height of the navigation bar.

Modifies the margin and padding of navigation items and links.

Changes the alignment and size of elements within the home section.

Adjusts the layout and size of elements in the about section.

Updates the grid layout and text alignment in the skills section.

Modifies the width of images in the about section.

Updates the grid layout in the project section.

Adjusts the width of the contact form and its container.

@media screen and (min-width: 1024px):

Further adjusts the layout for screens with a minimum width of 1024px.

Centers the content within the .bd-grid container.

Updates the position of the home image.
  
  =====*/
    `;
  const Responsiveness = `

  @media screen and (min-width: 768px) {
    :root {
      --big-font-size: 3.5rem;
      --h2-font-size: 2rem;
      --normal-font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: var(--header-height);
      right: -100%;
      width: 80%;
      height: 100%;
      padding: 2rem;
      background-color: var(--second-color);
      transition: 0.5s;
    }
  }
  


  @media screen and (min-width: 768px) {
    body {
      margin: 0;
    }

    .section {
      padding-top: 4rem;
      padding-bottom: 3rem;
    }

    .section-title {
      margin-bottom: var(--mb-6);
    }

    .section-title::after {
      width: 80px;
      top: 3rem;
    }

    .nav {
      height: calc(3rem + 1rem);
    }

    .nav-list {
      display: flex;
      padding-top: 0;
    }

    .nav-item {
      margin-left: var(--mb-6);
      margin-bottom: 0;
    }

    .nav-toggle {
      display: none;
    }

    .nav-link {
      color: #0e2431;
    }

    .home {
      height: 100vh;
    }

    .home-data {
      align-self: flex-end;
    }

    .home-social {
      padding-top: 0;
      padding-bottom: 2.5rem;
      flex-direction: row;
      align-self: flex-end;
    }

    .home-social-icon {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    .home-img {
      width: 39%;
      max-width: 420px;
      bottom: 15%;
    }

    .about-container {
      align-items: center;
      margin: auto;
      width: 50%;
      transition: 0.5s;
    }

    /* .about-container {
    width: 50%;
  } */
    .skills-container {
      grid-template-columns: repeat(2, 1fr);
      text-align: initial;
    }

    .about-img img {
      width: 300px;
    }

    .project-container {
      grid-template-columns: repeat(2, 1fr);
      /* grid-template-rows: repeat(2, 1fr); */
      column-gap: 3rem;
    }

    .contact-form {
      width: 360px;
    }

    .contact-container {
      justify-items: center;
    }
  }

  @media screen and (min-width: 1024px) {
    .bd-grid {
      margin-left: auto;
      margin-right: auto;
    }

    .home-img {
      right: 10%;
    }
  }

  `;

  const jsCode = `

  <script >
  /*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
let current = '';
sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if (scrollY >= sectionTop - 390) {
    current = section.getAttribute('id');
  }
})

navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.classList.contains(current)) {
    link.classList.add('active');
  }
})
})

// function linkAction() {
//   /*Active link*/
//   navLinks.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));

/*===== COPY Email =====*/
const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
navigator.clipboard.writeText("kasulaarunteja@gmail.com");
copy.innerHTML = "copied";
setTimeout(() => {
  copy.innerHTML = null;
}, 1000);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
origin: "top",
distance: "80px",
duration: 2000,
reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
sr.reveal(".project-img", { interval: 200 });

/*SCROLL CONTACT*/
// sr.reveal(".contact-input", { interval: 200 });

function myFunction(){
  var element = document.body;
  element.classList.toggle("dark-mode")
}


var messageArr = ["MERN Developer", "Frontend Developer", "Backend Developer"];
var textPosition = 0;
var speed = 200;

typewriter = () => {
  // for(let i = 0; i < messageArr.length; i++) {
  document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition)  ;
  if(textPosition ++  != messageArr[0].length)
      setTimeout(typewriter, speed)
}


window.addEventListener("load" , typewriter);


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
      } else if (section == 'Home') {
        setHomes(true);
      } else if (section == 'About') {
        setabouts(true);
      } else if (section == 'Education') {
        seteducations(true);
      } else if (section == 'Skills') {
        setskill(true);
      } else if (section == 'Projects') {
        setprojects(true);
      } else if (section == 'Footer') {
        setfooters(true);
      }
    });
    let code = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./assets/img/h1.png" />
      <link rel="stylesheet" href="assets/css/styles.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
      <!-- =====BOX ICONS===== -->
      <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
      <!--===== SCROLL REVEAL =====-->
      <script src="https://unpkg.com/scrollreveal"></script>
      <title>Professional Portfolio</title>
    
      <style>
        /*===== GOOGLE FONTS =====*/
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
    /*===== VARIABLES CSS =====*/

    ${cssComments ? globalDesignComments : ''}
    ${head ? globalDesign : ''}

    #jobTitle{
      animation: blinker 6s linear infinite;
    }
    
    @keyframes blinker {
      70%{
        opacity: .2;
      }
    }
    
    h1,
    h2,
    p {
      margin: 0;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    
    
    /*===== CLASS CSS ===== */
    .section-title {
      position: relative;
      font-size: var(--h2-font-size);
      color: var(--first-color);
      margin-top: var(--mb-2);
      margin-bottom: var(--mb-4);
      text-align: center;
    }
    .section-title::after {
      position: absolute;
      content: "";
      width: 64px;
      height: 0.18rem;
      left: 0;
      right: 0;
      margin: auto;
      top: 2rem;
      background-color: var(--first-color);
    }
    .section {
      padding-top: 3rem;
      padding-bottom: 2rem;
    }
    
    /*===== LAYOUT =====*/
    .bd-grid {
      max-width: 1024px;
      display: grid;
      grid-template-columns: 100%;
      grid-column-gap: 2rem;
      width: calc(100% - 2rem);
      margin-left: var(--mb-2);
      margin-right: var(--mb-2);
    }
    
    
    
    
    
    /*Active menu*/
    .active::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0.18rem;
      left: 0;
      top: 2rem;
      background-color: var(--first-color);
    }
    
    /*=== Show menu ===*/
    .show {
      right: 0;
    }

    ${cssComments && head ? headerDesignComments : ''}
    ${head ? headerDesign : ''}
    ${cssComments && homes ? homeDesignComments : ''}
    ${homes ? homeDesign : ''}
    ${cssComments && abouts ? aboutDesignComments : ''}
    ${abouts ? aboutDesign : ''}
    ${cssComments && educations ? educationDesignComments : ''}
    ${educations ? educationDesign : ''}
    ${cssComments && skill ? skillsDesignComments : ''}
    ${skill ? skillsDesign : ''}
    ${cssComments && projects ? projectDesignComments : ''}
    ${projects ? projectDesign : ''}
    ${cssComments && footers ? footerDesignComments : ''}
    ${footers ? footerDesign : ''}

    
    ${cssComments && responsive ? responsiveComments : ''}

    ${responsive ? Responsiveness : ''}
      </style>
    </head>
    
    <body>
    ${htmlComments && head ? headerComments : ''}

        ${head ? header : ''}
        ${htmlComments && homes ? homeComments : ''}

        ${homes ? home : ''}

        ${htmlComments && abouts ? aboutComments : ''}

        ${abouts ? about : ''}

        ${htmlComments && educations ? educationComments : ''}

        ${educations ? education : ''}

        ${htmlComments && skill ? skillsComments : ''}

        ${skill ? skills : ''}

        ${htmlComments && projects ? projectComments : ''}

        ${projects ? project : ''}

        ${htmlComments && footers ? footerComments : ''}

        ${footers ? Footer : ''}


        ${jsCode}
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
              navigate('/dashboard/Templates/ProfessionalPortfolio/PP');
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
                  checked={sections.includes('Education')}
                  onChange={handleSectionsChange}
                />
              }
              label='Education'
              value='Education'
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
              setHomes(false);
              setabouts(false);
              seteducations(false);
              setskill(false);
              setprojects(false);
              setfooters(false);

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
              return <Header />;
            } else if (section === 'Home') {
              return <Home />;
            } else if (section === 'About') {
              return <About />;
            } else if (section === 'Education') {
              return <Education />;
            } else if (section === 'Skills') {
              return <Skills />;
            } else if (section === 'Projects') {
              return <Projects />;
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
                  required
                  sx={{
                    width: '100%',
                    marginTop: 3,
                  }}
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
                    template='Professional Portfolio'
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
