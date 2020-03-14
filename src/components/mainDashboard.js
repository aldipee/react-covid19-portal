import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardDashboard from './CardDashboard'

export default class mainDashboard extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <h3>{this.props.title}</h3>
                <Row >
                    <Col>
                        <CardDashboard lineColor='primary' titleCard='Case Confirmed' value={this.props.caseConfirmed} />
                    </Col>
                    <Col>
                        <CardDashboard lineColor='success' titleCard='Recovery' value={this.props.healConfirmed} />
                    </Col>
                    <Col>
                        <CardDashboard lineColor='danger' titleCard='Deaths' value={this.props.deathConfirmed} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
