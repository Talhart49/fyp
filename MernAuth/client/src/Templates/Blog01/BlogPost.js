import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editBlogPost,
  editBlogPostDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function BlogPost() {
  const blogPostElements = useSelector((state) => state.B01.blogPost);
  const blogPostDesign = useSelector((state) => state.B01.blogPostDesign);

  useEffect(() => {
    console.log(blogPostElements);
  }, [blogPostElements]);

  const dispatch = useDispatch();

  const [blogPostElementsNew, setBlogPostElementsNew] =
    useState(blogPostElements);

  ///

  const [image_height, setImage_height] = useState(blogPostDesign.image_height);
  const [p_fontSize, setP_fontSize] = useState(blogPostDesign.p_fontSize);
  const [author_margin, setAuthor_margin] = useState(
    blogPostDesign.author_margin
  );
  const [cursor, setCursor] = useState(blogPostDesign.cursor);

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
          Blog Post Customization
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
            <h3>Blog Post Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(blogPostElements).map((key) => {
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
                    value={blogPostElementsNew[key]}
                    onChange={(e) => {
                      setBlogPostElementsNew({
                        ...blogPostElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editBlogPost(blogPostElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Blog Post Design</h3>
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
                label='Image Height'
                variant='standard'
                value={image_height}
                onChange={(e) => {
                  setImage_height(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Paragraph Font Size'
                variant='standard'
                value={p_fontSize}
                onChange={(e) => {
                  setP_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Author Margin'
                variant='standard'
                value={author_margin}
                onChange={(e) => {
                  setAuthor_margin(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Cursor
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={cursor}
                onChange={(e) => {
                  setCursor(e.target.value);
                }}>
                <MenuItem value='pointer'>Pointer</MenuItem>
                <MenuItem value='default'>Default</MenuItem>
              </Select>

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editBlogPostDesign({
                      image_height,
                      p_fontSize,
                      author_margin,
                      cursor,
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

export default BlogPost;
