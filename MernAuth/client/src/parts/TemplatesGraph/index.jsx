import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Text } from 'recharts';

const data = [
  { name: 'Ecommerce', value: 600 },
  { name: 'Portfolio', value: 50 },
  { name: 'Blogs', value: 300 },
  { name: 'Eduation', value: 200 },
];
const data2 = [
  { name: 'Shopiff', value: 100 },
  { name: 'Daraz', value: 900 },
  { name: 'Alibaba', value: 500 },
  { name: 'SellMore', value: 350 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill='#333'>{`RV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * -35}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill='#999'>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const [activeIndex2, setActiveIndex2] = useState(0);
  const onPieEnter2 = useCallback(
    (_, index2) => {
      setActiveIndex2(index2);
    },
    [setActiveIndex]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
      }}>
      <div>
        <h3
          style={{
            textAlign: 'start',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#000',
            marginTop: '1rem',
          }}>
          Top Category of Templates
        </h3>
        <PieChart
          width={450}
          height={400}
          style={{
            backgroundColor: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.1)',
            marginleft: '1rem',
            marginRight: '1rem',
          }}>
          <Text x={200} y={200} textAnchor='middle' dominantBaseline='middle'>
            1000
          </Text>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill='#53a018'
            dataKey='value'
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </div>
      <div>
        <h3
          style={{
            textAlign: 'start',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#000',
            marginTop: '1rem',
          }}>
          Top Templates
        </h3>
        <PieChart
          width={450}
          height={400}
          style={{
            backgroundColor: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.1)',
            marginleft: '1rem',
            marginRight: '1rem',
          }}>
          <Pie
            activeIndex={activeIndex2}
            activeShape={renderActiveShape}
            data={data2}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill='#8884d8'
            dataKey='value'
            onMouseEnter={onPieEnter2}
          />
        </PieChart>
      </div>
    </Box>
  );
}

export default App;
