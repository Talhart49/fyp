import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editFooter,
  editFooterDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function About() {
  const footerElements = useSelector((state) => state.B01.footer);
  const footerDesign = useSelector((state) => state.B01.footerDesign);

  useEffect(() => {
    console.log(footerElements);
  }, [footerElements]);

  const dispatch = useDispatch();

  const [footerElementsNew, setFooterElementsNew] = useState(footerElements);

  ///

  const [height, setHeight] = useState(footerDesign.height);
  const [color, setColor] = useState(footerDesign.color);
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
              <TextField
                type='number'
                id='standard-basic'
                label='Height'
                variant='standard'
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>Color</InputLabel>
              <InputColor
                initialValue={color}
                onChange={(e) => {
                  setColor(e.hex);
                }}
                placement='center'
              />
              <div
                style={{
                  width: 100,
                  height: 50,
                  marginTop: 20,
                  backgroundColor: color,
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editFooterDesign({
                      height,
                      color,
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

export default About;
