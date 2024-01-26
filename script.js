'use strict'
let num = Number(prompt('Please enter the number'));
let degree = Number(prompt('Please enter the degree'));
function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow(num,degree));