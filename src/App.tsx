import { Header } from 'LayoutComponents/Header/Header';
import { InProgress } from 'NotificationComponents/InProgress';
import { HomePage } from 'PageComponents/HomePage/HomePage';
import { Resume } from 'PageComponents/Resume/Resume';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  //TODO move scroll stuff to homepage
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage scrollPosition={scrollPosition}/>}> </Route>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/portfolio" element={<InProgress/>}/>
          <Route path="/aboutMe" element={<InProgress/>}/>
          <Route path="/currentProjects" element={<InProgress/>}/>
        </Routes>
    </div>
  );
}

export default App;
