import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Get from './GetAndDelete.jsx'
import Post from './Post.jsx'
import Axios from './Axios.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/axios" element={<Axios />} />
      </Routes>
    </Router>
  </StrictMode>,
)
