import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AppProvider } from './context/AppContext.tsx'

export const authService = 'http://localhost:5000';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='406806456636-fgipb36vj7tns8h93fg0r3b5l4dn1p6g.apps.googleusercontent.com'>
      <AppProvider>
        <App />
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
