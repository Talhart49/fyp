import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';

import WebAssetIcon from '@mui/icons-material/WebAsset';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import PaymentsIcon from '@mui/icons-material/Payments';

import axios from 'axios';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [templatesCount, setTemplatesCount] = useState();
  const [templatePercent, setTemplatePercent] = useState();
  const [totalTemplatesCount, setTotalTemplatesCount] = useState();
  const [totalTemplatePercent, setTotalTemplatePercent] = useState();

  const [totalUsers, setTotalUsers] = useState();
  const [totalPremiumUsers, setTotalPremiumUsers] = useState();

  const [recentPayments, setRecentPayments] = useState();

  const [Revenue, setRevenue] = useState();
  const [totalRevenue, setTotalRevenue] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/usersTemplate/').then((res) => {
      setTotalTemplatesCount(res.data.length);
    });

    axios
      .get('http://localhost:8080/api/usersTemplate/templates/total')
      .then((res) => {
        setTemplatesCount(res.data.length);
      });

    axios
      .get('http://localhost:8080/api/usersTemplate/templates/IncreasePercent')
      .then((res) => {
        setTemplatePercent(res.data.percentageIncrease);
      });

    axios
      .get(
        'http://localhost:8080/api/usersTemplate/templates/totalIncreasePercent'
      )
      .then((res) => {
        setTotalTemplatePercent(res.data.percentageIncrease);
      });

    axios.get('http://localhost:8080/api/users/totalUsers').then((res) => {
      setTotalUsers(res.data.length);
      console.log(res.data);
    });

    axios
      .get('http://localhost:8080/api/users/totalPremiumUsers/find')
      .then((res) => {
        setTotalPremiumUsers(res.data.length);
        console.log(res.data);
      });

    axios.get('http://localhost:8080/api/payment/recent').then((res) => {
      setRecentPayments(res.data);
      console.log(res.data);
    });

    axios.get('http://localhost:8080/api/payment/Revenue').then((res) => {
      setRevenue(res.data.total);
      console.log('data', res.data);
    });

    axios
      .get('http://localhost:8080/api/payment/Revenue/monthVise')
      .then((res) => {
        setTotalRevenue(res.data.total);
        console.log('data', res.data);
      });
  }, []);

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px'>
        {/* ROW 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title={totalTemplatesCount}
            subtitle='Total Templates created'
            progress={(100 % totalTemplatesCount) / 100}
            increase={
              totalTemplatePercent === null
                ? totalTemplatesCount + '%'
                : totalTemplatePercent + '%'
            }
            icon={
              <WebAssetIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title={templatesCount}
            subtitle='
            public Templates'
            progress={(100 % templatesCount) / 100}
            increase={
              templatePercent === null
                ? templatesCount + '%'
                : templatePercent + '%'
            }
            icon={
              <WebStoriesIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title={totalUsers}
            subtitle='Total Users'
            progress={(100 % totalUsers) / 100}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title={totalPremiumUsers}
            subtitle='Total Premium Users'
            progress={(100 % totalPremiumUsers) / 100}
            icon={
              <PaymentsIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex '
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography
                variant='h3'
                fontWeight='bold'
                color={colors.greenAccent[500]}>
                ${totalRevenue}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height='250px' m='-20px 0 0 0'>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Recent Transactions
            </Typography>
          </Box>
          {recentPayments &&
            recentPayments.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={`4px solid ${colors.primary[500]}`}
                p='15px'>
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant='h5'
                    fontWeight='600'>
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.name}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>
                  {' '}
                  {new Date(transaction.date).toLocaleDateString()}
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p='5px 10px'
                  borderRadius='4px'>
                  ${transaction.price}
                </Box>
              </Box>
            ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'>
          <Typography variant='h5' fontWeight='600'>
            Revenue
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'>
            <ProgressCircle size='125' />
            <Typography
              variant='h5'
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}>
              ${Revenue} revenue generated last Week
            </Typography>
            <Typography>Income to Goals Ratio </Typography>
          </Box>
        </Box>
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ padding: '30px 30px 0 30px' }}>
            Feedbacks on the Basis of Templates
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          padding='30px'>
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ marginBottom: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
