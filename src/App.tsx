import { Header } from 'LayoutComponents/Header/Header';
import { InProgress } from 'NotificationComponents/InProgress';
import { Resume } from 'PageComponents/Resume/Resume';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [count, setCount] = useState();
  // const { isOpen, onToggle } = useDisclosure()

  return (
    <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/portfolio" element={<InProgress/>}/>
          <Route path="/aboutMe" element={<InProgress/>}/>
          <Route path="/currentProjects" element={<InProgress/>}/>
        </Routes>
    </div>
  );
}

export default App;
