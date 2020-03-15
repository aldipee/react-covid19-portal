import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
export default class CardDashboar extends Component {
  render() {
    return (
      <Card border={this.props.lineColor} style={{width: '18rem'}}>
        <Card.Header>{this.props.titleCard}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.value}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
