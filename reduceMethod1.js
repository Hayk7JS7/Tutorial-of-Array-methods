// Reduce method with his examples
// reduce has parameters or arguments accumalator currentValue Index

/*
The main idea of reduce is to make 1 result 
for example 
we have an Array that we want sum of that array
*/
// let's write it wih loop for making clear
let array1 = [1, 2, 3, 4, 5];
function sumArr(arr){
    let sum = 0;
for(let i = 0; i < array1.length; i++){
sum += arr[i];
}
return sum;
}
console.log(sumArr(array1));

// using Reduce method

let array = [1, 2, 3, 4, 5];
let sumofArray = array.reduce(function(aggr, val){
    return aggr + val;
}, 0); 
console.log(sumofArray);
// 0 is first value of aggr
/*
aggr + val(0 + 1)
after that the sum of aggr + val is in aggr

reduce is like loop 
after 1st loop aggr(1)
2nd loop
aggr(1) + val(2)

if you didn't understand expalantion please write debugger before 9 line

*/

// example with Arrays which contain objects
let a = [
    {id: 55, city: "Rome"},
    {id: 28, city: "Neapol"},
    {id: 80, city: "Turin"},
];
// the main idea of reduce is to decrease to cut smth
// now we want to make an array and to include only ID's

let b = a.reduce(function(aggr, val){
    aggr.push(val.id);
    return aggr;
}, []);
console.log(b);

// the first value for aggr is empty array [] 
// we have to push or add in that array Id's in an array A
// So we are using push method and adding a.id in aggr

// If you don't know objects please learn it 
// here is the link to learn objects  https://javascript.info/object


// let's write code which will  find max value

let a1 = [3, 1, 2, 5, 1, 2, 4];
// we are declaring max in 0index in a1 array
/* by using for loop we are comapring with all elements if they are bigger
than max so we are making choosing that elements by comapring with whole array
we are choosing our max value 
*/
let max = a1[0];
for(let i = 0; i < a1.length; i++){
    if(a1[i] > max){
        max = a1[i];
    }
}
console.log(max);
// if you understood it you can easily write your code without using my variant of reduce
// using it in reduce method
let a2 = [3, 1, 2, 9, 1, 2, 4];
let maxValue = a2.reduce(function(aggr, val){
    if(val > aggr){
        return val;
    }
    else{
        return aggr;
    }
}, 0)
console.log(maxValue);


// as I said reduce has accumaltor currentValue and Index
// let's write code by using index
// index Maxvalue
// first of fall let's write by using loop than we will write it in reduce method

let a3 = [23, 65, 433, 34, 5, 543, 6, 2];
let max1 = a3[0];
let index = 0;
for(let i = 0; i < a3.length; i++){
    if(a3[i] > max){
        max = a3[i];
        index = i;
    }
}
console.log(index);

// using reduce method

let a4 = [20, 5, 12, 4, 5, 22, 6, 2];
let indexMaxValue = a4.reduce(function(aggr, val, index){
    if(val > aggr[1]){
        return [index, val];
    }
    else{
        return aggr;
    }
}, [0, a4[0]]); //we are writing 0 for make aggr to compare from 0
console.log(indexMaxValue);
// a4[0] we have to write to start from 1element or from 0 index


// we have to connect multidemesional arrays
// in previous code concate Methods i teach you how to use concate 
// in hand written form now we will switch concate and reduce with each other

const data = [[1, 2, 3], [3, 4, 5], [6, 7, 8], [9, 10]];
const connectMultiArr = data.reduce(function(aggr, val){
    return aggr.concat(val);
}, []); // we put [] to make them in a single array
console.log(connectMultiArr);
// first of fall we doing concate 1st array than second after that 3rd
// and as i said the main idea of reduce is to make a single 1 result
// and the result is to make multidemensional array into simple single array
