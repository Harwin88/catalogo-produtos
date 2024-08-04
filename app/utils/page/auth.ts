import type { GetServerSidePropsContext } from 'next'
import { getCookie } from 'cookies-next'
import { SESSION_COOKIE_KEY } from './cookies'

/** Reads token from session cookie _and_ adds the token as a bearer token to any SDK requests made in getServerSideProps
 *
 *  **N.B.** This will _not_ authorize any client side code as that is done through the [AuthProvider](../../contexts/Auth/AuthProvider.tsx)
 *
 */
export const getAuth = ({ req, res }: GetServerSidePropsContext) => {
  const token = getCookie(SESSION_COOKIE_KEY, { req, res })

  if (typeof token === 'string') {
    return token
  }

  return null
}
