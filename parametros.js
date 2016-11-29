const faker = require('faker')

var data = []

const count = Math.random() * 8

for (var i = 0; i < count; i++) {
  data.push({
    nome: faker.lorem.word(),
    valor: faker.lorem.paragraphs()
  })
}

var _data = [
  {
    nome: 'Objeto',
    valor: 'O presente parecer tem como objetivo a verificação da existência e o cadastramento das anomalias visíveis nas alvenarias, estruturas, revestimentos e nas instalações prediais do empreendimento.'
  },
  {
    nome: 'Finalidade',
    valor: 'A finalidade deste trabalho é efetuar a apresentação do estado físico da obra para elaboração dos procedimento técnicos de entrega e recebimento de obra.'
  },
  {
    nome: 'Objetivo',
    valor: 'Trata-se de Condomínio Logístico e Galpões Modulares, projetada e construída para locação para atender empresas de logísticas, e-commerce, varejo,indústrias.'
  }
]

module.exports = _data
