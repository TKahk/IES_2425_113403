import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import B from './b.jsx'
import C from './c.jsx'
import Galo from './galo.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/b" element={<B />} />
        <Route path='/c' element={<C />} />
        <Route path='/galo' element={<Galo />} />
      </Routes>
    </Router>
  </StrictMode>,
)
