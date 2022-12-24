//1 clean useless spaces in an array and make it lower case form
let cleanNames = [" AvengErs", "   captain_AmericA", "ironmAn   ", " black PANTHER   "];
function CleanName(arr){
    return arr.map(function(item){
        return item.trim().toLowerCase();
    })
}
/*
return arr.map(item => item.trim().toLowerCase())
arrow function form 
*/

console.log(cleanNames);
console.log(CleanName(cleanNames));



//2  Write a function that converts an array of values from miles to kilometres using the map method.
let convertMiletoKm = function(arr){
    return arr.map(function(item){
        return item * 1.609344;
    });
};

function totalDistance(arr){
    return arr.reduce(function(aggr, val){
        return aggr + val;
    }, 0);
};

let a = convertMiletoKm([1, 2, 3, 4, 5, 6]);
console.log(a);
console.log(totalDistance(a));

//3 Square and sum the array elements using the arrow function and then find the average of the array.
let count = 0;
let averageSum = function(arr){
   
    return arr.reduce(function(aggr, val){
        count++;
        return aggr + Math.pow(val, 2);
    }, 0);
};

console.log(averageSum([1, 2, 3, 4]) / count);


//4 reate a new array using the map function whose each element is equal to the original element plus 4.
let oldArray = [1, 2, 3, 4, 5];
let newArray = oldArray.map(item => item + 4);
console.log(newArray);

//5 From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenDoubleNumbers = function(arr){
    return arr.filter(function(val){
        if(val % 4 === 0){
            return val;
        }
    }).reduce(function(aggr, val){
        return aggr + val;
    }, 0);
};
console.log(evenDoubleNumbers(array1));
//6  Create a new array whose elements is in uppercase of words present in the original array.
let strings = ["avengers", "captain america", "ironman", "black panther"];
let heros = strings.map(item => item.toUpperCase());
console.log(heros);


//7 Use the .map() method on the heros array to return a new array.
const Heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];
let addKeys = Heros.map(function(val, index){
    return {id: index, hero: val.name}
});
console.log(addKeys);

// const freinds = [
//     {name: "Hayk"},
//     {name: "Amosh"},
//     {name: "Vahan"},
//     {name: "Samo"},
//     {name: "Davo"}
// ];
// let newArrObj = freinds.map(function(val, index){
//     return {place: index, freind: val.name}
// });
// console.log(freinds);
// console.log(newArrObj);

//8 Consider the following array:
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords.slice(-3));


//9 tarting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.
/*
An array of odd numbers.
An array of numbers divisible by 2 or 5.
An array of numbers divisible by 3 and then squared those numbers.
The sum of the following: square the numbers divisible by 5.
*/
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = num.filter(function(val){
    if(val % 2 !== 0){
        return val;
    }
});
console.log("Odd numbers = " + oddNum);


let divisbleNum = num.filter(function(val){
    if(val % 2 === 0 || val % 5 === 0){
        return val;
    }
});
console.log("The numbers which can be divide into 2 or 5 = " + divisbleNum);


let divisSqrtNum = num.map(function(val){
    return val;
}).filter(function(item){
    if(item % 3 === 0){
        return Math.pow(item, 2);
    }
});

let divisNum1 = num.reduce(function(aggr, val){
    if(val % 5 === 0){
       return aggr + val;
    } 
    return aggr;
}, 0);
console.log(divisNum1);


// 10 Consider the following array: evenNums make it squared
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredNums = nums.filter(function(val){
    if(val % 2 === 0){
        return val;
    }
}).map(function(item){
    return item * item;
});
console.log(squaredNums);
// expected output should be: [484, 2116, 7396, 9604]

// Use the reduce function to calculate the sum of nums array.

let sumOfElements = nums.reduce(function(aggr, val){
    return aggr + val;
}, 0);
console.log(sumOfElements);
// expected output should be: 468

