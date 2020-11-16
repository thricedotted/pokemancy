export async function get(req, res, next) {
  const hexColor = req.query.hex || '000000'

  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(svgFill(hexColor))
}

function svgFill(hexColor) {
  return `
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events"
     width="1"
     height="2"
     viewBox="0 0 1 2"
     fill="#${hexColor}"
     opacity="0.5"
     >
  <rect x="0" y="0" width="1" height="1"></rect>
  <rect x="0" y="1" width="1" height="1"></rect>
</svg>
  `
}