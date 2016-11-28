const fs = require('fs')
const PDFDocument = require('pdfkit')
const parametros = require('./parametros')
const informacoes = require('./informacao')
const fullLine = require('./fullLine')

const gerar = function () {
  var doc = new PDFDocument({
    margins: {
      top: 10,
      bottom: 10,
      left: 20,
      right: 20
    }
  })

  doc.image('imagem/teste.jpg', {
    height: 150
  })
  doc.fontSize(18)
    .text(informacoes.empreendimento)

  doc.moveDown()
    .fontSize(14)
    .text('Informações')

  fullLine(doc)
  doc.moveDown()
  var x = doc.x
  var y = doc.y

  doc.fontSize(10)
    .text('Empreendimento: ' + informacoes.empreendimento, doc.x, doc.y, { align: 'left', width: 200 })
  fullLine(doc)
  doc.moveDown()

  doc.text('Nome de Exibição: ' + informacoes.nomeDeExibicao, doc.x, doc.y, { align: 'left', width: 200 })
  fullLine(doc)
  doc.moveDown()

  doc.text('Área Construída: ' + informacoes.areaConstruida, doc.x, doc.y, { align: 'left', width: 200 })
  fullLine(doc)
  doc.moveDown()

  doc.text('Área Privativa: ' + informacoes.areaPrivativa, doc.x, doc.y, { align: 'left', width: 200 })
  fullLine(doc)
  doc.moveDown()

  doc.text('Área Locável: ' + informacoes.areaLocavel, doc.x, doc.y, { align: 'left', width: 200 })
  fullLine(doc)
  doc.moveDown()

  doc.text('Informações: ' + informacoes.informacoes, x + 200, y, { align: 'left', width: 400 })
  doc.x = x
  fullLine(doc)
  doc.moveDown()

  doc.y += 100
  doc.moveDown()
    .fontSize(14)
    .text('Parâmetros')
  fullLine(doc)
  doc.moveDown()

  parametros.forEach(p => {
    let x = doc.x
    let y = doc.y
    doc.fontSize(12)
      .text(p.nome, x, y, { align: 'left', width: 90 })
    doc.fontSize(10)
      .text(p.valor, x + 110, y, { align: 'left', width: 440 })
    doc.x = x
    doc.y += 10
    fullLine(doc)
    doc.moveDown()
  })

  doc.end()
  doc.pipe(fs.createWriteStream('teste.pdf'))
}

gerar()
