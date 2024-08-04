const MAX_MAX_AGE = 60 * 60 * 24 * 400 // 400 days

export const CART_COOKIE_KEY = '__cart'
export const CART_COOKIE_MAX_AGE = MAX_MAX_AGE

export const CHECKOUT_COOKIE_KEY = '__checkout'
export const CHECKOUT_COOKIE_MAX_AGE = 15 * 24 * 3_600 // 15 days

export const CURRENCY_COOKIE_KEY = '__currency'
export const CURRENCY_COOKIE_MAX_AGE = MAX_MAX_AGE

export const GDPR_COOKIE_KEY = '__accept_cookies'
export const GDPR_COOKIE_MAX_AGE = MAX_MAX_AGE

export const PAYMENT_INTENT_COOKIE_KEY = (token: string) =>
  `__payment_intent_${token}`
export const PAYMENT_INTENT_COOKIE_MAX_AGE = 15 * 24 * 3_600 // 15 days

export const SESSION_COOKIE_KEY = '__session'
export const SESSION_COOKIE_MAX_AGE = 15 * 24 * 3_600 // 15 days
