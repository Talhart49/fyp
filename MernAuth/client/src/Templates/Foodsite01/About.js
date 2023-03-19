import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import {
  editAbout,
  editAboutDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function About() {
  const AboutElements = useSelector((state) => state.FS1.about);
  const AboutDesign = useSelector((state) => state.FS1.aboutDesign);

  useEffect(() => {
    console.log(AboutDesign);
  }, [AboutDesign]);

  const dispatch = useDispatch();

  const [aboutElementsNew, setAboutElementsNew] = useState(AboutElements);

  const [text_align, setTextAlign] = useState(AboutDesign.text_align);
  const [heading_fontSize, setH_FontSize] = useState(
    AboutDesign.heading_fontSize
  );
  const [heading_fontWeight, setH_FontWeight] = useState(
    AboutDesign.heading_fontWeight
  );
  const [paragraph_fontSize, setP_FontSize] = useState(
    AboutDesign.paragraph_fontSize
  );
  const [paragraph_fontWeight, setP_FontWeight] = useState(
    AboutDesign.paragraph_fontWeight
  );

  const [padding, setPadding] = useState(AboutDesign.padding);

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
            <form
              action=''
              className='Elements_form'>
              {Object.keys(AboutElements).map((key) => {
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
              <InputLabel id='demo-simple-select-label'>Text Align</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={text_align}
                onChange={(e) => {
                  setTextAlign(e.target.value);
                }}>
                <MenuItem value='left'>Left</MenuItem>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='right'>Right</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Heading Font Size'
                variant='standard'
                value={heading_fontSize}
                onChange={(e) => {
                  setH_FontSize(e.target.value);
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
                  setH_FontWeight(e.target.value);
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
                  setP_FontSize(e.target.value);
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
                  setP_FontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>Lighter</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='bolder'>Bolder</MenuItem>
              </Select>

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

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editAboutDesign({
                      heading_fontSize,
                      heading_fontWeight,
                      paragraph_fontSize,
                      paragraph_fontWeight,
                      text_align,
                      padding,
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
