import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import InputColor from 'react-input-color';

import {
  editMenu,
  editMenuDesign,
} from '../../redux/FoodSite01_redux/FS1_Slice';

function Home() {
  const menuElements = useSelector((state) => state.FS1.menu);
  const menuDesign = useSelector((state) => state.FS1.menuDesign);

  useEffect(() => {
    console.log(menuElements);
    console.log(menuDesign);
  }, [menuElements, menuDesign]);

  const dispatch = useDispatch();

  const [menuElementsNew, setMenuElementsNew] = useState(menuElements);

  const [info_heading_fontSize, setInfo_heading_fontSize] = useState(
    menuDesign.info_heading_fontSize
  );
  const [info_heading_fontWeight, setInfo_heading_fontWeight] = useState(
    menuDesign.info_heading_fontWeight
  );
  const [info_paragraph_fontSize, setInfo_paragraph_fontSize] = useState(
    menuDesign.info_paragraph_fontSize
  );
  const [info_paragraph_fontWeight, setInfo_paragraph_fontWeight] = useState(
    menuDesign.info_paragraph_fontWeight
  );
  const [text_align, setText_align] = useState(menuDesign.text_align);

  const [border_radius_img, setBorder_radius_img] = useState(
    menuDesign.border_radius_img
  );
  const [border_radius_frame, setBorder_radius_frame] = useState(
    menuDesign.border_radius_frame
  );
  const [image_padding, setImage_padding] = useState(menuDesign.image_padding);
  const [buttons_headings_border_type, setButtons_headings_border_type] =
    useState(menuDesign.buttons_headings_border_type);
  const [buttons_margin_bottom, setButtons_margin_bottom] = useState(
    menuDesign.buttons_margin_bottom
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
          Home Customization
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
            <h3>Menu Elements</h3>
            <form
              action=''
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                margin: '0 auto',
              }}>
              {Object.keys(menuElements).map((key) => {
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
                    value={menuElementsNew[key]}
                    onChange={(e) => {
                      setMenuElementsNew({
                        ...menuElementsNew,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                );
              })}
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(editMenu(menuElementsNew));
                }}>
                Save Changes
              </Button>
            </form>
          </div>

          <div>
            <h3>Menu Design</h3>
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
                label='Info Heading Font Size'
                variant='standard'
                value={info_heading_fontSize}
                onChange={(e) => {
                  setInfo_heading_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Info Heading Font Weight
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={info_heading_fontWeight}
                onChange={(e) => {
                  setInfo_heading_fontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>Lighter</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='bolder'>Bolder</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Info Paragraph Font Size'
                variant='standard'
                value={info_paragraph_fontSize}
                onChange={(e) => {
                  setInfo_paragraph_fontSize(e.target.value);
                }}
              />

              <InputLabel id='demo-simple-select-label'>
                Info Paragraph Font Weight
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={info_paragraph_fontWeight}
                onChange={(e) => {
                  setInfo_paragraph_fontWeight(e.target.value);
                }}>
                <MenuItem value='lighter'>Lighter</MenuItem>
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='bolder'>Bolder</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>Text Align</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={text_align}
                onChange={(e) => {
                  setText_align(e.target.value);
                }}>
                <MenuItem value='left'>Left</MenuItem>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='right'>Right</MenuItem>
              </Select>

              <InputLabel id='demo-simple-select-label'>
                Catergory Border Type
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={buttons_headings_border_type}
                onChange={(e) => {
                  setButtons_headings_border_type(e.target.value);
                }}>
                <MenuItem value='none'>None</MenuItem>
                <MenuItem value='solid'>Solid</MenuItem>
                <MenuItem value='dotted'>Dotted</MenuItem>
                <MenuItem value='dashed'>Dashed</MenuItem>
                <MenuItem value='double'>Double</MenuItem>
                <MenuItem value='groove'>Groove</MenuItem>
                <MenuItem value='ridge'>Ridge</MenuItem>
              </Select>

              <TextField
                type='number'
                id='standard-basic'
                label='Border Radius Image'
                variant='standard'
                value={border_radius_img}
                onChange={(e) => {
                  setBorder_radius_img(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Border Radius Frame'
                variant='standard'
                value={border_radius_frame}
                onChange={(e) => {
                  setBorder_radius_frame(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Image Padding'
                variant='standard'
                value={image_padding}
                onChange={(e) => {
                  setImage_padding(e.target.value);
                }}
              />

              <TextField
                type='number'
                id='standard-basic'
                label='Category Margin Bottom'
                variant='standard'
                value={buttons_margin_bottom}
                onChange={(e) => {
                  setButtons_margin_bottom(e.target.value);
                }}
              />

              <Button
                variant='contained'
                onClick={() => {
                  dispatch(
                    editMenuDesign({
                      info_heading_fontSize,
                      info_heading_fontWeight,
                      info_paragraph_fontSize,
                      info_paragraph_fontWeight,
                      text_align,
                      border_radius_img,
                      border_radius_frame,
                      image_padding,
                      buttons_headings_border_type,
                      buttons_margin_bottom,
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
