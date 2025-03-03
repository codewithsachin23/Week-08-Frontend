const pincodeRegex=/^400088$/;

function validateregx(pin){
    return pincodeRegex.test(pin);
}

console.log(validateregx("400088"))//true
console.log(validateregx("400088A"))//false
