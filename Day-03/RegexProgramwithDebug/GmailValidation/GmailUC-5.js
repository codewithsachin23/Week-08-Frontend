const emailregex = /^abc[._+a-zA-Z0-9-]*@[a-zA-Z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?$/;
function validateRegx(gmail){
    return emailregex.test(gmail);
}

console.log("===== A. Valid Emails =====");
console.log(validateRegx("abc@yahoo.com"));
console.log(validateRegx("abc-100@yahoo.com"));
console.log(validateRegx("abc.100@yahoo.com"));
console.log(validateRegx("abc111@abc.com"));
console.log(validateRegx("abc-100@abc.net"));
console.log(validateRegx("abc.100@abc.com.au"));
console.log(validateRegx("abc@1.com"));
console.log(validateRegx("abc@gmail.com.com"));
console.log(validateRegx("abc+100@gmail.com"));

console.log("\n===== B. Invalid Emails (TLD - Top Level Domains) =====");
console.log(validateRegx("abc"));
console.log(validateRegx("abc@.com.my"));
console.log(validateRegx("abc123@gmail.a"));
console.log(validateRegx("abc123@.com"));
console.log(validateRegx("abc123@.com.com"));
console.log(validateRegx(".abc@abc.com"));
console.log(validateRegx("abc()*@gmail.com"));
console.log(validateRegx("abc@%*.com"));
console.log(validateRegx("abc..2002@gmail.com"));
console.log(validateRegx("abc.@gmail.com"));
console.log(validateRegx("abc@abc@gmail.com"));
console.log(validateRegx("abc@gmail.com.1a"));
console.log(validateRegx("abc@gmail.com.aa.au"));
