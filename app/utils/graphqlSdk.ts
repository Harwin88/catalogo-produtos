import { getCookie } from 'cookies-next'
import { GraphQLClient } from 'graphql-request'

import { getSdk as baseGetSdk } from '@/app/graphql/_generated/sdk'
import mpconfig from '@/app/config/mpconfig'

import type { Request } from './api/cookies'
import { CURRENCY_COOKIE_KEY, SESSION_COOKIE_KEY } from './page/cookies'

const API_URI = process.env.NEXT_PUBLIC_API_URI
const NODE_ENV = process.env.NODE_ENV ?? 'development'

if (!API_URI) {
  throw new Error('Missing ENV var NEXT_PUBLIC_API_URI')
}

const IS_CLIENT = typeof window !== 'undefined'

const getClient = () => {
  return new GraphQLClient(API_URI, {
    /* IS_CLIENT check prevents error on trying to set ORIGIN header in browserland */
    headers: IS_CLIENT
      ? {}
      : {
          origin:
            NODE_ENV === 'development' ? 'localhost:3000' : process.env.HOST!,
        },
  })
}
const client = getClient()

export const getSDK = (req?: Request, bearer: null | false | true = false) => {
  const options = req ? { req } : {}
 
  const currency = (getCookie(CURRENCY_COOKIE_KEY, options) ??
    mpconfig.defaultCurrency) as string

  const headers: Record<string, string> = {}


  if (currency) {
    headers['currency'] = currency
  }

  if (mpconfig.defaultCountryOverride) {
    headers['countrycode'] = mpconfig.defaultCountryOverride
  }

  return baseGetSdk(client, (action) => action(headers))
}

interface CountableCollection<T> {
  edges: {
    node: T
  }[]
}

/**
 * Extracts all the nodes into a flat array from a countable API response
 */
export const getNodes = <T>(
  items: CountableCollection<T> | undefined | null
): T[] => items?.edges.map(({ node }) => node) ?? []
