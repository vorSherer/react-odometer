import React from 'react';
import './App.css';

export default function App() {
  // banner = 'Life Odometer - rough road ahead, your mileage may vary'
  let username = "Bob"
  
  function getLocation() {
    return "Stuck between a rock and a hard place..."
  }    
  
  
  // Header Component
  //   text value via props
  function Header(props) {
    return (
      <header>
        <p>{props.name}'s view from the top!</p>
      </header>        
    )
  }    
  

  // Footer Component
  //   trademark value via props
  {/* <p>&copy 2020, vorSherer Creations</p> */}
  function Footer(props) {
    return (
      <footer>
        <p>Greetings, {props.name}, from the footer of my page</p>
        <p>&copy 2020, vorSherer Creations</p>
      </footer>        
    )
  }    

  return (
    <>
      <Header name="Ralph" />
      <div className="App">
        <h1>Hello, {username}!</h1>
        <h2>Proof of Life!</h2>
        <h3>{getLocation()}</h3>
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
      }
    }
    
    changeMood(change) {
      this.setState({mood: 'Happy'}
      )
    }


    render() {
      return (
        <div>
          <h3>Today is a... {this.state.mood} day.</h3>
          <button onClick={() => this.changeMood(change: 'improve')}>Improve</button>
          <button onClick={() => this.changeMood(change: 'reduce')}>Reduce</button>
        </div>
      )
    };
  }

