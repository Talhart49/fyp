import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editPopular,
  editPopularDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Popular() {
  const popularElements = useSelector((state) => state.FS1.popular);
  const popularDesign = useSelector((state) => state.FS1.popularDesign);

  useEffect(() => {
    console.log(popularElements);
    console.log(popularDesign);
  }, [popularElements, popularDesign]);

  const dispatch = useDispatch();

  const [popularElementsNew, setPopularElementsNew] = useState(popularElements);

  const [main_heading_marginTop, setMain_heading_marginTop] = useState(
    popularDesign.main_heading_marginTop
  );
  const [card_padding, setCard_padding] = useState(popularDesign.card_padding);
  const [transition_time, setTransition_time] = useState(
    popularDesign.transition_time
  );
  const [card_border_radius, setCard_border_radius] = useState(
    popularDesign.card_border_radius
  );
  const [card_heading_fontSize, setCard_heading_fontSize] = useState(
    popularDesign.card_heading_fontSize
  );
  const [card_heading_fontWeight, setCard_heading_fontWeight] = useState(
    popularDesign.card_heading_fontWeight
  );
  const [stars_fontSize, setStars_fontSize] = useState(
    popularDesign.stars_fontSize
  );
  const [stars_color, setStars_color] = useState(popularDesign.stars_color);
  const [price_fontSize, setPrice_fontSize] = useState(
    popularDesign.price_fontSize
  );

  const [card_background_color, setCard_background_color] = useState(
    popularDesign.card_background_color
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
          Popular Customization
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
            <h3>Popular Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(popularElements).map((key) => {
                return (
                  <TextField
                    sx={{ width: '100%' }}
                    key={key}
                    id='standard-basic'
                    label={key}
                    variant='standard'
                    name={key}
                    value={popularElementsNew[key]}
                    onChange={(e) => {
                      setPopularElementsNew({
                        ...popularElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editPopular(popularElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Popular Design</h3>
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
                id='standard-basic'
                label='Main Heading Margin Top'
                variant='standard'
                name='main_heading_marginTop'
                value={main_heading_marginTop}
                onChange={(e) => {
                  setMain_heading_marginTop(e.target.value);
                }}
              />
              <TextField
                id='standard-basic'
                label='Card Padding'
                variant='standard'
                name='card_padding'
                value={card_padding}
                onChange={(e) => {
                  setCard_padding(e.target.value);
                }}
              />
              <TextField
                id='standard-basic'
                label='Transition Time'
                variant='standard'
                name='transition_time'
                value={transition_time}
                onChange={(e) => {
                  setTransition_time(e.target.value);
                }}
              />
              <TextField
                id='standard-basic'
                label='Card Border Radius'
                variant='standard'
                name='card_border_radius'
                value={card_border_radius}
                onChange={(e) => {
                  setCard_border_radius(e.target.value);
                }}
              />
              <TextField
                id='standard-basic'
                label='Card Heading Font Size'
                variant='standard'
                name='card_heading_fontSize'
                value={card_heading_fontSize}
                onChange={(e) => {
                  setCard_heading_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Card Heading Font Weight
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={card_heading_fontWeight}
                label='Card Heading Font Weight'
                onChange={(e) => {
                  setCard_heading_fontWeight(e.target.value);
                }}>
                <MenuItem value={'normal'}>Normal</MenuItem>
                <MenuItem value={'bold'}>Bold</MenuItem>
                <MenuItem value={'bolder'}>Bolder</MenuItem>
                <MenuItem value={'lighter'}>Lighter</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Card Background Color
              </InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={card_background_color}
                  onChange={(e) => {
                    setCard_background_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: card_background_color,
                  }}
                />
              </div>

              <TextField
                id='standard-basic'
                label='Stars Font Size'
                variant='standard'
                name='stars_fontSize'
                value={stars_fontSize}
                onChange={(e) => {
                  setStars_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>Stars Color</InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={stars_color}
                  onChange={(e) => {
                    setStars_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: stars_color,
                  }}
                />
              </div>
              <TextField
                id='standard-basic'
                label='Price Font Size'
                variant='standard'
                name='price_fontSize'
                value={price_fontSize}
                onChange={(e) => {
                  setPrice_fontSize(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editPopularDesign({
                      main_heading_marginTop,
                      card_padding,
                      transition_time,
                      card_border_radius,
                      card_background_color,
                      card_heading_fontSize,
                      card_heading_fontWeight,
                      stars_fontSize,
                      stars_color,
                      price_fontSize,
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

export default Popular;
