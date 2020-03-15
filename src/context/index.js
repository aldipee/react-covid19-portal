import React, {Component} from 'react';
import * as APIData from '../utils/dataApi';

export const ContextData = React.createContext();

export default class Provider extends Component {
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
      lastUpdate: 0,
    },
    dataTable: [],
    isLoading: true,
  };

  loadTable() {
    APIData.dataTable().then(data => {
      this.setState({
        dataTable: data,
      });
    });
  }

  loadData() {
    APIData.worldWideData().then(data => {
      this.setState({
        worldWide: {
          caseConfirmed: data.confirmed.value,
          deathConfirmed: data.deaths.value,
          healConfirmed: data.recovered.value,
        },
      });
    });
    APIData.localData().then(data => {
      this.setState({
        localCase: {
          caseConfirmed: data.confirmed.value,
          deathConfirmed: data.deaths.value,
          healConfirmed: data.recovered.value,
          lastUpdate: data.lastUpdate,
        },
      });
    });
  }

  componentDidMount() {
    this.loadData();
    this.loadTable();
  }

  render() {
    return (
      <ContextData.Provider
        value={{
          data: {
            worldWide: this.state.worldWide,
            localCase: this.state.localCase,
            dataTable: this.state.dataTable,
          },
        }}>
        {this.props.children}
      </ContextData.Provider>
    );
  }
}

export const Consumer = ContextData.Consumer;
