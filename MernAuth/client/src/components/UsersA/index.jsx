import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

const renderDetailsButton = (params) => {
  return (
    <strong>
      <Button
        variant='contained'
        color='primary'
        size='small'
        style={{ marginLeft: 16 }}>
        {params.row.block === 0 ? 'Block' : 'Unblock'}
      </Button>
    </strong>
  );
};

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
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

const rows = [
  {
    id: 1,
    fullName: 'Snow',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: 0,
  },
  {
    id: 2,
    fullName: 'Lannister',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 3,
    fullName: 'Lannister',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 4,
    fullName: 'Stark',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Premium',
    block: '0',
  },
  {
    id: 5,
    fullName: 'Targaryen',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 6,
    fullName: 'Melisandre',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 7,
    fullName: 'Clifford',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 8,
    fullName: 'Frances',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
  {
    id: 9,
    fullName: 'Roxie',
    phone: '03025754902',
    email: 'Snow@snow.com',
    status: 'Normal',
    block: '0',
  },
];

// const columns = React.useMemo(
//   () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
//   [data.columns]
// );

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

const Index = () => {
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  const [data, setData] = React.useState();
  const [modata, setModata] = React.useState([]);
  let d;
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/admin/`).then((res) => {
      setData(res.data);
      console.log(res.data);
      modifying(res.data);
    });
  }, []);

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
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          height: 500,
          width: '65%',
          boxShadow: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: 1,
        }}>
        <DataGrid
          rows={AllUsersData}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
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
    </Box>
  );
};

export default Index;
