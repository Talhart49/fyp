import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editHome,
  editHomeDesign,
  editRootTheme,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const homeElements = useSelector((state) => state.P01.home);
  const homeDesign = useSelector((state) => state.P01.homeDesign);
  const rootTheme = useSelector((state) => state.P01.rootTheme);

  useEffect(() => {
    console.log(homeElements);
  }, [homeElements]);

  const dispatch = useDispatch();

  const [homeElementsNew, setHomeElementsNew] = useState(homeElements);

  ///

  const [headingFontFamily, setHeadingFontFamily] = useState(
    rootTheme.headingFontFamily
  );
  const [paragraphFontFamily, setParagraphFontFamily] = useState(
    rootTheme.paragraphFontFamily
  );
  const [themeColor, setThemeColor] = useState(rootTheme.themeColor);
  const [backgroundColor, setBackgroundColor] = useState(
    rootTheme.backgroundColor
  );
  const [textColor, setTextColor] = useState(rootTheme.textColor);

  ////

  const [image_border_radius, setImage_border_radius] = useState(
    homeDesign.image_border_radius
  );
  const [heading_fontSize, setHeading_fontSize] = useState(
    homeDesign.heading_fontSize
  );
  const [heading_fontWeight, setHeading_fontWeight] = useState(
    homeDesign.heading_fontWeight
  );
  const [paragraph_fontSize, setParagraph_fontSize] = useState(
    homeDesign.paragraph_fontSize
  );
  const [paragraph_fontWeight, setParagraph_fontWeight] = useState(
    homeDesign.paragraph_fontWeight
  );
  const [paragraph_marginTop, setParagraph_marginTop] = useState(
    homeDesign.paragraph_marginTop
  );

  return (
    <div>
      <div
        style={{
          gap: '1rem',
          width: '500px',
          margin: '1rem',
          padding: '1rem',
          border: '1px solid #000',
        }}>
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
            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              {Object.keys(homeElements).map((key) => {
                return (
                  <TextField
                    rows={3}
                    multiline
                    sx={{ width: '100%' }}
                    key={key}
                    id='standard-basic'
                    label={key}
                    variant='standard'
                    name={key}
                    value={homeElementsNew[key]}
                    onChange={(e) => {
                      setHomeElementsNew({
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
                label='Image Border Radius'
                variant='standard'
                value={image_border_radius}
                onChange={(e) => {
                  setImage_border_radius(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Heading Font Size'
                variant='standard'
                value={heading_fontSize}
                onChange={(e) => {
                  setHeading_fontSize(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Heading Font Weight
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={heading_fontWeight}
                onChange={(e) => {
                  setHeading_fontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>Lighter</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='bolder'>Bolder</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Paragraph Font Size'
                variant='standard'
                value={paragraph_fontSize}
                onChange={(e) => {
                  setParagraph_fontSize(e.target.value);
                }}
              />
              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Paragraph Font Weight
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={paragraph_fontWeight}
                onChange={(e) => {
                  setParagraph_fontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>Lighter</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='bolder'>Bolder</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Margin'
                variant='standard'
                value={paragraph_marginTop}
                onChange={(e) => {
                  setParagraph_marginTop(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editHomeDesign({
                      image_border_radius,
                      heading_fontSize,
                      heading_fontWeight,
                      paragraph_fontSize,
                      paragraph_fontWeight,
                      paragraph_marginTop,
                    })
                  );
                }}>
                Save Changes
              </Button>
            </form>

            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '1.5rem auto',
              }}>
              <h2>Root Theme </h2>
              <InputLabel id='fontFamily'> Headings Font Family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='fontFamily'
                value={headingFontFamily}
                onChange={(e) => {
                  setHeadingFontFamily(e.target.value);
                }}>
                <MenuItem value='Poppins'>Poppins</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel id='fontFamily'> Paragraphs Font Family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={paragraphFontFamily}
                onChange={(e) => {
                  setParagraphFontFamily(e.target.value);
                }}>
                <MenuItem value='DM Sans'>DM Sans</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>Theme Color</InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={themeColor}
                  onChange={(e) => {
                    setThemeColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: themeColor,
                  }}
                />
              </div>

              <InputLabel id='demo-simple-select-label'>
                Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={backgroundColor}
                  onChange={(e) => {
                    setBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: backgroundColor,
                  }}
                />
              </div>

              <InputLabel id='demo-simple-select-label'>Text Color</InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={textColor}
                  onChange={(e) => {
                    setTextColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: textColor,
                  }}
                />
              </div>

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editRootTheme({
                      headingFontFamily,
                      paragraphFontFamily,
                      themeColor,
                      backgroundColor,
                      textColor,
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
