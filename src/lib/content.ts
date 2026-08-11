/** Campaign constants + copy for the Gosok Kartu screen. */

export const CAMPAIGN = {
  brand: 'Telkomsel',
  title: 'Undian Tiket Kuota',
  /** Countdown duration in seconds (5 minutes, matching the live site). */
  countdownSeconds: 5 * 60,
  validUntil: 'Berlaku sampai 31 Des 2026',
  ticketCount: 9,
  callCenter: '188',
  /** Hero lead. Text inside {curly braces} is highlighted gold. */
  lead: 'Kamu dapat {1 tiket} yang bisa digosok!',
  instruction: 'Pilih salah satu tiket di bawah ini untuk membuka poin yang bisa kamu klaim',
} as const
