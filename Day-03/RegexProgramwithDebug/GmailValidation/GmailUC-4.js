const emailregex=/^abc[.+_a-zA-z0-9-]*@bridgelabz.co.[a-z]+$/;
function validateRegx(gmail){
    return emailregex.test(gmail);
}

console.log(validateRegx("abc.dshjgmail.co.in")); // false
console.log(validateRegx("abc.xyz@bridgelabz.co.in")); // true
console.log(validateRegx("bc.xyz@bridgelabz.du.in")); // false
console.log(validateRegx("abc_123@bridgelabz.co.us")); // true
console.log(validateRegx("abc-xyz@bridgelabz.co.uk")); // true
console.log(validateRegx("abc.@bridgelabz.co.in")); // false
