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
  const home = `

  <section id="home">
  <h1 class="h-primary">${homeElemSection.heading01}</h1>
  <p>${homeElemSection.paragraph01}</p>
  <p>${homeElemSection.paragraph02}</p>
  <button class="btn">${homeElemSection.button}</button>
</section>
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

  const Footer = `
  <footer>
  <div class="center">
      ${footerElem.copyRight}
  </div>
</footer>
  `;
  const footerDesign = `
  footer {
    background: ${footerDesignElem.backgroundColor};
    color: ${footerDesignElem.textColor};
    padding: ${footerDesignElem.paddingTopAndBottom}px 20px;
}
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
          ${nav ? globalDesign : ''}
          ${nav ? navbarDesign : ''}
          ${homes ? homeDesign : ''}
          ${services ? serviceDesign : ''}
          ${clients ? clientDesign : ''}
          ${contacts ? contactDesign : ''}
          ${footer ? footerDesign : ''}
          ${responsive ? Responsiveness : ''}
          

          
        </style>
      </head>
    
      <body>

      ${nav ? navbar : ''}
      ${homes ? home : ''}
      ${services ? service : ''}
      ${clients ? client : ''}
      ${contacts ? contact : ''}
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
