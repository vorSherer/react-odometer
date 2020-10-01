import React from 'react';
import './App.css';

export default function App() {
  
  // Header Component
  //   text value via props
  class Header extends React.Component {
    render() {
      return (
        <header>
          <p>{this.props.name}'s view from the top!</p>
        </header>        
      );
    }    
  }
  
  // Footer Component
  //   trademark value via props
  {/* <p>&copy 2020, vorSherer Creations</p> */}
  class Footer extends React.Component {
    render() {
      return (
        <footer>
          <p>Greetings, {this.props.name}, from the footer of my page</p>
          <p>&copy 2020, vorSherer Creations</p>
        </footer>        
      );
    }
  }    

  return (
    <>
      <Header name="Ralph" />
      <div className="App">
        <h1>Life Odometer - rough road ahead, your mileage may vary!</h1>
        <h2>Proof of Life!</h2>
      </div>
      <div>
        <MoodToday mood='Happy' />
      </div>
      <aside>
        <h3>Just an aside here...</h3>
      </aside>
      <Footer name="Earthling" />
    </>        
  );
}    

// Odometer Component

// format - 4 digits, leading zeroes required
// format d

// button - incr odo by 1
// button - incr odo by 10
// button - incr odo by 100
// button - incr odo by 1000

// if odo > 9999, then odo -= 10000

// Update state in a "React Way"

  class MoodToday extends React.Component {

    constructor() {
      super();
      this.state = {
        mood: 'neutral'
      };
    }
    
    changeMood(change) {
      this.setState({
        mood: 'Happy'
      });
    }


    render() {
      return (
        <>
          <h3>Today is a... {this.state.mood} day.</h3>
          <button onClick={() => this.changeMood('improve')}>Improve</button>
          <button onClick={() => this.changeMood('reduce')}>Reduce</button>
        </>
      )
    };
  }

