const faker = require('faker')

var informacao = {
  empreendimento: faker.lorem.word(),
  nomeDeExibicao: faker.lorem.word(),
  areaConstruida: faker.random.number(),
  areaPrivativa: faker.random.number(),
  areaLocavel: faker.random.number(),
  informacoes: faker.lorem.words()
}

module.exports = informacao
