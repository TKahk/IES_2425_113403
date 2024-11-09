import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App.jsx';
import AboutPage from './pages/AboutPage.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
