const pincodeRegex=/^400\s?088/;

function validateregx(pin){
    return pincodeRegex.test(pin);
}

console.log(validateregx("400088"))//true
console.log(validateregx("400 088"))//false
