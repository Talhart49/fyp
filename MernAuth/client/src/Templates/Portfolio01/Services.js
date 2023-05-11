import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editService,
  editServiceDesign,
} from '../../redux/Portfolio01_redux/P01_Slice';

function Home() {
  const serviceElements = useSelector((state) => state.P01.service);
  const serviceDesign = useSelector((state) => state.P01.serviceDesign);

  useEffect(() => {
    console.log(serviceElements);
  }, [serviceElements]);

  const dispatch = useDispatch();

  const [serviceElementsNew, setServiceElementsNew] = useState(serviceElements);

  ///

  const [Padding, setPadding] = useState(serviceDesign.Padding);
  const [cards_marginTop, setCards_marginTop] = useState(
    serviceDesign.cards_marginTop
  );
  const [icons_color, setIcons_color] = useState(serviceDesign.icons_color);
  const [icons_fontSize, setIcons_fontSize] = useState(
    serviceDesign.icons_fontSize
  );
  const [service_fontSize, setService_fontSize] = useState(
    serviceDesign.service_fontSize
  );
  const [service_paragraph_fontSize, setService_paragraph_fontSize] = useState(
    serviceDesign.service_paragraph_fontSize
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
          Services Customization
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
            <h3>Services Elements</h3>
            <form action='' className='Elements_form'>
              {Object.keys(serviceElements).map((key) => {
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
                    value={serviceElementsNew[key]}
                    onChange={(e) => {
                      setServiceElementsNew({
                        ...serviceElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editService(serviceElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Services Design</h3>
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
                label='Padding'
                variant='standard'
                value={Padding}
                onChange={(e) => {
                  setPadding(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Cards Margin Top'
                variant='standard'
                value={cards_marginTop}
                onChange={(e) => {
                  setCards_marginTop(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>Icons Color</InputLabel>
              <div
                style={{
                  width: '100px',
                }}>
                <InputColor
                  initialValue={icons_color}
                  onChange={(e) => {
                    setIcons_color(e.hex);
                  }}
                  placement='center'
                />
                <div
                  style={{
                    width: 100,
                    height: 50,
                    marginTop: 20,
                    backgroundColor: icons_color,
                  }}
                />
              </div>

              <TextField
                type='number'
                id='standard-basic'
                label='Icons Font Size'
                variant='standard'
                value={icons_fontSize}
                onChange={(e) => {
                  setIcons_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Service Font Size'
                variant='standard'
                value={service_fontSize}
                onChange={(e) => {
                  setService_fontSize(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Service Paragraph Font Size'
                variant='standard'
                value={service_paragraph_fontSize}
                onChange={(e) => {
                  setService_paragraph_fontSize(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editServiceDesign({
                      Padding,
                      cards_marginTop,
                      icons_color,
                      icons_fontSize,
                      service_fontSize,
                      service_paragraph_fontSize,
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
