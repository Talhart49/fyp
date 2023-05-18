import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { Box, Typography, useTheme } from '@mui/material';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

const Modall = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (params) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          User Details
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{
            mt: 2,
          }}>
          {}
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{
            mt: 2,
          }}>
          {}
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{
            mt: 2,
          }}>
          {}
          <Button
            variant='contained'
            color='primary'
            size='small'
            style={{ marginLeft: 16 }}></Button>
        </Typography>
      </Box>
    </Modal>
  );
};

const RenderViewButton = (params) => {
  const navigate = useNavigate();

  return (
    <>
      <strong>
        <Button
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}
          onClick={() => {
            localStorage.setItem('title', params.row.title);
            localStorage.setItem('guideCat', 'getCSSG');
            navigate('/dashboardAdmin/View_CSS');
          }}>
          View
        </Button>
      </strong>
    </>
  );
};

const RenderUpdateButton = (params) => {
  const navigate = useNavigate();

  console.log(params.row);
  return (
    <strong>
      <Button
        onClick={() => {
          localStorage.setItem('title', params.row.title);

          navigate('/dashboardAdmin/Update_CSS');
        }}
        variant='contained'
        color='primary'
        size='small'
        style={{ marginLeft: 16 }}>
        Update
      </Button>
    </strong>
  );
};

const RenderDeleteButton = (params) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (params) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  console.log(params.row);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are you sure?
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
            }}>
            {}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
            }}>
            {}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
            }}>
            <Button
              onClick={() => {
                console.log(params.row.title);
                axios
                  .delete(
                    `http://localhost:8080/api/getCSSG/${params.row.title}`
                  )
                  .then((res) => {
                    console.log(res);
                    console.log(res.data);
                  });
                window.location.reload(false);
              }}
              variant='contained'
              color='primary'
              size='small'
              style={{ marginLeft: 16 }}>
              Confirm
            </Button>
          </Typography>
        </Box>
      </Modal>
      <strong>
        <Button
          onClick={handleOpen}
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}>
          Delete
        </Button>
      </strong>
    </>
  );
};

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'view',
    headerName: 'View Guide',
    width: 150,
    renderCell: RenderViewButton,
  },
  {
    field: 'update',
    headerName: 'Update Guide',
    width: 150,
    renderCell: RenderUpdateButton,
  },
  {
    field: 'delete',
    headerName: 'Delete Guide',
    width: 150,
    renderCell: RenderDeleteButton,
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

const Index = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios.get('http://localhost:8080/api/getCSSG').then((res) => {
      setData(res.data);
      console.log('sfsf', res.data);
    });
  }, []);

  function generateRandom() {
    var length = 8,
      charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      retVal = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  return (
    <Box m='20px'>
      <Header title='CSS GUIDES' subtitle='Managing the CSS Guides' />
      <Box
        m='40px 0 0 0'
        height='65vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}>
        <DataGrid
          sx={{
            fontSize: '1rem',
            maxWidth: 1000,
            margin: 'auto',
          }}
          rows={data}
          columns={columns}
          getRowId={() => generateRandom()}
          pageSize={7}
          rowsPerPageOptions={[7]}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            panel: {
              anchorEl: filterButtonEl,
            },
            toolbar: {
              setFilterButtonEl,
            },
          }}
        />
      </Box>
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          marginTop: 2,
          backgroundColor: `${colors.primary[400]}`,
          color: `${colors.primary[100]}`,
          border: '1px solid black',
          borderRadius: 1,
        }}
        variant='contained'>
        <Link
          to='/dashboardAdmin/Add_CSS'
          style={{
            textDecoration: 'none',
            color: `${colors.primary[100]}`,
          }}>
          Add More
        </Link>
      </Button>
    </Box>
  );
};

export default Index;
