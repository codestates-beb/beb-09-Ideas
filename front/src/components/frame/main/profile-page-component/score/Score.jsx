import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';
  constructor(props) {
    super(props);
    this.state =  {
        data: [
    {
        name: 'Management',
        entire: 5,
    },
    {
        name: 'Economy',
        entire: 19,
    },
    {
        name: 'Security',
        entire: 15,
    },
    {
        name: 'AI',
        entire: 7,
    },
    {
        name: 'Blockchain',
        entire: 42,
    },
    {
        name: 'Cloud',
        entire: 3,
    }
    ]
    }
  }
    
  componentDidMount() {
    const userScore = this.props.userScore;
    let cateList = userScore?(Object.keys(userScore)?.slice(0,6)):""; // ['management', 'security', 'ecnomoy'] 같은 형식
    let scoreList = userScore?(Object.values(userScore)?.map(obj=>obj.score).slice(0,6)):""; // ['management', 'security', 'ecnomoy'] 같은 형식
    let newArr = [];
    for(let i=0; i<cateList?.length; i++) {
        newArr.push(
            {
                name: cateList[i],
                entire: scoreList[i]
            }
        )
    }
    
    this.setState((prevState)=>({data: newArr}));
    
  }

  
  render() {
    console.log(this.state);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
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
