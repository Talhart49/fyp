import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editSkills,
  editSkillsDesign,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const skillsElements = useSelector((state) => state.P01.skills);
  const skillsDesign = useSelector((state) => state.P01.skillsDesign);

  useEffect(() => {
    console.log(skillsDesign);
  }, [skillsDesign]);

  const dispatch = useDispatch();

  const [skillsElementsNew, setSkillsElementsNew] = useState(skillsElements);

  ///

  const [skills_section_heading_fontSize, setSkills_section_heading_fontSize] =
    useState(skillsDesign.skills_section_heading_fontSize);
  const [skills_heading_fontColor, setSkills_heading_fontColor] = useState(
    skillsDesign.skills_heading_fontColor
  );
  const [skills_heading_fontSize, setSkills_heading_fontSize] = useState(
    skillsDesign.skills_heading_fontSize
  );
  const [bars_height, setBars_height] = useState(skillsDesign.bars_height);

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
          Skills Customization
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
            <h3>Skills Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(skillsElements).map((key) => {
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
                    value={skillsElementsNew[key]}
                    onChange={(e) => {
                      setSkillsElementsNew({
                        ...skillsElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editSkills(skillsElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Skills Design</h3>
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
                label='Skills Section Heading Font Size'
                variant='standard'
                value={skills_section_heading_fontSize}
                onChange={(e) => {
                  setSkills_section_heading_fontSize(e.target.value);
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
                  initialValue={skills_heading_fontColor}
                  onChange={(e) => {
                    setSkills_heading_fontColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: skills_heading_fontColor,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Skills Heading Font Size'
                variant='standard'
                value={skills_heading_fontSize}
                onChange={(e) => {
                  setSkills_heading_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Bars Height'
                variant='standard'
                value={bars_height}
                onChange={(e) => {
                  setBars_height(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editSkillsDesign({
                      skills_section_heading_fontSize,
                      skills_heading_fontColor,
                      skills_heading_fontSize,
                      bars_height,
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
