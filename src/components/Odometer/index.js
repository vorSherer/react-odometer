import React from 'react';

class Odometer extends React.Component {
    
    constructor() {
      super();
      this.state = {
        odometerValue: 0
      };
    }
    
    formatOdometerDisplay() {
      const odoDisplay = this.state.odometerValue
      return odoDisplay.toString().padStart(4, '0');
    }
    
    updateOdo(change) {
      let odoDisplay = this.state.odometerValue
      let newOdoValue = odoDisplay + change

      // Prevent rolling odometer backwards
      console.log('Display = ', odoDisplay)
      if (newOdoValue < 0) {
        newOdoValue = 0
      }
      
      // rolloverHandler
      if (newOdoValue > 9999) {
        newOdoValue = newOdoValue - 10000
      }
      
      this.setState({
        odometerValue: newOdoValue
      });
    }
    
    render() {
      return (
        <>
          <div>
          <h1>Odometer value reads: {this.formatOdometerDisplay()}</h1>
          <button onClick={() => this.updateOdo(1)}>+1</button>
          <button onClick={() => this.updateOdo(10)}>+10</button>
          <button onClick={() => this.updateOdo(100)}>+100</button>
          <button onClick={() => this.updateOdo(1000)}>+1000</button>
          </div>
          <div>
          <button onClick={() => this.updateOdo(-1)}>-1</button>
          <button onClick={() => this.updateOdo(-10)}>-10</button>
          <button onClick={() => this.updateOdo(-100)}>-100</button>
          <button onClick={() => this.updateOdo(-1000)}>-1000</button>
          </div>
        </>            
      );
    };
  }

export default Odometer;
