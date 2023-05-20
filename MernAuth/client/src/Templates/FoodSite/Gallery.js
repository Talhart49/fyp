import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import { editGallery } from '../../redux/FoodSite01_redux/FS1_Slice';

function Gallery() {
  const galleryElements = useSelector((state) => state.FS1.gallery);

  useEffect(() => {
    console.log(galleryElements);
  }, [galleryElements]);

  const dispatch = useDispatch();

  const [galleryElementsNew, setGalleryElementsNew] = useState(galleryElements);

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
          Gallery Customization
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
              width: '100%',
              height: '100%',
              paddingRight: '1rem',
            }}>
            <h3>Gallery Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(galleryElements).map((key) => {
                return (
                  <TextField
                    sx={{ width: '100%' }}
                    key={key}
                    id='standard-basic'
                    label={key}
                    variant='standard'
                    name={key}
                    value={galleryElementsNew[key]}
                    onChange={(e) => {
                      setGalleryElementsNew({
                        ...galleryElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editGallery(galleryElementsNew));
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

export default Gallery;
