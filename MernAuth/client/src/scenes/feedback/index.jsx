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
import Modal from '@mui/material/Modal';
import DescriptionIcon from '@mui/icons-material/Description';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#f3eded',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

const FAQ = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [response, setResponse] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/feedback').then((res) => {
      setFeedbacks(res.data.feedbacks);
      console.log(res.data.feedbacks);
    });
  }, []);

  const handleRespond = (id) => {
    axios
      .put(`http://localhost:8080/api/feedback/${id}`, {
        feedbackResponse: response,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      });
  };

  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Header
        title='Feedbacks'
        subtitle='All the Feedbacks are displayed below'
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
            Please Enter Your Response
          </h3>

          <DescriptionIcon
            style={{
              color: '#3f51b5',
              fontSize: '3rem',
              textAlign: 'center',
              margin: '0 auto',
              display: 'block',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
            }}>
            <FormLabel
              id='demo-radio-buttons-group-label'
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '1rem',
                marginBottom: '0.5rem',
                color: 'black',
              }}>
              What Could We Do Better?
            </FormLabel>

            <TextField
              style={{
                width: '80%',
                background: '#727681',
                font: '2.5rem',
              }}
              id='outlined-multiline-static'
              label='Feedback'
              multiline
              rows={4}
              value={response}
              onChange={(e) => {
                setResponse(e.target.value);
              }}
            />
          </div>

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
              handleRespond(id);
              setOpen(false);
            }}>
            Submit
          </Button>
        </Box>
      </Modal>
      {feedbacks.map((item) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            mt: '20px',
          }}>
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: colors.primary[500],
              width: '60%',
              mt: '20px',
              borderRadius: '10px',
            }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant='h5'>
                {item.Template}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.feedback}</Typography>
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={item.rating}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  width: '100%',
                  mb: '20px',
                }}>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    setOpen(true);
                    setId(item._id);
                  }}>
                  Respond
                </Button>
              </Box>
              <Typography
                color={colors.greenAccent[500]}
                variant='h5'
                sx={{
                  width: '100%',
                  textAlign: 'right',
                  mr: '20px',
                }}>
                {item.userEmail}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
