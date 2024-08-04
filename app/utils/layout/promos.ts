export interface Promo {
  id: string
  display: string
}

const promosFromCMS: Promo[] = [
  {
    id: 'free shipping',
    display: 'Free shipping over $1000',
  },
]

// Here we would make a request to the CMS to get the promos

export const getPromosFromCMS = () => {
  try {
    return promosFromCMS
  } catch {
    return null
  }
}
