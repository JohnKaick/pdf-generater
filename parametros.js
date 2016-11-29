const faker = require('faker')

var data = []

const count = Math.random() * 8

for (var i = 0; i < count; i++) {
  data.push({
    nome: faker.lorem.word(),
    valor: faker.lorem.paragraphs()
  })
}

module.exports = data
