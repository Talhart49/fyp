import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/Ecommerce02_redux/E02_Slice';

import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import Client from './Client';
import Contact from './Contact';
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
  const globalElementsDesign = useSelector((state) => state.E02.globalDesign);
  const navElements = useSelector((state) => state.E02.navbar);
  const navElemDesign = useSelector((state) => state.E02.navbarDesign);
  const homeElemSection = useSelector((state) => state.E02.home);
  const homeElemSectionDesign = useSelector((state) => state.E02.homeDesign);
  const serviceElem = useSelector((state) => state.E02.service);
  const serviceDesignElem = useSelector((state) => state.E02.serviceDesign);
  const clientElem = useSelector((state) => state.E02.client);
  const clientDesignElem = useSelector((state) => state.E02.clientDesign);
  const contactElem = useSelector((state) => state.E02.contact);
  const contactDesignElem = useSelector((state) => state.E02.contactDesign);
  const footerElem = useSelector((state) => state.E02.footer);
  const footerDesignElem = useSelector((state) => state.E02.footerDesign);

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
  const [nav, setnav] = useState(false);
  const [homes, setHome] = useState(false);
  const [services, setService] = useState(false);
  const [clients, setClient] = useState(false);
  const [contacts, setContact] = useState(false);
  const [footer, setFooter] = useState(false);

  const [responsive, setResponsive] = useState(false);

  let globalDesignComments = `
  /* CSS Reset */
  /* 
The contains some commonly used CSS styles and the declaration of a CSS variable. Here's an explanation of the CSS properties used:

*: This universal selector targets all elements on the page and applies the following styles:

margin: This property sets the margin of all elements to 0, effectively removing any default margins.
padding: This property sets the padding of all elements to 0, effectively removing any default padding.
The purpose of these styles is to reset the default margin and padding for all elements, providing a clean starting point for styling.

html: This selector targets the <html> element and applies the following style:

scroll-behavior: This property specifies the scrolling behavior for the webpage. In this case, it is set to smooth, which enables smooth scrolling animation when navigating to different sections of the page.
This style enhances the user experience by providing smooth scrolling behavior when using anchor links or other methods to navigate within the webpage.

:root: This pseudo-class selector targets the root element (usually the <html> element) and is used to declare CSS variables. In this case, it declares a CSS variable named --navbar-height with a value of 59px.

CSS variables are custom properties that can hold values and be reused throughout the CSS code. They provide a convenient way to define and manage values that may be used in multiple places, making it easier to maintain and update styles.

By setting --navbar-height as a CSS variable, you can use this variable wherever you need to refer to the height of the navbar in your CSS code, providing flexibility and consistency.

These styles and CSS variable declaration are commonly used in web development to reset default styles, enable smooth scrolling, and define reusable values using CSS variables.
*/
  `;
  const globalDesign = `
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  /* CSS Variables */
  :root {
    --navbar-height: 59px;
  }

  .center {
    text-align: center;
  }
  
    .h-primary {
        font-family: 'Bree Serif', serif;
        font-size: ${globalElementsDesign.heading_FontSize}rem;
        padding: ${globalElementsDesign.heading_padding}px;
    }

    .h-secondary {
        font-family: 'Bree Serif', serif;
        font-size: ${globalElementsDesign.paragraph_FontSize}rem;
        padding: ${globalElementsDesign.paragraph_padding}px;
    }

    .btn {
        padding: 6px 20px;
        border: 2px solid ${globalElementsDesign.button_borderColor};
        background-color: ${globalElementsDesign.button_backgroundColor};
        color: white;
        margin: 17px;
        font-size: 1.5rem;
        border-radius: 10px;
        cursor: pointer;
    }
  
  `;
  let navbarComments = `
  <!-- 
  Header and Navigation:
  
  The code begins with the opening <body> tag and includes a <nav> element with the id "navbar" for the website's navigation.
  
  Inside the navigation, there is a <div> element with the id "logo" that contains an <img> tag for the website logo.
  
  Following the logo, there is an unordered list <ul> containing navigation links as list items <li>.
  
  Each list item has a class "item" and an anchor <a> tag with a corresponding href attribute for linking to different sections of the page.
   -->
  `;
  const navbar = `
  <nav id="navbar">
  <div id="logo">
      <img src=${navElements.nav_logo} alt="MyOnlineMeal.com">
  </div>
  <ul>
      <li class="item"><a href="#home">${navElements.nav_element1}</a></li>
      <li class="item"><a href="#services-container">${navElements.nav_element2}</a></li>
      <li class="item"><a href="#client-section">${navElements.nav_element3}</a></li>
      <li class="item"><a href="#contact">${navElements.nav_element4}</a></li>
  </ul>
</nav>

  `;
  const navbarDesignComments = `
  /* Navigation Bar */
  /* 
The contains CSS styles for a navigation bar with a logo, list items, and anchor links. Here's an explanation of the CSS properties used:

#navbar: This selector targets an element with the ID "navbar" and applies the following styles:

display: flex;: This property sets the element's display to flex, enabling flexbox layout.

justify-content: This property aligns the flex items along the horizontal axis (main axis) and centers them horizontally.

align-items: This property aligns the flex items along the vertical axis (cross axis) and centers them vertically.

position: This property positions the element as "sticky," meaning it will remain fixed at its position when scrolling.

top:This property positions the element at the top of its container, with a top offset of 0 pixels.

#navbar:This selector targets the before pseudo-element of the element with the ID "navbar" and applies the following styles:

content: This property inserts content before the element, in this case, an empty string.

background-color:This property sets the background color of the pseudo-element to user color.

position: This property positions the pseudo-element absolutely relative to its nearest positioned ancestor.

top:This property positions the pseudo-element at the top of its container, with a top offset of 0 pixels.

left:This property positions the pseudo-element at the left edge of its container, with a left offset of 0 pixels.

height: This property sets the height of the pseudo-element to 100% of its container's height.

width: This property sets the width of the pseudo-element to 100% of its container's width.

z-index:This property sets the z-index of the pseudo-element to -1, positioning it behind the content.

opacit: This property sets the opacity of the pseudo-element,making it partially transparent.

The before pseudo-element is used here to create a background overlay for the navigation bar.

#logo: This selector targets an element with the ID "logo" and applies the following styles:

margin-top: px;: This property sets the top margin of the element to pixels.

margin-right: This property sets the right margin of the element to pixels.

#logo img: This selector targets img elements within the element with the ID "logo" and applies the following styles:

height: This property sets the height of the image to  pixels.

margin-bottom: This property sets the bottom margin of the image to  pixels.

These styles are specific to the logo image within the navigation bar.

#navbar ul: This selector targets ul elements within the element with the ID "navbar" and applies the following styles:

display:This property sets the display of the ul element to flex, enabling flexbox layout.

font-family:This property sets the font family of the text within the ul element to 'Baloo Bhai' or a fallback cursive font.

*/
  `;
  const navbarDesign = `
  /* Navigation Bar */
  #navbar {
      display: flex;
      justify-content: ${navElemDesign.justifyContent};
      align-items: center;
      position: sticky;
      top: 0px;
  }

  #navbar::before {
      content: "";
      background-color: ${navElemDesign.backgroundColor};
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: ${navElemDesign.backgroundColor_opacity};
  }

  /* Navigation Bar: Logo and Image */
  #logo {
      margin-top: ${navElemDesign.imageMarginTop}px;
      margin-right: 30px;
  }

  #logo img {
      height: ${navElemDesign.imageHeight}px;
      margin-bottom: ${navElemDesign.imageMarginBottom}px;
      /* margin: 3px 6px; */
  }


  /* Navigation Bar: List Styling */

  #navbar ul {
      display: flex;
      font-family: 'Baloo Bhai', cursive;
  }

  #navbar ul li {
      list-style: none;
      font-size: 1.3rem;
  }

  #navbar ul li a {
      color: rgb(227, 220, 220);
      display: block;
      padding: 3px 22px;
      border-radius: 20px;
      text-decoration: none;
  }

  #navbar ul li a:hover {
      color: black;
      background-color: white;
  }

  `;
  let homeComments = `
  <!-- 
  Home Section:
  
  The id "home" using the <section> tag.
  
  Inside the section, there is an <h1> heading with the class "h-primary" and a couple of paragraphs <p> for introductory text.
  
  A button with the class "btn" is also included for the "Order Now" action.
   -->
  `;
  const home = `

  <section id="home">
  <h1 class="h-primary">${homeElemSection.heading01}</h1>
  <p>${homeElemSection.paragraph01}</p>
  <p>${homeElemSection.paragraph02}</p>
  <button class="btn">${homeElemSection.button}</button>
</section>
  `;
  const homeDesignComments = `
  /* Home Section */

  /* 
The contains CSS styles for a section with the ID "home" that includes a background image, a heading, and a paragraph. Here's an explanation of the CSS properties used:

#home: This selector targets an element with the ID "home" and applies the following styles:

display: This property sets the element's display to, enabling flexbox layout.

flex-direction:This property sets the direction of the flex items to be stacked vertically.

padding:This property sets the padding of the element to pixels on the top and bottom, and pixels on the left and right.

height: This property sets the height of the element to  pixels.

justify-content: This property aligns the flex items along the vertical axis (cross axis) and centers them vertically.

align-items: This property aligns the flex items along the horizontal axis (main axis) and centers them horizontally.

#home:This selector targets the before pseudo-element of the element with the ID "home" and applies the following styles:

content: "";: This property inserts content before the element, in this case, an empty string.

position: This property positions the pseudo-element absolutely relative to its nearest positioned ancestor.

height:This property sets the height of the pseudo-element to  pixels.

top:This property positions the pseudo-element at the top of its container, with a top offset.

left:This property positions the pseudo-element at the left edge of its container, with a left.

width:This property sets the width of the pseudo-element to 100% of its container's width.

z-index:This property sets the z-index of the pseudo-element, positioning it behind the content.

opacity:This property sets the opacity of the pseudo-element to,making it slightly transparent.

The before pseudo-element is used here to create a background image for the "home" section.

#home h1: This selector targets the heading elements (h1) within the element with the ID "home" and applies the following styles:

text-align: center;: This property aligns the text to the center.

font-family:This property sets the font family of the text.

#home p: This selector targets the paragraph elements (p) within the element with the ID "home" and applies the following styles:
User
*/
  `;
  const homeDesign = `
  #home {
    display: flex;
    flex-direction: column;
    padding: 3px 200px;
    height: ${homeElemSectionDesign.Height}px;
    justify-content: ${homeElemSectionDesign.justifyContent};
    align-items: center;
}

#home::before {
    content: "";
    position: absolute;
    background: url(${homeElemSectionDesign.backgroundImage}) no-repeat center center/cover;
    height: 642px;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: -1;
    opacity: 0.89;
}

#home h1 {
    color: ${homeElemSectionDesign.heading01_color};
    text-align: center;
    font-family: ${homeElemSectionDesign.heading_fontFamily};
}

#home p {
    color: ${homeElemSectionDesign.paragraph_color};
    text-align: center;
    font-size: ${homeElemSectionDesign.paragraph_fontSize}rem;
    font-family: ${homeElemSectionDesign.paragraph_fontFamily};
}
  `;
  let serviceComments = `

  <!-- 
  Services Section:
  
  The id "services-container" is created using the <section> tag.
  
  It starts with an <h1> heading with the class "h-primary center" for the section title.
  
  Inside the section, there is a <div> container with the id "services" that wraps three service boxes.
  
  Each service box consists of an image <img>, an <h2> heading with the class "h-secondary center" for the service title, and a <p> paragraph for the service description.
   -->
  
  `;
  const service = `
  <section id="services-container">
  <h1 class="h-primary center">${serviceElem.sectionName}</h1>
  <div id="services">
      <div class="box">
          <img src=${serviceElem.service_1_image} alt="">
          <h2 class="h-secondary center">${serviceElem.service_1_name}</h2>
          <p class="center">${serviceElem.service_1_paragraph}</p>
      </div>
      <div class="box">
      <img src=${serviceElem.service_2_image} alt="">
      <h2 class="h-secondary center">${serviceElem.service_2_name}</h2>
      <p class="center">${serviceElem.service_2_description}</p>
      </div>
      
      <div class="box">
      <img src=${serviceElem.service_3_image} alt="">
      <h2 class="h-secondary center">${serviceElem.service_3_name}</h2>
      <p class="center">${serviceElem.service_3_description}</p>
      </div>
  </div>
</section>
  `;
  const serviceDesignComments = `
  /* Services Section */
  /* 
Here's the explanation for the CSS properties used:

#services:

margin:Adds a margin of  pixels around the element.

display: Sets the element to a flex container, allowing its child elements to be laid out in a flex layout.

border: Sets a solid border with a thickness.

padding: Adds a padding inside the element, creating space between the content and the border.

margin:Sets the margin of user provided pixels on the top and bottom, and user provided pixels on the left and right, creating space between adjacent boxes.

border-radius: Rounds the corners of the element with a border radius o:els.

background: Sets the background color of the element to a light gray.

margin-bottom: Adds a margin of  pixels at the bottom of the element, creating space between boxes.

#services .box img:

height: Sets the height of the image to  pixels.

margin:Centers the image horizontally within its container.

display: block;: Sets the image to a block element, allowing other elements to be positioned around it.

#services .box p:

font-family: Sets the font family of the paragraph text.

*/
  `;
  const serviceDesign = `
  #services {
    margin: ${serviceDesignElem.sectionName_marginBottom}px;
    display: flex;
}

#services .box {
    border: 2px solid brown;
    padding: ${serviceDesignElem.serviceBox_padding}px;
    margin: 2px 55px;
    border-radius: ${serviceDesignElem.serviceBox_borderRadius}px;
    background: ${serviceDesignElem.serviceBox_backgroundColor};
    margin-bottom: 20px;
}

#services .box img {
    height: ${serviceDesignElem.serviceImage_height}px;
    margin: auto;
    display: block;
}

#services .box p {
    font-family: ${serviceDesignElem.serviceParagraph_fontFamily};

}
  `;
  let clientComments = `
  <!-- 
  Client Section:
  
  The id "client-section" is defined using the <section> tag.
  
  It begins with an <h1> heading with the class "h-primary center" for the section title.
  
  Inside the section, there is a <div> container with the id "clients" that holds multiple client items.
  
  Each client item is represented by a <div> with the class "client-item" and contains an <img> tag displaying the client's logo.
  
   -->
  `;
  const client = `
  <section id="client-section">
  <h1 class="h-primary center">${clientElem.sectionName}</h1>
  <div id="clients">
      <div class="client-item">
          <img src=${clientElem.image01} alt="Our Client">
      </div>
      <div class="client-item">
          <img src=${clientElem.image02} alt="Our Client">
      </div>

      <div class="client-item">
          <img src=${clientElem.image03} alt="Our Client">
      </div>
      <div class="client-item">
          <img src=${clientElem.image04} alt="Our Client">
      </div>
  </div>

</section>
  `;
  let clientDesignComments = `
  /* Clients Section */

  /* 
Here's the explanation for the CSS properties used in the :

#client-section:

position:Sets the position of the element to relative, allowing other positioned elements inside it to be positioned relative to this element.

#client-section::before:

content:Inserts content before the element.

position: Sets the position of the pseudo-element to absolute, positioning it relative to the #client-section.

width: Sets the width of the pseudo-element to 100% of its container.

height:Sets the height of the pseudo-element to 100% of its container.

z-index:Sets the stacking order of the pseudo-element to be behind other elements.

opacity:Sets the opacity of the pseudo-element to partially transparent).
#clients:

display:Sets the element to a flex container, allowing its child elements to be laid out in a flex layout.

justify-content:Horizontally aligns the flex items at the center of the container.

align-items:Vertically aligns the flex items at the center of the container.
.client-item:

padding: Adds padding to the client-item elements.
#clients img:

height:Sets the height of the images inside the #clients container to pixels.

These styles are applied to create a client section. The #client-section has a pseudo-element before it with a background image.

The #clients container is a flex container, horizontally and vertically centering its child elements. The client-item elements have padding, and the images inside them have a specified height
*/
  `;
  const clientDesign = `
  #client-section {
    position: relative;
}

#client-section::before {
    content: "";
    position: absolute;
    background: url(${clientDesignElem.backgroundImage});
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: ${clientDesignElem.backgroundImage_opacity};
}

#clients {
    display: flex;
    justify-content: c${clientDesignElem.justifyContent};
    align-items: center;
}

.client-item {
    padding: ${clientDesignElem.itemPadding}px;
}

#clients img {
    height: ${clientDesignElem.imageHeight}px;
}



  `;
  let contactComments = `
  <!-- 
Contact Section:

The id "contact" is created using the <section> tag.

It starts with an <h1> heading with the class "h-primary center" for the section title.

Inside the section, there is a <div> container with the id "contact-box" that wraps a <form> element.

The form includes various form fields such as input fields for name, email, and phone number, and a textarea for the message.    
 -->
  `;
  const contact = `
 
  <section id="contact">
        <h1 class="h-primary center">${contactElem.sectionName}</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name">${contactElem.textFieldLabel01}</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="email">${contactElem.textFieldLabel02}</label>
                    <input type="email" name="name" id="email" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label for="phone">${contactElem.textFieldLabel03}</label>
                    <input type="phone" name="name" id="phone" placeholder="Enter your phone">
                </div>
                <div class="form-group">
                    <label for="message">${contactElem.textAreaLabel}</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    </section>
  `;
  let contactDesignComments = `
  /* Contact Section */
  /* 
Here's the explanation for the CSS properties used:

#contact:

position:Sets the position of the element to relative, allowing other positioned elements inside it to be positioned relative to this element.

content:Inserts content before the element.

position:Sets the position of the pseudo-element, positioning it relative to the #contact.

width:Sets the width of the pseudo-element to 100% of its container.

height:Sets the height of the pseudo-element to 100% of its container.

z-index: Sets the stacking order of the pseudo-element to be behind other elements.

opacity:Sets the opacity of the pseudo-element (partially transparent).

display: Sets the element to a flex container, allowing its child elements to be laid out in a flex layout.

justify-content:Horizontally aligns the flex items at the center of the container.

align-items:Vertically aligns the flex items at the center of the container.

padding-bottom: Adds padding to the bottom of the #contact-box.

width:Sets the width of the input and textarea elements to 100% of their container.

padding: Adds padding to the input and textarea elements.

border-radius: Sets the border-radius of the input and textarea elements.

font-size:Sets the font size of the input and textarea elements.

width: Sets the width of the form element inside the #contact-box of its container.

font-size: Sets the font size of the label elements inside the #contact-box.

font-family:Sets the font family of the label elements.

These styles are applied to create a contact section. The #contact element has a pseudo-element before it with a background image. The #contact-box container is a flex container, horizontally and vertically centering its child elements. The input and textarea elements inside the #contact-box have specific widths, padding, and border radius. 

The form element has a specified width, and the label elements inside the #contact-box have specific font size and font family.

*/
  `;
  const contactDesign = `
  #contact {
    position: relative;
}

#contact::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: ${contactDesignElem.backgroundImage_opacity};
    background: url(${contactDesignElem.backgroundImage}) no-repeat center center/cover;

}

#contact-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${contactDesignElem.contactBox_paddingBottom}px;
}

#contact-box input,
#contact-box textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: ${contactDesignElem.textField_borderRadius}px;
    font-size: 1.1rem;
}

#contact-box form {
    width: 40%;
}

#contact-box label {
    font-size: ${contactDesignElem.textFieldLabel_fontSize}rem;
    font-family:${contactDesignElem.textFieldLabel_fontFamily} ,

}


  `;
  let FooterComments = `
  <!-- 
  Footer:
  
  Finally, the code ends with the <footer> tag that contains a <div> with the class "center" for the copyright information.
   -->
  `;
  const Footer = `
  <footer>
  <div class="center">
      ${footerElem.copyRight}
  </div>
</footer>
  `;
  const footerDesignComments = `
  /* 
  The code  contains CSS styles for the <footer> element of a webpage. Here's an explanation of the CSS properties used:
  
  footer: This selector targets the <footer> element and applies the following styles:
  
  background: This property sets the background color of the <footer> element to the specified value.
  
  color: This property sets the text color of the content within the <footer> element to the specified value.
  
  padding: This property sets the padding (inner spacing) of the content within the <footer> element. 
  
  It specifies the top and bottom padding to the left and right padding.
  
  These styles define the background color, text color, and padding for the <footer> element. 
  
  You can customize these styles to match the desired design and layout of your footer.
  */
  `;
  const footerDesign = `
  footer {
    background: ${footerDesignElem.backgroundColor};
    color: ${footerDesignElem.textColor};
    padding: ${footerDesignElem.paddingTopAndBottom}px 20px;
}
  `;
  let responsiveDesignComments = `
  /* 
  The code  contains CSS styles within a media query, targeting screens with a maximum width of 1170 pixels. Here's an explanation of the CSS properties used within the media query:
  
  #navbar: This selector targets the navigation element and applies the following styles:
  
  flex-direction: This property changes the direction of the flex container to be column-based, making the navigation items stack vertically.
  #navbar ul li a: This selector targets the anchor tags within the navigation list items and applies the following styles:
  
  font-size: This property sets the font size of the anchor tags to 1rem.
  padding: This property sets the padding around the anchor tags, with 0px on the top and bottom, and 7px on the left and right.
  padding-bottom: This property sets additional padding on the bottom of the anchor tags, specifically 8px.
  #home: This selector targets the home section and applies the following styles:
  
  height: This property sets the height of the home section to 370 pixels.
  padding: This property sets the padding within the home section to 3px on the top and bottom, and 28px on the left and right.
  #home::before: This selector targets the pseudo-element ::before of the home section and applies the following styles:
  
  height: This property sets the height of the pseudo-element to 480 pixels.
  #home p: This selector targets the paragraph elements within the home section and applies the following styles:
  
  font-size: This property sets the font size of the paragraph elements to 13px.
  #services: This selector targets the services section and applies the following styles:
  
  flex-direction: This property changes the direction of the flex container to be column-based, making the services items stack vertically.
  #services .box: This selector targets the box elements within the services section and applies the following styles:
  
  padding: This property sets the padding within the box elements to 14px.
  margin: This property sets the margin around the box elements to 2px on the top and bottom, and 0px on the left and right.
  margin-bottom: This property sets additional margin at the bottom of the box elements, specifically 20px.
  #clients: This selector targets the clients section and applies the following styles:
  
  flex-wrap: This property allows the flex items to wrap onto multiple lines if needed.
  #clients img: This selector targets the images within the clients section and applies the following styles:
  
  width: This property sets the width of the images to 66px.
  padding: This property sets the padding around the images to 6px.
  height: This property sets the height of the images to adjust automatically based on their aspect ratio.
  #contact-box form: This selector targets the form within the contact box and applies the following styles:
  
  width: This property sets the width of the form to 80% of its parent container.
  .h-primary: This selector targets elements with the class "h-primary" and applies the following styles:
  font-size: This property sets the font size of the elements to 26px.
  .btn: This selector targets elements with the class "btn" and applies the following styles:
  font-size: This property sets the font size of the elements to 13px.
  padding: This property sets the padding around the elements to 4px on the top and bottom
      */
          /* for media queries */
  `;
  const Responsiveness = `
  @media only screen and (max-width: 1170px) {

    /* Navigation */
    #navbar {
        flex-direction: column;
    }

    #navbar ul li a {
        font-size: 1rem;
        padding: 0px 7px;
        padding-bottom: 8px;
    }

    /* Home section */
    #home {
        height: 370px;
        padding: 3px 28px;
    }

    #home::before {
        height: 480px;
    }

    #home p {
        font-size: 13px;
    }

    /* Services section  */
    #services {
        flex-direction: column;
    }

    #services .box {
        padding: 14px;
        margin: 2px 0px;
        margin-bottom: 20px;
    }

    /* Clients section */
    #clients {
        flex-wrap: wrap;
    }

    #clients img {
        width: 66px;
        padding: 6px;
        height: auto;
    }

    /* Contact us section */
    #contact-box form {
        width: 80%;
    }

    /* Footer */

    /* Utility classes */
    .h-primary {
        font-size: 26px;
    }

    .btn {
        font-size: 13px;
        padding: 4px 8px;
    }
}
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
      if (section == 'Navbar') {
        setnav(true);
      } else if (section == 'Home') {
        setHome(true);
      } else if (section == 'Service') {
        setService(true);
      } else if (section == 'Client') {
        setClient(true);
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
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Best Online Food Delivery Service | MyOnlineMeal.com</title>
    
        <link
          href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap"
          rel="stylesheet"
        />
        

        <style>
        ${cssComments ? globalDesignComments : ''}
          ${nav ? globalDesign : ''}

          ${cssComments && nav ? navbarDesignComments : ' '}
          ${nav ? navbarDesign : ''}

          ${cssComments && homes ? homeDesignComments : ' '}
          ${homes ? homeDesign : ''}

          ${cssComments && services ? serviceDesignComments : ' '}
          ${services ? serviceDesign : ''}

          ${cssComments && clients ? clientDesignComments : ' '}
          ${clients ? clientDesign : ''}

          ${cssComments && contacts ? contactDesignComments : ' '}
          ${contacts ? contactDesign : ''}

          ${cssComments && footer ? footerDesignComments : ' '}
          ${footer ? footerDesign : ''}

          ${cssComments && responsive ? responsiveDesignComments : ' '}
          ${responsive ? Responsiveness : ''}
          

          
        </style>
      </head>
    
      <body>

      ${htmlComments && nav ? navbarComments : ' '}
      ${nav ? navbar : ''}

      ${htmlComments && homes ? homeComments : ' '}
      ${homes ? home : ''}

      ${htmlComments && services ? serviceComments : ' '}
      ${services ? service : ''}

      ${htmlComments && clients ? clientComments : ' '}
      ${clients ? client : ''}

      ${htmlComments && contacts ? contactComments : ' '}
      ${contacts ? contact : ''}

      ${htmlComments && footer ? FooterComments : ' '}
      ${footer ? Footer : ''}
      

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
              navigate('/dashboard/Templates/MyOnlineMeal/OM');
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
                  checked={sections.includes('Navbar')}
                  onChange={handleSectionsChange}
                />
              }
              label='Navbar'
              value='Navbar'
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
                  checked={sections.includes('Service')}
                  onChange={handleSectionsChange}
                />
              }
              label='Service'
              value='Service'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Client')}
                  onChange={handleSectionsChange}
                />
              }
              label='Client'
              value='Client'
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
              setnav(false);
              setHome(false);
              setService(false);
              setClient(false);
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
            if (section === 'Navbar') {
              return <Navbar />;
            } else if (section === 'Home') {
              return <Home />;
            } else if (section === 'Service') {
              return <Service />;
            } else if (section === 'Client') {
              return <Client />;
            } else if (section === 'Contact') {
              return <Contact />;
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
                    template='My Online Meal'
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
