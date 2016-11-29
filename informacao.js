const faker = require('faker')

var informacao = {
  empreendimento: faker.name.jobArea(),
  nomeDeExibicao: faker.name.jobTitle(),
  areaConstruida: faker.random.number(),
  areaPrivativa: faker.random.number(),
  areaLocavel: faker.random.number(),
  informacoes: 'Ea vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribusEa vel rem. Delectus corrupti laboriosam voluptatem libero doloribus'
}

var _informacao = {
  empreendimento: 'GLP Guarulhos',
  nomeDeExibicao: 'GLP Guarulhos',
  areaConstruida: '456.284',
  areaPrivativa: '0',
  areaLocavel: '192.544,06',
  informacoes: 'Galpão Logístico formado pelos seguintes módulos de galpões:' + '\n' +
    ' T100, T200, T300, G01, G02,G03B, G04, G05, G06, G07 e G10.' + '\n' +
    ' - Área total do terreno: 1.218.599,21m²' + '\n' +
    ' - Área Verde: 168.874,46 m²' + '\n' +
    ' - Área T100: 34.266,65 m²' + '\n' +
    ' - Área G4: 23.145,73 m²' + '\n' +
    ' - Área G3B: 30.488,18 m²' + '\n' +
    ' - Área G7: 7.388,19 m²'
}

module.exports = _informacao
