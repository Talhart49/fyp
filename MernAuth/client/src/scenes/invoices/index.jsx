import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';

import axios from 'axios';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [modata, setModata] = React.useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/payment')

      .then((response) => {
        console.log(response.data);
        setInvoices(response.data);
        modifying(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const modifying = async (data) => {
    data.map((item, index) => {
      const obj = {
        id: index + 1,
        name: item.name,
        email: item.email,
        price: item.price,
        date: item.date,
      };
      setModata((prev) => [...prev, obj]);
    });
    console.log('modata', modata);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', fontSize: 16 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.price}
        </Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <Box m='20px'>
      <Header title='Payments' subtitle='List of Payments' />
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
          rows={modata}
          columns={columns}
          rowsPerPageOptions={[7]}
          pageSize={7}
          components={{ Toolbar: GridToolbar }}
          sx={{ fontSize: 16, width: '90%', margin: '0 auto' }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
