import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {GlobalStyled} from "./globalstyled.ts"

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<GlobalStyled /> 
    <App />
  </StrictMode>,
)
