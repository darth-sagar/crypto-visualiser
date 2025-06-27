import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CoinContextProvider from './context/CoinContext'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CoinContextProvider>
                <App />
            </CoinContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)