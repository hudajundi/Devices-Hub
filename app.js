'use strict';
console.log('i am here')
// I should use a table + constructor + local storage + form 

// connect with HTML:
var container= document.getElementById('myDev');
var table= document.createElement('table');
container.appendChild(table);


 // here is the global var:
var categoryArray=['mobile', 'laptop', 'tablet'];

 // constructor:
 function Device (name, quantity, price, category){
     this.name= name;
     this.quantity= quantity;
     this.price= price;
     this.category= category;
this.priceToltal=0;
     // the array:
     this.priceArray = [];
     

     // the methods:
    this.getRandomPrice();

 }
// prototype: 

Device.prototype.getRandomPrice = function(){

   var randomPrice =  Math.floor(Math.random() * (750 - 350 + 1) ) + 350;
    this.priceArray.push(randomPrice);
    this.priceToltal+= randomPrice  /// we shoild add it so the loop sum the total price 
}



 







 // creat a table:


 

 // create the header :
 function headerRow() { 

 var trHead = document.createElement('tr');
 table.appendChild(trHead);

 var tdHead = document.createElement('td');
 trHead.appendChild(tdHead);
 tdHead.textContent= 'Device Name ';

 var trHead = document.createElement('tr');
 table.appendChild(trHead);

 var tdHead = document.createElement('td');
 trHead.appendChild(tdHead);
 tdHead.textContent= 'Quantity ';

 var trHead = document.createElement('tr');
 table.appendChild(trHead);

 var tdHead = document.createElement('td');
 trHead.appendChild(tdHead);
 tdHead.textContent= 'Unit Price ';

 var trHead = document.createElement('tr');
 table.appendChild(trHead);

 var tdHead = document.createElement('td');
 trHead.appendChild(tdHead);
 tdHead.textContent= 'Catogary ';

}

// creat the data inside the table : 
 function firstColom(){
for( var i =0; i <8 ;i++) {
var trBody = document.createElement('tr');
table.appendChild(trBody);
var tdBody = document.createElement('td');
trBody.appendChild(tdBody);
tdBody.textContent = this.name; 

}


}

headerRow(); 
firstColom(); 


// local storage : 
// set item :
localStorage.setItem('device name ', JSON.stringify(this.name)); 

// get item: 
var retarnObject = localStorage.getItem('device name');



