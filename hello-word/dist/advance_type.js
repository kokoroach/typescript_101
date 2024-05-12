"use strict";
let employee_3 = {
    id: 1,
    name: 'Jonel',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let quantity_aliased = 50;
function greet(name) {
    if (name)
        console.log(`Hi ${name}!`);
    else
        console.log('Hola!');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null)
    console.log(customer.birthday);
function getCustomer2(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer2 = getCustomer2(1);
function getCustomerV2(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerv2 = getCustomerV2(1);
let customers = [
    getCustomerV2(0),
    getCustomerV2(1),
    getCustomerV2(2),
];
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=advance_type.js.map