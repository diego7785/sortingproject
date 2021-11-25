import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Input from './pages/Input';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


