import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/main-context.jsx'
import { FilterProvider } from './context/filter-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <FilterProvider>
      <App />
      </FilterProvider>
    </AppProvider>
  </StrictMode>,
)
