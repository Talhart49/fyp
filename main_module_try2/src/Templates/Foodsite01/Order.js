import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editOrder,
  editOrderDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Order() {
  const orderElements = useSelector((state) => state.FS1.order);
  const orderDesign = useSelector((state) => state.FS1.orderDesign);

  useEffect(() => {
    console.log(orderElements);
    console.log(orderDesign);
  }, [orderElements, orderDesign]);

  const dispatch = useDispatch();

  const [orderElementsNew, setOrderElementsNew] = useState(orderElements);

  const [form_padding, setForm_padding] = useState(orderDesign.form_padding);
  const [form_textAlign, setForm_textAlign] = useState(
    orderDesign.form_textAlign
  );
  const [input_feilds_fontSize, setInput_feilds_fontSize] = useState(
    orderDesign.input_feilds_fontSize
  );

  const [input_feilds_padding, setInput_feilds_padding] = useState(
    orderDesign.input_feilds_padding
  );

  const [input_feilds_margin, setInput_feilds_margin] = useState(
    orderDesign.input_feilds_margin
  );

  const [input_feilds_backgroundColor, setInput_feilds_backgroundColor] =
    useState(orderDesign.input_feilds_backgroundColor);

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
          Order Customization
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
              paddingRight: '1rem',
              borderRight: '1px solid #000',
              paddingRight: '1rem',
            }}>
            <h3>Order Elements</h3>
            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              {Object.keys(orderElements).map((key) => {
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
                    value={orderElementsNew[key]}
                    onChange={(e) => {
                      setOrderElementsNew({
                        ...orderElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editOrder(orderElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '1rem',
              width: '50%',
              height: '100%',
              paddingRight: '1rem',
            }}>
            <h3>Order Design</h3>
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
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Form Padding'
                variant='standard'
                name='form_padding'
                value={form_padding}
                onChange={(e) => {
                  setForm_padding(e.target.value);
                }}
              />
              <InputLabel id='demo-simple-select-label'>
                Form Text Align
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={form_textAlign}
                label='Form Text Align'
                onChange={(e) => {
                  setForm_textAlign(e.target.value);
                }}>
                <MenuItem value='left'>Left</MenuItem>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='right'>Right</MenuItem>
              </Select>

              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Input Fields Font Size'
                variant='standard'
                name='input_feilds_fontSize'
                value={input_feilds_fontSize}
                onChange={(e) => {
                  setInput_feilds_fontSize(e.target.value);
                }}
              />
              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Input Fields Padding'
                variant='standard'
                name='input_feilds_padding'
                value={input_feilds_padding}
                onChange={(e) => {
                  setInput_feilds_padding(e.target.value);
                }}
              />
              <TextField
                type={'number'}
                sx={{ width: '100%' }}
                id='standard-basic'
                label='Input Fields Margin'
                variant='standard'
                name='input_feilds_margin'
                value={input_feilds_margin}
                onChange={(e) => {
                  setInput_feilds_margin(e.target.value);
                }}
              />
              <InputLabel id='demo-simple-select-label'>
                Input Fields Background Color
              </InputLabel>
              <InputColor
                initialValue={input_feilds_backgroundColor}
                onChange={(e) => {
                  setInput_feilds_backgroundColor(e.hex);
                }}
                placement='right'
              />
              <div
                style={{
                  width: '100px',
                  height: '50px',
                  backgroundColor: input_feilds_backgroundColor,
                  margin: '1rem 0',
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editOrderDesign({
                      form_padding,
                      form_textAlign,
                      input_feilds_fontSize,
                      input_feilds_padding,
                      input_feilds_margin,
                      input_feilds_backgroundColor,
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

export default Order;
