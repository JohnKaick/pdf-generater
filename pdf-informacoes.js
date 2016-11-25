const fs = require('fs')
const PDFDocument = require('pdfkit')

const gerar = function () {
  var doc = new PDFDocument()

  doc.image('imagem/teste.jpg', {
    height: 100
  })

  doc.moveDown()

  doc.fontSize(14)
  doc.text('Informações')

  doc.moveDown()

  doc.fontSize(12)
  doc.text('Empreendimento:')

  doc.moveDown()

  doc.end()
  doc.pipe(fs.createWriteStream('teste.pdf'))
}

gerar()
