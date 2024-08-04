import { MarketplaceConfigurationCurrencyEnum } from '@/app/graphql/_generated/types'

const mpconfig = {
  defaultCurrency: MarketplaceConfigurationCurrencyEnum.Cop,
  defaultLocale: 'es-CO',
  defaultCountryOverride: 'CA',
  quoteoutEnabled: true, // allow quote checkout flow
  quoteoutShowBuyerShippingOption: true, // show buyer can self organize shipping option
  checkoutEnabled: true, // allow standard checkout flow
  clarityTrackingId: 'h52kl4gp9b', // get your own a https://clarity.ms
  gtagAnalyticsId: 'G-XXX', // google analytics tracking id, get your own at google.com
  maxOrderTotalForCreditCard: 25000,
  checkoutMinimumAmount: 1,
  quoteoutMinimumAmount: 1,
  guestCheckoutEnabled: true,
} as const

export default mpconfig
