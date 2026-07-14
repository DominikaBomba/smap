import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AboutUs from './AboutUs.jsx'
import EventPage from './EventPage.jsx'
import Navbar from './Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar/>
          <Routes>

              <Route path="/" element={<App/>} />
              <Route path="/aboutUs" element={<AboutUs/>} />
              <Route path="/:eventId" element={<EventPage />} />
          </Routes>




      </BrowserRouter>
  </StrictMode>
)
