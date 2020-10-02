import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Odometer from './components/Odometer'


class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>Life Odometer - rough road ahead, your mileage may vary!</h1>
          <Header text="Click buttons to update the odometer" />
          <Odometer />
        </div>
        <Footer trademark="&#169; 2020, vorSherer Creations" />
      </>
    )
  }
}

export default App;
