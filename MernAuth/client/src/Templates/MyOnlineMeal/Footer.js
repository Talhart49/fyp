import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import {
  editFooter,
  editFooterDesign,
} from '../../redux/Ecommerce02_redux/E02_Slice';

import InputColor from 'react-input-color';

function Footer() {
  const FooterElements = useSelector((state) => state.E02.footer);
  const FooterDesign = useSelector((state) => state.E02.footerDesign);

  useEffect(() => {
    console.log(FooterDesign);
  }, [FooterDesign]);

  const dispatch = useDispatch();

  const [FooterElementsNew, setFooterElementsNew] = useState(FooterElements);

  const [backgroundColor, setbackgroundColor] = useState(
    FooterDesign.backgroundColor
  );
  const [textColor, settextColor] = useState(FooterDesign.textColor);
  const [paddingTopAndBottom, setpaddingTopAndBottom] = useState(
    FooterDesign.paddingTopAndBottom
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
            <form action='' className='Elements_form'>
              {Object.keys(FooterElements).map((key) => {
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
                    value={FooterElementsNew[key]}
                    onChange={(e) => {
                      setFooterElementsNew({
                        ...FooterElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editFooter(FooterElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
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
              <InputLabel id='demo-simple-select-label'>
                Background color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#000000'
                  onChange={(e) => {
                    setbackgroundColor(e.hex);
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

              <InputLabel id='demo-simple-select-label'>
                Background color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue='#ffffff'
                  onChange={(e) => {
                    settextColor(e.hex);
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

              <TextField
                type='number'
                id='standard-basic'
                label='Padding top and bottom'
                variant='standard'
                value={paddingTopAndBottom}
                onChange={(e) => {
                  setpaddingTopAndBottom(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      backgroundColor,
                      textColor,
                      paddingTopAndBottom,
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
