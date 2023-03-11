import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editHome,
  editHomeDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Home() {
  const homeElements = useSelector((state) => state.FS1.home);
  const homeDesign = useSelector((state) => state.FS1.homeDesign);

  useEffect(() => {
    console.log(homeDesign);
  }, [homeDesign]);

  const dispatch = useDispatch();

  const [homeElementsNew, setHomeElementsNew] = useState(homeElements);

  const [animation_background_color, setAnimationBackgroundColor] = useState(
    homeDesign.animation_background_color
  );
  const [text_align, setTextAlign] = useState(homeDesign.text_align);
  const [heading_fontSize, setH_FontSize] = useState(
    homeDesign.heading_fontSize
  );
  const [heading_fontWeight, setH_FontWeight] = useState(
    homeDesign.heading_fontWeight
  );
  const [paragraph_fontSize, setP_FontSize] = useState(
    homeDesign.paragraph_fontSize
  );
  const [paragraph_fontWeight, setP_FontWeight] = useState(
    homeDesign.paragraph_fontWeight
  );

  const [margin, setMargin] = useState(homeDesign.margin);

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
                    rows={5}
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
              <InputLabel id='demo-simple-select-label'>
                Animation Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={animation_background_color}
                  onChange={(e) => {
                    setAnimationBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: animation_background_color,
                  }}
                />
              </div>
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
                label='Margin'
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
                    editHomeDesign({
                      margin,
                      text_align,
                      heading_fontSize,
                      heading_fontWeight,
                      paragraph_fontSize,
                      paragraph_fontWeight,
                      animation_background_color,
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
