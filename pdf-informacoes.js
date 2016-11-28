const fs = require('fs')
const PDFDocument = require('pdfkit')

const gerar = function () {
  var doc = new PDFDocument({
    margins: {
      top: 10,
      bottom: 10,
      left: 20,
      right: 20
    }
  })

  var empreendimento = 'GLP Guarulhos'
  var nomeDeExibicao = 'GLP Guarulhos'
  var areaConstruida = '456.284'
  var areaPrivativa = ''
  var areaLocavel = '192.544,06'
  var informações = 'Galpão Logístico formado pelos seguintes módulos de galpões: T100, T200, T300, G01, G02,G03B, G04, G05, G06, G07 e G10. Área total do terreno: 1.218.599,21m². Area Verde: 168.874,46 m². Área T100: 34.266,65 m². Área G4: 23.145,73 m². Área G3B: 30.488,18 m². Área G7: 7.388,19 m²'

  var objeto = 'O presente parecer tem como objetivo a verificação da existência e o cadastramento das anomalias visíveis nas alvenarias, estruturas, revestimentos e nas instalações prediais do empreendimento.'
  var finalidade = 'A finalidade deste trabalho é efetuar a apresentação do estado físico da obra para elaboração dos procedimento técnicos de entrega e recebimento de obra.'
  var objetivo = 'Trata-se de Condomínio Logístico e Galpões Modulares, projetada e construída para locação para atender empresas de logísticas, e-commerce, varejo,indústrias.O empreendimento pertence ao grupo GLP- Global Logistics Properties.'
  var identificacaoDoSolicitante = 'Cliente: GLP - Global Logistics Properties. Empreendimento: GLP Guarulhos'
  var localizacao = 'O empreendimento GLP Guarulhos está localizado na Rodovia. Presidente Dutra-KM207 em Guarulhos-SP'
  var dataDasVistorias = 'As vistorias para inspeção de entrega de obra ocorreram nas seguintes datas:'
  var descricao = 'Foram vistoriados os seguintes sistemas do empreendimento'
  var anoDaConstrucao = '2012'

  doc.image('imagem/teste.jpg', {
    height: 150
  })

  doc.moveDown()
    .fontSize(14)
    .text('Informações')

  doc.moveDown()
  doc.fontSize(10)

  doc.text('Empreendimento:', 30, 200, { align: 'left', width: 90 })
    .text(empreendimento, 120, 200, { align: 'left', width: 100 })

  doc.moveDown()

  doc.text('Nome de Exibição:', 30, 220, { align: 'left', width: 90 })
    .text(nomeDeExibicao, 120, 220, { align: 'left', width: 100 })

  doc.moveDown()

  doc.text('Área Construída:', 30, 240, { align: 'left', width: 90 })
    .text(areaConstruida, 120, 240, { align: 'left', width: 100 })

  doc.moveDown()

  doc.text('Área Privativa:', 30, 260, { align: 'left', width: 90 })
    .text(areaPrivativa, 120, 260, { align: 'left', width: 100 })

  doc.moveDown()

  doc.text('Área Locável:', 30, 280, { align: 'left', width: 90 })
    .text(areaLocavel, 120, 280, { align: 'left', width: 100 })

  doc.moveDown()

  doc.text('Informações:', 230, 200, { align: 'left', width: 90 })
    .text(informações, 300, 200, { align: 'left', width: 300 })

  doc.moveDown()
    .fontSize(14)
    .text('Parâmetros', 20, 320)

  doc.moveDown()
  doc.fontSize(10)

  doc.text('Objeto:', 30, 340, { align: 'center', width: 170, height: 300 })
    .text(objeto, 200, 340, { align: 'left', width: 400, height: 300 })

  doc.moveDown()

  doc.text('Finalidade:', 30, 360, { align: 'center', width: 170, height: 300 })
    .text(finalidade, 200, 360, { align: 'left', width: 400, height: 300 })

  doc.moveDown()

  doc.text('Objetivo', 30, 380, { align: 'center', width: 170, height: 300 })
    .text(objetivo, 200, 380, { align: 'left', width: 400, height: 300 })

  doc.moveDown()

  /**
    doc.text('Identificação do Solicitante:', 230, 200, { align: 'left', width: 90 })
      .text(identificacaoDoSolicitante, 300, 200, { align: 'left', width: 300 })

    doc.moveDown()

    doc.text('Localização:', 230, 200, { align: 'left', width: 90 })
      .text(localizacao, 300, 200, { align: 'left', width: 300 })

    doc.moveDown()

    doc.text('Data das Vistorias:', 230, 200, { align: 'left', width: 90})
      .text(dataDasVistorias, 300, 200, { align: 'left', width: 300 })

    doc.moveDown()

    doc.text('Descrição técnica da Obra e dos Sistemas Vistoriados:', 230, 200, { align: 'left', width: 90, height: 300 })
      .text(descricao, 300, 200, { align: 'left', width: 300, height: 300 })

    doc.moveDown()

    doc.text('Ano da Construção:', 230, 200, { align: 'left', width: 90, height: 300 })
      .text(anoDaConstrucao, 300, 200, { align: 'left', width: 300, height: 300 })

      */

  doc.lineTo(0, 0)

  doc.moveDown()

  doc.end()
  doc.pipe(fs.createWriteStream('teste.pdf'))
}

gerar()
