import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editContact,
  editContactDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function Home() {
  const contactElements = useSelector((state) => state.B01.contact);
  const contactDesign = useSelector((state) => state.B01.contactDesign);

  useEffect(() => {
    console.log(contactDesign);
  }, [contactDesign]);

  const dispatch = useDispatch();

  const [contactElementsNew, setContactElementsNew] = useState(contactElements);

  ///

  const [opacity, setOpacity] = useState(contactDesign.opacity);
  const [borderRadius, setBorderRadius] = useState(contactDesign.borderRadius);
  const [zIndex, setZIndex] = useState(contactDesign.zIndex);

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
            <form action='' className='Elements_form'>
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
                    editContactDesign({
                      opacity,
                      borderRadius,
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

export default Home;
