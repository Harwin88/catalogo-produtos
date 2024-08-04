import type { SEOProps } from '@/components/Layout'
import type {
  CategoryFragment,
  CollectionFragment,
  ProductFragment,
  ProductListingFragment,
  ShopFragment,
  ShopQueryFragment,
} from '@/graphql/_generated/types'
import { generateProductUrl } from '../navigation'
import {
  listingStructuredData,
  collectionSchema,
  categorySchema,
  allProductsSchema,
  attributeSchema,
  productStructuredData,
} from '../StructuredData'

type BuildSEO<T = {}> = (data: T) => SEOProps

export const parseSeo: BuildSEO<ShopQueryFragment> = ({ shop }) => ({
  name: shop.description ?? shop.name,
  description: shop.description,
})

const trim = (input: string, length: number): string =>
  input.length >= length ? `${input.slice(0, length - 2)} …` : input

const tryParse = (data: string) => {
  try {
    if (!data) return ''
    const parsedData = JSON.parse(data)
    return parsedData
  } catch (e) {
    return ''
  }
}

export const parseProductSeo: BuildSEO<{
  product: ProductFragment
  shop: ShopFragment
  pageUrl: string
}> = ({ product, shop, pageUrl }) => ({
  name: `${product.name} for sale`,
  description: trim(tryParse(product.descriptionHtml), 155),
  image: product.thumbnail?.url ?? null,
  type: 'product.item',
  meta: [
    {
      property: 'product:price:amount',
      content:
        product.pricing?.priceRangeLocalCurrency?.start?.net.amount.toString() ??
        product.pricing?.priceRange?.start?.net.amount.toString() ??
        null,
    },
    {
      property: 'product:price:currency',
      content:
        product.pricing?.priceRangeLocalCurrency?.start?.net.currency ??
        product.pricing?.priceRange?.start?.net.currency ??
        null,
    },
    {
      property: 'product:isAvailable',
      content: product.isAvailable ? 'in stock' : 'out of stock',
    },
    {
      property: 'product:category',
      content: product.category?.name ?? null,
    },
  ],
  canonical: pageUrl,
  structuredData: productStructuredData(
    product,
    {
      name: shop.description ?? shop.name,
      description: shop.description,
    },
    pageUrl
  ),
})

export const parseListingProductSeo: BuildSEO<{
  listing: ProductListingFragment
  shop: ShopFragment
  pageUrl: string
}> = ({ listing, shop, pageUrl }) => {
  const name = `${listing.name} available for sale now`

  const description =
    listing.description && listing.description !== ''
      ? trim(listing.description, 155)
      : null

  return {
    name,
    description,
    image: listing.images?.[0]?.url ?? null,
    meta: [
      {
        property: 'product:price:amount',
        content:
          listing.pricing?.priceLocalCurrency?.net.amount.toString() ?? null,
      },
      {
        property: 'product:price:currency',
        content: listing.pricing?.priceLocalCurrency?.net.currency ?? null,
      },
      {
        property: 'product:isAvailable',
        content: listing.quantityAvailable > 0 ? 'in stock' : 'out of stock',
      },
    ],
    canonical: `${new URL(pageUrl).origin}${generateProductUrl(
      listing.product.slug
    )}`,
    structuredData: listingStructuredData(
      listing,
      {
        name: shop.description ?? shop.name,
        description: shop.description,
      },
      pageUrl
    ),
  }
}

export const parseCategoryPageSeo: BuildSEO<{
  category: CategoryFragment
  shop: ShopFragment
  pageUrl: string
}> = ({ category, shop, pageUrl }) => ({
  name: category.seoTitle ?? category.name,
  description: category.seoDescription ?? null,
  type: 'product:category',
  structuredData: categorySchema(
    category,
    {
      name: shop.description ?? shop.name,
      description: shop.description,
    },
    pageUrl
  ),
})

export const parseCollectionPageSeo: BuildSEO<{
  collection: CollectionFragment
  shop: ShopFragment
  pageUrl: string
}> = ({ collection, shop, pageUrl }) => ({
  name:
    collection.seoTitle !== null && collection.seoTitle !== ''
      ? collection.seoTitle
      : collection.name,
  description: collection.seoDescription ?? null,
  type: 'product:collection',
  structuredData: collectionSchema(
    collection,
    {
      name: shop.description ?? shop.name,
      description: shop.description,
    },
    pageUrl
  ),
})

export const parseAllProductsSeo: BuildSEO<{
  shop: ShopFragment
  pageUrl: string
}> = ({ shop, pageUrl }) => ({
  name: 'All Products',
  description: `All products available on ${shop.name}`,
  structuredData: allProductsSchema(shop, pageUrl),
})

export const parseAttributeSearchSeo: BuildSEO<{
  name: string
  value: string
  shop: ShopFragment
  pageUrl: string
}> = ({ name, value, shop, pageUrl }) => ({
  name: `All Products where ${name} is ${value}`,
  description: `All Products where ${name} is ${value}`,
  structuredData: attributeSchema({ name, value }, shop, pageUrl),
})
