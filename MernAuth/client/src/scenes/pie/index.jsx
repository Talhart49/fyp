import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

const Pie = () => {
  return (
    <Box m='20px'>
      <Header
        title='Trending Templates Chart'
        subtitle='A pie Chart to display the Treding Templates and theeir usage occurance'
      />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
