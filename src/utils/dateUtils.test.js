import { describe, it, expect } from 'vitest'

describe('dateUtils', () => {
  it('cleanDateString returns same YYYY-MM-DD', async () => {
    const mod = await import('./dateUtils.cjs')
    const utils = mod.default || mod
    expect(utils.cleanDateString('2024-10-23')).toBe('2024-10-23')
  })

  it('cleanDateString extracts date from datetime string', async () => {
    const mod = await import('./dateUtils.cjs')
    const utils = mod.default || mod
    expect(utils.cleanDateString('2024-10-23T00:00:00.000Z')).toBe('2024-10-23')
    expect(utils.cleanDateString('2024-12-01T10:30:00')).toBe('2024-12-01')
  })

  it('formatTimeForInput returns HH:MM', async () => {
    const mod = await import('./dateUtils.cjs')
    const utils = mod.default || mod
    expect(utils.formatTimeForInput('2024-10-23T10:05:30')).toBe('10:05')
    expect(utils.formatTimeForInput('2024-10-23T00:00')).toBe('00:00')
  })

  it('combineDateAndTime combines and adds seconds', async () => {
    const mod = await import('./dateUtils.cjs')
    const utils = mod.default || mod
    expect(utils.combineDateAndTime('2024-10-23', '09:15')).toBe('2024-10-23T09:15:00')
    expect(utils.combineDateAndTime('2024-10-23T00:00:00.000Z', '09:15')).toBe('2024-10-23T09:15:00')
  })
})
