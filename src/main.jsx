import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';

// Your custom components
import App from './App';

// Render the main App component into the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
