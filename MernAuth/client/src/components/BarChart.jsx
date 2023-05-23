import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';
import axios from 'axios';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const [Feedbacks, setFeedbacks] = useState({
  //   FoodSite: 0,
  //   Agglomerate: 0,
  //   DeveloperPortfolio: 0,
  //   FuturisticPortfolio: 0,
  //   GradientBlog: 0,
  //   iBlog: 0,
  //   MyOnlineMeal: 0,
  //   ProfessionalPortfolio: 0,
  // });

  const [dataFeed, setDataFeed] = useState();

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/feedback').then((res) => {
  //     // setFeedbacks(res.data.feedbacks);
  //     setDataFeed(res.data.feedbacks);
  //     console.log(dataFeed);
  //   });

  // }, []);

  const [templates, setTemplates] = useState();
  useEffect(() => {
    const fetchData = () => {
      try {
        const res = axios.get('http://localhost:8080/api/feedback');
        const feedbacks = res.data.feedbacks;
        const templateCounts = feedbacks.reduce((countObj, feedback) => {
          const { Template } = feedback;
          countObj[Template] = (countObj[Template] || 0) + 1;
          return countObj;
        }, {});
        const templateData = Object.entries(templateCounts).map(
          ([Template, Feedbacks]) => ({
            Template,
            Feedbacks,
            usageColor: `hsl(22, ${Feedbacks}%, 50%)`,
          })
        );
        setDataFeed(feedbacks);
        setTemplates(templateData);
        console.log(templateData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={['Feedbacks']}
      indexBy='shortForm'
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '1.6']],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Template', // changed
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Feedbacks', // changed
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role='application'
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in Template: ' + e.indexValue;
      }}
    />
  );
};

export default BarChart;
