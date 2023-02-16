import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';

function Index() {
  const navElements = useSelector((state) => state.FS1.navbar);

  const [nav, setNav] = useState(false);
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
        src="https://i.ibb.co/k9CdNdC/logo-img.png"
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
  let aboutCode = `
  <!-- ====markup about section==== -->
        <section id="about" class="about">
          <div class="about-image">
            <img
              src="https://i.ibb.co/JQFCkkT/about-frame-img.png"
              alt="about-frame-img"
              border="0"
            />
          </div>
  
          <div class="about-desc">
            <h2>a world about us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint
              illum similique mollitia facere maiores nemo saepe repellendus enim,
              debitis perspiciatis dolore deleniti. Vel quos aliquid impedit
              neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa
              dolore ex aut maiores perferendis a doloribus aliquid vitae natus.
            </p>
  
            <input type="button" value="learn more" />
          </div>
        </section>
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

  const [sections, setSections] = useState(['Navbar']);
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
        console.log('nav', section);
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
    <body>
        ${nav ? navbarCode : ''} 
        ${about ? aboutCode : ''}
        ${menu ? menuCode : ''}
        ${popular ? popularCode : ''}
        ${gallery ? galleryCode : ''}
        ${order ? orderCode : ''}

    </body>
  </html>
  
  <!-- happy coding!!!! -->
  
      `;

    console.log('code', code);
  };

  const handleCustomeSection = (section) => {
    if (section === 'Navbar') {
      setExtend((prev) => [...prev, section]);
    }
  };

  return (
    <React.Fragment>
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
          }
        })}
      </Box>
    </React.Fragment>
  );
}

export default Index;
