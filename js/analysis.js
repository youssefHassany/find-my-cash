let dataArr = [];
dataArr = JSON.parse(localStorage.getItem("purchases"));

var mostPaidItem = document.getElementById("most-paid-name");
var mostPaidPrice = document.getElementById("most-paid-price");

// most paid for card
let max = 0;
let count = 0;

for (let i = 0; i < dataArr.length; i++) {
  if (Number(dataArr[i].price) > max) {
    max = dataArr[i].price;
    count += Number(dataArr[i].price);
    console.log(max);
    mostPaidItem.innerHTML = `${dataArr[i].purchase}:`;
    mostPaidPrice.innerHTML = dataArr[i].price;
  }
}

// total paid cash

let totalCash = Number(JSON.parse(localStorage.getItem("cash")));

let paidMoney = document.querySelector(".paid");
let totalMoneyInSpan = document.querySelector(".total");
let firstPercentage = document.querySelector(".first-percentage");

paidMoney.innerHTML = `${count}/`;
totalMoneyInSpan.innerHTML = totalCash;
firstPercentage.innerHTML = `${parseInt((count / totalCash) * 100)}%`;
