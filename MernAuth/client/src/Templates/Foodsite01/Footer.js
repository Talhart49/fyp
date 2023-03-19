import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editFooter,
  editFooterDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Footer() {
  const footerElements = useSelector((state) => state.FS1.footer);
  const footerDesign = useSelector((state) => state.FS1.footerDesign);

  useEffect(() => {
    console.log(footerElements);
    console.log(footerDesign);
  }, [footerElements, footerDesign]);

  const dispatch = useDispatch();

  const [footerElementsNew, setFooterElementsNew] = useState(footerElements);

  const [background_color, setBackground_color] = useState(
    footerDesign.background_color
  );

  const [padding, setPadding] = useState(footerDesign.padding);
  const [description_fontSize, setDescription_fontSize] = useState(
    footerDesign.description_fontSize
  );
  const [description_color, setDescription_color] = useState(
    footerDesign.description_color
  );

  const [icon_color, setIcon_color] = useState(footerDesign.icon_color);
  const [icon_fontSize, setIcon_fontSize] = useState(
    footerDesign.icon_fontSize
  );

  const [copyright_fontSize, setCopyright_fontSize] = useState(
    footerDesign.copyright_fontSize
  );
  const [copyright_color, setCopyright_color] = useState(
    footerDesign.copyright_color
  );

  return (
    <div>
      <div
        className='specific_customization_container'>
        <h1
          style={{
            textAlign: 'center',
            borderBottom: '1px solid #000',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Footer Customization
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
            <h3>Footer Elements</h3>
            <form
              action=''
              className='Elements_form'>
              {Object.keys(footerElements).map((key) => {
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
                    value={footerElementsNew[key]}
                    onChange={(e) => {
                      setFooterElementsNew({
                        ...footerElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editFooter(footerElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '1rem',
              width: '50%',
              height: '100%',
              paddingRight: '1rem',
            }}>
            <h3>Footer Design</h3>

            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              <h4>Background Color</h4>
              <InputColor
                initialValue={background_color}
                onChange={(e) => {
                  setBackground_color(e.hex);
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 50,
                  marginTop: 20,
                  backgroundColor: background_color,
                }}
              />

              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Padding'
                variant='standard'
                name='padding'
                value={padding}
                onChange={(e) => {
                  setPadding(e.target.value);
                }}
              />

              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Description Font Size'
                variant='standard'
                name='description_fontSize'
                value={description_fontSize}
                onChange={(e) => {
                  setDescription_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Description Color
              </InputLabel>
              <InputColor
                initialValue={description_color}
                onChange={(e) => {
                  setDescription_color(e.hex);
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 50,
                  marginTop: 20,
                  backgroundColor: description_color,
                }}
              />
              <InputLabel id='demo-simple-select-label'>Icon Color</InputLabel>
              <InputColor
                initialValue={icon_color}
                onChange={(e) => {
                  setIcon_color(e.hex);
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 50,
                  marginTop: 20,
                  backgroundColor: icon_color,
                }}
              />

              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Icon Font Size'
                variant='standard'
                name='icon_fontSize'
                value={icon_fontSize}
                onChange={(e) => {
                  setIcon_fontSize(e.target.value);
                }}
              />

              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Copyright Font Size'
                variant='standard'
                name='copyright_fontSize'
                value={copyright_fontSize}
                onChange={(e) => {
                  setCopyright_fontSize(e.target.value);
                }}
              />
              <InputLabel id='demo-simple-select-label'>
                Copyright Color
              </InputLabel>
              <InputColor
                initialValue={copyright_color}
                onChange={(e) => {
                  setCopyright_color(e.hex);
                }}
              />
              <div
                style={{
                  weight: '100px',
                  height: '50px',
                  backgroundColor: copyright_color,
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      background_color,
                      padding,
                      description_fontSize,
                      description_color,
                      icon_color,
                      icon_fontSize,
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

export default Footer;
