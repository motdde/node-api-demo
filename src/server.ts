import express, { Request, Response } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { json, urlencoded } from 'body-parser'
import productRoute from './routes/products'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Demo',
      version: '.0.0.1',
    },
  },
  apis: ['./src/routes/*.ts'],
}

const swaggetDocs = swaggerJSDoc(swaggerOptions)
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggetDocs))
app.use(json())
app.use(urlencoded({ extended: true }))

app.use(productRoute)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`)
})
