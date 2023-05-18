import React, { useState, useEffect } from 'react';
import { Box, useTheme, Button } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import StarRatingComponent from 'react-star-rating-component';

import Feedback from '../../parts/Feedback/Index';
import axios from 'axios';

import Modal from '@mui/material/Modal';
import DescriptionIcon from '@mui/icons-material/Description';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';

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

const FAQ = () => {
  const email = localStorage.getItem('email');
  const [feedbacks, setFeedbacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('5');
  const [feedback, setFeedback] = React.useState('');

  const handleSubmit = (id) => {
    console.log('id', id);
  };
  useEffect(() => {
    console.log('email', email);
    axios
      .get(`http://localhost:8080/api/feedback/feedbacks/${email}`)
      .then((res) => {
        setFeedbacks(res.data.feedbacks);
        console.log('feed', res.data.feedbacks);
      });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m='20px'
      style={{
        height: '100vh',
      }}>
      {!feedbacks.length === 0 ? (
        <Typography
          sx={{
            color: colors.blueAccent[500],
            fontSize: '30px',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: '20px',
            borderRadius: '10px',
            backgroundColor: colors.primary[300],
            padding: '10px',
          }}>
          No Feedbacks Yet
        </Typography>
      ) : (
        feedbacks.map((item) => (
          <Accordion
            key={item._id}
            defaultExpanded
            sx={{
              backgroundColor: colors.primary[300],
              width: '100%',
              mt: '20px',
              borderRadius: '10px',
            }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: colors.greenAccent[500],
                  }}
                />
              }>
              <Typography color={colors.greenAccent[500]} variant='h5'>
                {item.Template}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: colors.blueAccent[500],
                  fontSize: '20px',
                  fontWeight: 'bold',
                  mt: '20px',
                  borderRadius: '10px',
                }}>
                {item.feedback}
              </Typography>
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={item.rating}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'right',
                  justifyContent: 'right',
                }}>
                <Button
                  onClick={() => {
                    console.log('id', item._id);
                    axios
                      .delete(`http://localhost:8080/api/feedback/${item._id}`)
                      .then((res) => {
                        window.location.reload();
                      });
                  }}>
                  Delete
                </Button>
                {open && (
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
                          We are always looking for ways to improve our products
                          and services. Please take a moment to share your
                          feedback.
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
                            axios
                              .put(`http://localhost:8080/api/feedback/${id}`, {
                                rating: value,
                                feedback: feedback,
                              })
                              .then((res) => {
                                window.location.reload();
                              });

                            setOpen(false);
                          }}>
                          Submit
                        </Button>
                      </FormControl>
                    </Box>
                  </Modal>
                )}
                <Button
                  onClick={() => {
                    setOpen(true);
                    setId(item._id);
                  }}>
                  Update
                </Button>

                <Button
                  onClick={() => {
                    setOpen(true);
                    setId(item._id);
                  }}>
                  View Response
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default FAQ;
