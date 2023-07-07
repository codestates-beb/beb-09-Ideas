import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Management',
    uv: 4000,
    entire: 5,
    amt: 2400,
  },
  {
    name: 'Economy',
    uv: 3000,
    entire: 19,
    amt: 2210,
  },
  {
    name: 'Security',
    uv: 2000,
    entire: 15,
    amt: 2290,
  },
  {
    name: 'AI',
    uv: 2780,
    entire: 7,
    amt: 2000,
  },
  {
    name: 'Blockchain',
    uv: 1890,
    entire: 42,
    amt: 2181,
  },
  {
    name: 'Cloud',
    uv: 2390,
    entire: 3,
    amt: 2500,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="entire" fill="#cdcbe7" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
