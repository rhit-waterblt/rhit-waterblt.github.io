import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ContactFooter from './components/ContactFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Blog from './components/Blog';
import ProjectPage from './components/ProjectPage';
import ProjectDetail from './components/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <ContactFooter />
      </Router>
    </div>
  );
}

export default App;
