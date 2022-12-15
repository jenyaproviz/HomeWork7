let products = [
  ["item1", 100],
  ["item2", 200],
  ["item3", 300],
];

//מוסיפים מוצרים לסל

function addItemOne() {
  let newDiv = document.createElement("div");

  let textNode = document.createTextNode(
    "The product is " + products[0][0] + " The price is " + products[0][1]
  );
  newDiv.appendChild(textNode);
  document.body.appendChild(newDiv);
  newDiv.id = "itemOne";
}

function addItemTwo() {
  let newDiv = document.createElement("div");
  let textNode = document.createTextNode(
    "The product is " + products[1][0] + " The price is " + products[1][1]
  );
  newDiv.appendChild(textNode);
  document.body.appendChild(newDiv);
  newDiv.id = "itemTwo";
}

function addItemThree() {
  let newDiv = document.createElement("div");
  let textNode = document.createTextNode(
    "The product is " + products[2][0] + " The price is " + products[2][1]
  );
  newDiv.appendChild(textNode);
  document.body.appendChild(newDiv);
  newDiv.id = "itemThree";
}

// מורידים מוצרים מהסל
function removeItemOne() {
  let element = document.getElementById("itemOne");
  element.remove();
}
function removeItemTwo() {
  let element = document.getElementById("itemTwo");
  element.remove();
}
function removeItemThree() {
  let element = document.getElementById("itemThree");
  element.remove();
}

function checkout() {
  let element = document.getElementById("checkout");
  element.remove();
}
//______________add buttons counter____________________//

let btnOne = document.querySelector("#btnAddOne");
let countBtnOne = 0;

btnOne.addEventListener("click", function () {
  countBtnOne += 1;
  console.log(countBtnOne);
});

let btnTwo = document.querySelector("#btnAddTwo");
let countBtnTwo = 0;

btnTwo.addEventListener("click", function () {
  countBtnTwo += 1;
  console.log(countBtnTwo);
});

let btnThree = document.querySelector("#btnAddThree");
let countBtnThree = 0;

btnThree.addEventListener("click", function () {
  countBtnThree += 1;
  console.log(countBtnThree);
});
// ___________remove buttons counter_______________//

let btnOneRem = document.querySelector("#btnRemoveOne");
let countBtnOneRem = 0;

btnOneRem.addEventListener("click", function () {
  countBtnOneRem += 1;
  console.log(countBtnOneRem);
});

let btnTwoRem = document.querySelector("#btnRemoveTwo");
let countBtnTwoRem = 0;

btnTwoRem.addEventListener("click", function () {
  countBtnTwoRem += 1;
  console.log(countBtnTwoRem);
});

let btnThreeRem = document.querySelector("#btnRemoveThree");
let countBtnThreeRem = 0;

btnThreeRem.addEventListener("click", function () {
  countBtnThreeRem += 1;
  console.log(countBtnThreeRem);
});
//__________function total___________________//
function order(total) {
  let totalOne = (countBtnOne - countBtnOneRem) * products[0][1];
  let totalTwo = (countBtnTwo - countBtnTwoRem) * products[1][1];
  let totalThree = (countBtnThree - countBtnThreeRem) * products[2][1];
  total = totalOne + totalTwo + totalThree;

  let newDiv = document.createElement("div");
  let textNode = document.createTextNode(
    "The total price for your cart is " + total
  );
  newDiv.appendChild(textNode);
  document.body.appendChild(newDiv);

  console.log(total);
  newDiv.id = "checkout";
}
// _____________refresh page____________//
function refreshPage() {
  window.location.reload();
}
