import React, {Component} from 'react';

import {ContextData} from '../context';
import {angkaKoma, dateFormat} from '../utils/helper';

export default class ItemTable extends Component {
  static contextType = ContextData;
  render() {
    const {dataTable} = this.context.data;
    console.log(dataTable);
    return (
      <tbody>
        {dataTable &&
          dataTable.map((data, index) => (
            <tr key={index}>
              <td>
                {data && data.provinceState
                  ? `${data.provinceState} (${data.countryRegion})`
                  : data.countryRegion}
              </td>
              <td>{data && data.confirmed && angkaKoma(data.confirmed)}</td>
              <td>{data && data.recovered && angkaKoma(data.recovered)}</td>
              <td>{data && data.deaths && angkaKoma(data.deaths)}</td>
              <td>{data && data.lastUpdate && dateFormat(data.lastUpdate)}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}
