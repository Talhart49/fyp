import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editContact,
  editContactDesign,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const contactElements = useSelector((state) => state.P01.contact);
  const contactDesign = useSelector((state) => state.P01.contactDesign);

  useEffect(() => {
    console.log(contactDesign);
  }, [contactDesign]);

  const dispatch = useDispatch();

  const [contactElementsNew, setContactElementsNew] = useState(contactElements);

  ///

  const [margin_top, setMargin_top] = useState(contactDesign.margin_top);
  const [grid_gap, setGrid_gap] = useState(contactDesign.grid_gap);
  const [font_style, setFont_style] = useState(contactDesign.font_style);
  const [input_feilds_fontSize, setInput_feilds_fontSize] = useState(
    contactDesign.input_feilds_fontSize
  );

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
          Contact Customization
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
            <h3>Contact Elements</h3>
            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              {Object.keys(contactElements).map((key) => {
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
                    value={contactElementsNew[key]}
                    onChange={(e) => {
                      setContactElementsNew({
                        ...contactElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editContact(contactElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Contact Design</h3>
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
                label='Margin Top'
                variant='standard'
                value={margin_top}
                onChange={(e) => {
                  setMargin_top(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Grid Gap'
                variant='standard'
                value={grid_gap}
                onChange={(e) => {
                  setGrid_gap(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Font Style
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={font_style}
                onChange={(e) => {
                  setFont_style(e.target.value);
                }}>
                <MenuItem value='italic'>Italic</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='oblique'>Oblique</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Input Fields Font Size'
                variant='standard'
                value={input_feilds_fontSize}
                onChange={(e) => {
                  setInput_feilds_fontSize(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editContactDesign({
                      margin_top,
                      grid_gap,
                      font_style,
                      input_feilds_fontSize,
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
