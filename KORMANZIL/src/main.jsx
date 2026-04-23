import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./Navbar/Navbar.jsx"
import HomeBanner from './HomeBanner/HomeBanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <HomeBanner/>
  </StrictMode>,
)
