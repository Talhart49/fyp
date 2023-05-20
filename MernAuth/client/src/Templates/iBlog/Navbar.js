import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editNavbar,
  editRootTheme,
  editGeneralDesign,
  editNavDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function Navbar() {
  const NavElements = useSelector((state) => state.B01.navbar);
  const NavDesign = useSelector((state) => state.B01.navDesign);
  const rootTheme = useSelector((state) => state.B01.rootTheme);
  const generalDesign = useSelector((state) => state.B01.generalDesign);

  useEffect(() => {
    console.log(NavElements);
  }, [NavElements]);

  const dispatch = useDispatch();

  const [navElementsNew, setNavElementsNew] = useState(NavElements);

  ///

  const [main_bg_color, setMain_bg_color] = useState(rootTheme.main_bg_color);
  const [font1, setFont1] = useState(rootTheme.font1);
  const [font2, setFont2] = useState(rootTheme.font2);

  const [max_width1, setMax_width1] = useState(generalDesign.max_width1);
  const [max_width2, setMax_width2] = useState(generalDesign.max_width2);
  const [margin_top, setMargin_top] = useState(generalDesign.margin_top);
  const [margin_bottom, setMargin_bottom] = useState(
    generalDesign.margin_bottom
  );
  const [margin_left, setMargin_left] = useState(generalDesign.margin_left);
  const [margin_right, setMargin_right] = useState(generalDesign.margin_right);

  const [buttonFontSize, setButtonFontSize] = useState(
    generalDesign.buttonFontSize
  );
  const [buttonHoverColor, setButtonHoverColor] = useState(
    generalDesign.buttonHoverColor
  );

  const [formInputFontSize, setFormInputFontSize] = useState(
    generalDesign.formInputFontSize
  );
  const [inputFeildFontSize, setInputFeildFontSize] = useState(
    generalDesign.inputFeildFontSize
  );

  const [fontSize, setFontSize] = useState(NavDesign.fontSize);
  const [paddingTop, setPaddingTop] = useState(NavDesign.paddingTop);

  const [list_Style_Type, setList_Style_Type] = useState(
    NavDesign.list_Style_Type
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
          Navbar Customization
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
            <h3>Navbar Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(NavElements).map((key) => {
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
                    value={navElementsNew[key]}
                    onChange={(e) => {
                      setNavElementsNew({
                        ...navElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editNavbar(navElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Navbar Design</h3>
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
                label='Font Size'
                variant='standard'
                value={fontSize}
                onChange={(e) => {
                  setFontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Padding Top'
                variant='standard'
                value={paddingTop}
                onChange={(e) => {
                  setPaddingTop(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                List Style Type
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={list_Style_Type}
                onChange={(e) => {
                  setList_Style_Type(e.target.value);
                }}>
                <MenuItem value='none'>None</MenuItem>
                <MenuItem value='disc'>Disc</MenuItem>
                <MenuItem value='circle'>Circle</MenuItem>
                <MenuItem value='square'>Square</MenuItem>
                <MenuItem value='decimal'>Decimal</MenuItem>
                <MenuItem value='decimal-leading-zero'>
                  Decimal Leading Zero
                </MenuItem>
              </Select>

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editNavDesign({
                      fontSize,
                      paddingTop,
                      list_Style_Type,
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
              <h3>Root Theme </h3>

              <InputLabel id='demo-simple-select-label'>
                Main Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={main_bg_color}
                  onChange={(e) => {
                    setMain_bg_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: main_bg_color,
                  }}
                />
              </div>

              <InputLabel id='fontFamily'> Font Family 1</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='fontFamily'
                value={font1}
                onChange={(e) => {
                  setFont1(e.target.value);
                }}>
                <MenuItem value='Baloo Bhaina 2'>Baloo Bhaina 2</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <InputLabel id='fontFamily'>Font Family 2</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={font2}
                onChange={(e) => {
                  setFont2(e.target.value);
                }}>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='Baloo Bhaina 2'>Baloo Bhaina 2</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editRootTheme({
                      main_bg_color,
                      font1,
                      font2,
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
              <h3>General Design </h3>

              <TextField
                type='number'
                id='standard-basic'
                label='Max Width 1'
                variant='standard'
                value={max_width1}
                onChange={(e) => {
                  setMax_width1(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Max Width 2'
                variant='standard'
                value={max_width2}
                onChange={(e) => {
                  setMax_width2(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Margin Top'
                variant='standard'
                value={margin_top}
                onChange={(e) => {
                  setMargin_top(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Margin Bottom'
                variant='standard'
                value={margin_bottom}
                onChange={(e) => {
                  setMargin_bottom(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Margin Left'
                variant='standard'
                value={margin_left}
                onChange={(e) => {
                  setMargin_left(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Margin Right'
                variant='standard'
                value={margin_right}
                onChange={(e) => {
                  setMargin_right(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Button Font Size'
                variant='standard'
                value={buttonFontSize}
                onChange={(e) => {
                  setButtonFontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Button Hover Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={buttonHoverColor}
                  onChange={(e) => {
                    setButtonHoverColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: buttonHoverColor,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Form Input Font Size'
                variant='standard'
                value={formInputFontSize}
                onChange={(e) => {
                  setFormInputFontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Input Feild Font Size'
                variant='standard'
                value={inputFeildFontSize}
                onChange={(e) => {
                  setInputFeildFontSize(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editGeneralDesign({
                      max_width1,
                      max_width2,
                      margin_top,
                      margin_bottom,
                      margin_left,
                      margin_right,
                      buttonFontSize,
                      buttonHoverColor,
                      formInputFontSize,
                      inputFeildFontSize,
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

export default Navbar;
