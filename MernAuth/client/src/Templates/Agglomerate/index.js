import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/Ecommerce03_redux/E03_Slice';
import Navbar from './Navbar';
import Page from './PageContent';
import Column from './ColumnContent';
import SideBarsection from './Sidebar';
import Footer from './Footer';

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
  const globalElementsDesign = useSelector((state) => state.E03.globalDesign);
  const navElements = useSelector((state) => state.E03.navbar);
  const navElemDesign = useSelector((state) => state.E03.navbarDesign);
  const PageElemSection = useSelector((state) => state.E03.PageContent);
  const PageElemSectionDesign = useSelector((state) => state.E03.pageDesign);
  const columnElem = useSelector((state) => state.E03.TwoColumnContent);
  const columnDesignElem = useSelector((state) => state.E03.columnDesign);
  const SideBarElem = useSelector((state) => state.E03.SideBar);
  const SideBarDesignElem = useSelector((state) => state.E03.sideBarDesign);
  const footerElem = useSelector((state) => state.E03.footer);
  const footerDesignElem = useSelector((state) => state.E03.footerDesign);

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
  const [pages, setPage] = useState(false);
  const [column, setColumn] = useState(false);
  const [SideBars, setSideBar] = useState(false);
  const [footers, setFooter] = useState(false);

  const globalDesign = `
  html,
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
      } else if (section == 'PageContent') {
        setPage(true);
      } else if (section == 'ColumnContent') {
        setColumn(true);
      } else if (section == 'Sidebar') {
        setSideBar(true);
      } else if (section == 'Footer') {
        setFooter(true);
      }
    });
    let code = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <style>
        ${nav ? globalDesign : ''}
        ${nav ? navbarDesign : ''}
        ${pages ? PageDesign : ''}
        ${column ? columnDesign : ''}
        ${SideBars ? sideBarDesign : ''}
        ${footers ? footerDesign : ''}
        


          p,
          ol,
          ul {
            margin-top: 0px;
          }
    
          a {
            color: #39c2f0;
          }
          a:hover {
            text-decoration: none;
          }
          a img {
            border: none;
          }
    
          img.alignleft {
            float: left;
          }
          img.alignright {
            float: right;
          }
          img.aligncenter {
            margin: 0px auto;
          }
          hr {
            display: none;
          }
          /** WRAPPER */
          #wrapper {
            width: 1100px;
            padding: 0px 50px;
            background: #ffffff;
          }
          .container {
            width: 1200px;
            margin: 0px auto;
          }
          .clearfix {
            clear: both;
          }
          /** LOGO */
          #logo {
            float: left;
            width: 300px;
            margin: 0;
            padding: 0;
          }
         
          #menu .current_page_item a {
            text-decoration: none;
            color: #ffffff;
          }
    
          #menu .current_page_item a {
            background: #2aa8d2;
            border-radius: 5px;
          }
    
          #content #cbox1 {
            margin-bottom: 40px;
          }
          ul.style1 {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }     
          ul.style1 .first {
            padding-top: 0px;
            border-top: none;
          }
          ul.style2 {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }
          ul.style2 li {
            padding: 25px 0px 15px 0px;
            border-top: 1px solid #e6e7dc;
          }
          ul.style2 .first {
            padding-top: 0px;
            border-top: none;
          }
          ul.style2 h3 {
            padding: 0px 0px 10px 0px;
          }
          ul.style2 a {
            text-decoration: none;
          }
          ul.style2 a:hover {
            text-decoration: underline;
          }
          ul.style3 {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }
          ul.style3 li {
            padding: 20px 0px 20px 0px;
            border-top: 1px solid #e6e7dc;
          }
          ul.style3 p {
            margin: 0px;
            padding: 0px;
          }
          ul.style3 img {
            float: left;
            margin-top: 3px;
            margin-right: 20px;
          }
          ul.style3 .posted {
            padding: 10px 0px 10px 0px;
            font-size: 8pt;
            color: #a2a2a2;
          }
          ul.style3 .first {
            padding-top: 0px;
            border-top: none;
          }
        </style>
      </head>
      <body>
        
          ${nav ? navbar : ''}
          ${pages ? PageContent : ''}
          ${column ? TwoColumnContent : ''}
          ${SideBars ? SideBar : ''}
          ${footers ? footer : ''}
          
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

  let [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              navigate('/dashboard/Templates/Agglomerate/AG');
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
                  checked={sections.includes('PageContent')}
                  onChange={handleSectionsChange}
                />
              }
              label='PageContent'
              value='PageContent'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('ColumnContent')}
                  onChange={handleSectionsChange}
                />
              }
              label='ColumnContent'
              value='ColumnContent'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sections.includes('Sidebar')}
                  onChange={handleSectionsChange}
                />
              }
              label='Sidebar'
              value='Sidebar'
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
          {/* <Button
            variant='contained'
            color='secondary'
            onClick={() => {
              setResponsive(!responsive);
            }}>
            {responsive ? 'Remove Responsiveness' : 'Add Responsiveness'}
          </Button> */}

          <Button
            variant='contained'
            color='primary'
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
            } else if (section === 'PageContent') {
              return <Page />;
            } else if (section === 'ColumnContent') {
              return <Column />;
            } else if (section === 'Sidebar') {
              return <SideBarsection />;
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
                    template='Agglomerate'
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