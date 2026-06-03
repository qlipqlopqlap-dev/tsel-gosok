import { Lock } from 'lucide-react'
import type { Prize } from '../../lib/prizes'
import { PrizeBadge } from '../PrizeBadge'
import type { ItemState } from './PickGame'

/** Artwork for a single egg in the "Pecahkan Telur" game. */
export function EggItem({ state, prize }: { index: number; state: ItemState; prize: Prize | null }) {
  if (state === 'won' && prize) {
    return (
      <span className="grid h-full w-full animate-pop place-items-center rounded-2xl bg-white shadow-clay-sm">
        <PrizeBadge prize={prize} size="sm" />
      </span>
    )
  }
  const dim = state === 'locked'
  return (
    <span
      className={[
        'relative grid h-[86%] w-[74%] place-items-center bg-gradient-to-b from-[#fbf3e2] to-[#e7d3a8] shadow-clay',
        'rounded-[50%_50%_50%_50%/60%_60%_42%_42%]',
        'ring-1 ring-inset ring-white/40',
        state === 'opening' ? 'animate-wiggle' : '',
        dim ? 'opacity-45' : '',
      ].join(' ')}
    >
      {dim ? (
        <Lock className="h-5 w-5 text-neutral-500" strokeWidth={2.5} />
      ) : (
        <span className="font-display text-[1.6rem] font-extrabold text-tsel-red drop-shadow-[0_1px_0_rgba(124,12,30,0.2)]">?</span>
      )}
      {!dim && (
        <>
          <span className="absolute left-[22%] top-[28%] h-1 w-1 rounded-full bg-tsel-red/70" />
          <span className="absolute right-[26%] top-[40%] h-1 w-1 rounded-full bg-tsel-red/60" />
          <span className="absolute left-[34%] bottom-[26%] h-1 w-1 rounded-full bg-tsel-red/50" />
        </>
      )}
    </span>
  )
}
