import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { PhoneFrame } from './components/PhoneFrame'
import { CatchBallGate } from './components/CatchBallGate'
import { EggPage } from './pages/EggPage'
import './styles.css'

// Double variant — Telur (Egg) game served at telkomsel1double on port 5286.
// A 60s "Tangkap Bola" mission gates the undian: play it first, then continue.
function Root() {
  const [passed, setPassed] = useState(false)
  if (!passed) return <CatchBallGate onComplete={() => setPassed(true)} />
  return <EggPage />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PhoneFrame>
        <Root />
      </PhoneFrame>
    </MotionConfig>
  </StrictMode>,
)
