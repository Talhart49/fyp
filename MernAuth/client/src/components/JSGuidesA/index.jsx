import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';

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
  return (
    <>
      <strong>
        <Button
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}>
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

          navigate('/Admin_Dashboard/Update_JS');
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
                    `http://localhost:8080/api/getJSG/${params.row.title}`
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

  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios.get('http://localhost:8080/api/getJSG').then((res) => {
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
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          height: 500,
          width: '45%',
          boxShadow: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: 1,
        }}>
        <DataGrid
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
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
          borderRadius: 1,
        }}
        variant='contained'>
        <Link
          to='/Admin_Dashboard/Add_JS'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}>
          Add More
        </Link>
      </Button>
    </Box>
  );
};

export default Index;
