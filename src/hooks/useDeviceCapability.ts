import { useState, useEffect } from 'react'

export function useDeviceCapability(): 'high' | 'low' {
  const [tier, setTier] = useState<'high' | 'low'>('high')

  useEffect(() => {
    const isLowEnd =
      navigator.hardwareConcurrency <= 4 ||
      /Android|iPhone|iPad/.test(navigator.userAgent) ||
      window.innerWidth < 768

    setTier(isLowEnd ? 'low' : 'high')
  }, [])

  return tier
}
