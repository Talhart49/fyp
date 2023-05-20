import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editHeader,
  editHeaderDesign,
  editRootTheme,
} from '../../redux/Blog02_redux/B02_slice';

function Header() {
  const HeaderElements = useSelector((state) => state.B02.header);
  const HeaderDesign = useSelector((state) => state.B02.headerDesign);
  const rootTheme = useSelector((state) => state.B02.rootTheme);

  useEffect(() => {
    console.log(HeaderElements);
  }, [HeaderElements]);

  const dispatch = useDispatch();

  const [HeaderElementsNew, setHeaderElementsNew] = useState(HeaderElements);

  const [h1_color, seth1_color] = useState(rootTheme.h1_color);
  const [h1_fontFamily, seth1_fontFamily] = useState(rootTheme.h1_fontFamily);
  const [h1_textAlign, seth1_textAlign] = useState(rootTheme.h1_textAlign);
  const [h1_fontSize, seth1_fontSize] = useState(rootTheme.h1_fontSize);
  const [h2_fontFamily, seth2_fontFamily] = useState(rootTheme.h2_fontFamily);
  const [h2_textAlign, seth2_textAlign] = useState(rootTheme.h2_textAlign);

  const [h2_fontSize, seth2_fontSize] = useState(rootTheme.h2_fontSize);

  const [backgroungImage, setbackgroungImage] = useState(
    HeaderDesign.backgroungImage
  );
  const [backgroungImageSize, setbackgroungImageSize] = useState(
    HeaderDesign.backgroungImageSize
  );
  const [headerBackgroundColor, setheaderBackgroundColor] = useState(
    HeaderDesign.headerBackgroundColor
  );
  const [headerHeight, setheaderHeight] = useState(HeaderDesign.headerHeight);
  const [headerPosition, setheaderPosition] = useState(
    HeaderDesign.headerPosition
  );
  const [elements_paddingLeft, setelements_paddingLeft] = useState(
    HeaderDesign.elements_paddingLeft
  );

  const [elementsBackgroundColor, setelementsBackgroundColor] = useState(
    HeaderDesign.elementsBackgroundColor
  );

  const [logo_backgroundImage, setlogo_backgroundImage] = useState(
    HeaderDesign.logo_backgroundImage
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
          Header Customization
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
            <h3>Header Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(HeaderElements).map((key) => {
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
                    value={HeaderElementsNew[key]}
                    onChange={(e) => {
                      setHeaderElementsNew({
                        ...HeaderElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editHeader(HeaderElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Header Design</h3>
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
                type='text'
                id='standard-basic'
                label='Background Image'
                variant='standard'
                value={backgroungImage}
                onChange={(e) => {
                  setbackgroungImage(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Background image size
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={backgroungImageSize}
                onChange={(e) => {
                  setbackgroungImageSize(e.target.value);
                }}>
                <MenuItem value='cover'>cover</MenuItem>
                <MenuItem value='contain'>contain</MenuItem>
                <MenuItem value='auto'>auto</MenuItem>
                <MenuItem value='50%'>50%</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Header background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#ffffff'
                  onChange={(e) => {
                    setheaderBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: headerBackgroundColor,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Header height'
                variant='standard'
                value={headerHeight}
                onChange={(e) => {
                  setheaderHeight(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Header Position
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={headerPosition}
                onChange={(e) => {
                  setheaderPosition(e.target.value);
                }}>
                <MenuItem value='fixed'>fixed</MenuItem>
                <MenuItem value='relative'>relative</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Elements padding left'
                variant='standard'
                value={elements_paddingLeft}
                onChange={(e) => {
                  setelements_paddingLeft(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Elements background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#ffffff'
                  onChange={(e) => {
                    setelementsBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: elementsBackgroundColor,
                  }}
                />
              </div>

              <TextField
                type='text'
                id='standard-basic'
                label='Logo Background Image'
                variant='standard'
                value={logo_backgroundImage}
                onChange={(e) => {
                  setlogo_backgroundImage(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editHeaderDesign({
                      backgroungImage,
                      backgroungImageSize,
                      headerBackgroundColor,
                      headerHeight,
                      headerPosition,
                      elements_paddingLeft,
                      elementsBackgroundColor,
                      logo_backgroundImage,
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

              <InputLabel id='demo-simple-select-label'>
                Main heading background color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#111111'
                  onChange={(e) => {
                    seth1_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: h1_color,
                  }}
                />
              </div>

              <InputLabel id='fontFamily'> Main heading font family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={h1_fontFamily}
                onChange={(e) => {
                  seth1_fontFamily(e.target.value);
                }}>
                <MenuItem value='Pacifico'>Pacifico</MenuItem>
                <MenuItem value='DM Sans'>DM Sans</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Main heading text align
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={h1_textAlign}
                onChange={(e) => {
                  seth1_textAlign(e.target.value);
                }}>
                <MenuItem value='center'>center</MenuItem>
                <MenuItem value='start'>start</MenuItem>
                <MenuItem value='left'>left</MenuItem>
                <MenuItem value='right'>right</MenuItem>
                <MenuItem value='end'>end</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Main heading font size'
                variant='standard'
                value={h1_fontSize}
                onChange={(e) => {
                  seth1_fontSize(e.target.value);
                }}
              />

              <InputLabel id='fontFamily'> Heading font family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={h2_fontFamily}
                onChange={(e) => {
                  seth2_fontFamily(e.target.value);
                }}>
                <MenuItem value='Pacifico'>Pacifico</MenuItem>
                <MenuItem value='DM Sans'>DM Sans</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Heading text align
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={h2_textAlign}
                onChange={(e) => {
                  seth2_textAlign(e.target.value);
                }}>
                <MenuItem value='center'>center</MenuItem>
                <MenuItem value='start'>start</MenuItem>
                <MenuItem value='left'>left</MenuItem>
                <MenuItem value='right'>right</MenuItem>
                <MenuItem value='end'>end</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Heading font size'
                variant='standard'
                value={h2_fontSize}
                onChange={(e) => {
                  seth2_fontSize(e.target.value);
                }}
              />
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editRootTheme({
                      h1_color,
                      h1_fontFamily,
                      h1_textAlign,
                      h1_fontSize,
                      h2_fontFamily,
                      h2_textAlign,
                      h2_fontSize,
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

export default Header;
