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
import Testimonials from './Testimonials/Testimonials.jsx'
import Footer from './Footer/Footer.jsx'
// new import
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Navbar/>
    <HomeBanner/>
    <FeaturedProperties/>
    <PropertyCategories/>
    <WhyChooseUs/>
    <HowItWorks/>
    <Testimonials/>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
