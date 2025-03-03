const emailregex=/^abc\..+$/;
function validateRegx(gmail){
    return emailregex.test(gmail);
}
console.log(validateRegx("abc.dshj@gmail.co.in"));//true
console.log(validateRegx("abc.xyz@bridgelabz.co.in"));//true
console.log(validateRegx("bc.xyz@bridgelabz.co.in"));//false
