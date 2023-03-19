import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editArticles,
  editArticlesDesign,
} from '../../redux/Blog01_redux/Blog01_Slice';

function Articles() {
  const articlesElements = useSelector((state) => state.B01.articles);
  const articlesDesign = useSelector((state) => state.B01.articlesDesign);

  useEffect(() => {
    console.log(articlesElements);
  }, [articlesElements]);

  const dispatch = useDispatch();

  const [articlesElementsNew, setArticlesElementsNew] =
    useState(articlesElements);

  ///

  const [backgroundColor, setBackgroundColor] = useState(
    articlesDesign.backgroundColor
  );
  const [year_fontSize, setYear_fontSize] = useState(
    articlesDesign.year_fontSize
  );
  const [article_margin, setArticle_margin] = useState(
    articlesDesign.article_margin
  );
  const [article_Image_width, setArticle_Image_width] = useState(
    articlesDesign.article_Image_width
  );
  const [a_text_decoration, setA_text_decoration] = useState(
    articlesDesign.a_text_decoration
  );
  const [a_color, setA_color] = useState(articlesDesign.a_color);

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
          Articles Customization
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
            <h3>Articles Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(articlesElements).map((key) => {
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
                    value={articlesElementsNew[key]}
                    onChange={(e) => {
                      setArticlesElementsNew({
                        ...articlesElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editArticles(articlesElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Articles Design</h3>
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
                Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={backgroundColor}
                  onChange={(e) => {
                    setBackgroundColor(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: backgroundColor,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Year Font Size'
                variant='standard'
                value={year_fontSize}
                onChange={(e) => {
                  setYear_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Article Margin'
                variant='standard'
                value={article_margin}
                onChange={(e) => {
                  setArticle_margin(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Article Image Width'
                variant='standard'
                value={article_Image_width}
                onChange={(e) => {
                  setArticle_Image_width(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Anchor tag Text Decoration
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={a_text_decoration}
                onChange={(e) => {
                  setA_text_decoration(e.target.value);
                }}>
                <MenuItem value='none'>None</MenuItem>
                <MenuItem value='underline'>Underline</MenuItem>
                <MenuItem value='overline'>Overline</MenuItem>
                <MenuItem value='line-through'>Line Through</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Anchor tag Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={a_color}
                  onChange={(e) => {
                    setA_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: a_color,
                  }}
                />
              </div>

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editArticlesDesign({
                      backgroundColor,
                      year_fontSize,
                      article_margin,
                      article_Image_width,
                      a_text_decoration,
                      a_color,
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

export default Articles;
