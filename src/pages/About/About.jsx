import { useState,useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@components/Button/Button';
import './about.style.scss';

export default function About() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Визитная карточка - Обо мне`;
    });  
    return (
      <div style={{flex:1}}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={()=>alert('test')} className="test-class" label="Test"/>
          <button onClick={() => setCount((count) => count + 1)}>
            count up
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            count down
          </button>
          <p>Щётчик: {count}</p>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
  
      </div>
    );
  }