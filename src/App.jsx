import React from 'react';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import AboutMe from './components/AboutMe.jsx';
import Dday from './components/Dday.jsx';

function App() {

  return (
    <div className='app-container'>
      <header>
        <h1>이정원 포트폴리오 🐥</h1>
        <Dday />
      </header>
      <nav>
          <Link to="/resume">이력</Link> | {" "}
          <Link to="/portfolio">포트폴리오</Link> | {" "}
          <Link to="/about-me">자기소개</Link>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App