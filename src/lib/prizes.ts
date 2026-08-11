import { Coins, type LucideIcon } from 'lucide-react'

export interface Prize {
  /** Full label shown under the scratch card, e.g. "10.000 COIN". */
  label: string
  icon: LucideIcon
  /** Tailwind classes for the prize's accent badge. */
  accent: string
  /** Big number on the result ticket (e.g. "10.000"). */
  bigValue: string
  /** Optional unit shown smaller under bigValue (e.g. "COIN"). */
  bigUnit?: string
  /** Tagline shown above the big value on the result ticket. */
  tagline: string
  /** Optional fine print under the big value (e.g. coin redemption terms). */
  note?: string
}

/** The campaign's single reward — every ticket reveals this. */
export const PRIZE: Prize = {
  label: '10.000 COIN',
  icon: Coins,
  accent: 'bg-tsel-orange',
  bigValue: '10.000',
  bigUnit: 'COIN',
  tagline: 'Coin siap diklaim di nomor kamu',
  note: '(Coin bisa ditukar PULSA/KUOTA**)',
}
