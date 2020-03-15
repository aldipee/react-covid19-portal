import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
export default class CardDashboar extends Component {
  render() {
    return (
      <Card border="light" style={{width: '18rem'}} className="text-center">
        <Card.Header>
          <span className="font-weight-bold">{this.props.titleCard}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            <h4 className={`font-weight-bold ${this.props.fontColor}`}>{this.props.value}</h4>
          </Card.Title>
          <Card.Text>
            {/* Some quick example text to build on the card title and make up the bulk of the card's
            content */}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
