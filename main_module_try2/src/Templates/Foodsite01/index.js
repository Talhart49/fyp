import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { finalCode } from '../../redux/FoodSite01_redux/FS1_Slice';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
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
  const navElements = useSelector((state) => state.FS1.navbar);
  const navDesign = useSelector((state) => state.FS1.navbarDesign);

  const homeElements = useSelector((state) => state.FS1.home);
  const homeElemDesign = useSelector((state) => state.FS1.homeDesign);

  const aboutElements = useSelector((state) => state.FS1.about);
  const aboutElemDesign = useSelector((state) => state.FS1.aboutDesign);

  useEffect(() => {
    console.log(homeElemDesign);
  }, [homeElemDesign]);

  const dispatch = useDispatch();

  const [completeCode, setCompleteCode] = useState();

  const [nav, setNav] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [menu, setMenu] = useState(false);
  const [popular, setPopular] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [order, setOrder] = useState(false);

  let navbarCode = `
  <!-- ====markup header element==== -->
  <header class="header">
    <!-- ---header logo--- -->
    <div class="header-logo">
      <img
        src="${navElements.nav_logo}"
        alt="logo-img"
        border="0"
      />
    </div>

    <!-- ---navigation--- -->
    <nav class="navbar">
      <ul>
        <li>
        ${
          navElements.nav_element1
            ? `<a class="active" href="#${navElements.nav_element1}">${navElements.nav_element1}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element2
            ? `<a  href="#${navElements.nav_element2}">${navElements.nav_element2}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element3
            ? `<a  href="#${navElements.nav_element3}">${navElements.nav_element3}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element4
            ? `<a  href="#${navElements.nav_element4}">${navElements.nav_element4}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element5
            ? `<a  href="#${navElements.nav_element5}">${navElements.nav_element5}</a>`
            : ''
        }
        </li>
        <li>
        ${
          navElements.nav_element6
            ? `<a  href="#${navElements.nav_element6}">${navElements.nav_element6}</a>`
            : ''
        }
        </li>
        
        ${
          navElements.nav_element7
            ? `<li><a href="#${navElements.nav_element7}">${navElements.nav_element7}</a></li>`
            : ''
        }
        ${
          navElements.nav_element8
            ? `<li><a href="#${navElements.nav_element8}">${navElements.nav_element8}</a></li>`
            : ''
        }

      </ul>
    </nav>

    <!-- ---menu bar--- -->
    <div id="menu-bar" class="fas fa-bars"></div>
  </header>
    `;
  let navbarDesign = `
    .header {

      ${navDesign.position === 'center' ? 'max-width: 1200px;' : 'right: 0;'}
      width: 100%;
      height: 6rem;
      padding: ${navDesign.padding}rem 8rem;
      background-color: ${navDesign.navBackgroundColor};
      -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 1rem;
      position: fixed;
      top: 0;
      z-index: 100;
    }

    .header .header-logo {
      text-align: center;
      padding: 0 1rem;
    }

    .header .header-logo img {
      width: 4rem;
      height: auto;
      cursor: pointer;
    }

    .header .navbar {
      padding: 0 1rem;
    }

    .header .navbar ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 1rem;
    }

    .header .navbar ul li {
      text-align: center;
    }

    .header .navbar ul li a {
      font-size: ${navDesign.fontSize}rem;
      font-family: ${navDesign.fontFamily}
      text-transform: capitalize;
      margin: 0 ${navDesign.margin}rem;
      font-weight: ${navDesign.fontWeight};
      color: ${navDesign.navTextColor};
    }

    .header .navbar ul li a:hover,
    .header .navbar ul li a.active {
      color: ${navDesign.navHoverColor};
      border-bottom: 0.2rem solid ${navDesign.navHoverColor};
    }

    .header #menu-bar {
      font-size: 3rem;
      padding: 1rem;
      cursor: pointer;
      display: none;
    }
    `;
  let homeCode = `
  <main>
      <!-- ====markup home section==== -->
      <section id="home" class="home">
        <div class="home-desc">
          <h1>${homeElements.home_heading}</h1>
          <p>
            ${homeElements.home_paragraph}
          </p>
          <input type="button" value=${homeElements.home_button} />
        </div>

        <div class="home-image">
          <img
            src=${homeElements.home_backgroundImage}
            alt="home-img"
            border="0"
          />
        </div>
      </section>
  `;
  let homeDesign = `
  .home {
    margin: ${homeElemDesign.margin}rem 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 0;
  }

  .home .home-desc {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / 7;
    text-align: ${homeElemDesign.text_align};
  }

  .home .home-desc h1 {
    color: #000000;
    padding: 1rem;
    font-size: ${homeElemDesign.heading_fontSize}rem;
    font-weight: ${homeElemDesign.heading_fontWeight};
    text-transform: capitalize;
    text-align: center;
  }

  .home .home-desc p {
    color: #333333;
    padding: 1rem;
    font-size: ${homeElemDesign.paragraph_fontSize}rem;
    line-height: 1.5;
    font-weight: ${homeElemDesign.paragraph_fontWeight};
    text-transform: capitalize;
    text-align: left;
  }

  .home .home-desc input {
    margin-top: 3rem;
  }

  .home .home-image {
    grid-column: 7 / -1;
    text-align: center;
  }

  .home .home-image img {
    width: 100%;
  }

  .home::after,
  .home::before {
    content: '';
    position: absolute;
    top: 0;
    right: -6rem;
    background-color: ${homeElemDesign.animation_background_color};
    border-radius: 3rem;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: 40rem;
    width: 70rem;
    z-index: -2;
    -webkit-animation: animate 1.5s linear 1;
    animation: animate 1.5s linear 1;
  }

  .home::before {
    top: -7rem;
    background-color: #ffffff;
    -webkit-box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  @-webkit-keyframes animate {
    0% {
      -webkit-transform: rotate(50deg) translateY(-40rem);
      transform: rotate(50deg) translateY(-40rem);
    }
  }

  @keyframes animate {
    0% {
      -webkit-transform: rotate(50deg) translateY(-40rem);
      transform: rotate(50deg) translateY(-40rem);
    }
  }
  `;
  let aboutCode = `
  <!-- ====markup about section==== -->
        <section id="about" class="about">
          <div class="about-image">
            <img
              src=${aboutElements.about_Image_Frame}
              alt="about-frame-img"
              border="0"
            />
          </div>
  
          <div class="about-desc">
            <h2>${aboutElements.about_heading}</h2>
            <p>
              ${aboutElements.about_paragraph1}
            </p>
            <p>
              ${aboutElements.about_paragraph2}
            </p>
  
            <input type="button" value=${aboutElements.about_button} />
          </div>
        </section>
  `;
  let aboutDesign = `
  .about {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [12];
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    min-height: 50rem;
  }

  .about .about-image {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / 7;
    height: 100%;
    background-image: url(${aboutElements.about_Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-mix-blend-mode: screen;
  }

  .about .about-image img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .about .about-desc {
    grid-column: 7 / -1;
  }

  .about .about-desc h2 {
    color: #000000;
    padding: ${aboutElemDesign.padding}rem;
    font-size: ${aboutElemDesign.heading_fontSize}rem;
    font-weight: ${aboutElemDesign.heading_fontWeight};
    text-transform: capitalize;
    text-align: center;
  }

  .about .about-desc p {
    color: #333333;
    padding: ${aboutElemDesign.padding}rem;
    font-size: ${aboutElemDesign.paragraph_fontSize}rem;
    font-weight: ${aboutElemDesign.paragraph_fontWeight};
    line-height: 1.5;
    text-transform: capitalize;
    text-align: ${aboutElemDesign.text_align};
  }

  .about .about-desc input {
    margin: 2rem 3rem;
  }
  `;
  let menuCode = `
  <!-- ====markup menu section==== -->
  <section id="menu" class="menu">
    <h2>our delicious <span>menu</span></h2>
    <div class="catagory">
      <input type="button" value="breakfast" />
      <input type="button" class="active" value="lunch" />
      <input type="button" value="dinner" />
      <input type="button" value="desert" />
    </div>

    <div class="catagory-img">
      <img
        id="c-img"
        src="https://i.ibb.co/F5KnzBL/menu-lunch.jpg"
        alt="Net Error"
      />
    </div>

    <!-- ---info content 01--- -->
    <div class="menu-content">
      <div class="info">
        <h3><span>01.</span>we serve best food in the country</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>

      <!-- ---info content 02--- -->
      <div class="info">
        <h3><span>02.</span>we serve best food in the country</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>

      <!-- ---info content 03--- -->
      <div class="info">
        <h3><span>03.</span>we serve best food in the country</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>

      <!-- ---info content 04--- -->
      <div class="info">
        <h3><span>04.</span>we serve best food in the country</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>
    </div>
  </section>
  `;
  let popularCode = `
  <!-- ====markup popular section==== -->
        <section id="popular" class="popular">
          <h2>most <span>popular</span> foods</h2>
  
          <div class="popular-content">
            <!-- ---card 01--- -->
            <div class="p-card">
              <img src="https://i.ibb.co/Sw575B1/product-1.jpg" alt="Net Error" />
              <h4>delecious food</h4>
              <div class="review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="price">$ 30.00</p>
              <input type="button" value="add to cart" />
            </div>
  
            <!-- ---card 02--- -->
            <div class="p-card">
              <img src="https://i.ibb.co/JFQvVH4/product-2.jpg" alt="Net Error" />
              <h4>delecious food</h4>
              <div class="review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="price">$ 30.00</p>
              <input type="button" value="add to cart" />
            </div>
  
            <!-- ---card 03--- -->
            <div class="p-card">
              <img src="https://i.ibb.co/qCTQPB6/product-3.jpg" alt="Net Error" />
              <h4>delecious food</h4>
              <div class="review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="price">$ 30.00</p>
              <input type="button" value="add to cart" />
            </div>
  
            <!-- ---card 04--- -->
            <div class="p-card">
              <img src="https://i.ibb.co/rpx2n2f/product-4.jpg" alt="Net Error" />
              <h4>delecious food</h4>
              <div class="review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="price">$ 30.00</p>
              <input type="button" value="add to cart" />
            </div>
          </div>
        </section>
  `;
  let galleryCode = `
  <!-- ====markup gallery section==== -->
        <section id="gallery" class="gallery">
          <h2>our food <span>gallery</span></h2>
  
          <div class="gallery-content">
            <!-- ---gallery card 01--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/t4rdMfx/img1.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
  
            <!-- ---gallery card 02--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/LzXpjZz/img2.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
  
            <!-- ---gallery card 03--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/R0f3kzj/img3.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
  
            <!-- ---gallery card 04--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/Jx6tyMm/img4.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
  
            <!-- ---gallery card 05--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/F5VHCqn/img5.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
  
            <!-- ---gallery card 06--- -->
            <div class="g-card">
              <img src="https://i.ibb.co/n7zn9jh/img6.jpg" alt="Net Error" />
              <h3>delicious food</h3>
            </div>
          </div>
        </section>
  `;
  let orderCode = `
  <!-- ====markup order section==== -->
        <section id="order" class="order">
          <h2>make an <span>order</span></h2>
  
          <div class="order-content">
            <form action="#" class="order-form" autocomplete="off">
              <input type="text" placeholder="name" required />
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="password" required />
              <input type="number" placeholder="phone Number" required />
              <textarea cols="30" rows="8" placeholder="address"></textarea>
  
              <button type="submit">Order now</button>
            </form>
            <img src="https://i.ibb.co/Fxmbtcc/form-img.jpg" alt="Net Error" />
          </div>
        </section>
  `;

  const [sections, setSections] = useState(['Navbar', 'Home']);
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
      if (section == 'Navbar') {
        setNav(true);
      } else if (section === 'Home') {
        setHome(true);
      } else if (section === 'About') {
        setAbout(true);
      } else if (section === 'Menu') {
        setMenu(true);
      } else if (section === 'Popular') {
        setPopular(true);
      } else if (section === 'Gallery') {
        setGallery(true);
      } else if (section === 'Order') {
        setOrder(true);
      }
    });
    let code = `
    </head>
    <style>
      ${nav ? navbarDesign : ''}
      ${home ? homeDesign : ''}
      ${about ? aboutDesign : ''}
      
      </style>
    <body>
        ${nav ? navbarCode : ''} 
        ${home ? homeCode : ''}
        ${about ? aboutCode : ''}
        ${menu ? menuCode : ''}
        ${popular ? popularCode : ''}
        ${gallery ? galleryCode : ''}
        ${order ? orderCode : ''}

    </body>
  </html>
  
  <!-- happy coding!!!! -->
  
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
        <Link to='/FoodSite01'>
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
            disabled
            control={<Checkbox defaultChecked />}
            label='Navbar'
            value='Navbar'
          />
          <FormControlLabel
            disabled
            control={<Checkbox defaultChecked />}
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
                checked={sections.includes('Menu')}
                onChange={handleSectionsChange}
              />
            }
            label='Menu'
            value='Menu'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Popular')}
                onChange={handleSectionsChange}
              />
            }
            label='Popular'
            value='Popular'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Gallery')}
                onChange={handleSectionsChange}
              />
            }
            label='Gallery'
            value='Gallery'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sections.includes('Order')}
                onChange={handleSectionsChange}
              />
            }
            label='Order'
            value='Order'
          />
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
          if (section === 'Navbar') {
            return <Navbar />;
          } else if (section === 'Home') {
            return <Home />;
          } else if (section === 'About') {
            return <About />;
          }
        })}
      </Box>
    </React.Fragment>
  );
}

export default Index;
