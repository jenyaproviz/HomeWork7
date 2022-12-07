// add to cart //

let products = [
  ['picture1', 100],
  ['picture2', 200],
  ['picture3', 300],
]
let shoppingCart = []

function addToCart1(item) {
  let newDiv = document.createElement('div')
  let txtItem = document.createTextNode(
    'you added picture 1' +
      ' ' +
      'to the cart' +
      ' the price is' +
      ' ' +
      products[0][1],
  )

  newDiv.appendChild(txtItem)
  document.body.appendChild(newDiv)
}
function addToCart2(item) {
  let newDiv = document.createElement('div')
  let txtItem = document.createTextNode(
    'you added picture 2' +
      ' ' +
      'to the cart' +
      ' the price is' +
      ' ' +
      products[1][1],
  )

  newDiv.appendChild(txtItem)
  document.body.appendChild(newDiv)
}
function addToCart3(item) {
  let newDiv = document.createElement('div')
  let txtItem = document.createTextNode(
    'you added picture 3' +
      ' ' +
      'to the cart' +
      ' the price is' +
      ' ' +
      products[2][1],
  )

  newDiv.appendChild(txtItem)
  document.body.appendChild(newDiv)
}
// remove //
