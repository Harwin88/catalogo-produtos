// From: https://nextjs.org/docs/api-routes/request-helpers#extending-the-reqres-objects-with-typescript

import { getCookie, setCookie, deleteCookie } from 'cookies-next'
import type { IncomingMessage, ServerResponse } from 'http'

import { MarketplaceConfigurationCurrencyEnum } from '@/app/graphql/_generated/types'
import mpconfig from '@/app/config/mpconfig'
import {
  CHECKOUT_COOKIE_KEY,
  CHECKOUT_COOKIE_MAX_AGE,
  CURRENCY_COOKIE_KEY,
  PAYMENT_INTENT_COOKIE_KEY,
  PAYMENT_INTENT_COOKIE_MAX_AGE,
  SESSION_COOKIE_KEY,
  SESSION_COOKIE_MAX_AGE,
} from '../page/cookies'

export type Request = IncomingMessage & {
  cookies?: Record<string, string> | Partial<Record<string, string>>
}

export type Response = ServerResponse

export const parseCookie = <T>(
  req: Request,
  res: Response,
  name: string
): T | string | boolean | null => {
  const cookie = getCookie(name, { req, res })

  if (cookie === undefined || cookie === null) return null

  if (typeof cookie === 'boolean') return cookie

  try {
    return JSON.parse(cookie)
  } catch {
    return cookie
  }
}

/** Sets the session cookie with the given token */
export const setSessionCookie = (
  req: Request,
  res: Response,
  token: string,
  rememberMe: boolean
) =>
  setCookie(SESSION_COOKIE_KEY, token, {
    req,
    res,
    ...(rememberMe ? { maxAge: SESSION_COOKIE_MAX_AGE } : {}),
  })

export const getSessionCookie = (req: Request, res: Response) => {
  const value = getCookie(SESSION_COOKIE_KEY, { req, res })

  if (typeof value !== 'string') {
    return null
  }

  return value
}

type ClientSecretResponse = { client_secret: string; id: string }

const isClientSecretResponse = (x: any): x is ClientSecretResponse => {
  return (
    typeof x === 'object' &&
    x !== null &&
    typeof (x as ClientSecretResponse).client_secret === 'string' &&
    typeof (x as ClientSecretResponse).id === 'string'
  )
}

export const setPaymentIntentCookie = (
  req: Request,
  res: Response,
  getClientSecret: ClientSecretResponse,
  token: string
) =>
  setCookie(PAYMENT_INTENT_COOKIE_KEY(token), JSON.stringify(getClientSecret), {
    req,
    res,
    maxAge: PAYMENT_INTENT_COOKIE_MAX_AGE,
  })

export const getPaymentIntentCookie = (
  req: Request,
  res: Response,
  token: string
) => {
  const value = parseCookie(req, res, PAYMENT_INTENT_COOKIE_KEY(token))

  if (!isClientSecretResponse(value)) {
    return null
  }

  return value
}

export const clearPaymentIntentCookie = (
  req: Request,
  res: Response,
  token: string
) => deleteCookie(PAYMENT_INTENT_COOKIE_KEY(token), { req, res })

export const setOrderPaymentIntentCookie = (
  req: Request,
  res: Response,
  getClientSecret: ClientSecretResponse,
  token: string
) =>
  setCookie(PAYMENT_INTENT_COOKIE_KEY(token), JSON.stringify(getClientSecret), {
    req,
    res,
    maxAge: PAYMENT_INTENT_COOKIE_MAX_AGE,
  })

export const getOrderPaymentIntentCookie = (
  req: Request,
  res: Response,
  token: string
) => {
  const value = parseCookie(req, res, PAYMENT_INTENT_COOKIE_KEY(token))

  if (!isClientSecretResponse(value)) {
    return null
  }

  return value
}

export const clearOrderPaymentIntentCookie = (
  req: Request,
  res: Response,
  token: string
) => deleteCookie(PAYMENT_INTENT_COOKIE_KEY(token), { req, res })

/** Clears the session cookie, for logout */
export const clearSessionCookie = (req: Request, res: Response) =>
  deleteCookie(SESSION_COOKIE_KEY, { req, res })

const isCurrency = (x: any): x is MarketplaceConfigurationCurrencyEnum =>
  x !== null &&
  x !== undefined &&
  typeof x === 'string' &&
  Object.values(MarketplaceConfigurationCurrencyEnum).includes(
    x as MarketplaceConfigurationCurrencyEnum
  )

/** Gets the value of the currency cookie, defaults to mpconfig.defaultCurrency if none */
export const getCurrencyCookie = (
  req: Request,
  res: Response
): MarketplaceConfigurationCurrencyEnum => {
  const value = getCookie(CURRENCY_COOKIE_KEY, { req, res })

  if (isCurrency(value)) {
    return value
  }

  return mpconfig.defaultCurrency
}

export const getCheckoutCookie = (req: Request, res: Response) => {
  const value = getCookie(CHECKOUT_COOKIE_KEY, { req, res })

  return value ?? 'guest'
}

export const setCheckoutCookie = (req: Request, res: Response, token: string) =>
  setCookie(CHECKOUT_COOKIE_KEY, token, {
    req,
    res,
    maxAge: CHECKOUT_COOKIE_MAX_AGE,
  })
