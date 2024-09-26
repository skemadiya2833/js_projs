// 26. You are given an array of email addresses. You need to determine how many unique email addresses there are 
// after normalizing them based on certain rules:
// All characters after the '+' (and including '+') in the local name are ignored.
// Periods ('.') in the local name are ignored.
// The domain name remains unchanged.
// Implement a function uniqueEmails(emails) that takes an array of email addresses and returns the 
// number of unique email addresses after applying the above rules.
// For example:
// "alice@example.com" and "alice+work@example.com" should be considered the same address since the '+' and everything after it is ignored.
// "alice.z@exa.mple.com" and "alicez@example.com" are also considered the same after ignoring the periods in the local name.
function applyRules(str){
    let [localName, domain] = str.split('@');
    localName = localName.replace('.','');
    let name = localName.split('+')[0];
    return name + '@' + domain;
}
function uniqueEmails(emails) {
    let set = new Set();
    for(let email of emails){
        let ruledEmail = applyRules(email);
        set.add(ruledEmail);
    }
    return set.size ;
}
console.log("Uniques email count ",uniqueEmails(["alice+work@example.com", "alice@example.com", "alice.z@exa.mple.com", "alicez@example.com", "sunil+hello@gmail.com"]));