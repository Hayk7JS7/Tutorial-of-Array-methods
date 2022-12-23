// map
// map parameters (element index array) 
// elment is the most useful parameter in map method
// When we want to create new array with some changes it's better to use map

const a = [3, 4, 5];
// structure of map method
// we are decalring new variable and callback function

let b = a.map(function(item){
    return item * 2;
});
console.log(b);
// after return we are making our new array with some changes here we did multiplication

// map will not give an error if we have undefined values in our array
const a1 = [3, 4, 5];
a1[10] = 10;

let b1 = a1.map(function(item){
    return item * 2;
});
console.log(b1);  // expected output: [6, 8, 10, empty * 7, 20]

// we can optimise the code and write it like an arrow function
let c = a1.map(item => item * 2);
console.log(c);
// but our problem is to understand the code for later we will optimise


// index paramter of map method
const d = [4, 5, 6];
let d1 = d.map(function(item, index){
   console.log(index + ": " + item);
   return item;  
});
console.log(d1);

// Exercise for map
// we have to make Celsius to Fahrenheit 
// formula F = (Celsius * 1.8) + 32

const temp = [20, 43, 2, 4, -20, -10, 0, 7];

let tempF = temp.map(function(item){
    return (item * 1.8) + 32;
});
console.log(tempF);


// if we return index expected output would be: 0, 1, 2
let z = [33, 44, 55];
let y = z.map(function(item, index){
    return index;
});
console.log(y);


// let's optimise the code 
// if you don't know Javascript objects here is the link  https://javascript.info/keys-values-entries
const v = [
    { name: "   Joe ",   order:    12, sum:   "123,5"   },
    { name: " IVAN Rakitic     ", order: 12, sum:   "123,5"  },
    {  name: "Ivan PersIcIch", order: 12, sum: "123,5"},
    {  name: "   DAnIel JaMeS   ", order:   12, sum:  "123,5"    }
];

const optimisedCode = v.map(function(item){
    item.name = item.name.trim().toLocaleLowerCase();
    return item;
});
console.log(optimisedCode);
// trim() is an array metod which remove useless spaces
// toLowerCase() is an array method which make letters in a lower form










// filter 
// filter has element and inex parameters
// we are using filter when we want to filter somthing in an array
// for example here we want to find odd elemets in an array
const b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b3 = b2.filter(function(item){
    if(item % 2 !== 0){
        return true;
    }
   
});
console.log(b3);
// example of filter method
const n = [-3, 1, 8, -5, 6, 7, 2, -3, 43, -4, 5, 345, -34, -5423, 43, 0];

let n1 = n.map(function(item){
    if(item > -1){
    return item;
    }
});
console.log(n);
console.log(n1);

// we have to filter and find out to whose debt is higher than 500
// sort in descending order
const clients = [
    { iin: "g8f0s0sf", user: "James", debt: 5},
    { iin: "98f0s0sf", user: "Pedri", debt: 50},
    { iin: "08f0s0sf", user: "Nicko", debt: 500},
    { iin: "18f0s0sf", user: "Harden", debt: 5000},
    { iin: "j8f0s0sf", user: "Jordan", debt: 50000},
    { iin: "l18f0s0sf", user: "Joe", debt: 500000}
];

const debts = clients.filter(function(item){
    if(item.debt > 500){
        return item;
    }
}).sort(function(a, b){
   return b.debt - a.debt; 
});
console.log(debts);

// sort method is used for sorting 
// if you want to know deatails of sorting please click for this link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

















