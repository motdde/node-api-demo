import { validateLocaleAndSetLanguage } from 'typescript'

export interface Product {
  id?: number
  name: string
  description: string
  value: number
  createdOn?: number
  updatedOn?: number
}

function getNextId(): number {
  let productCount: number = productList.length
  return productCount + 1
}

export function getProducts(): Product[] {
  return productList
}

export function addProduct(product: Product) {
  let currentTimeStamp = Math.floor(Date.now() / 1000)
  product.id = getNextId()
  product.createdOn = currentTimeStamp
  product.updatedOn = currentTimeStamp
  productList.push(product)
}

const productList: Product[] = [
]
