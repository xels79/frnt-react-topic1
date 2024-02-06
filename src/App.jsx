import './App.scss';
import Gallery from '@pages/Gallery/Gallery';
import NoMatch from '@pages/NoMatch/NoMatch';
import Home from '@pages/Home/Home';
import Work from '@pages/Work/Work';
import Layout from '@pages/Layout/Layout';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App() {
  const [showContact, setShowContact] = useState(false);
  return (
      <Routes>
        <Route path="/" element={<Layout showContact={showContact} closeContactClick={()=>setShowContact(false)} />}>
          <Route index element={<Home openContactClick={()=>setShowContact(true)}/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="work" element={<Work />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>      
  )
}
