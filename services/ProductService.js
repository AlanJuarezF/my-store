const {faker} = require('@faker-js/faker')

class ProductService {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 100

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      })
    }
  }

  createProduct() { }

  findProduct() {
    return this.products
  }

  findOneProduct(id) {

    return this.products.find(item => item.id === id)
  }

  updateProduct() { }

  deleteProduct() { }

}

module.exports = ProductService
