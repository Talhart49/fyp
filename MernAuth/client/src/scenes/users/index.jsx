import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';

import Header from '../../components/Header';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@mui/material/Modal';

const renderDetailsButton = (params) => {
  return (
    <strong>
      <Button
        variant='contained'
        color='primary'
        size='small'
        style={{ marginLeft: 16 }}>
        {params.row.block !== '0' ? 'Unblock' : 'Block'}
      </Button>
    </strong>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'fullName',
    headerName: 'Full Name',
    cellClassName: 'name-column--cell',
    width: 250,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    width: 250,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 250,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'block',
    headerName: 'Block User',
    width: 150,
    renderCell: renderDetailsButton,
  },
];

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const handleOpen = (params) => {
    setOpen(true);
    setModalData(params.row);
  };
  const handleClose = () => setOpen(false);

  const [data, setData] = React.useState();
  const [modata, setModata] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/admin/`).then((res) => {
      setData(res.data);
      console.log(res.data);
      modifying(res.data);
    });
  }, [modalData]);

  const handleBlockClick = (e, modalData) => {
    const email = modalData.email;
    console.log(email);
    axios
      .post(`http://localhost:8080/api/admin/block/${email}`, {
        block: modalData.block === '0' ? '1' : '0',
      })
      .then((res) => {
        console.log(email, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
    window.location.reload(false);
  };

  const modifying = async (data) => {
    const fdata = await data.filter((item) => item.fullName !== 'Admin');
    console.log('gg', fdata);
    console.log(modata);
    fdata.map((item, index) => {
      const obj = {
        id: index + 1,
        fullName: item.fullName,
        email: item.email,
        phone: item.phone,
        status: item.status,
        block: item.block,
      };
      setModata((prev) => [...prev, obj]);
    });
    console.log('modata', modata);
  };

  const AllUsersData = [];
  const uniqueUsers = modata.filter((item) => {
    const i = AllUsersData.findIndex((x) => x.id === item.id);
    if (i <= -1) {
      AllUsersData.push({ ...item });
      return true;
    }
    return false;
  });

  console.log('AllUsersData', AllUsersData);

  return (
    <Box m='20px'>
      <Header title='USERS' subtitle='Managing the Users' />
      <Box
        m='40px 0 0 0'
        height='75vh'
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
          rows={AllUsersData}
          columns={columns}
          pageSize={7}
          onCellClick={handleOpen}
          rowsPerPageOptions={[7]}
          components={{ Toolbar: GridToolbar }}
          sx={{ fontSize: 16, width: '90%', margin: '0 auto' }}
        />
      </Box>

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
            {modalData.fullName}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
            }}>
            {modalData.email}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
            }}>
            {modalData.phone}
            <Button
              variant='contained'
              color='primary'
              size='small'
              style={{ marginLeft: 16 }}
              onClick={(e) => handleBlockClick(e, modalData)}>
              {modalData.block !== '0' ? 'Unblock' : 'Block'}
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Team;
