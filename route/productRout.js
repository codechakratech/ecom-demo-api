const route = require('express').Router()
const auth = require('../middleware/auth')

const { getProduct, postProduct, putProduct, deletePrduct } = require('../controller/productController')

route.get('/',getProduct)
route.post('/',auth,postProduct)
route.put('/:id',auth,putProduct)
route.delete('/:id',auth,deletePrduct)

module.exports = route