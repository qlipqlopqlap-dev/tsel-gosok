import { useCallback, useState } from 'react'
import type { Prize } from './prizes'
import { usePrefersReducedMotion } from './useReducedMotion'
import { fireConfetti } from './confetti'

/**
 * Runtime state for one game session. The win is shown inline (ResultOverlay),
 * so there is no navigation — a session runs exactly once.
 */
export function useGameSession() {
  const reduced = usePrefersReducedMotion()
  const [prize, setPrize] = useState<Prize | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [expired, setExpired] = useState(false)

  const reveal = useCallback(
    (won: Prize) => {
      setPrize(won)
      setRevealed(true)
      if (!reduced) fireConfetti()
    },
    [reduced],
  )

  return { prize, revealed, expired, setExpired, reveal, reduced }
}
