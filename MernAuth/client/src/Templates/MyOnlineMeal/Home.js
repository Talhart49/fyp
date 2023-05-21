import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import {
  editHome,
  editHomeDesign,
} from '../../redux/Ecommerce02_redux/E02_Slice';

import InputColor from 'react-input-color';

function Home() {
  const homeElements = useSelector((state) => state.E02.home);
  const homeDesign = useSelector((state) => state.E02.homeDesign);

  useEffect(() => {
    console.log(homeDesign);
  }, [homeDesign]);

  const dispatch = useDispatch();

  const [homeElementsNew, sethomeElementsNew] = useState(homeElements);

  const [Height, setHeight] = useState(homeDesign.Height);
  const [justifyContent, setjustifyContent] = useState(
    homeDesign.justifyContent
  );
  const [heading01_color, setheading01_color] = useState(
    homeDesign.heading01_color
  );
  const [heading_fontFamily, setheading_fontFamily] = useState(
    homeDesign.heading_fontFamily
  );
  const [paragraph_color, setparagraph_color] = useState(
    homeDesign.paragraph_color
  );

  const [paragraph_fontSize, setparagraph_fontSize] = useState(
    homeDesign.paragraph_fontSize
  );
  const [paragraph_fontFamily, setparagraph_fontFamily] = useState(
    homeDesign.paragraph_fontFamily
  );
  const [backgroundImage, setbackgroundImage] = useState(
    homeDesign.backgroundImage
  );

  return (
    <div>
      <div className='specific_customization_container'>
        <h1
          style={{
            textAlign: 'center',
            borderBottom: '1px solid #000',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Home Customization
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            gap: '1rem',
            marginTop: '2rem',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '1rem',
              width: '50%',
              height: '100%',
              borderRight: '1px solid #000',
              paddingRight: '1rem',
            }}>
            <h3>Home Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(homeElements).map((key) => {
                return (
                  <TextField
                    rows={5}
                    multiline
                    sx={{ width: '100%' }}
                    key={key}
                    id='standard-basic'
                    label={key}
                    variant='standard'
                    name={key}
                    value={homeElementsNew[key]}
                    onChange={(e) => {
                      sethomeElementsNew({
                        ...homeElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editHome(homeElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Home Design</h3>
            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              <TextField
                type='number'
                id='standard-basic'
                label='Home height'
                variant='standard'
                value={Height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                justify Content
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={justifyContent}
                onChange={(e) => {
                  setjustifyContent(e.target.value);
                }}>
                <MenuItem value='center'>center</MenuItem>
                <MenuItem value='start'>start</MenuItem>
                <MenuItem value='left'>left</MenuItem>
                <MenuItem value='right'>right</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Heading 1 Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#ffffff'
                  onChange={(e) => {
                    setheading01_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: heading01_color,
                  }}
                />
              </div>

              <InputLabel id='fontFamily'> Heading Font Family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={heading_fontFamily}
                onChange={(e) => {
                  setheading_fontFamily(e.target.value);
                }}>
                <MenuItem value='Bree Serif'>Bree Serif</MenuItem>
                <MenuItem value='DM Sans'>DM Sans</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Paragraph Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#ffffff'
                  onChange={(e) => {
                    setparagraph_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: paragraph_color,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Paragraph Font Size'
                variant='standard'
                value={paragraph_fontSize}
                onChange={(e) => {
                  setparagraph_fontSize(e.target.value);
                }}
              />

              <InputLabel id='fontFamily'> Paragraph Font Family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={paragraph_fontFamily}
                onChange={(e) => {
                  setparagraph_fontFamily(e.target.value);
                }}>
                <MenuItem value='Bree Serif'>Bree Serif</MenuItem>
                <MenuItem value='DM Sans'>DM Sans</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <TextField
                type='text'
                id='standard-basic'
                label='Background Image'
                variant='standard'
                value={backgroundImage}
                onChange={(e) => {
                  setbackgroundImage(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editHomeDesign({
                      Height,
                      justifyContent,
                      heading01_color,
                      heading_fontFamily,
                      paragraph_color,
                      paragraph_fontSize,
                      paragraph_fontFamily,
                      backgroundImage,
                    })
                  );
                }}>
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
