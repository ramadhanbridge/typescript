"use strict";
let sales = 123345;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, 'mosh'];
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20000);
let employee = { id: 1, name: 'ram' };
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(20);
KgToLbs('20kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hello');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthaday: new Date() };
}
let customer = getCustomer(20);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthaday);
//# sourceMappingURL=index.js.map