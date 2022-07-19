import { Header } from 'LayoutComponents/Header/Header';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const [count, setCount] = useState();

  return (
    <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
    </div>
  );
}

interface IProps {

}

const Resume = (props: IProps) => {
  return (
    <div>
      Resume
    </div>
  )
}

export default App;
