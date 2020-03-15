import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

import {ContextData} from '../context';
export default class Chart extends Component {
  static contextType = ContextData;
  render() {
    const {healConfirmed, deathConfirmed, caseConfirmed} = this.context.data.localCase;

    return (
      <HorizontalBar
        options={{
          maintainAspectRatio: false,
          legend: {display: false},
        }}
        data={{
          labels: ['Terinfeksi', 'Pulih', 'Meninggal'],
          datasets: [
            {
              label: ['Jumlah Korban'],
              backgroundColor: ['#fcd823', '#47b3e6', '#fc3923'],
              borderColor: 'rgb(255, 99, 132)',
              data: [caseConfirmed, healConfirmed, deathConfirmed],
            },
          ],
        }}
      />
    );
  }
}
