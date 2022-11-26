import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const data = [
  {
    id: 1,
    title: 'Lizard',
    description: ' ranging across all continents except Antarctica',
    image: require('../../images/obito.jpeg'),
  },
  {
    id: 2,
    title: 'Lizard',
    description: ' ranging across all continents except Antarctica',
    image: require('../../images/obito.jpeg'),
  },
  {
    id: 3,
    title: 'Lizard',
    description: ' ranging across all continents except Antarctica',
    image: require('../../images/obito.jpeg'),
  },
];
const index = () => {
  return (
    <Box
      sx={{
        padding: 2,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexdirection: 'column',
          justifyContent: 'center',
          alignItems: '',
        }}>
        <Typography variant='h4' component='h3' gutterBottom>
          Templates A
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px',
            flexDirection: 'row',
            boxShadow: '0px 0px 10px 0px #000000',
            backgroundColor: '#fff',
            maxWidth: '80%',
            margin: 'auto',
          }}>
          {data.map((item) => (
            <Card sx={{ maxWidth: 345, maxHeight: 375 }} key={item.id}>
              <CardMedia
                component='img'
                height='65%'
                image={item.image}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
          <Link
            sx={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              alignItems: 'flex-end',
              padding: '20px',
              color: '#6076D2',
              cursor: 'pointer',
              minWidth: '130px',
            }}>
            See all--->
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default index;
