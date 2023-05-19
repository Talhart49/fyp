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

import axios from 'axios';

const FAQ = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/feedback').then((res) => {
      setFeedbacks(res.data.feedbacks);
      console.log(res.data.feedbacks);
    });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Header
        title='Feedbacks'
        subtitle='All the Feedbacks are displayed below'
      />

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
                <Button variant='contained' color='secondary'>
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
