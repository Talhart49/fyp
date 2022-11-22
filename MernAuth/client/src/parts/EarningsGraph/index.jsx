import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Oct',
    Users: 590,
    Templates: 800,
    Earnings: 1400,
  },
  {
    name: 'Nov',
    Users: 868,
    Templates: 967,
    Earnings: 1506,
  },
  {
    name: 'Dec',
    Users: 1397,
    Templates: 1098,
    Earnings: 989,
  },
  {
    name: 'Jan',
    Users: 1480,
    Templates: 1200,
    Earnings: 1228,
  },
  {
    name: 'Feb',
    Users: 1520,
    Templates: 1108,
    Earnings: 1100,
  },
  {
    name: 'Mar',
    Users: 1400,
    Templates: 680,
    Earnings: 1700,
  },
];

export default class Graphs extends PureComponent {
  render() {
    return (
      <div style={{ width: '50%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' scale='band' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='Earnings'
              fill='#8884d8'
              stroke='#8884d8'
            />
            <Bar dataKey='Templates' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='Users' stroke='#ff7300' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
