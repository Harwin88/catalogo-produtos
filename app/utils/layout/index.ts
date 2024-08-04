import type {
  CategoryPageQuery,
  CollectionPageQuery,
  LayoutFragment,
  ListingPageQuery,
  ProductPageQuery,
  SearchPageQuery,
} from '@/graphql/_generated/types'

import {
  parseAllProductsSeo,
  parseAttributeSearchSeo,
  parseCategoryPageSeo,
  parseCollectionPageSeo,
  parseListingProductSeo,
  parseProductSeo,
  parseSeo,
} from './seo'
import { mapLayoutToFooter, mapLayoutToNavigation } from '../nautical-api/menu'
import { getPromosFromCMS } from './promos'
import { mapAllCategories } from '../nautical-api/allCategories'
import { mapSellersPageQueryToProps } from '../page/sellers'

const parseBaseLayout = (layout: LayoutFragment) => ({
  navigation: mapLayoutToNavigation(layout),
  footer: mapLayoutToFooter(layout),
  promos: getPromosFromCMS(),
  currencies: layout.shop?.supportedCurrencies.map(({ code }) => code) || [],
  allCategories: mapAllCategories(layout)
})

export const parseLayout = (layout: LayoutFragment) => ({
  seo: parseSeo(layout),
  ...parseBaseLayout(layout),
})

export const parseProductLayout = (
  layout: ProductPageQuery,
  pageUrl: string
) => ({
  seo: layout.product
    ? parseProductSeo({
        product: layout.product,
        shop: layout.shop,
        pageUrl,
      })
    : parseSeo(layout),
  ...parseBaseLayout(layout),
})

export const parseListingLayout = (
  layout: ListingPageQuery,
  pageUrl: string
) => ({
  seo: layout.productVariant
    ? parseListingProductSeo({
        listing: layout.productVariant,
        shop: layout.shop,
        pageUrl,
      })
    : parseSeo(layout),
  ...parseBaseLayout(layout),
})

export const parseCategoryLayout = (
  layout: CategoryPageQuery,
  pageUrl: string
) => ({
  seo: layout.category
    ? parseCategoryPageSeo({
        category: layout.category,
        shop: layout.shop,
        pageUrl,
      })
    : parseSeo(layout),
  ...parseBaseLayout(layout),
})

export const parseCollectionLayout = (
  layout: CollectionPageQuery,
  pageUrl: string
) => ({
  seo: layout.collection
    ? parseCollectionPageSeo({
        collection: layout.collection,
        shop: layout.shop,
        pageUrl,
      })
    : parseSeo(layout),
  ...parseBaseLayout(layout),
})

export const parseAllProductsLayout = (
  layout: SearchPageQuery,
  pageUrl: string
) => ({
  seo: parseAllProductsSeo({ shop: layout.shop, pageUrl }),
  ...parseBaseLayout(layout),
})

export const parseAttributesSearchLayout = (
  layout: SearchPageQuery,
  attribute: { name: string; value: string },
  pageUrl: string
) => ({
  seo: parseAttributeSearchSeo({ ...attribute, shop: layout.shop, pageUrl }),
  ...parseBaseLayout(layout),
})
