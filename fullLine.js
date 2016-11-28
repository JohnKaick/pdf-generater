module.exports = function (doc) {
  var mw = doc.page.margins.left + doc.page.margins.right
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - mw, doc.y, 50)
    .strokeColor('gray')
    .lineWidth(1)
    .stroke()
}
