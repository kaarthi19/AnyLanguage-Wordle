import { CONFIG } from './config'

export const VALIDGUESSES = [
  'sneha',
  'sneha'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
