import type { Prize } from '../lib/prizes'

/** Icon-in-circle + prize label, revealed underneath the scratch coating. */
export function PrizeBadge({ prize }: { prize: Prize }) {
  const Icon = prize.icon
  return (
    <div className="flex flex-col items-center gap-1.5 px-3 text-center">
      <span className={['grid h-20 w-20 place-items-center rounded-full text-white shadow-clay', prize.accent].join(' ')}>
        <Icon className="h-10 w-10" strokeWidth={2.25} />
      </span>
      <span className="font-display text-2xl font-extrabold leading-tight text-tsel-ink">{prize.label}</span>
      {prize.note && (
        <span className="max-w-[24ch] text-[11px] font-semibold leading-snug text-tsel-ink/70">{prize.note}</span>
      )}
    </div>
  )
}
