import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pages from './pages/Pages'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages></Pages>
  </StrictMode>,
)
