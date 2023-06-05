const { ne } = require('@faker-js/faker')
const boom = require('@hapi/boom')

function ValidatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property]
    const {error} = schema.validate(data)
    if(error){
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = ValidatorHandler
