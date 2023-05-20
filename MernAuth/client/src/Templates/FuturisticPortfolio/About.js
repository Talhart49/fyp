import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editAbout,
  editAboutDesign,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const aboutElements = useSelector((state) => state.P01.about);
  const aboutDesign = useSelector((state) => state.P01.aboutDesign);

  useEffect(() => {
    console.log(aboutElements);
  }, [aboutElements]);

  const dispatch = useDispatch();

  const [aboutElementsNew, setAboutElementsNew] = useState(aboutElements);

  ///

  const [section_heading_fontSize, setSection_heading_fontSize] = useState(
    aboutDesign.section_heading_fontSize
  );
  const [column_heading_fontSize, setColumn_heading_fontSize] = useState(
    aboutDesign.column_heading_fontSize
  );
  const [paragraph_fontSize, setParagraph_fontSize] = useState(
    aboutDesign.paragraph_fontSize
  );
  const [heading_color, setHeading_color] = useState(aboutDesign.heading_color);
  const [section_content_marginTop, setSection_content_marginTop] = useState(
    aboutDesign.section_content_marginTop
  );
  const [boxes_heading_fontSize, setBoxes_heading_fontSize] = useState(
    aboutDesign.boxes_heading_fontSize
  );
  const [heading_content_fontSize, setHeading_content_fontSize] = useState(
    aboutDesign.heading_content_fontSize
  );
  const [boxes_animation_direction, setBoxes_animation_direction] = useState(
    aboutDesign.boxes_animation_direction
  );
  const [boxes_animation_height, setBoxes_animation_height] = useState(
    aboutDesign.boxes_animation_height
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
                label='Section Heading Font Size'
                variant='standard'
                value={section_heading_fontSize}
                onChange={(e) => {
                  setSection_heading_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label=' Column Heading Font Size'
                variant='standard'
                value={column_heading_fontSize}
                onChange={(e) => {
                  setColumn_heading_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label=' Column Heading Font Size'
                variant='standard'
                value={paragraph_fontSize}
                onChange={(e) => {
                  setParagraph_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Heading Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={heading_color}
                  onChange={(e) => {
                    setHeading_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: heading_color,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Section Content Margin Top'
                variant='standard'
                value={section_content_marginTop}
                onChange={(e) => {
                  setSection_content_marginTop(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Heading Content Font Size'
                variant='standard'
                value={boxes_heading_fontSize}
                onChange={(e) => {
                  setBoxes_heading_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Heading Content Font Size'
                variant='standard'
                value={heading_content_fontSize}
                onChange={(e) => {
                  setHeading_content_fontSize(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Boxes Animation Direction
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={boxes_animation_direction}
                onChange={(e) => {
                  setBoxes_animation_direction(e.target.value);
                }}>
                <MenuItem value='up'>Up</MenuItem>
                <MenuItem value='down'>Down</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Boxes Animation Height'
                variant='standard'
                value={boxes_animation_height}
                onChange={(e) => {
                  setBoxes_animation_height(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editAboutDesign({
                      section_heading_fontSize,
                      column_heading_fontSize,
                      paragraph_fontSize,
                      heading_color,
                      section_content_marginTop,
                      boxes_heading_fontSize,
                      heading_content_fontSize,
                      boxes_animation_direction,
                      boxes_animation_height,
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
