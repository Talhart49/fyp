import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editAbout,
  editAboutDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function About() {
  const aboutElements = useSelector((state) => state.B01.about);
  const aboutDesign = useSelector((state) => state.B01.aboutDesign);

  useEffect(() => {
    console.log(aboutElements);
  }, [aboutElements]);

  const dispatch = useDispatch();

  const [aboutElementsNew, setAboutElementsNew] = useState(aboutElements);

  ///
  const [padding, setPadding] = useState(aboutDesign.padding);
  const [borderRadius, setBorderRadius] = useState(aboutDesign.borderRadius);
  const [opacity, setOpacity] = useState(aboutDesign.opacity);
  const [contentPadding, setContentPadding] = useState(
    aboutDesign.contentPadding
  );
  const [zIndex, setZIndex] = useState(aboutDesign.zIndex);

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
          About Customization
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
            <h3>About Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(aboutElements).map((key) => {
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
                    value={aboutElementsNew[key]}
                    onChange={(e) => {
                      setAboutElementsNew({
                        ...aboutElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editAbout(aboutElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>About Design</h3>
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
                label='Padding'
                variant='standard'
                value={padding}
                onChange={(e) => {
                  setPadding(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Border Radius'
                variant='standard'
                value={borderRadius}
                onChange={(e) => {
                  setBorderRadius(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Opacity'
                variant='standard'
                value={opacity}
                onChange={(e) => {
                  setOpacity(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Content Padding'
                variant='standard'
                value={contentPadding}
                onChange={(e) => {
                  setContentPadding(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Z Index'
                variant='standard'
                value={zIndex}
                onChange={(e) => {
                  setZIndex(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editAboutDesign({
                      padding,
                      borderRadius,
                      opacity,
                      contentPadding,
                      zIndex,
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
