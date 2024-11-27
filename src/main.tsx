<<<<<<< HEAD
import { Provider } from "@app/Provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
>>>>>>> parent of d67ad80 (Feat: Setting Alias)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <Provider />
  </StrictMode>
);
=======
    <App />
  </StrictMode>,
)
>>>>>>> parent of d67ad80 (Feat: Setting Alias)
