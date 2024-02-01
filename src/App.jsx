import './App.scss';
import About from '@pages/About/About';
import NoMatch from '@pages/NoMatch/NoMatch';
import Home from '@pages/Home/Home';
import Layout from '@pages/Layout/Layout';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App() {
  const [showContact, setShowContact] = useState(false);
  return (
      <Routes>
        <Route path="/" element={<Layout showContact={showContact} closeContactClick={()=>setShowContact(false)} />}>
          <Route index element={<Home openContactClick={()=>setShowContact(true)}/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>      
  )
}
