import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import { editRecomendedBlogs } from '../../redux/Blog01_redux/Blog01_Slice';

function RecommendedBlogs() {
  const recomendedBlogsElements = useSelector(
    (state) => state.B01.recomendedBlogs
  );

  useEffect(() => {
    console.log(recomendedBlogsElements);
  }, [recomendedBlogsElements]);

  const dispatch = useDispatch();

  const [recomendedBlogsElementsNew, setRecomendedBlogsElementsNew] = useState(
    recomendedBlogsElements
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
          Recommended Blogs Customization
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
            <h3>Blog Post Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(recomendedBlogsElements).map((key) => {
                return (
                  <TextField
                    rows={4}
                    multiline
                    sx={{ width: '100%' }}
                    key={key}
                    id='standard-basic'
                    label={key}
                    variant='standard'
                    name={key}
                    value={recomendedBlogsElementsNew[key]}
                    onChange={(e) => {
                      setRecomendedBlogsElementsNew({
                        ...recomendedBlogsElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editRecomendedBlogs(recomendedBlogsElementsNew));
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

export default RecommendedBlogs;
