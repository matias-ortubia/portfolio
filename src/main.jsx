import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeContextWrapper } from './context/ThemeContextWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
)
