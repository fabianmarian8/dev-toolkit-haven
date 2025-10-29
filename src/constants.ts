export const IMAGE_COMPRESSOR = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_DIMENSION: 1920,
  DEFAULT_QUALITY: 80,
  MIN_QUALITY: 10,
  MAX_QUALITY: 100,
  QUALITY_STEP: 5,
} as const;

export const QR_CODE = {
  MIN_SIZE: 128,
  MAX_SIZE: 512,
  DEFAULT_SIZE: 256,
  SIZE_STEP: 32,
} as const;

export const HASH_GENERATOR = {
  DEBOUNCE_DELAY: 300,
} as const;

export const TEXT_DIFF = {
  DEBOUNCE_DELAY: 300,
} as const;

export const REGEX_TESTER = {
  TIMEOUT: 1000, // 1 second
} as const;

export const UUID = {
  VERSION: 4,
  COUNT_MIN: 1,
  COUNT_MAX: 100,
  COUNT_DEFAULT: 1,
} as const;
