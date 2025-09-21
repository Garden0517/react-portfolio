import React from 'react';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Page1 from './assets/Page1.jsx';
import Page2 from './assets/Page2.jsx';
import Dday from './components/Dday.jsx';

function App() {

  return (
    <>
      <header>
        <Dday />
      </header>
      <nav>
          <Link to="/Page1">페이지 1</Link> | {" "}
          <Link to="/Page2">페이지 2</Link>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </main>
    </>
  )
}

export default App