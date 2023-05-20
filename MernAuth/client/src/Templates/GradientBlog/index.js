import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editFinalCode } from '../../redux/Blog02_redux/B02_slice';

import Header from './Header';
import Card from './Card';
import Article from './Article';
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
  const globalElementsDesign = useSelector((state) => state.B02.rootTheme);
  const headerElements = useSelector((state) => state.B02.header);
  const headerElemDesign = useSelector((state) => state.B02.headerDesign);
  const CardsSection = useSelector((state) => state.B02.team);
  const CardSectionDesign = useSelector((state) => state.B02.teamDesign);
  const articlesElem = useSelector((state) => state.B02.articles);
  const articlesDesignElem = useSelector((state) => state.B02.articlesDesign);
  const footerElem = useSelector((state) => state.B02.footer);
  const footerDesignElem = useSelector((state) => state.B02.footerDesign);

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
  <div class="flex_item branding"><p></p></div>

  <div class="flex_item menu_item dropdown">
		<p>Menu</p>
		<div class="dropdown-content">
			<div class="menu_item menu_item_inside"><a href="#top"><p>Home</p></a></div>
			<a href=""><div class="menu_item menu_item_inside"><a href="#team"><p>Team</p></a></div>
			<a href=""><div class="menu_item menu_item_inside"><a href="#contact"><p>Offers</p></a></div>
		</div>
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
              <h1>${CardsSection.about_header}</h1>
          </div>
          <a href="#link1">
              <div class="feature flex_feature_item feature1">
                  <div class="feature_image"></div>
                  <h2>${CardsSection.card_1_name}</h2>
                  <p>${CardsSection.card_1_paragraph}</p>
              </div>
          </a>
          <a href="#link2">
               <div class="feature flex_feature_item feature2">
                  <div class="feature_image"></div>
                  <h2>${CardsSection.card_2_name}</h2>
                  <p>${CardsSection.card_2_paragraph}</p>
              </div>
          </a>
          <a href="#link3">
               <div class="feature flex_feature_item feature3">
          <div class="feature_image"></div>
          <h2>${CardsSection.card_3_name}</h2>
          <p>${CardsSection.card_3_paragraph}</p>
             </div>
          </a>
          <a href="#link4">
          <div class="feature flex_feature_item feature4">
          <div class="feature_image"></div>
          <h2>${CardsSection.card_4_name}</h2>
          <p>${CardsSection.card_4_paragraph}</p>
      </div>
          </a>
          <a href="#link5">
          <div class="feature flex_feature_item feature5">
          <div class="feature_image"></div>
          <h2>${CardsSection.card_5_name}</h2>
          <p>${CardsSection.card_5_paragraph}</p>
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

  <div id="map"></div>


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
      <a href="">
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

  const jsCode = `
    
  
<script >
//3 Scripts: SMOOTH SCROLL, GOOGLE MAPS, CHANGE CLASS

//SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

//CHANGE CSS CLASS IN HTML
$(document).scroll(function() {
var swap_class = document.getElementById("change_class");

   if($(window).scrollTop() === 0) {
     swap_class.classList.remove("menu_color_change");
   } else {
       swap_class.classList.add("menu_color_change");
     }
});

//GOOGLE MAPS
      function initMap() {
      var MargaretRiver = {lat: -33.9536, lng: 115.07391};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: MargaretRiver,
        styles: [
{
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#ebe3cd"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#523735"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#f5f1e6"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#c9b2a6"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#dcd2be"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#ae9e90"
    }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dfd2ae"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dfd2ae"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#93817c"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#a5b076"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#447530"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#f5f1e6"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#fdfcf8"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#f8c967"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#e9bc62"
    }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e98d58"
    }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#db8555"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#806b63"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dfd2ae"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#8f7d77"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#ebe3cd"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dfd2ae"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#b9d3c2"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#92998d"
    }
  ]
}
]
      });
      var marker = new google.maps.Marker({
        position: MargaretRiver,
        map: map
      });
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
      if (section == 'Header') {
        setHead(true);
      } else if (section == 'Cards') {
        setCard(true);
      } else if (section == 'Article') {
        setArticle(true);
      } else if (section == 'Footer') {
        setFooter(true);
      }
    });
    let code = `
    <!DOCTYPE html>
<html lang="de-CH">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico|Rubik"
      rel="stylesheet"
    />
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <meta
      name="Author"
      content="Calmar Solutions Schweiz - Erin McGowan - www.calmarsolutions.ch"
    />
    <meta name="Copyright" content="Calmar Solutions" />
    <meta name="Credit" content="https://thenounproject.com/" />
    <meta name="description" content="Margs Surfcamp Margaret River" />
    <meta
      name="keywords"
      content="Surfing, Camping, Margaret River, Western Australia"
    />
    <title> Gradient Blog </title>

    <style>
      a:link,
      a:visited {
        color: #111111;
        text-decoration: none;
      }

      a:hover,
      a:active {
        color: #001f3f;
      }

      .section .header_text {
        z-index: 1;
      }
      .up_button {
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 50px;
        height: 50px;
        z-index: 200;

        border: 2px solid #85144b;
        border-radius: 50px;

        -webkit-transition: -webkit-transform 0.1s; /* Safari */
        transition: transform 0.1s;

        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);

        -webkit-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);
        box-shadow: 9px 10px 39px -2px rgba(0, 0, 0, 0.3);

        font-family: 'Rubik', cursive;
        font-weight: bold;
        text-align: center;
      }

      .arrow_image {
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 100px;
        height: 100px;
        z-index: 200;

        /*transform & rotate*/
        -webkit-transition: -webkit-transform 0.1s; /* Safari */
        transition: transform 0.1s;

        -webkit-transform: scale(1) rotate(-90deg);
        -ms-transform: scale(1) rotate(-90deg);
        transform: scale(1) rotate(-90deg);
      }

      .arrow_image:hover {
        -webkit-transform: scale(1.3) rotate(-90deg);
        -ms-transform: scale(1.3) rotate(-90deg);
        transform: scale(1.3) rotate(-90deg);
      }

      .page {
        width: auto;
        min-height: 800px;
      }
      .gradient {
        position: absolute;
        width: 100%;
        height: 800px;
        padding: 0;
        margin: 0;
        opacity: 0.5;
        filter: alpha(opacity=50);
      }
      .gradient_red_yellow {
        background: #ff4136; /* For browsers that do not support gradients */
        background: -webkit-linear-gradient(
          65deg,
          #ff4136,
          #ffdc00
        ); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(
          65deg,
          #ff4136,
          #ffdc00
        ); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(
          65deg,
          #ff4136,
          #ffdc00
        ); /* For Firefox 3.6 to 15 */
        background: linear-gradient(
          65deg,
          #ff4136,
          #ffdc00
        ); /* Standard syntax */
      }

      .gradient_red_blue {
        background: #85144b; /* For browsers that do not support gradients */
        background: -webkit-linear-gradient(
          65deg,
          #85144b,
          #7fdbff
        ); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(
          65deg,
          #85144b,
          #7fdbff
        ); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(
          65deg,
          #85144b,
          #7fdbff
        ); /* For Firefox 3.6 to 15 */
        background: linear-gradient(
          65deg,
          #85144b,
          #7fdbff
        ); /* Standard syntax */
      }

      .gradient_green_yellow {
        background: #ff4136; /* For browsers that do not support gradients */
        background: -webkit-linear-gradient(
          65deg,
          #3d9970,
          #ffdc00
        ); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(
          65deg,
          #3d9970,
          #ffdc00
        ); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(
          65deg,
          #3d9970,
          #ffdc00
        ); /* For Firefox 3.6 to 15 */
        background: linear-gradient(
          65deg,
          #3d9970,
          #ffdc00
        ); /* Standard syntax */
      }

      .text_grad_purple_yellow {
        background: -webkit-linear-gradient(65deg, #85144b, #ffdc00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .text_grad_green_yellow {
        background: -webkit-linear-gradient(65deg, #3d9970, #ffdc00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .header_text {
        padding-top: 100px;
        min-width: 100%;
      }
      /*GOOGLE MAPS*/
      #map {
        height: 400px;
        width: 100%;
        background-color: white;

        border-top: 1px solid white;
      }

      @media screen and (max-width: 720px) {
      }
      .menu_section {
        font-family: 'Rubik', sans-serif;
      }

      .branding p {
        font-size: 50px;
        text-align: center;
        line-height: 0px;
      }

      .menu_item:hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);

        z-index: 150;
      }
      .section_container {
        margin-right: auto;
        margin-left: auto;
      }
      .menu_color_change {
        background-color: rgba(255, 255, 255, 0.5);
      }

      .flex_container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .flex_header_container {
        justify-content: center;
      }
      .flex_header_item {
        min-width: 350px;
        max-width: 600px;
        z-index: 50;
      }
      .flex_header_item h2 {
        font-family: 'Rubik', cursive;
      }
      .flex_feature_item {
        -webkit-transition: -webkit-transform 0.1s; /* Safari */
        transition: transform 0.1s;

        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .flex_feature_item:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
      }
      .flex_center {
        justify-content: center;
      }

      .header_quote {
        border-radius: 5px;
        padding: 20px;
      }

      .second_section {
        min-height: 700px;
        height: auto !important;
        background: repeating-linear-gradient(
          45deg,
          white,
          white 3px,
          rgba(0, 116, 217, 0.01) 3px,
          rgba(0, 116, 217, 0.01) 5px
        );
      }
      ${head ? globalDesign : ''}
      ${head ? headerDesign : ''}
      ${cards ? teamDesign : ''}
      ${article ? articlesDesign : ''}
      ${footer ? footerDesign : ''}

      ${responsive ? Responsiveness : ''}

    </style>
  </head>
  <body>
    ${head ? header : ''}
    ${cards ? team : ''}
    ${article ? articles : ''}
    ${footer ? Footer : ''}


    <!--SCRIPT SECTION-->
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBE-AatCnNmEzkMZL2Rmqu87zjmDqpU3vA&callback=initMap"
    ></script>

    ${jsCode}
  </body>
</html>

    `;

    setCompleteCode(code);
    console.log(code);
    dispatch(editFinalCode(code));
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
              navigate('/dashboard/Templates/Gradient/GB');
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
                  checked={sections.includes('Cards')}
                  onChange={handleSectionsChange}
                />
              }
              label='Cards'
              value='Cards'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Article')}
                  onChange={handleSectionsChange}
                />
              }
              label='Article'
              value='Article'
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
              setCard(false);
              setArticle(false);
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
              return <Header />;
            } else if (section === 'Cards') {
              return <Card />;
            } else if (section === 'Article') {
              return <Article />;
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
                    template='Gradient Blog'
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
