"use strict";


const time = [  "6am",  "7am",  "8am",  "9am",  "10am",  "11am",  "12pm",  "1pm",  "2pm",  "3pm",  "4pm",  "5pm",  "6pm",  "7pm",];

let stores = [];

let total1 = [];

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];
let arr10 = [];
let arr11 = [];
let arr12 = [];
let arr13 = [];
let arr14 = [];
let sumr = [];

let MyDiv = document.getElementById("Sales");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fisrtCol() {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "City Name / Hour";

  for (let i = 0; i < time.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${time[i]}`;
  }

  th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Daily Location Total";
}

/*
<table> <tr> </tr> </table>
*/
let myDiv = document.getElementById("Sales");
let table = document.createElement("table");
myDiv.appendChild(table);






function store(cityName, minCust, maxCust, avgCookie) {
  this.numOfCust = 0;
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  stores.push(this);

  // methods
  this.getRandomCust = function (min, max) {
    this.numOfCust = randomNum(minCust, maxCust);
  };

  this.getRandomCust = function () {
    randomNum(minCust, maxCust);
  };
}

// =============================================================ADD TO TABLE PROTOTYPE=====================================================================

store.prototype.addToTable = function () {
  let total = 0;
  let tr = document.createElement("tr");
  table.appendChild(tr);

  let th = document.createElement("td");
  tr.appendChild(th);
  th.textContent = `${this.cityName}`;

  for (let i = 0; i < time.length; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    let temp = Math.floor(
      randomNum(this.minCust, this.maxCust) * this.avgCookie
    );
    let temp2 = temp;
    td.textContent = `${temp}`;
    total += temp;
    if (i === 0) {
      arr1.push(temp2);
    } else if (i === 1) {
      arr2.push(temp2);
    } else if (i === 2) {
      arr3.push(temp2);
    } else if (i === 3) {
      arr4.push(temp2);
    } else if (i === 4) {
      arr5.push(temp2);
    } else if (i === 5) {
      arr6.push(temp2);
    } else if (i === 6) {
      arr7.push(temp2);
    } else if (i === 7) {
      arr8.push(temp2);
    } else if (i === 8) {
      arr9.push(temp2);
    } else if (i === 9) {
      arr10.push(temp2);
    } else if (i === 10) {
      arr11.push(temp2);
    } else if (i === 11) {
      arr12.push(temp2);
    } else if (i === 12) {
      arr13.push(temp2);
    } else if (i === 13) {
      arr14.push(temp2);
    }
  }

  total1.push(total);

  th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = `${total}`;
};







let call = function () {
  let temp = 0;
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Totals";

  for (let i = 0; i < sumr.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${sumr[i]}`;
  }

  th = document.createElement("th");
  tr.appendChild(th);
  let x = 0;

  for (let i = 0; i < total1.length; i++) {
    x += total1[i];
  }
  th.textContent = `${x}`;
};

let funsum = function () {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  sumr[0] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr2[i];
  }
  sumr[1] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr3[i];
  }
  sumr[2] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr4[i];
  }
  sumr[3] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr5[i];
  }
  sumr[4] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr6[i];
  }
  sumr[5] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr7[i];
  }
  sumr[6] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr8[i];
  }
  sumr[7] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr9[i];
  }
  sumr[8] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr10[i];
  }
  sumr[9] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr11[i];
  }
  sumr[10] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr12[i];
  }
  sumr[11] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr13[i];
  }
  sumr[12] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr14[i];
  }
  sumr[13] = sum;
};

// -----------------------------------------------
let seattle = new store("Seattle", 23, 65, 6.3); // creat objects from constructor
let tokyo = new store("Tokyo", 3, 24, 1.2);

let lima = new store("Lima", 2, 16, 4.6);
let dubai = new store("Dubai", 11, 38, 3.7);
let paris = new store("Paris", 20, 38, 2.3);




fisrtCol();
dubai.addToTable();
seattle.addToTable();
paris.addToTable();
lima.addToTable();
tokyo.addToTable();
funsum();
call();





let newStorform = document.getElementById("creat"); 
newStorform.addEventListener("submit", another); 
function another(event) {
  event.stop();

  let min = event.target.min.value;
  let avg = event.target.avg.value;
  let storeLocation = event.target.storeLocation.value;
  let maxSale = event.target.maxSale.value;
 

  


    
      table.deleteRow(table.rows.length - 1);
      let creatstore  = new store(storeLocation, minSale, maxSale, avgSale);
      creatstore.addToTable();
     
      call();
funsum();
  

   

}

