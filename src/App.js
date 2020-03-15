import React from 'react';
import {Card, Container} from 'react-bootstrap';

import {ContextData} from './context/index';
import {dateFormat} from './utils/helper';
import Navigation from './components/Navbar';
import MainDashboard from './components/mainDashboard';
import DataTable from './components/DataTable';
import Chart from './components/Chart';

class App extends React.Component {
  static contextType = ContextData;

  render() {
    const {worldWide, localCase} = this.context.data;
    console.table(localCase);
    return (
      <>
        <Navigation />
        {/* World Wide Dashboard */}
        <Container className="mt-5">
          <Card>
            <Card.Header className="text-center">
              <Card.Title>
                <h5 className="font-weight-bold">Total case worldwide</h5>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <MainDashboard data={worldWide} />
            </Card.Body>
            <Card.Footer className="text-muted">
              Last update : {worldWide && worldWide.lastUpdate && dateFormat(worldWide.lastUpdate)}
            </Card.Footer>
          </Card>
        </Container>

        {/* Local Dashboard */}
        <Container className="mt-5">
          <Card>
            <Card.Header className="text-center">
              {' '}
              <Card.Title>
                {' '}
                <h5 className="font-weight-bold">Indonesia</h5>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Chart />
            </Card.Body>
            <Card.Footer className="text-muted">
              Last update : {localCase && localCase.lastUpdate && dateFormat(localCase.lastUpdate)}
            </Card.Footer>
          </Card>
        </Container>

        {/* <MainDashboard data={localCase} title={'Total case Indonesia'} /> */}

        {/* Data over All the wolrd */}
        <Container className="mt-5">
          <Card>
            <Card.Header className="text-center">
              <Card.Title>
                <h5 className="font-weight-bold">Global</h5>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <DataTable />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;
