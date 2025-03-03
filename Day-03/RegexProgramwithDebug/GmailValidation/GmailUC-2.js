const emailregex=/^abc\..+@bridgelabz\..+$/;
function validateRegx(gmail){
    return emailregex.test(gmail);
}
console.log(validateRegx("abc.dshjgmail.co.in"));//false
console.log(validateRegx("abc.xyz@bridgelabz.co.in"));//true
console.log(validateRegx("bc.xyz@bridgelabz.co.in"));//false
