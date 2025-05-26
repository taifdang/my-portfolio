import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import NoPage from './pages/NoPage.jsx'
import HomePage from './pages/homePage.jsx'
import ResumePage from './pages/resumePage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/my-portfolio">
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='home' element={<HomePage/>} />
          <Route path='project' element={<Projects/>} />
          <Route path='resume' element={<ResumePage/>} />
       
        </Route>
           <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
