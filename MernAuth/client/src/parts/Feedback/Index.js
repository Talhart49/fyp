import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DescriptionIcon from '@mui/icons-material/Description';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function BasicModal({ email, template }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('5');
  const [feedback, setFeedback] = React.useState('');

  const handleSubmit = () =>
    fetch('http://localhost:8080/api/feedback/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        userEmail: email,
        Template: template,
        rating: value,
        feedback: feedback,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <Button
        style={{
          marginTop: 10,
          marginLeft: 10,
          alignContent: 'center',
        }}
        variant='contained'
        onClick={handleOpen}>
        Give Feedback
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <h3
            style={{
              textAlign: 'center',
              color: '#3f51b5',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginTop: '0',
            }}>
            Your Feedback
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderBottom: '0.5px dashed #000',
              width: '100%',
            }}>
            <DescriptionIcon
              style={{
                color: '#3f51b5',
                fontSize: '3rem',
                textAlign: 'center',
                margin: '0 auto',
                display: 'block',
              }}
            />
            <h4
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>
              Your Opinion Matters
            </h4>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1rem',
              }}>
              We are always looking for ways to improve our products and
              services. Please take a moment to share your feedback.
            </p>
          </div>
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '1rem',
            }}>
            <FormLabel
              id='demo-radio-buttons-group-label'
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>
              Your Rating
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='5'
              name='radio-buttons-group'>
              <FormControlLabel
                value='5'
                control={<Radio />}
                label='Very Good'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <FormControlLabel
                value='4'
                control={<Radio />}
                label='Good'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <FormControlLabel
                value='3'
                control={<Radio />}
                label='Mediocre'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <FormControlLabel
                value='2'
                control={<Radio />}
                label='Bad'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />

              <FormControlLabel
                value='1'
                control={<Radio />}
                label='Very Bad'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </RadioGroup>

            <FormLabel
              id='demo-radio-buttons-group-label'
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '1rem',
                marginBottom: '0.5rem',
              }}>
              What Could We Do Better?
            </FormLabel>

            <TextField
              id='outlined-multiline-static'
              label='Feedback'
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            />

            <Button
              type='submit'
              variant='contained'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                marginTop: '1rem',
                width: '100%',
              }}
              onClick={() => {
                handleSubmit();
              }}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
