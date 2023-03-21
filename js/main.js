let dataObj = {
  purchase: "name",
  price: 0,
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
