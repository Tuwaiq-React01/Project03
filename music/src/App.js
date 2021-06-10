import React, { useState, useEffect } from 'react'
import Header from './components/Header.js';
import './index.css';
import { Link } from 'react-router-dom'
export default function App() {
  const [hue, setHue] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setHue(hue + 1)
    }, 500)
  }, [hue])
  return (
    <div style={{ background: `linear-gradient(hsl(${hue},80%, 90%),white)` }}>
      <Header />
      <div class="flex items-baseline justify-around w-1/4 m-auto font-bold">
        <div className="hover:text-purple-300 transition duration-700 ease-in-out py-2 ">
          <Link style={{ textDecoration: 'none' }} to="/discover">Discover</Link>
        </div>
        <div className="hover:text-purple-300 transition duration-700 ease-in-out py-2 ">
          <Link style={{ textDecoration: 'none' }} to="/charts">Charts</Link>
        </div>
      </div>
    </div>
  )
}
