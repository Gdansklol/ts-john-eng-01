// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import VerseList from './components/VerseList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home() {
  const [verseData, setVerseData] = useState([]);

  useEffect(() => {
    // Fetch verse data from the JSON file
    fetch('/verses.json') // Update the path
      .then((response) => {
        // Log the response to see its content
        console.log(response);
        return response.json();
      })
      .then((data) => setVerseData(data))
      .catch((error) => console.error('Error fetching verse data:', error));
  }, []);
  

  return (
    <main>
     {/* Pass the loaded verses data to the VerseList component */}
     <VerseList verses={verseData} />

    </main>
  );
}

function CheckList() {
  return <h2>CheckList</h2>;
}

function Accompany() {
  return <h2>Accompany</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/check">CheckList</Link>
            </li>
            <li>
              <Link to="/accompany">Accompany</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<CheckList />} />
          <Route path="/accompany" element={<Accompany />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
