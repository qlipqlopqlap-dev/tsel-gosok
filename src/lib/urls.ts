type EnvMap = Record<string, string | undefined>

/** Registration/claim URL for the KLAIM button, or null to claim inline. */
export function resolveClaimUrl(env: EnvMap): string | null {
  const url = env.VITE_CLAIM_URL
  return url && url.length > 0 ? url : null
}

export function claimUrl(): string | null {
  return resolveClaimUrl(import.meta.env as unknown as EnvMap)
}
