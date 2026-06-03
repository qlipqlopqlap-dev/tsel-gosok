import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { PhoneFrame } from './components/PhoneFrame'
import { EggPage } from './pages/EggPage'
import './styles.css'

// Double variant — Telur (Egg) game served at telkomsel1double on port 5286.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PhoneFrame>
        <EggPage />
      </PhoneFrame>
    </MotionConfig>
  </StrictMode>,
)
