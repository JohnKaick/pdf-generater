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

  // width: 612, height: 792

  doc.image('imagem/capa.jpg', 0, 0, {
    width: 612,
    height: 200
  })

  doc.lineWidth(35)
  doc.lineCap('butt')
    .moveTo(0, 185)
    .lineTo(612, 185)
    .stroke('gray')

  doc.y = 177
  doc.fontSize(20)
    .fillColor('white')
    .text(informacoes.empreendimento)

  doc.font('Helvetica-Bold')
  doc.moveDown(0.5)
    .fontSize(14)
    .fillColor('black')
    .text('Informações')

  fullLine(doc)
  doc.moveDown(0.5)
  var x = doc.x
  var y = doc.y

  doc.fontSize(9)
    .fillColor('gray')
    .text('Empreendimento', doc.x, doc.y, {
      align: 'left',
      width: 200
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.empreendimento, doc.x, doc.y, {
      align: 'left',
      width: 200
    })

  doc.moveDown(0.5)

  doc.fontSize(9)
    .fillColor('gray')
    .text('Nome de Exibição', doc.x, doc.y, {
      align: 'left',
      width: 200
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.nomeDeExibicao, doc.x, doc.y, {
      align: 'left',
      width: 200
    })

  doc.moveDown(0.5)

  doc.fontSize(9)
    .fillColor('gray')
    .text('Área Construída', doc.x, doc.y, {
      align: 'left',
      width: 200
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.areaConstruida, doc.x, doc.y, {
      align: 'left',
      width: 200
    })

  doc.moveDown(0.5)

  doc.fontSize(9)
    .fillColor('gray')
    .text('Área Privativa', doc.x, doc.y, {
      align: 'left',
      width: 200
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.areaPrivativa, doc.x, doc.y, {
      align: 'left',
      width: 200
    })

  doc.moveDown(0.5)

  doc.fontSize(9)
    .fillColor('gray')
    .text('Área Locável', doc.x, doc.y, {
      align: 'left',
      width: 200
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.areaLocavel, doc.x, doc.y, {
      align: 'left',
      width: 200
    })

  doc.moveDown(0.5)

  doc.fontSize(9)
    .fillColor('gray')
    .text('Informações', x + 200, y, {
      align: 'left',
      width: 350
    }).moveDown(0.4)
  doc.fontSize(12)
    .fillColor('black')
    .text(informacoes.informacoes, x + 200, doc.y, {
      align: 'justify',
      width: 350,
      height: 350
    })

  doc.x = x
  if (doc.y < 430) {
    doc.y = 430
  } else {
    doc.y += 10
  }
  doc.moveDown(0.5)
    .fontSize(14)
    .text('Informações Adicionais')
  fullLine(doc)
  doc.moveDown(0.5)

  parametros.forEach(p => {
    let x = doc.x
    let y = doc.y
    doc.fontSize(12)
      .text(p.nome, x, y, { align: 'left', width: 90 })
    doc.fontSize(10)
      .text(p.valor, x + 110, y, { align: 'justify', width: 440 })
    doc.x = x
    doc.y += 5
    fullLine(doc)
    doc.moveDown(0.5)
  })

  doc.end()
  doc.pipe(fs.createWriteStream('teste.pdf'))
}

gerar()
