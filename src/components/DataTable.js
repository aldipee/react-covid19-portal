import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import ItemTable from './ItemTable';
export default class DataTable extends Component {
  render() {
    const titleTable = ['Lokasi', 'Terinfeksi', 'Pulih', 'Meninggal', 'Last Update'];
    return (
      <div className="table-scroll">
        <Table striped>
          <thead>
            <tr>
              {titleTable.map((data, index) => (
                <th>{data}</th>
              ))}
            </tr>
          </thead>
          <ItemTable />
        </Table>
      </div>
    );
  }
}
