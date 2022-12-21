// Here we are making concat method in function version

// we have to arrays and we have to conncet them
let z = [1, 2, 3, 4, 5];
let j = [6, 7, 8, 9, 10];

let concat = function(a, b){
    let result = []; // we have to add in our result those 2arrays
    a.forEach(function(val){
        result.push(val); // we create forEach method for looping and pushing
                                    // we are pushing array A elemnts in our result
    });
    b.forEach(function(val){
        result.push(val); // same like with array A
    });
    return result;
};
console.log(concat(z, j))