let dataObj = {
  purchase: "name",
  price: 0,
  Date: Date.now(),
};

var dataArr = [];

if (localStorage.getItem("purchases")) {
  dataArr = JSON.parse(localStorage.getItem("purchases"));
}

var addPurchaseBtn = document.getElementById("confirm-purchase");
var purchaseInp = document.getElementById("purchase-name");
var priceInp = document.getElementById("purchase-price");

priceInp.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addPurchaseBtn.click();
  }
});

addPurchaseBtn.addEventListener("click", () => {
  dataObj.purchase = purchaseInp.value;
  dataObj.price = priceInp.value;
  purchaseInp.value = "";
  priceInp.value = "";
  addObjToArr(dataObj);
  showCash(dataArr);
  var navMenu = document.querySelector(".drop-menu");
  navMenu.classList.remove("show-drop-menu");
});

function addObjToArr(obj) {
  let customObj = { ...obj };
  dataArr.push(customObj);
  console.log(dataArr);
  localStorage.setItem("purchases", JSON.stringify(dataArr));
  showData(dataArr);
}

function showData(arr) {
  var listOfPurchases = document.querySelector("ul");
  listOfPurchases.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let purchaseLi = document.createElement("li");
    let nameSpan = document.createElement("span");
    let priceSpan = document.createElement("span");
    purchaseLi.classList = "purchase";
    nameSpan.classList = "item";
    priceSpan.classList = "price";
    nameSpan.innerHTML = arr[i].purchase;
    priceSpan.innerHTML = arr[i].price;
    purchaseLi.appendChild(nameSpan);
    purchaseLi.appendChild(priceSpan);
    listOfPurchases.appendChild(purchaseLi);
  }

  var purchasesNum = document.querySelector(".pur-num");
  purchasesNum.innerHTML = arr.length;
}

showData(dataArr);

var originalCashInp = document.getElementById("my-cash");
var addCashBtn = document.getElementById("add");
var setCashBtn = document.getElementById("set");
var clearCashBtn = document.getElementById("cls");

if (localStorage.getItem("cash") === false) {
  localStorage.setItem("cash", "0");
}

setCashBtn.addEventListener("click", function () {
  localStorage.setItem("cash", originalCashInp.value);
  originalCashInp.value = "";
  showCash(dataArr);
});

addCashBtn.addEventListener("click", function () {
  var newValue =
    Number(originalCashInp.value) + Number(localStorage.getItem("cash"));
  localStorage.setItem("cash", newValue);
  originalCashInp.value = "";
  showCash(dataArr);
});

clearCashBtn.addEventListener("click", function () {
  localStorage.setItem("cash", "0");
  originalCashInp.value = "";
  showCash(dataArr);
});

originalCashInp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

function showCash(arr) {
  let totalPrice = 0;
  let before = document.getElementById("before");
  before.innerHTML = localStorage.getItem("cash");

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      totalPrice += Number(arr[i].price);
    }
  }

  let mustHaveCash = document.querySelector(".must-cash");
  let mustHaveCashVal = Number(localStorage.getItem("cash")) - totalPrice;
  mustHaveCash.innerHTML = mustHaveCashVal;

  console.log(`Total Prices: ${totalPrice}`);
  console.log(`Must Cash: ${mustHaveCashVal}`);
}

showCash(dataArr);
// ----------------------------------
// editing purchases made
// ----------------------------------
let allPurchases = document.querySelectorAll(".purchase"); // purchases list

let customizePurchaseMenu = document.querySelector(".customize-purchase"); // customization menu
let closeCustomize = document.querySelector(".close-customize-purchase"); // close button
let purchaseBox = document.getElementById("p-name"); // purchase name input
let priceBox = document.getElementById("p-price"); // purchase price input

for (let i = 0; i < allPurchases.length; i++) {
  allPurchases[i].addEventListener("click", () => {
    // open customize menu
    customizePurchaseMenu.classList.add("show-customize-purchase");

    //print data on inputs
    purchaseBox.value = dataArr[i].purchase;
    priceBox.value = dataArr[i].price;

    // removing a purchase
    let deletePurchasesBtn = document.getElementById("del-purchase");
    deletePurchasesBtn.addEventListener("click", () => {
      dataArr.splice(i, 1);
      showData(dataArr); // showing data function
      localStorage.setItem("purchases", JSON.stringify(dataArr)); // changing data in local storage

      customizePurchaseMenu.classList.remove("show-customize-purchase"); // closing the menu
    });

    // changing purchases data
    let changePurchaseBtn = document.getElementById("change-pur-val");
    changePurchaseBtn.addEventListener("click", () => {
      dataArr[i].purchase = purchaseBox.value;
      dataArr[i].price = priceBox.value;

      showData(dataArr); // showing data function
      customizePurchaseMenu.classList.remove("show-customize-purchase");
      localStorage.setItem("purchases", JSON.stringify(dataArr)); // changing data in local storage
    });
  });
}

//close menu
closeCustomize.addEventListener("click", () => {
  customizePurchaseMenu.classList.remove("show-customize-purchase");
});
