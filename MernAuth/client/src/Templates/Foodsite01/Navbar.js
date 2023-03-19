import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editNavbar,
  editNavbarDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Navbar() {
  const navElements = useSelector((state) => state.FS1.navbar);
  const navDesign = useSelector((state) => state.FS1.navbarDesign);

  useEffect(() => {
    console.log(navDesign);
  }, [navDesign]);

  const dispatch = useDispatch();

  const [navElementsNew, setNavElementsNew] = useState(navElements);

  const [navPosition, setNavPosition] = useState(navDesign.position);
  const [navBackgroundColor, setNavBackgroundColor] = useState({});
  const [navHoverColor, setNavHoverColor] = useState({});
  const [navTextColor, setNavTextColor] = useState({});
  const [fontSize, setFontSize] = useState(navDesign.fontSize);
  const [fontWeight, setFontWeight] = useState(navDesign.fontWeight);
  const [fontFamily, setFontFamily] = useState(navDesign.fontFamily);
  const [padding, setPadding] = useState(navDesign.padding);
  const [margin, setMargin] = useState(navDesign.margin);

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
            <h3>Nav Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(navElements).map((key) => {
                return (
                  <TextField
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              <InputLabel id='NavbarPosition'>Navbar Position</InputLabel>
              <Select
                labelId='NavbarPosition'
                id='demo-simple-select'
                label='Age'
                value={navPosition}
                onChange={(e) => {
                  setNavPosition(e.target.value);
                }}>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='100%'>100%</MenuItem>
              </Select>
              <InputLabel id='demo-simple-select-label'>
                Navbar Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#f0f8ff'
                  onChange={(e) => {
                    setNavBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: navBackgroundColor,
                  }}
                />
              </div>
              <InputLabel id='demo-simple-select-label'>
                Navbar Element Hover Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#f7ca3e'
                  onChange={(e) => {
                    setNavHoverColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: navHoverColor,
                  }}
                />
              </div>
              <InputLabel id='demo-simple-select-label'>
                Navbar Text Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#000'
                  onChange={(e) => {
                    setNavTextColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: navTextColor,
                  }}
                />
              </div>
              <TextField
                type='number'
                id='standard-basic'
                label=' Font Size in rem'
                variant='standard'
                value={fontSize}
                onChange={(e) => {
                  setFontSize(e.target.value);
                }}
              />

              <InputLabel id='fontWeight'>Font Weight</InputLabel>
              <Select
                labelId='fontWeight'
                id='demo-simple-select'
                label='Age'
                value={fontWeight}
                onChange={(e) => {
                  setFontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>lighter</MenuItem>
                <MenuItem value='normal'>normal</MenuItem>
                <MenuItem value='bold'>bold</MenuItem>
                <MenuItem value='bolder'>bolder</MenuItem>
              </Select>

              <InputLabel id='fontFamily'> Font Family</InputLabel>
              <Select
                labelId='fontFamily'
                id='demo-simple-select'
                label='Age'
                value={fontFamily}
                onChange={(e) => {
                  setFontFamily(e.target.value);
                }}>
                <MenuItem value='Oswald'>Oswald</MenuItem>
                <MenuItem value='Roboto'>Roboto</MenuItem>
                <MenuItem value='sans-serif'>sans-serif</MenuItem>
              </Select>

              <TextField
                type={'number'}
                id='standard-basic'
                label='Padding in rem'
                variant='standard'
                value={padding}
                onChange={(e) => {
                  setPadding(e.target.value);
                }}
              />
              <TextField
                type={'number'}
                id='standard-basic'
                label='Margin in rem'
                variant='standard'
                value={margin}
                onChange={(e) => {
                  setMargin(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editNavbarDesign({
                      navPosition,
                      navBackgroundColor,
                      navHoverColor,
                      navTextColor,
                      fontSize,
                      fontWeight,
                      fontFamily,
                      padding,
                      margin,
                    })
                  );
                  console.log(navDesign);
                }}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
