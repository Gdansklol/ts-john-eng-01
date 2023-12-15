// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import VerseList from './components/VerseList';
import ChapterA from './components/ChapterA'; // Uppdaterad import
import HighEngA from './components/HighEngA';
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



// function Accompany() {
//   return <><h2>"Striving for spirituality to draw closer to God through listening, reading, speaking, and writing."</h2>
//   <p>요한복음 1:11 KRV   <br/>
//     그분은 거기에 오셨습니다/ 그분 자신의 것인/ 그러나 그분
//     자신의 것은/ 그분을 받아들이지 않았습니다./
//     <br/> <br/>
//   자기 땅에 오매 자기 백성이 영접지 아니하였으나;</p>
  
//   <p>that = world </p>
//   <br/>
//   <p>영접하고 믿는 자에게 주시는 축복! 
//     너무 쉬운 관계대명사who(요1:12)</p>
//   </>
 
// }

function CheckList() {
  return <h2>CheckList</h2>;
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
              <Link to="/chapterA">QT Time</Link>
            </li>
            <li>
              <Link to="/check">CheckList</Link>
            </li>
            <li>
              <Link to="/englishA">High English 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapterA" element={<ChapterA />} />
          <Route path="/check" element={<CheckList />} />
          <Route path="/englishA" element={<HighEngA />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;