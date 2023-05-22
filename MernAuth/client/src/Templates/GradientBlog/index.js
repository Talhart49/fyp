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

  let globalDesignComments = `
  /*BASIC*/

  /* 
html, body: These selectors target the html and body elements, respectively.

height, width: These properties control the height and width of an element.

margin, padding: These properties determine the spacing around an element.

h1, h2: These selectors target the h1 and h2 heading elements, respectively.

color: This property sets the color of the text.

font-family: This property defines the font family to be used for the text.

text-align: This property controls the horizontal alignment of the text.

font-size: This property sets the size of the font.

a:link, a:visited: These selectors target hyperlinks that haven't been visited (a:link) or have been visited (a:visited).

text-decoration: This property controls the decoration applied to text, such as underlining.

a:hover, a:active: These selectors target hyperlinks when the mouse pointer is over the link (a:hover) or when the link is being activated (a:active).
*/
  `;
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

  let headerComments = `
  <!-- Header -->
	<!--  
Header Section:

The header section contains a menu with links to different sections of the page.

The menu is contained within a <div> element with the id="change_class" and the classes flex_container and section.

The menu items are represented by <div> elements with the class flex_item, menu_item, and menu_item_outside.

Each menu item contains an <a> tag with a corresponding <p> tag for the link text.
-->
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

  let headerDesignComments = `

  /*HEADER*/
  /* 
The CSS code contains styles for the header section of a webpage. Here's an explanation of the variables used in the code:

.header_quote: This selector targets the elements with the class "header_quote".

border-radius: : This property sets the border radius of the elements to create rounded corners with a radius of 5 pixels.

padding: : This property adds 20 pixels of padding to the elements, creating space around the content inside.

.header_section: This selector targets the elements with the class "header_section".

background-image: This property sets the background image of the elements to the specified URL, in this case, ". It will be used as the background for the header section.

background-size: cover;: This property scales the background image to cover the entire background area, ensuring it fills the entire container without distorting or cropping the image.

These styles are used to create a visually appealing header section with a rounded quote container and a background image that covers the entire header area.
*/

	/*MENU*/
		/* 
.menu_section: This class is applied to the menu section element. It is used to style the menu section with the following properties:

position: fixed;: Sets the position of the menu section as fixed, which means it will remain in a fixed position even when the user scrolls the page.

z-index: : Specifies the stacking order of the menu section relative to other elements on the page. A higher z-index value means the element will appear in front of elements with lower z-index values.

top: Sets the top position of the menu section to 0 pixels, ensuring it is positioned at the top of the page.

height: : Sets the height of the menu section to 50 pixels.

width: : Sets the width of the menu section to 100% of its parent container.

padding-left: : Applies left padding of 50 pixels to the menu section. (Note: There is a comment indicating that this is a workaround for a Flexbox bug that doesn't render padding-right.)

background-color: Sets the background color of the menu section to user color.

box-shadow: Applies a box shadow effect to the menu section, creating a subtle shadow around it. The values 9px 10px 39px -2px specify the horizontal and vertical offsets, blur radius, and spread radius of the shadow,  defines the color and opacity of the shadow.

In summary, the .menu_section class is responsible for styling the menu section element by fixing its position at the top of the page, setting its dimensions and background color, applying padding, and adding a box shadow effect for a visually appealing appearance.

*/

/*About*/
/* 
The CSS code  contains styles for the "About" section of a webpage. Here's an explanation of the variables used in the code:

.second_section: This selector targets the elements with the class "second_section".

min-height:  This property sets the minimum height of the elements to pixels. This ensures that the section has a minimum height even if its content is smaller.

height: auto !important;: This property sets the height of the elements to auto. The use of !important ensures that this height value takes precedence over any other conflicting height rules.

background: repeating-linear-gradient This property sets a repeating linear gradient background for the elements. The gradient starts with a white color, followed by white again for the next 3 pixels, then transitions to a transparent color with a slight blue tint  for the next 3 pixels, and finally becomes fully transparent for the next 5 pixels. This pattern repeats horizontally and diagonally at a 45-degree angle.

These styles are used to create an "About" section with a minimum height of 700 pixels. The background is a repeating linear gradient that creates a subtle pattern of alternating white and transparent lines with a slight blue tint.
*/

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

  let teamComments = `
  <!--  Team -->
	<!-- 
Team Section:

This section represents the team section of the page.

It is contained within a <div> element with the class section and page.

The section has a unique identifier name="team" for navigation purposes.

The content of the section is contained within a <div> element with the classes section_container, flex_container, and flex_center.

The section includes multiple team member features represented by <div> elements with the classes feature, flex_feature_item, and feature1, feature2, etc.

Each team member feature includes a <div> for the feature image, <h2> for the team member's name, and <p> for the team member's description.

Each team member feature is wrapped in an <a> tag with a unique identifier href="#link1", href="#link2", etc.
 -->
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

  let teamDesignComments = `
  /*Teams*/
  /* 
The CSS code  contains styles for the "Teams" section of a webpage. Here's an explanation of the variables used in the code:

.feature: This selector targets the elements with the class "feature" within the "Teams" section.

min-width: px;: This property sets the minimum width of the elements to  pixels.

max-width: px;: This property sets the maximum width of the elements to  pixels.

height: px;: This property sets the height of the elements to  pixels.

margin-right: px;, margin-left: px;, margin-bottom:px;: These properties set the margin values for the right, left, and bottom sides of the elements, creating spacing between them and neighboring elements.

padding-top: px;: This property sets the padding value for the top side of the elements.

color: This property sets the text color of the elements.

filter: This property applies a grayscale filter to the elements, making them appear completely.

-webkit-box-shadow:These properties apply a box shadow to the elements, creating a shadow effect with specific dimensions and opacity.

.feature h2: This selector targets the h2 elements within the elements with the class "feature".

line-height: 0;: This property sets the line height of the h2 elements to 0, effectively removing any vertical space between lines of text.

.feature p: This selector targets the p elements within the elements with the class "feature".

text-align: center;: This property aligns the text within the p elements to the center.

margin: auto;: This property sets the margin values of the p elements to auto, centering them horizontally within their parent elements.

max-width:: This property sets the maximum width of the p elements to 0 pixels.

.feature .feature_image: This selector targets the elements with the class "feature_image" within the elements with the class "feature".

width:,height: These properties set the width and height of the elements to pixels, creating square-shaped elements.

margin: auto;: This property sets the margin values of the elements to auto, centering them horizontally within their parent elements.

border-radius:This property sets the border radius of the elements to 200 pixels, creating circular-shaped elements.

background-size: cover;: This property scales the background image of the elements to cover the entire element area, ensuring it fills the circular shape.

.feature1 .feature_image, .feature2 .feature_image, .feature3 .feature_image, .feature4 .feature_image, .feature5 .feature_image: These selectors target specific elements with different classes ("feature1", "feature2", etc.)
*/
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

  let articlesComments = `
  <!-- Articles -->
	<!-- 
articles Section:

This section represents the articles section of the page.

Similar to the team section, it is contained within a <div> element with the classes section, page, and third_section.

The section has a unique identifier name="contact" for navigation purposes.

The content of the section is contained within a <div> element with the classes section_container, flex_container, and flex_center.

The section includes multiple articles represented by <div> elements with the classes feature, offer, flex_feature_item, and offer1, offer2, etc.

Each article includes an <h2> tag for the article title, followed by multiple <p> tags for the article content.

Each article is wrapped in an <a> tag with a unique identifier href="#link6", href="#link7", etc.
 -->
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

  let articlesDesignComments = `
  /*Offer*/
  /* 
For the "Offer" section:

.offer: This selector targets the elements with the class "offer" within the section.

min-width: This property sets the minimum width of the elements.

max-width: This property sets the maximum width of the elements.

background-color: This property sets the background color of the elements.

.offer h2: This selector targets the h2 elements within the elements with the class "offer".

margin-bottom: This property sets the bottom margin of the h2 elements.

.offer p: This selector targets the p elements within the elements with the class "offer".

max-width: This property sets the maximum width of the p elements.
  */

/*Articles*/
/*  
For the "Articles" section:

.third_section: This selector targets the elements with the class "third_section" which represents the section.

background-image: This property sets the background image of the section to the specified image URL.

background-size: This property sets the size of the background image within the section.

These variables are placeholders for specific values that you can provide based on your design requirements.

By assigning appropriate values to these variables, you can customize the appearance of the "Offer" section and the "Articles" section on your webpage.
*/
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

  let FooterComments = `
  <!-- Footer -->
	<!-- 
Footer Section:

This section represents the footer section of the page.

It is contained within a <div> element with the class section and footer_section.

The footer text is wrapped in an <a> tag linking to "https://www.calmarsolutions.ch".

The footer text itself is contained within a <p> tag with the class footer_text.
 -->
  `;
  const Footer = `
  <!-- Footer -->
  <div class="section footer_section">
      <a href="">
          <p class="footer_text">${footerElem.footerText}</p>
      </a>
  </div>
  `;

  let footerDesignComments = `
  
  /*FOOTER*/
  /* 
The code  contains CSS styles for the footer section of a webpage. Here's an explanation of the CSS properties used:

.footer_section: This selector targets the elements with the class "footer_section" and applies the following styles:

height: This property sets the height of the elements with the class "footer_section" to the specified value. In this case, the height is set to 30 pixels.

.footer_text: This selector targets the elements with the class "footer_text" and applies the following styles:

margin-top: This property sets the top margin of the elements with the class "footer_text" to the specified value. In this case, it is set to 10 pixels.

margin-bottom: This property sets the bottom margin of the elements with the class "footer_text" to the specified value. In this case, it is set to 30 pixels.

text-align: This property sets the horizontal alignment of the text within the elements with the class "footer_text" to the specified value. In this case, it is set to center.

font-weight: This property sets the weight (boldness) of the font within the elements with the class "footer_text" to the specified value. In this case, it is set to 600, which represents a bold font weight.

These styles define the height and text alignment for the footer section of the webpage, along with the margins and font weight for the text within the footer. You can customize these styles to match the desired design and layout of your footer.



*/
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

  let responsiveDesignComments = `
  /* 
  The code snippet  is a CSS media query. It targets screens with a maximum width of 720 pixels. Within this media query, the .menu_section class is modified with the following properties:
  
  width:: This sets the width of the .menu_section element to occupy 85% of the viewport width. The vw unit represents a percentage of the viewport width.
  
  border-right: 15vw solid white;: This applies a right border to the .menu_section element. The border has a width of 15% of the viewport width (15vw) and a solid white color.
  
  In summary, when the screen width is 720 pixels or less, the menu section (.menu_section) will have a width of 85% of the viewport width and a right border with a width of 15% of the viewport width, creating a visual effect.
  */

  /* 
The CSS code includes styles for a menu dropdown that adapts to different screen sizes using media queries. Here's an explanation of the variables used in the code:

@media screen and (min-width: 720px): This media query targets screens with a minimum width of 720 pixels.

.dropdown-content: This selector targets the elements with the class "dropdown-content".

.dropdown: This selector targets the elements with the class "dropdown".

display: none;: This property hides the elements targeted by the selectors above.

@media screen and (max-width: 719px): This media query targets screens with a maximum width of 719 pixels.

position: absolute;: This property positions the elements absolutely, relative to their nearest positioned ancestor.

background-color: white;: This property sets the background color of the elements to white.

padding: 5px;: This property sets the padding (inner spacing) of the elements to 5 pixels.

z-index:: This property specifies the stack order of the elements.

left: : This property positions the elements to the left edge of their containing element.

.dropdown:hover .dropdown-content: This selector targets the elements with the class "dropdown-content" when their parent element with the class "dropdown" is being hovered.

display: block;: This property displays the elements targeted by the selector above.

.menu_item_inside: This selector targets the elements with the class "menu_item_inside".

-webkit-box-shadow, -moz-box-shadow, box-shadow: These properties add box shadow effects to the elements.

background-color: transparent;: This property sets the background color of the elements to transparent.

.menu_item_outside: This selector targets the elements with the class "menu_item_outside".

display: none;: This property hides the elements targeted by the selector above.

These styles define the behavior and appearance of the menu dropdown for different screen sizes. When the screen width is less than or equal to 719 pixels, the dropdown content is displayed when hovering over the dropdown element. The menu items inside the dropdown have specific styles applied, and the menu items outside the dropdown are hidden. For screens wider than 720 pixels, both the dropdown content and dropdown elements are hidden.
*/

/* 
The code  contains media queries that target specific screen widths and apply different styles based on those widths. Here's an explanation of the CSS properties used without providing their specific values:

For the media query (max-width: 1619px):

.gradient_third_section: This selector targets the elements with the class "gradient_third_section" and applies the following styles within this media query:

height: This property sets the height of the elements with the class "gradient_third_section" to the specified value.
For the media query (max-width: 1079px):

.gradient_third_section: This selector targets the elements with the class "gradient_third_section" and applies the following styles within this media query:

height: This property sets the height of the elements with the class "gradient_third_section" to the specified value.
For the media query (max-width: 417px):

.gradient_header_section: This selector targets the elements with the class "gradient_header_section" and applies the following styles within this media query:

height: This property sets the height of the elements with the class "gradient_header_section" to the specified value.
For the media query (max-width: 367px):

.gradient_header_section: This selector targets the elements with the class "gradient_header_section" and applies the following styles within this media query:

height: This property sets the height of the elements with the class "gradient_header_section" to the specified value.
These media queries allow you to define specific styles for different screen widths, ensuring that your webpage's layout and design are responsive and adapt to various devices and screen sizes. The height values provided in the code represent placeholders, and you can customize them to fit your design requirements.

*/
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
    
  <!-- 
  Additional Elements:
  
  The page also includes an anchor tag <a name="top"></a> at the beginning, which serves as a target for the "Home" link in the menu to scroll to the top of the page.
  
  There is a <div> element with the id="map" which represents a map section.
  
  Overall, the page structure follows a section-based layout with each section having its own content and unique identifiers for navigation purposes.
   -->
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

    /*GENERAL*/
		/* 
.section .header_text: This selector targets elements with the class "header_text" that are descendants of elements with the class "section".

.up_button: This selector targets elements with the class "up_button".

position: This property specifies the positioning method for an element.

right, bottom: These properties control the positioning of an element from the right and bottom edges, respectively.

width, height: These properties determine the width and height of an element.

z-index: This property specifies the stack order of an element.

border: This property sets the border style of an element.

border-radius: This property defines the border radius (rounded corners) of an element.

transition: This property specifies the CSS properties to be transitioned and the duration of the transition effect.

transform: This property applies a 2D or 3D transformation to an element.

box-shadow: This property adds shadow effects to an element.

font-family: This property sets the font family for text.

font-weight: This property defines the thickness or boldness of the text.

text-align: This property controls the horizontal alignment of the text.

.arrow_image: This selector targets elements with the class "arrow_image".

rotate: This property specifies the rotation angle for an element.

.page: This selector targets elements with the class "page".

min-height: This property sets the minimum height of an element.

.gradient, .gradient_red_yellow, .gradient_red_blue, .gradient_green_yellow: These selectors target elements with the respective class names.

background: This property sets the background color or gradient of an element.

-webkit-linear-gradient, -o-linear-gradient, -moz-linear-gradient, linear-gradient: These properties define gradients using different syntaxes for different browsers.

-webkit-background-clip: This property determines the painting area of the background.

-webkit-text-fill-color: This property sets the color of the text content.

.text_grad_purple_yellow, .text_grad_green_yellow: These selectors target elements with the respective class names.

padding-top: This property sets the top padding of an element.

min-width: This property sets the minimum width of an element.

These are the main variables and their properties used in the CSS code
*/
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

      /*FLEX*/
		/* 
The CSS code  contains styles for a flex container and its child elements. Here's an explanation of the variables used in the code:

.flex_container: This selector targets the elements with the class "flex_container".

display: flex;: This property establishes a flex container and enables a flex context for its direct children.

flex-wrap: wrap;: This property allows flex items to wrap onto multiple lines if needed.

align-items: center;: This property aligns flex items along the cross-axis (vertically) and centers them within the flex container.

.flex_header_container: This selector targets the elements with the class "flex_header_container".

justify-content: center;: This property aligns flex items along the main axis (horizontally) and centers them within the flex container.

.flex_header_item: This selector targets the elements with the class "flex_header_item".

min-width: 350px;: This property sets the minimum width of the elements to 350 pixels.

max-width: 600px;: This property sets the maximum width of the elements to 600 pixels.

z-index: 50;: This property specifies the stack order of the elements.

.flex_header_item h2: This selector targets the h2 elements within the elements with the class "flex_header_item".

font-family: "Rubik", cursive;: This property sets the font family of the h2 elements to "Rubik" or a cursive font.

.flex_feature_item: This selector targets the elements with the class "flex_feature_item".

-webkit-transition: -webkit-transform 0.1s;: This property specifies the transition effect for the -webkit-transform property, allowing smooth transformations over a duration of 0.1 seconds. This is specific to Safari browsers.

transition: transform 0.1s;: This property specifies the transition effect for the transform property, allowing smooth transformations over a duration of 0.1 seconds.

-webkit-transform: scale(1);, -ms-transform: scale(1);, transform: scale(1);: These properties set the initial scale of the elements to 1.

.flex_feature_item:hover: This selector targets the elements with the class "flex_feature_item" when they are being hovered.

-webkit-transform: scale(1.1);, -ms-transform: scale(1.1);, transform: scale(1.1);: These properties scale up the elements to 1.1 times their original size when they are being hovered.

.flex_center: This selector targets the elements with the class "flex_center".

justify-content: center;: This property aligns flex items along the main axis (horizontally) and centers them within the flex container.

These styles are used to create flexible layouts, center elements, and apply transition effects to specific elements within a flex container.
*/

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

      ${cssComments ? globalDesignComments : ''}
      ${head ? globalDesign : ''}

      ${cssComments && head ? headerDesignComments : ' '}
      ${head ? headerDesign : ''}

      ${cssComments && cards ? teamDesignComments : ' '}
      ${cards ? teamDesign : ''}

      ${cssComments && article ? articlesDesignComments : ' '}
      ${article ? articlesDesign : ''}

      ${cssComments && footer ? footerDesignComments : ' '}
      ${footer ? footerDesign : ''}

      ${cssComments && responsive ? responsiveDesignComments : ' '}
      ${responsive ? Responsiveness : ''}

    </style>
  </head>
  <body>

  ${htmlComments && head ? headerComments : ' '}
    ${head ? header : ''}

    ${htmlComments && cards ? teamComments : ' '}
    ${cards ? team : ''}

    ${htmlComments && article ? articlesComments : ' '}
    ${article ? articles : ''}

    ${htmlComments && footer ? FooterComments : ' '}
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
