import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editPortfolio,
  editPortfolioDesign,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const portfolioElements = useSelector((state) => state.P01.portfolio);
  const portfolioDesign = useSelector((state) => state.P01.portfolioDesign);

  useEffect(() => {
    console.log(portfolioElements);
  }, [portfolioElements]);

  const dispatch = useDispatch();

  const [portfolioElementsNew, setPortfolioElementsNew] =
    useState(portfolioElements);

  ///

  const [text_fontSize, setText_fontSize] = useState(
    portfolioDesign.text_fontSize
  );
  const [text_align, setText_align] = useState(portfolioDesign.text_align);
  const [letter_spacing, setLetter_spacing] = useState(
    portfolioDesign.letter_spacing
  );
  const [cards_per_row, setCards_per_row] = useState(
    portfolioDesign.cards_per_row
  );
  const [card_gap, setCard_gap] = useState(portfolioDesign.card_gap);
  const [card_image_height, setCard_image_height] = useState(
    portfolioDesign.card_image_height
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
          Portfolio Customization
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
            <h3>Portfolio Elements</h3>
            <form
              action=''
              className='Elements_form'>
              {Object.keys(portfolioElements).map((key) => {
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
                    value={portfolioElementsNew[key]}
                    onChange={(e) => {
                      setPortfolioElementsNew({
                        ...portfolioElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editPortfolio(portfolioElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Portfolio Design</h3>
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
                label='Text Font Size'
                variant='standard'
                value={text_fontSize}
                onChange={(e) => {
                  setText_fontSize(e.target.value);
                }}
              />

              <InputLabel
                id='demo-simple-select-label'
                style={{
                  marginTop: '1rem',
                }}>
                Text Align
              </InputLabel>

              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={text_align}
                onChange={(e) => {
                  setText_align(e.target.value);
                }}>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='left'>Left</MenuItem>
                <MenuItem value='right'>Right</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Text Letter Spacing'
                variant='standard'
                value={letter_spacing}
                onChange={(e) => {
                  setLetter_spacing(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Cards Per Row'
                variant='standard'
                value={cards_per_row}
                onChange={(e) => {
                  setCards_per_row(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Card Gap'
                variant='standard'
                value={card_gap}
                onChange={(e) => {
                  setCard_gap(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Card Image Height'
                variant='standard'
                value={card_image_height}
                onChange={(e) => {
                  setCard_image_height(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editPortfolioDesign({
                      text_fontSize,
                      text_align,
                      letter_spacing,
                      cards_per_row,
                      card_gap,
                      card_image_height,
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
