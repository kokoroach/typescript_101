// --------------------
// type aliases: ~class in Python
// --------------------
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee_3: Employee = {
  id: 1,
  name: "Jonel",
  retire: (date: Date) => {
    console.log(date);
  },
};

// --------------------
// union type
// --------------------
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
// kgToLbs(2);
// kgToLbs('3kg');

// --------------------
// intersection type
// --------------------
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// --------------------
// literal type
// --------------------
// Use case: a quantity must be either 50 or 100
let quantity: 50 | 100 = 50;

type Quantity = 50 | 100;
let quantity_aliased: Quantity = 50;

type Metric = "cm" | "inch";

// --------------------
// nullable type
// --------------------
function greet(name: string | null | undefined): void {
  if (name) console.log(`Hi ${name}!`);
  else console.log("Hola!");
}
// greet(null);
// greet(undefined);

// --------------------
// optional chaining
// --------------------
// obj.val?.prop
// obj.val?.[expr]
// obj.func?.(args)

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null) console.log(customer.birthday);

// Assume that this function can also return undefined
function getCustomer2(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
// Then, we expand the if check
let customer2 = getCustomer2(1);
// if (customer2 !== null && customer2 !== undefined)
// console.log(customer2.birthday);

// Optional property access operator
// console.log(customer2?.birthday);

// Expand further and make birthday property optional

type CustomerV2 = {
  birthday?: Date;
};

function getCustomerV2(id: number): CustomerV2 | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customerv2 = getCustomerV2(1);
// console.log(customerv2?.birthday?.getFullYear());

// Optional element access operator
type NullableCustomer = CustomerV2 | null | undefined;
let customers: NullableCustomer[] = [
  getCustomerV2(0),
  getCustomerV2(1),
  getCustomerV2(2),
];
// if (customers !== null && customers !== undefined)
// console.log(customers[0]?.birthday);

// console.log(customers);
// customers?.[0]

// Optional call
// let log: any = (message: string) => { console.log(message) };
let log: any = null;
log?.("a");
