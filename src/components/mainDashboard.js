import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {angkaKoma} from '../utils/helper';
import CardDashboard from './CardDashboard';

export default class mainDashboard extends Component {
  render() {
    const {data} = this.props;
    return (
      <Container className="mt-5">
        <h3>{this.props.title}</h3>
        <Row>
          <Col>
            <CardDashboard
              lineColor="primary"
              titleCard="Case Confirmed"
              value={data && data.caseConfirmed && angkaKoma(data.caseConfirmed)}
              fontColor="text-warning"
            />
          </Col>
          <Col>
            <CardDashboard
              lineColor="success"
              titleCard="Recovery"
              value={data && data.healConfirmed && angkaKoma(data.healConfirmed)}
              fontColor="text-success"
            />
          </Col>
          <Col>
            <CardDashboard
              lineColor="danger"
              titleCard="Deaths"
              value={data && data.deathConfirmed && angkaKoma(data.deathConfirmed)}
              fontColor="text-danger"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
