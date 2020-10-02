import React from 'react';
import './App.css';

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

// Header Component
//   text value via props
class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>{this.props.text}</h2>
      </header>        
      );
    }    
  }
  
// Footer Component
//   trademark value via props
class Footer extends React.Component {
  render() {
    return (
      <footer>
          <h4>{this.props.trademark}</h4>
        </footer>            
      );
    }  
  }  
  
  class Odometer extends React.Component {
    // Update state in a "React Way"
    
    constructor() {
      super();
      this.state = {
        odometerValue: 0
      };
    }
    
    formatOdometerDisplay() {
      const odoDisplay = this.state.odometerValue
      // format - 4 digits, leading zeroes required
      // format d
      return odoDisplay.toString().padStart(4, '0');
    }
    
    incrementOdo(change) {
      let odoDisplay = this.state.odometerValue
      let newOdoValue = odoDisplay + change
      // Prevent rolling odometer backwards
      if (odoDisplay < 0) {
        odoDisplay = 0
      }
      
      // rolloverHandler
      console.log('Going in ', newOdoValue)

      if (newOdoValue > 9999) {
        console.log('Got this far ', newOdoValue)
        newOdoValue = newOdoValue - 10000
      }
      
      // Do the math here, above setState
      this.setState({
        odometerValue: newOdoValue
      });
    }
    
    render() {
      return (
        <>
          <div>
          <h1>Odometer value reads: {this.formatOdometerDisplay()}</h1>
          <button onClick={() => this.incrementOdo(1)}>+1</button>
          <button onClick={() => this.incrementOdo(10)}>+10</button>
          <button onClick={() => this.incrementOdo(100)}>+100</button>
          <button onClick={() => this.incrementOdo(1000)}>+1000</button>
          </div>
        </>            
      );
    };
  }

export default App;
