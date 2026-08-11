import { describe, it, expect } from 'vitest'
import { resolveClaimUrl } from './urls'

describe('resolveClaimUrl', () => {
  it('returns the claim URL when set', () => {
    expect(resolveClaimUrl({ VITE_CLAIM_URL: 'https://wap.imobile.id/sehat1/register.php' })).toBe(
      'https://wap.imobile.id/sehat1/register.php',
    )
  })

  it('returns null when missing or empty so the claim happens inline', () => {
    expect(resolveClaimUrl({})).toBeNull()
    expect(resolveClaimUrl({ VITE_CLAIM_URL: '' })).toBeNull()
  })
})
