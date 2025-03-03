const pincodeRegex=/400088/;

function validateRegx(pin){
    return pincodeRegex.test(pin);
}


console.log(validateRegx("400088"));
console.log(validateRegx("40008856841"));
console.log(validateRegx("400088d"));