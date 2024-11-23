import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const strictMode = false;

createRoot(document.getElementById('root')!).render(
  <>
    {strictMode ? (
      <StrictMode>
        <App />
      </StrictMode>
    ) : (
      <App />
    )}
  </>
,
)