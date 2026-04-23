import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./Navbar/Navbar.jsx"
import HomeBanner from './HomeBanner/HomeBanner.jsx'
import FeaturedProperties from './FeaturedProperties/FeaturedProperties.jsx'
import PropertyCategories from './PropertyCategories/PropertyCategories.jsx'
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx"
import HowItWorks from './HowItWorks/HowItWorks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <HomeBanner/>
    <FeaturedProperties/>
    <PropertyCategories/>
    <WhyChooseUs/>
    <HowItWorks/>
  </StrictMode>,
)
