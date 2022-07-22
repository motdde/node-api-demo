import express, { Request, Response } from 'express'
const router = express.Router()
import { Product, addProduct, getProducts } from '../data/products'

type JSONRespose = {
  status: boolean
  message?: string
  data?: object
}

/**
 * @openapi
 * /api/product:
 *   get:
 *     description: Return product list
 *     responses:
 *       200:
 *         description: Returns the list of products.
 *   post:
 *     description: Add new product
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *              name:
 *                type: string
 *                description: Product name
 *                example: Lerna
 *              description:
 *                type: string
 *                description: Product name
 *                example: Lerna
 *              value:
 *                type: number
 *                description: Product name
 *                example: 200
 *     responses:
 *      200:
 *        description: Returns the list of products.
 *
 */

router.get('/api/product', async (req: Request, res: Response<JSONRespose>) => {
  let products = getProducts()
  res.json({
    status: true,
    message: 'Products retrived successfully',
    data: { products },
  })
})

router.post('/api/product', async (req, res) => {
  const { name, description, value } = req.body
  let product: Product = { name, description, value }
  addProduct(product)
  res.json({
    status: true,
    message: 'Products added successfully',
  })
})

export default router
