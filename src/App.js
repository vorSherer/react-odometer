import React from 'react';
import './App.css';

export default function App() {
  // banner = 'Life Odometer - rough road ahead, your mileage may vary'
  let username = "Bob"

  function getLocation() {
    return "Stuck between a rock and a hard place..."
  }

  function Footer(props) {
    return (
      <footer>
        <p>&copy 2020, vorSherer Creations</p>
      </footer>
    )
  }

  return (
    <>
      <div className="App">
        <h1>Hello, {username}!</h1>
        <h2>Proof of Life!</h2>
        <h3>{getLocation()}</h3>
      </div>
      <aside>
        <h3>Just an aside here...</h3>
      </aside>
      <Footer />
    </>
  );
}

// Header Component
//   text value via props

// Odometer Component

// format - 4 digits, leading zeroes required

// button - incr odo by 1
// button - incr odo by 10
// button - incr odo by 100
// button - incr odo by 1000

// if odo > 9999, then odo -= 10000

// Footer Component
//   trademark value via props
{/* <p>&copy 2020, vorSherer Creations</p> */}

// Update state in a "React Way"
