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
  const globalElementsDesign = useSelector((state) => state.E03.globalDesign);
  const navElements = useSelector((state) => state.E03.navbar);
  const navElemDesign = useSelector((state) => state.E03.navbarDesign);
  const PageElemSection = useSelector((state) => state.E03.PageContent);
  const PageElemSectionDesign = useSelector((state) => state.E03.PageDesign);
  const columnElem = useSelector((state) => state.E03.TwoColumnContent);
  const columnDesignElem = useSelector((state) => state.E03.columnDesign);
  const SideBarElem = useSelector((state) => state.E03.SideBar);
  const SideBarDesignElem = useSelector((state) => state.E03.SideBarDesign);
  const footerElem = useSelector((state) => state.E03.footer);
  const footerDesignElem = useSelector((state) => state.E03.footerDesign);

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
  const [nav, setnav] = useState(false);
  const [pages, setPage] = useState(false);
  const [column, setColumn] = useState(false);
  const [SideBars, setSideBar] = useState(false);
  const [footers, setFooter] = useState(false);

  const globalDesign = `
  body {
    body {
        height: 100%;
      }
  
      body {
        margin: 0px;
        padding: 0px;
        background: ${globalElementsDesign.website_background_color};
        font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif;
        font-size: ${globalElementsDesign.secondMainHeading_FontSize}px;
        color: ${globalElementsDesign.secondMainHeading_color};
      }
  
      h1,
      h2,
      h3 {
        margin: 0px;
        padding: 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        color: #101010;
      }
  
      h2 {
        padding-bottom: 30px;
        letter-spacing: ${globalElementsDesign.secondMainHeading_letterSpacing}px;
        font-size: 2em;
      }
      p {
        line-height: ${globalElementsDesign.paragraph_lineHeight}%;
      }

      /* Button style 1 */

      .link-style {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: ${globalElementsDesign.button_backgrounColor};
        text-decoration: none;
        color: #fff;
      }

  `;
  const navbar = `
  <div id="wrapper" class="container">
    <div id="header">
      <div id="logo">
        <h1><a href="#">${navElements.nav_logo}</a></h1>
        <p>
        ${navElements.logoText}<a href="http://templated.co" rel="nofollow">${navElements.logoTextlink}</a>
        </p>
      </div>
      <div id="menu">
        <ul>
          <li class="current_page_item"><a href="#">${navElements.nav_element1}</a></li>
          <li><a href="#">${navElements.nav_element2}</a></li>
          <li><a href="#">${navElements.nav_element3}</a></li>
          <li><a href="#">${navElements.nav_element4}</a></li>
          <li><a href="#">${navElements.nav_element5}</a></li>
        </ul>
      </div>
    </div>
    <div id="banner">
      <img src=${navElements.image} width="1100" height="500" alt="" />
    </div>

  `;
  const navbarDesign = `
  #banner {
    overflow: hidden;
    padding-bottom:  ${navElemDesign.image_paddingBottom}px;
  }
  /** HEADER */

  #header {
    overflow: hidden;
    padding: ${navElemDesign.padding}px;
  }

  #menu a {
    display: block;
    margin-right: 1px;
    padding: ${navElemDesign.menuElements_paddingTop}px 20px 10px 20px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: ${navElemDesign.menuElements_fontSize}px;
    font-weight: ${navElemDesign.menuElements_fontWeight};
    color: ${navElemDesign.menuElements_Color};
    border: none;
  }


  #logo h1 {
    letter-spacing: -2px;
    font-size: 3em;
  }

  #logo h1 a {
    color: ${navElemDesign.logoHeadingColor};
    text-transform: uppercase;
  }

  #logo p {
    margin: 0;
    padding: 0px 0 0 0px;
    color: #8e8e8e;
  }

  #logo p a {
    color: #d6d6d6;
  }

  #logo a {
    border: none;
    background: none;
    text-decoration: none;
    color: #12212f;
  }
  /** MENU */

  #menu {
    float: right;
    width: 700px;
    margin: 0 auto;
    padding: 0;
  }

  #menu ul {
    float: right;
    margin: 0;
    padding: 10px 0px 0px 0px;
    list-style: none;
    line-height: normal;
  }

  #menu li {
    float: left;
    padding: 0px 0px 0px 0px;
  }
  `;
  const PageContent = `
  <div id="page">
  <div id="content">
    <div id="cbox1">
      <h2>${PageElemSection.sectionHeading}</h2>
      <p>
        <img src=${PageElemSection.sectionImage} width="750" height="200" alt="" />
      </p>
      <p>
      ${PageElemSection.paragraph01}
      </p>
      <p>
      ${PageElemSection.paragraph02}
      </p>
      <p><a href="#" class="link-style">${PageElemSection.button}</a></p>
    </div>
  `;
  const PageDesign = `
  /** PAGE */

  #page {
    overflow: hidden;
    padding: ${PageElemSectionDesign.page_paddingTop}px 0px 0px 0px;
    border-top: ${PageElemSectionDesign.page_borderLine_weight}px solid ${PageElemSectionDesign.page_borderLine_color};
  }

  /** CONTENT */

  #content {
    float: ${PageElemSectionDesign.Content_float};
    width: ${PageElemSectionDesign.contentWidth}px;
  }
  `;
  const TwoColumnContent = `
  <div id="two-column">
          <div id="tbox1">
            <h2>${columnElem.column_1_mainHeading}</h2>
            <ul class="style2">
              <li class="first">
                <h3><a href="#">${columnElem.column_1_Heading01}</a></h3>
                <p>
                  <a href="#">${columnElem.column_1_paragraph01}</a>
                </p>
              </li>
              <li>
                <h3><a href="#">${columnElem.column_1_Heading02}</a></h3>
                <p>
                  <a href="#">${columnElem.column_1_paragraph02}</a>
                </p>
              </li>
              <li>
                <h3><a href="#">${columnElem.column_1_Heading03}</a></h3>
                <p>
                  <a href="#">${columnElem.column_1_paragraph03}</a>
                </p>
              </li>
            </ul>
          </div>
          <div id="tbox2">
            <h2>${columnElem.column_2_mainHeading}</h2>
            <ul class="style2">
              <li class="first">
                <h3><a href="#">${columnElem.column_2_Heading01}</a></h3>
                <p>
                  <a href="#">${columnElem.column_2_paragraph01}</a>
                </p>
              </li>
              <li>
                <h3><a href="#">${columnElem.column_2_Heading01}</a></h3>
                <p>
                  <a href="#">${columnElem.column_2_paragraph02}</a>
                </p>
              </li>
              <li>
                <h3><a href="#">${columnElem.column_2_Heading01}</a></h3>
                <p>
                  <a href="#">${columnElem.column_2_paragraph03}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
  `;
  const columnDesign = `
  ul.style2 h3 a {
    color: ${columnDesignElem.heading2_color};
  }

  /** TWO COLUMN */

  #two-column {
    overflow: hidden;
    padding: 40px 0px;
    border-top: 1px solid #dedede;
  }

  #two-column h2 {
    font-size: 1.5em;
  }

  #two-column #tbox1 {
    float: ${columnDesignElem.column_1_float};
    width: ${columnDesignElem.column_1_width}px;
  }

  #two-column #tbox2 {
    float: ${columnDesignElem.column_2_float};
    width: ${columnDesignElem.column_2_width}px;
  }
  `;
  const SideBar = `
  <div id="sidebar">
  <div id="box1">
    <h2>${SideBarElem.box1_heading}</h2>
    <ul class="style1">
      <li class="first">
        <a href="#">${SideBarElem.Link01}</a>
      </li>
      <li><a href="#">${SideBarElem.Link02}</a></li>
      <li><a href="#">${SideBarElem.Link03}</a></li>
      <li><a href="#">${SideBarElem.Link04}</a></li>
      <li><a href="#">${SideBarElem.Link05}</a></li>
      <li><a href="#">${SideBarElem.Link06}</a></li>
    </ul>
    <p><a href="#" class="link-style">Read More</a></p>
  </div>
  <div id="box2">
    <h2>${SideBarElem.box2_heading}</h2>
    <ul class="style3">
      <li class="first">
        <img src=${SideBarElem._01_image1} width="78" height="78" alt="" />
        <p>
        ${SideBarElem._01_para01}
        </p>
        <pclass="posted"> ${SideBarElem._01_para02}</p>
      </li>
      <li>
        <img src=${SideBarElem._02_image1} width="78" height="78" alt="" />
        <p>
        ${SideBarElem._02_para01}
        </p>
        <p class="posted">${SideBarElem._02_para02}</p>
      </li>
      <li>
        <img src=${SideBarElem._03_image1} width="78" height="78" alt="" />
        <p>
        ${SideBarElem._03_para01}
        </p>
        <p class="posted">${SideBarElem._03_para02}</p>
      </li>
    </ul>
    <p><a href="#" class="link-style">${SideBarElem.button}</a></p>
  </div>
</div>
  `;
  const sideBarDesign = `
  ul.style1 li {
    padding: 10px 0px 15px 0px;
    border-top: 1px solid #72716f;
  }

  /** SIDEBAR */

  #sidebar {
    float: ${SideBarDesignElem.sidebar_float};
    width: ${SideBarDesignElem.sidebar_width}px;
  }

  #sidebar #box1 {
    margin-bottom: ${SideBarDesignElem.sidebar_box1_marginBotom}px;
  }

  `;
  const footer = `
  <div id="footer">
      <p>
      ${footerElem.copyRight}

      </p>
    </div>
  
  `;
  const footerDesign = `
  #footer {
    overflow: ${footerDesignElem.overflow};
    padding: ${footerDesignElem.footer_paddingTop_Bottom}px 0px;
    border-top: ${footerDesignElem.footer_borderLine_weight}px solid ${footerDesignElem.footer_borderLine_color};
  }

  #footer p {
    text-align: center;
    font-size: ${footerDesignElem.footer_contentFontSize}px;
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

  const sectionsCode = (sections) => {
    console.log("sections", sections);
    sections.forEach((section) => {
      if (section == "Navbar") {
        setnav(true);
      } else if (section == "PageContent") {
        setPage(true);
      } else if (section == "ColumnContent") {
        setColumn(true);
      } else if (section == "Sidebar") {
        setSideBar(true);
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
                  checked={sections.includes("Navbar")}
                  onChange={handleSectionsChange}
                />
              }
              label="Navbar"
              value="Navbar"
            />
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={sections.includes("PageContent")}
                  onChange={handleSectionsChange}
                />
              }
              label="PageContent"
              value="PageContent"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes("ColumnContent")}
                  onChange={handleSectionsChange}
                />
              }
              label="ColumnContent"
              value="ColumnContent"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes("Sidebar")}
                  onChange={handleSectionsChange}
                />
              }
              label="Sidebar"
              value="Sidebar"
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
              setnav(false);
              setPage(false);
              setColumn(false);
              setSideBar(false);
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
            if (section === "Navbar") {
              return <Navbar />;
            } else if (section === "PageContent") {
              return <Home />;
            } else if (section === "ColumnContent") {
              return <About />;
            } else if (section === "Sidebar") {
              return <Menu />;
            } else if (section === "Footer") {
              return <Order />;
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
