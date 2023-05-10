import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editFinalCode } from '../../redux/Blog01_redux/Blog01_Slice';
import Navbar from './Navbar';
import About from './About';
import Articles from './Articles';
import BlogPost from './BlogPost';
import Contact from './Contact';
import Footer from './Footer';
import RecommendedBlogs from './RecommendedBlogs';

import Feedback from '../../parts/Feedback/Index';
import '../style.css';

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
  borderRadius: '10px',
  height: '50vh',
  overflow: 'scroll',
};
function Index() {
  const navElements = useSelector((state) => state.B01.navbar);
  const aboutElements = useSelector((state) => state.B01.about);
  const articlesElements = useSelector((state) => state.B01.articles);
  const blogPostElements = useSelector((state) => state.B01.blogPost);
  const recomendedBlogsElements = useSelector(
    (state) => state.B01.recomendedBlogs
  );
  const contactElements = useSelector((state) => state.B01.contact);
  const footerElements = useSelector((state) => state.B01.footer);

  const rootElemTheme = useSelector((state) => state.B01.rootTheme);
  const generalElemDesign = useSelector((state) => state.B01.generalDesign);
  const navElemDesign = useSelector((state) => state.B01.navDesign);
  const aboutElemDesign = useSelector((state) => state.B01.aboutDesign);
  const articlesElemDesign = useSelector((state) => state.B01.articlesDesign);
  const blogPostElemDesign = useSelector((state) => state.B01.blogPostDesign);
  const contactElemDesign = useSelector((state) => state.B01.contactDesign);
  const footerElemDesign = useSelector((state) => state.B01.footerDesign);

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

  const [htmlComments, setHtmlComments] = useState(false);
  const [cssComments, setCssComments] = useState(false);

  const [completeCode, setCompleteCode] = useState();

  const [nav, setNav] = useState(false);
  const [about, setAbout] = useState(false);
  const [articles, setArticles] = useState(false);
  const [blogPost, setBlogPost] = useState(false);
  const [recomendedBlogs, setRecomendedBlogs] = useState(false);
  const [contact, setContact] = useState(false);
  const [footer, setFooter] = useState(false);

  const [responsive, setResponsive] = useState(false);

  let navbarCode = `

  <nav class="navigation max-width-1 m-auto">
      <div class="nav-left">
        <a href="/">
          <span
            ><img src="${navElements.logo}" width="94px" alt=""
          /></span>
        </a>
        <ul>
          <li><a href="/">${navElements.nav_element1}</a></li>
          <li><a href="#about">${navElements.nav_element2}</a></li>
          <li><a href="#contact">${navElements.nav_element3}</a></li>
        </ul>
      </div>
      <div class="nav-right">
        <form action="" method="get">
          <input
            class="form-input"
            type="text"
            name="query"
            placeholder="${navElements.searchText}"
          />
          <button class="btn">Search</button>
        </form>
      </div>
    </nav>
    <div class="max-width-1 m-auto">
      <hr />
    </div>
    `;
  let navbarDesign = `
  
  :root {
    --main-bg-color: ${rootElemTheme.main_bg_color};
    --font1: '${rootElemTheme.font1}', cursive;
    --font2: '${rootElemTheme.font2}', sans-serif;
  }

  .center {
    text-align: center;
  }

  .font1 {
    font-family: var(--font1);
  }
  .font2 {
    font-family: var(--font2);
  }
  .max-width-1 {
    max-width: ${generalElemDesign.max_width1}vw;
  }

  .max-width-2 {
    max-width: ${generalElemDesign.max_width2}vw;
  }

  .m-auto {
    margin: auto;
  }

  .mx-1 {
    margin-left: ${generalElemDesign.margin_left}px;
    margin-right: ${generalElemDesign.margin_right}px;
  }

  .my-2 {
    margin-top: ${generalElemDesign.margin_top}px;
    margin-bottom: ${generalElemDesign.margin_bottom}px;
  }

  .btn {
    padding: 0px 20px;
    padding-top: 3px;
    border: 2px solid black;
    border-radius: 6px;
    font-family: var(--font1);
    font-size: ${generalElemDesign.buttonFontSize}px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover {
    color: ${generalElemDesign.buttonHoverColor};
    background: var(--main-bg-color);
  }

  .form-input {
    padding: 0px 5px;
    padding-top: 3px;
    font-size: ${generalElemDesign.formInputFontSize}px;
    border: 2px solid black;
    border-radius: 4px;
    margin: 0 13px;
    font-family: var(--font1);
  }

  .form-box input,
  textarea {
    width: 52vw;
    padding: 0px 6px;
    margin: 7px 0;
    font-size: ${generalElemDesign.inputFeildFontSize}px;
    font-family: var(--font1);
    border: 2px solid var(--main-bg-color);
    border-radius: 5px;
  }

  .navigation {
    margin-top: 25px;
    font-family: var(--font1);
    /* height: 74px;  */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left {
    display: flex;
  }

  .nav-left span {
    font-size: ${navElemDesign.fontSize}px;
    padding-top: ${navElemDesign.paddingTop}px;
  }

  .nav-left ul {
    display: flex;
    align-items: center;
    margin: 0 77px;
    font-size: 22px;
    padding-bottom: 23px;
  }

  .nav-left ul li {
    list-style: ${navElemDesign.list_Style_Type};
    margin: 0 14px;
    font-family: var(--font2);
    transition: all 0.3s ease-in-out;
  }

  .nav-left ul li a {
    text-decoration: none;
    color: black;
  }

  .nav-left ul li a:hover {
    color: var(--main-bg-color);
    font-weight: bolder;
  }
    `;
  let aboutCode = `

  <div id="about">
      <div class="m-auto content max-width-1 my-2">
        <div class="content-left">
          <h1>${aboutElements.about_header}</h1>
          <p>
            ${aboutElements.about_paragraph1}
          </p>
          <p>
            ${aboutElements.about_paragraph2}
          </p>
        </div>
        <div class="content-right">
          <img src="${aboutElements.about_images}" alt="iBlog" />
        </div>
      </div>
    </div>
  `;
  let aboutDesign = `

  /* about Design */
  .content {
    height: 100%;
    display: flex;
    margin-top: 32px;
    padding: ${aboutElemDesign.padding}px;
    position: relative;
  }

  .content::after {
    content: '';
    background-image: url('https://i.ibb.co/NW1nL3F/1.png');
    position: absolute;
    width: 100%;
    height: inherit;
    opacity: ${aboutElemDesign.opacity};
    border-radius: ${aboutElemDesign.borderRadius}px;
  }

  .content-left {
    font-family: var(--font1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${aboutElemDesign.contentPadding}px;
    z-index: ${aboutElemDesign.zIndex};
  }

  .content-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-right img {
    height: 355px;
    border: 2px solid black;
    border-radius: 200px;
  }
  `;

  let articlesCode = `

<div class="max-width-1 m-auto">
      <hr />
    </div>
    <div class="home-articles max-width-1 m-auto font2">
      <h2>${articlesElements.heading}</h2>
      <div class="year-box adjust-year">
        <div>
          <h3>Year</h3>
        </div>
        <div><input type="radio" name="year" id="" /> 2020</div>
        <div><input type="radio" name="year" id="" /> 2021</div>
      </div>

      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_1_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_1_text}.</h3>
          </a>

          <div>${articlesElements.article_1_author}</div>
          <span>${articlesElements.article_1_date} | ${articlesElements.article_1_readTime}</span>
        </div>
      </div>

      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_2_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_2_text}.</h3>
          </a>

          <div>${articlesElements.article_2_author}</div>
          <span>${articlesElements.article_2_date} | ${articlesElements.article_2_readTime}</span>
        </div>
      </div>
      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_3_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_3_text}.</h3>
          </a>

          <div>${articlesElements.article_3_author}</div>
          <span>${articlesElements.article_3_date} | ${articlesElements.article_3_readTime}</span>
        </div>
      </div>
      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_4_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_4_text}.</h3>
          </a>

          <div>${articlesElements.article_4_author}</div>
          <span>${articlesElements.article_4_date} | ${articlesElements.article_4_readTime}</span>
        </div>
      </div>
      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_5_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_5_text}.</h3>
          </a>

          <div>${articlesElements.article_5_author}</div>
          <span>${articlesElements.article_5_date} | ${articlesElements.article_5_readTime}</span>
        </div>
      </div>
      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_6_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_6_text}.</h3>
          </a>

          <div>${articlesElements.article_6_author}</div>
          <span>${articlesElements.article_6_date} | ${articlesElements.article_6_readTime}</span>
        </div>
      </div>
      <div class="home-article">
        <div class="home-article-img">
          <img src="${articlesElements.article_7_image}" alt="article" />
        </div>
        <div class="home-article-content font1">
          <a href="#blogPost">
            <h3>${articlesElements.article_7_text}.</h3>
          </a>

          <div>${articlesElements.article_7_author}</div>
          <span>${articlesElements.article_7_date} | ${articlesElements.article_7_readTime}</span>
        </div>
      </div>

      
`;
  let articlesDesign = `
  /* article Design */

  articlesDesign: {
    backgroundColor: '#f8efef80',
    year_fontSize: '18',
    article_margin: '25',
    article_Image_width: '300',
    a_text_decoration: 'none',
    a_color: '#000',
  },

  .home-articles {
    padding: 18px;
    background-color: ${articlesElemDesign.backgroundColor};
    margin-top: 23px;
    position: relative;
  }

  .year-box {
    position: absolute;
    right: 0px;
    top: 100px;
    width: 234px;
    height: 255px;
    font-size: ${articlesElemDesign.year_fontSize}px;
  }

  .year-box div {
    margin: 12px 0px;
  }

  .home-article {
    display: flex;
    margin: ${articlesElemDesign.article_margin}px;
  }

  .home-article img {
    width: ${articlesElemDesign.article_Image_width}px;
  }

  .home-article-content {
    align-self: center;
    padding: 25px;
  }

  .home-article-content a {
    text-decoration: ${articlesElemDesign.a_text_decoration};
    color: ${articlesElemDesign.a_color};
  }
  `;

  let blogPostCode = `
<div id="blogPost">
      <div class="max-width-1 m-auto">
        <hr />
      </div>
      <div class="post-img">
        <img src="${blogPostElements.topImage}" alt="" />
      </div>
      <div class="m-auto blog-post-content max-width-2 m-auto my-2">
        <h1 class="font1">${blogPostElements.blogPostHeading}</h1>
        <div class="blogpost-meta">
          <div class="author-info">
            <div>
              <b> Author - ${blogPostElements.blogAuthor} </b>
            </div>
            <div>${blogPostElements.blogDate}. ${blogPostElements.blogReadTime}</div>
          </div>
          <div class="social">
            <svg width="29" height="29" class="hk">
              <path
                d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
              ></path>
            </svg>

            <svg
              style="background: black; border-radius: 21px"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              class="hk"
            >
              <path
                d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
                fill="#fff"
              ></path>
            </svg>

            <svg width="29" height="29" class="hk">
              <path
                d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"
              ></path>
            </svg>
          </div>
        </div>
        <p class="font1">
          ${blogPostElements.blogPostText}
        </p>
      </div>
`;
  let blogPostDesign = `
  /* blog Post Design */
  .post-img {
    height: ${blogPostElemDesign.image_height}px;
    overflow: hidden;
  }
  .post-img img {
    width: 100%;
  }
  .blog-post-content {
    /* background-color: rebeccapurple; */
  }
  .blog-post-content h1 {
    text-align: center;
  }
  .blog-post-content p {
    font-size: ${blogPostElemDesign.p_fontSize}px;
  }

  .row {
    display: flex;
  }
  .more-post {
    flex-direction: column;
    align-items: center;
  }
  .blogpost-meta {
    display: flex;
    justify-content: space-between;
  }

  .author-info {
    margin: ${blogPostElemDesign.author_margin}px 0;
  }
  .author-info div {
    padding: 4px 0px;
    font-family: var(--font2);
  }
  .social {
    padding-right: 53px;
    align-self: center;
    cursor: ${blogPostElemDesign.cursor};
  }
  `;

  let recommendedCode = `

<div class="max-width-1 m-auto"><hr /></div>
<div class="home-articles max-width-1 m-auto font2">
  <h2>${recomendedBlogsElements.recomendedBlogHeading}</h2>
  <div class="row">
    <div class="home-article more-post">
      <div class="home-article-img">
        <img src="${recomendedBlogsElements.Blog1_image}" alt="article" />
      </div>
      <div class="home-article-content font1 center">
        <a href="#blogPost"
          ><h3>
            ${recomendedBlogsElements.Blog1}
          </h3></a>

        <div>${recomendedBlogsElements.Blog1_author}</div>
        <span>${recomendedBlogsElements.Blog1_date} | ${recomendedBlogsElements.Blog1_readTime}</span>
      </div>
    </div>

    <div class="home-article more-post">
      <div class="home-article-img">
        <img src="${recomendedBlogsElements.Blog2_image}" alt="article" />
      </div>
      <div class="home-article-content font1 center">
        <a href="#blogPost"
          ><h3>
            ${recomendedBlogsElements.Blog2}
          </h3></a>

        <div>${recomendedBlogsElements.Blog2_author}</div>
        <span>${recomendedBlogsElements.Blog2_date} | ${recomendedBlogsElements.Blog2_readTime}</span>
      </div>
    </div>

    <div class="home-article more-post">
      <div class="home-article-img">
        <img src="${recomendedBlogsElements.Blog3_image}" alt="article" />
      </div>
      <div class="home-article-content font1 center">
        <a href="#blogPost"
          ><h3>
            ${recomendedBlogsElements.Blog3}
          </h3></a>

        <div>${recomendedBlogsElements.Blog3_author}</div>
        <span>${recomendedBlogsElements.Blog3_date} | ${recomendedBlogsElements.Blog3_readTime}</span>
      </div>
    </div>

  </div>
</div>
</div>
`;

  let contactCode = `

<div id="contact">
      <div class="max-width-1 m-auto">
        <hr />
      </div>
      <div class="contact-content font1 max-width-1 m-auto">
        <div class="max-width-1 m-auto mx-1">
          <h2>${contactElements.contactHeading}</h2>
          <div class="contact-form">
            <div class="form-box">
              <input type="text" placeholder="${contactElements.name}" />
            </div>
            <div class="form-box">
              <input type="text" placeholder="${contactElements.number}" />
            </div>
            <div class="form-box">
              <input type="text" placeholder="${contactElements.email}" />
            </div>
            <div class="form-box">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="How may we help you?"
              ></textarea>
            </div>
            <div class="form-box">
              <button class="btn">${contactElements.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

  let contactDesign = `
.contact-content {
    height: 100vh;
    margin-top: 32px;
    padding: 9px;
    position: relative;
    overflow: hidden;
  }

  .contact-content::after {
    content: '';
    background-image: url('https://i.ibb.co/NW1nL3F/1.png');
    position: absolute;
    top: 0;
    width: 100%;
    height: inherit;
    opacity: ${contactElemDesign.opacity};
    border-radius: ${contactElemDesign.borderRadius}px;
    z-index: ${contactElemDesign.zIndex};
  }
`;

  let footerCode = `
  <div class="footer">
    <p>${footerElements.footerText}</p>
  </div>
`;
  let footerDesign = `
/* footer Design */

.footer {
  height: ${footerElemDesign.height}px;
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${footerElemDesign.color};
  flex-direction: column;
}

.footer a {
  color: white;
}
`;

  let responsiveDesign = `
/* Resposive */

@media screen and (max-width: 1200px) {
  .navigation {
    flex-direction: column;
    margin-bottom: 23px;
  }

  .nav-left {
    flex-direction: column;
    text-align: center;
  }

  .content-right {
    display: none;
  }

  .home-article {
    flex-direction: column;
  }

  .home-article-img {
    text-align: center;
  }

  .year-box {
    top: 25px;
    left: 60vw;
    font-size: 11px;
    display: flex;
  }

  .year-box div {
    padding: 0 3px;
    margin: 0;
  }

  .home-article img {
    width: 70vw;
  }
  .form-input {
    width: 50%;
  }
  .form-box input,
  textarea {
    width: 66vw;
  }
  .row {
    flex-direction: column;
  }
  .social {
    padding: 0;
  }
  .post-img {
    height: auto;
  }
  .adjust-year {
    position: static;
    height: auto;
    padding: 12px 0px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
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
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sectionsCode = (sections) => {
    console.log('sections', sections);
    sections.forEach((section) => {
      if (section == 'Navbar') {
        setNav(true);
      } else if (section === 'About') {
        setAbout(true);
      } else if (section === 'Articles') {
        setArticles(true);
      } else if (section === 'BlogPost') {
        setBlogPost(true);
      } else if (section === 'RecommendedBlogs') {
        setRecomendedBlogs(true);
      } else if (section === 'Contact') {
        setContact(true);
      } else if (section === 'Footer') {
        setFooter(true);
      }
    });
    let code = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <title>iBlog - Heaven for bloggers</title>
    
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap');
    
          * {
            margin: 0;
            padding: 0;
          }

          ${nav ? navbarDesign : ''}
          ${about ? aboutDesign : ''}
          ${articles ? articlesDesign : ''}
          ${blogPost ? blogPostDesign : ''}
          ${contact ? contactDesign : ''}
          ${footer ? footerDesign : ''} 
          
          ${responsive ? responsiveDesign : ''}
        </style>
      </head>
          

      <body>
          ${nav ? navbarCode : ''}
          ${about ? aboutCode : ''}
          ${articles ? articlesCode : ''}
          ${blogPost ? blogPostCode : ''}
          ${recomendedBlogs ? recommendedCode : ''}
          ${contact ? contactCode : ''}
          ${footer ? footerCode : ''}

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='main_container_code'>
      <div class='Preview_wrapper'>
        <div class='link_wrapper'>
          <a
            onClick={() => {
              navigate('/dashboard/Templates/IBlog/B01');
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
                  checked={sections.includes('Articles')}
                  onChange={handleSectionsChange}
                />
              }
              label='Articles'
              value='Articles'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('BlogPost')}
                  onChange={handleSectionsChange}
                />
              }
              label='BlogPost'
              value='BlogPost'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('RecommendedBlogs')}
                  onChange={handleSectionsChange}
                />
              }
              label='RecommendedBlogs'
              value='RecommendedBlogs'
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
              setNav(false);
              setAbout(false);
              setArticles(false);
              setBlogPost(false);
              setRecomendedBlogs(false);
              setContact(false);
              setFooter(false);

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
            } else if (section === 'About') {
              return <About />;
            } else if (section === 'Articles') {
              return <Articles />;
            } else if (section === 'BlogPost') {
              return <BlogPost />;
            } else if (section === 'RecommendedBlogs') {
              return <RecommendedBlogs />;
            } else if (section === 'Contact') {
              return <Contact />;
            } else if (section === 'Footer') {
              return <Footer />;
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
                handleOpen();
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
                    template={Tname}
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
    </div>
  );
}

export default Index;
