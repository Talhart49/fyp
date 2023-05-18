import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { finalCode } from "../../redux/FoodSite01_redux/FS1_Slice";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Popular from "./Popular";
import Gallery from "./Gallery";
import Order from "./Order";
import Footer from "./Footer";
import "../style.css";

import Feedback from "../../parts/Feedback/Index";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { lucario } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Modal from "@mui/material/Modal";

import axios from "axios";

import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Fab,
  TextField,
} from "@mui/material";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function Index() {
  const globalElementsDesign = useSelector((state) => state.B02.rootTheme);
  const headerElements = useSelector((state) => state.B02.header);
  const headerElemDesign = useSelector((state) => state.B02.headerDesign);
  const CardSection = useSelector((state) => state.B02.team);
  const CardSectionDesign = useSelector((state) => state.B02.teamDesign);
  const articlesElem = useSelector((state) => state.B02.articles);
  const articlesDesignElem = useSelector((state) => state.B02.articlesDesign);
  const footerElem = useSelector((state) => state.B02.Footer);
  const footerDesignElem = useSelector((state) => state.B02.footerDesign);

  const [name, setName] = useState("");
  const userData = localStorage.getItem("email");

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
  const [head, setHead] = useState(false);
  const [cards, setCard] = useState(false);
  const [article, setArticle] = useState(false);
  const [footer, setFooter] = useState(false);

  const [responsive, setResponsive] = useState(false);

  const globalDesign = `
  html {
    height: auto;
    width: auto;
    margin: 0px;
    padding: 0px;
}

body {
    height: auto;
    width: auto;
    margin: 0px;
    padding: 0px;
}

h1 {
    color: ${globalElementsDesign.h1_color};
}

h1 {
    font-family: ${globalElementsDesign.h1_fontFamily};
    text-align: ${globalElementsDesign.h1_textAlign};
    font-size: ${globalElementsDesign.h1_fontSize}px;
}

h2 {
    font-family: ${globalElementsDesign.h2_fontFamily}, cursive;
    text-align: ${globalElementsDesign.h2_textAlign};
    font-size: ${globalElementsDesign.h2_fontSize}px;
}
  `;
  const header = `
  <!-- Header -->

	<a name="top"></a>
	<div id="change_class" class="flex_container section menu_section">
		<div class="flex_item branding">

		</div>

		<div class="flex_item menu_item menu_item_outside"><a href="#top">
				<p>${headerElements.element1}</p>
			</a></div>
		<div class="flex_item menu_item menu_item_outside"><a href="#team">
				<p>${headerElements.element2}</p>
			</a></div>
		<div class="flex_item menu_item menu_item_outside"><a href="#contact">
				<p>${headerElements.element3}</p>
			</a></div></a>
	</div>

	<div class="section page header_section">
		<div class="gradient gradient_red_blue gradient_header_section"></div>
		<div class="section_container header_section_container flex_container flex_header_container">
			<div class="text header_text">
				<h1>${headerElements.heading1}</h1>
			</div>
			<div class="text body_text flex_item flex_header_item">
				<h2 class="header_quote">${headerElements.heading2_quote}</h2>
			</div>
		</div>
	</div>

  `;
  const headerDesign = `
 
  .header_section {
    background-image: url(${headerElemDesign.backgroungImage});
    background-size: ${headerElemDesign.backgroungImageSize};
}

  .menu_section {
    position: ${headerElemDesign.headerPosition};
    z-index: 100;
    top: 0px;
    height: ${headerElemDesign.headerHeight}px;
    width: 100%;

    /*Flexbox BUG, doesn't render padding-right*/
    padding-left: ${headerElemDesign.elements_paddingLeft}px;
    background-color:${headerElemDesign.headerBackgroundColor};

    -webkit-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
}

  .branding {
    min-width: 200px;
    min-height: 90px;
    margin-bottom: 10px;
    background-color: rgb(235, 229, 229);

    -webkit-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);

    background-image: url(${headerElemDesign.logo_backgroundImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.menu_item {
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    min-width: 70px;
    background-color: ${headerElemDesign.elementsBackgroundColor};
    text-align: center;

    -webkit-transition: -webkit-transform 0.1s;
    /* Safari */
    transition: transform 0.1s;

    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);

    -webkit-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
}

  `;
  const team = `
  <!--  Team -->
  <div class="section page second_section">
      <a name="team"></a>
      <div class="section_container second_section_container flex_container flex_center">
          <div class="text header_text text_grad_purple_yellow">
              <h1>${CardSection.about_header}</h1>
          </div>
          <a href="#link1">
              <div class="feature flex_feature_item feature1">
                  <div class="feature_image"></div>
                  <h2>${CardSection.card_1_name}</h2>
                  <p>${CardSection.card_1_paragraph}</p>
              </div>
          </a>
          <a href="#link2">
               <div class="feature flex_feature_item feature2">
                  <div class="feature_image"></div>
                  <h2>${CardSection.card_2_name}</h2>
                  <p>${CardSection.card_2_paragraph}</p>
              </div>
          </a>
          <a href="#link3">
               <div class="feature flex_feature_item feature3">
          <div class="feature_image"></div>
          <h2>${CardSection.card_3_name}</h2>
          <p>${CardSection.card_3_paragraph}</p>
             </div>
          </a>
          <a href="#link4">
          <div class="feature flex_feature_item feature4">
          <div class="feature_image"></div>
          <h2>${CardSection.card_4_name}</h2>
          <p>${CardSection.card_4_paragraph}</p>
      </div>
          </a>
          <a href="#link5">
          <div class="feature flex_feature_item feature5">
          <div class="feature_image"></div>
          <h2>${CardSection.card_5_name}</h2>
          <p>${CardSection.card_5_paragraph}</p>
      </div>
          </a>
      </div>
  </div>
  `;
  const teamDesign = `
  .feature {
    min-width: ${CardSectionDesign.card_minWidth}px;
    max-width: ${CardSectionDesign.card_maxWidth}px;
    height: ${CardSectionDesign.cardHeight}px;
    margin-right: ${CardSectionDesign.card_marginRight}px;
    margin-left: ${CardSectionDesign.card_marginLeft}px;
    margin-bottom: ${CardSectionDesign.card_marginBottom}px;
    padding-top: ${CardSectionDesign.card_paddingTop}px;

    color: #111111;
    filter: grayscale(100%);

    -webkit-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
}

.feature h2 {
    line-height: 0;
}

.feature p {
    text-align: center;
    margin: auto;
    max-width: ${CardSectionDesign.cardParagraph_maxWidth}px;
}

.feature .feature_image {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: ${CardSectionDesign.cardImage_borderRadius}px;
    background-size: cover;
}

.feature1 .feature_image {
    background-image: url(${CardSectionDesign.card_1_backgroundImage});
}

.feature2 .feature_image {
    background-image: url(${CardSectionDesign.card_2_backgroundImage});
}

.feature3 .feature_image {
    background-image: url(${CardSectionDesign.card_3_backgroundImage});
}

.feature4 .feature_image {
    background-image: url(${CardSectionDesign.card_4_backgroundImage});
}

.feature5 .feature_image {
    background-image: url(${CardSectionDesign.card_5_backgroundImage});
}
  `;
  const articles = `
  <!-- Articles -->
  <div class="section page third_section">
      <a name="contact"></a>
      <div class="gradient gradient_red_yellow gradient_third_section"></div>
      <div class="section_container third_section_container flex_container flex_center">
          <div class="text header_text">
              <h1>${articlesElem.heading}</h1>
          </div>
          <a href="#link6">
              <div class="feature offer flex_feature_item offer1">
                  <h2>${articlesElem.article_1_text}</h2>
                  <p>${articlesElem.article_1_para01}</p><br>
                  <p>${articlesElem.article_1_para02}</p>
              </div>
          </a>
          <a href="#link7">
          <div class="feature offer flex_feature_item offer2">
          <h2>${articlesElem.article_2_text}</h2>
          <p>${articlesElem.article_2_para01}</p><br>
          <p>${articlesElem.article_2_para02}</p>
      </div>
          </a>
          <a href="#link8">
          <div class="feature offer flex_feature_item offer3">
          <h2>${articlesElem.article_3_text}</h2>
          <p>${articlesElem.article_3_para01}</p><br>
          <p>${articlesElem.article_3_para02}</p>
      </div>
          </a>
      </div>
  </div>

  `;
  const articlesDesign = `
  .offer {
    min-width: ${articlesDesignElem.article_card_minWidth}px;
    max-width: ${articlesDesignElem.article_card_maxWidth}px;
    background-color: ${articlesDesignElem.article_card_backgroundColor};
}

.offer h2 {
    margin-bottom: ${articlesDesignElem.article_Text_marginBottom}px;
}

.offer p {
    max-width: ${articlesDesignElem.article_para_maxWidth}%;
}

/*Articles*/
.third_section {
    background-image: url(${articlesDesignElem.article_backgroundImage});
    background-size: ${articlesDesignElem.article_backgroundImageSize};
}

  `;

  const Footer = `
  <!-- Footer -->
  <div class="section footer_section">
      <a href="https://www.calmarsolutions.ch">
          <p class="footer_text">${footerElem.footerText}</p>
      </a>
  </div>
  `;
  const footerDesign = `
  .footer_section {
    height: ${footerDesignElem.footerSectionHeight}px;
}

.footer_text {
    margin-top: ${footerDesignElem.footertext_marginTop}px;
    margin-bottom: ${footerDesignElem.footertext_marginBottom}px;
    text-align: center;
    font-weight: ${footerDesignElem.footertext_fontWeight};
}
  `;

  const Responsiveness = `
  @media screen and (max-width: 720px) {
    .menu_section {
        width: 85vw;
        border-right: 15vw solid white;
    }
}
@media screen and (min-width: 720px) {
    .dropdown-content {
        display: none;
    }

    .dropdown {
        display: none;
    }
}

@media screen and (max-width: 719px) {
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        padding: 5px;
        z-index: 1;
        left: 0;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .menu_item_inside {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        background-color: transparent;
    }

    .menu_item_outside {
        display: none;
    }
}

@media screen and (max-width: 1619px) {
    .gradient_third_section {
        height: 1247.19px;
    }
}

@media screen and (max-width: 1079px) {
    .gradient_third_section {
        height: 1697.19px;
    }
}

@media screen and (max-width: 417px) {
    .gradient_header_section {
        height: 828.56px;
    }
}

@media screen and (max-width: 367px) {
    .gradient_header_section {
        height: 968.56px;
    }
}

  `;

  const [sections, setSections] = useState([]);
  const [extend, setExtend] = useState([]);

  const [description, setDescription] = useState("");

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
        "http://localhost:8080/api/usersTemplate",
        {
          authorName: name,
          templateName: "FoodSite Variation",
          templateCode: completeCode,
          templateDescription: description,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  qza;

  const sectionsCode = (sections) => {
    console.log("sections", sections);
    sections.forEach((section) => {
      if (section == "Header") {
        setHead(true);
      } else if (section == "Card") {
        setCard(true);
      } else if (section == "Article") {
        setArticle(true);
      } else if (section == "Footer") {
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
    
    ${cssComments ? keywordsCssComments : ""}

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
    ${sections.includes("Home") ? ".home .home-desc input," : ""}
    ${sections.includes("About") ? ".about .about-desc input," : ""}
    ${sections.includes("Menu") ? ".menu .catagory input," : ""}
    ${
      sections.includes("Popular")
        ? ".popular .popular-content .p-card input,"
        : ""
    }
    ${
      sections.includes("Order")
        ? ".order .order-content .order-form button"
        : ""
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
    ${sections.includes("Home") ? ".home .home-desc input:hover," : ""}
    ${sections.includes("About") ? ".about .about-desc input:hover," : ""}
    ${sections.includes("Menu") ? ".menu .catagory input:hover," : ""}
    ${
      sections.includes("Popular")
        ? ".popular .popular-content .p-card input:hover,"
        : ""
    }
    ${
      sections.includes("Order")
        ? ".order .order-content .order-form button:hover"
        : ""
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
    ${sections.includes("Menu") ? ".menu h2," : ""}
    ${sections.includes("Popular") ? ".popular h2," : ""}
    ${sections.includes("Gallery") ? ".gallery h2," : ""}
    ${sections.includes("Order") ? ".order h2" : ""} {
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
    ${sections.includes("Menu") ? ".menu h2 span," : ""}
    ${sections.includes("Popular") ? ".popular h2 span," : ""}
    ${sections.includes("Gallery") ? ".gallery h2 span," : ""}
    ${sections.includes("Order") ? ".order h2 span" : ""} {
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


      ${nav && cssComments ? headerCssComments : ""}
      ${nav ? navbarDesign : ""}
      ${home && cssComments ? homeCssComments : ""}
      ${home ? homeDesign : ""}
      ${about && cssComments ? aboutCssComments : ""}
      ${about ? aboutDesign : ""}
      ${menu && cssComments ? menuCssComments : ""}
      ${menu ? menuDesign : ""}
      ${popular && cssComments ? popularCssComments : ""}
      ${popular ? popularDesign : ""}
      ${gallery && cssComments ? galleryCssComments : ""}
      ${gallery ? galleryDesign : ""}
      ${order && cssComments ? orderCssComments : ""}
      ${order ? orderDesign : ""}
      ${footer && cssComments ? footerCssComments : ""}
      ${footer ? footerDesign : ""}

      ${responsive ? responsiveDesign : ""}


      </style>
    <body>

        ${nav && htmlComments ? headerHtmlComments : ""}
        ${nav ? navbarCode : ""} 
        ${home && htmlComments ? homeHtmlComments : ""}
        ${home ? homeCode : ""}
        ${about && htmlComments ? aboutHtmlComments : ""}
        ${about ? aboutCode : ""}
        ${menu && htmlComments ? menuHtmlComments : ""}
        ${menu ? menuCode : ""}
        ${popular && htmlComments ? popularHtmlComments : ""}
        ${popular ? popularCode : ""}
        ${gallery && htmlComments ? galleryHtmlComments : ""}
        ${gallery ? galleryCode : ""}
        ${order && htmlComments ? orderHtmlComments : ""}
        ${order ? orderCode : ""}
        ${footer && htmlComments ? footerHtmlComments : ""}
        ${footer ? footerCode : ""}


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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main_container_code">
      <div class="Preview_wrapper">
        <div class="link_wrapper">
          <a
            onClick={() => {
              navigate("/dashboard/Templates/FoodSite/FS1");
            }}
          >
            Preview
          </a>
          <div class="Preview_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="formControl_sections">
        <div className="formControl_sections_header">
          <h3>Sections</h3>
          <p>Select the sections you want to include in your website</p>
        </div>
        <FormGroup className="formGroup_sections">
          <div className="formControl_sections_home">
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={sections.includes("Header")}
                  onChange={handleSectionsChange}
                />
              }
              label="Header"
              value="Header"
            />
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={sections.includes("Card")}
                  onChange={handleSectionsChange}
                />
              }
              label="Card"
              value="Card"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes("Article")}
                  onChange={handleSectionsChange}
                />
              }
              label="Article"
              value="Article"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes("Footer")}
                  onChange={handleSectionsChange}
                />
              }
              label="Footer"
              value="Footer"
            />
          </div>

          <div className="design_selection_buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setHtmlComments(!htmlComments);
              }}
            >
              {htmlComments
                ? "Remove HTML Documentation"
                : "Add HTML Documentation"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setCssComments(!cssComments);
              }}
            >
              {cssComments
                ? "Remove CSS Documentation"
                : "Add CSS Documentation"}
            </Button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setResponsive(!responsive);
            }}
          >
            {responsive ? "Remove Responsiveness" : "Add Responsiveness"}
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setHead(false);
              setCard(false);
              setArticle(false);
              setFooter(false);

              setSections([]);
              setExtend([]);
              sectionsCode(sections);
              setGenerate(true);
            }}
          >
            Generate
          </Button>
        </FormGroup>
      </div>

      {sections.length > 0 ? (
        <Box className="customSection">
          <h1
            style={{
              marginTop: 100,
              textAlign: "center",
            }}
          >
            Sections Customizations
          </h1>

          {sections.map((section) => {
            return (
              <Box className="section_rows">
                <h3
                  style={{
                    textAlign: "center",
                    marginLeft: 10,
                  }}
                >
                  {section}
                </h3>

                <Button
                  onClick={() => {
                    handleCustomeSection(section);
                  }}
                >
                  <UnfoldLessIcon />
                </Button>
              </Box>
            );
          })}
          {extend.map((section) => {
            if (section === "Header") {
              return <Navbar />;
            } else if (section === "Home") {
              return <Home />;
            } else if (section === "Card") {
              return <About />;
            } else if (section === "Article") {
              return <Menu />;
            } else if (section === "Footer") {
              return <Popular />;
            }
          })}
        </Box>
      ) : (
        " "
      )}

      {generate ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Generated Code</h1>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                width: "40%",
                maxWidth: "200px",
                height: "50px",
                margin: "auto",
                marginBottom: "20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#1565C0",
                color: "white",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              <CopyToClipboard text={completeCode}>
                <span>Copy to clipboard</span>
              </CopyToClipboard>
            </button>

            <button
              style={{
                width: "40%",
                maxWidth: "200px",
                height: "50px",
                margin: "auto",
                marginBottom: "20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#1565C0",
                color: "white",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
              onClick={() => {
                handleOpen();
              }}
            >
              Save Template
            </button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Please Enter Template Description
              </Typography>
              <TextField
                sx={{ width: "100%", marginTop: 3 }}
                multiline
                rows={3}
                id="outlined-basic"
                label="Template Description"
                variant="outlined"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ marginTop: 10 }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    saveCode();
                    handleClose();
                  }}
                >
                  Save
                </Button>
                <Feedback
                  style={{ marginTop: 10 }}
                  email={userData}
                  template="FoodSite"
                />
              </div>
            </Box>
          </Modal>
          <div
            style={{
              width: "75%",
              margin: "auto",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            }}
          >
            <SyntaxHighlighter language="html" style={lucario}>
              {completeCode}
            </SyntaxHighlighter>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
