import React from 'react';

import * as APIData from './utils/dataApi'
import Navigation from './components/Navbar'
import MainDashboard from './components/mainDashboard';


class App extends React.Component {

  state = {
    worldWide: {
      caseConfirmed: 0,
      deathConfirmed: 0,
      healConfirmed: 0,
    },
    localCase: {
      caseConfirmed: 0,
      deathConfirmed: 0,
      healConfirmed: 0,
    },
    isLoading: true
  }

  loadData() {
    APIData.worldWideData().then(data => {
      this.setState({
        worldWide: {
          caseConfirmed: data.confirmed.value,
          deathConfirmed: data.deaths.value,
          healConfirmed: data.recovered.value,
        }
      })
    })
    APIData.localData().then(data => {
      this.setState({
        localCase: {
          caseConfirmed: data.confirmed.value,
          deathConfirmed: data.deaths.value,
          healConfirmed: data.recovered.value,
        }
      })
    })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <>
        <Navigation />
        {/* World Wide Dashboard */}
        <MainDashboard {...this.state.worldWide} title={'Total case worldwide'} />

        {/* Local Dashboard */}
        <MainDashboard {...this.state.localCase} title={'Total case Indonesia'} />
      </>
    )
  }
}

export default App;
