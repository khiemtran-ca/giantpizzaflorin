import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/App';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import NotFound from './pages/NotFound'
import DashBoard from './pages/DashBoard/DashBoard';

const Index = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} />

                {/* Personal note try to create unique path instead of AdminLogin */}
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/dashboard" element={<DashBoard />} />
                {/* avoid incorrect path */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
            
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />)