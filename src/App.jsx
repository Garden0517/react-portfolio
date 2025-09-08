import React from 'react';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Page1 from './assets/Page1.jsx';
import Page2 from './assets/Page2.jsx';

function App() {

  return (
    <>
      <nav>
          <Link to="/Page1">페이지 1</Link> | {" "}
          <Link to="/Page2">페이지 2</Link>
      </nav>
      <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App