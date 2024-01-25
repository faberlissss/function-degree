'use strict'
let num = Number(prompt('Please enter the number'));
let degree = Number(prompt('Please enter the degree'));
function pow(num, degree) {
    let result = 1;
    for (let i = 0; i < degree; i++){
        result = result * num;
    }
    return result;
}
console.log(pow(num,degree));