import katex from 'katex'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('dom content loaded')

  var katex_html = katex.renderToString('c = \\pm\\sqrt{a^2 + b^2}')
  document.getElementById('katex').innerHTML = katex_html
  // console.log(katex.renderToString('c = \\pm\\sqrt{a^2 + b^2}'))
})
