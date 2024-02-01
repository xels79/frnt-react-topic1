import './App.scss';
import About from '@pages/About/About';
import NoMatch from '@pages/NoMatch/NoMatch';
import Home from '@pages/Home/Home';
import Layout from '@pages/Layout/Layout';
import { Routes, Route, Outlet} from "react-router-dom";

export default function App() {
  

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>      
  )
}
