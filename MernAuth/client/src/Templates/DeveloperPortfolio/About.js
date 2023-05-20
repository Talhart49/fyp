import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editabout,
  editaboutDesign,
} from '../../redux/PortfolioWeb_redux/PW_slice';

function About() {
  const aboutElements = useSelector((state) => state.PW.about);
  const aboutElemDesign = useSelector((state) => state.PW.aboutDesign);
  const rootTheme = useSelector((state) => state.PW.globalDesign);

  //   useEffect(() => {
  //     console.log(homeElements);
  //   }, [homeElements]);

  const dispatch = useDispatch();

  const [aboutElementsNew, setaboutElementsNew] = useState(aboutElements);

  const [about_paddingLeft, setabout_paddingLeft] = useState(
    aboutElemDesign.about_paddingLeft
  );
  const [about_paddingTop, setabout_paddingTop] = useState(
    aboutElemDesign.about_paddingTop
  );
  const [about_intro_fontSize, setabout_intro_fontSize] = useState(
    aboutElemDesign.about_intro_fontSize
  );
  const [about_intro_fontWeight, setabout_intro_fontWeight] = useState(
    aboutElemDesign.about_intro_fontWeight
  );
  const [about_intro_letterSpacing, setabout_intro_letterSpacing] = useState(
    aboutElemDesign.about_intro_letterSpacing
  );
  const [about_intro_marginBottom, setabout_intro_marginBottom] = useState(
    aboutElemDesign.about_intro_marginBottom
  );
  const [imageBorderRadius, setimageBorderRadius] = useState(
    aboutElemDesign.imageBorderRadius
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
                      setaboutElementsNew({
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
                  dispatch(editabout(aboutElementsNew));
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
                label='About padding left'
                variant='standard'
                value={about_paddingLeft}
                onChange={(e) => {
                  setabout_paddingLeft(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='About padding top'
                variant='standard'
                value={about_paddingTop}
                onChange={(e) => {
                  setabout_paddingTop(e.target.value);
                }}
              />
              <TextField
                type='number'
                id='standard-basic'
                label='Introduction font Size'
                variant='standard'
                value={about_intro_fontSize}
                onChange={(e) => {
                  setabout_intro_fontSize(e.target.value);
                }}
              />
              <TextField
                type='number'
                id='standard-basic'
                label='Introduction font weight'
                variant='standard'
                value={about_intro_fontWeight}
                onChange={(e) => {
                  setabout_intro_fontWeight(e.target.value);
                }}
              />
              <TextField
                type='number'
                id='standard-basic'
                label='Introduction letter spacing'
                variant='standard'
                value={about_intro_letterSpacing}
                onChange={(e) => {
                  setabout_intro_letterSpacing(e.target.value);
                }}
              />
              <TextField
                type='number'
                id='standard-basic'
                label='Introduction margin bottom'
                variant='standard'
                value={about_intro_marginBottom}
                onChange={(e) => {
                  setabout_intro_marginBottom(e.target.value);
                }}
              />
              <TextField
                type='number'
                id='standard-basic'
                label='Image border radius'
                variant='standard'
                value={imageBorderRadius}
                onChange={(e) => {
                  setimageBorderRadius(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editaboutDesign({
                      about_paddingLeft,
                      about_paddingTop,
                      about_intro_fontSize,
                      about_intro_fontWeight,
                      about_intro_letterSpacing,
                      about_intro_marginBottom,
                      imageBorderRadius,
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
