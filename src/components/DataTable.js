import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import ItemTable from './ItemTable';
export default class DataTable extends Component {
  render() {
    return (
      <div className="table-scroll">
        <Table striped>
          <thead>
            <tr>
              <th>Lokasi </th>
              <th>Terinfeksi</th>
              <th>Pulih</th>
              <th>Meninggal</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <ItemTable />
        </Table>
      </div>
    );
  }
}
