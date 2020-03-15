import React from 'react';
import {Card, Container} from 'react-bootstrap';

import {ContextData} from './context/index';
import Navigation from './components/Navbar';
import MainDashboard from './components/mainDashboard';
import DataTable from './components/DataTable';

class App extends React.Component {
  static contextType = ContextData;

  render() {
    const {worldWide, localCase} = this.context.data;
    return (
      <>
        <Navigation />
        {/* World Wide Dashboard */}
        <MainDashboard data={worldWide} title={'Total case worldwide'} />

        {/* Local Dashboard */}
        <MainDashboard data={localCase} title={'Total case Indonesia'} />

        {/* Data over All the wolrd */}
        <Container className="mt-5">
          <Card>
            <Card.Header className="text-center">
              {' '}
              <Card.Title>Data Global</Card.Title>
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
