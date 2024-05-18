// --------------------
// number
// --------------------
let number = 2;
let number_typed: number = 3;

// --------------------
// string
// --------------------
let string = "string";
let string_typed: string = "string2";

// --------------------
// any: should be avoided as much as possible as you lose the primary feature of TS
// --------------------
let any_;
let any_typed: any;

let any_arr = [];
let any_typed_arr: any = [];

// --------------------
//tuples
// --------------------
let users_typed: [number, string] = [1, "Jonel"];

// Note:
// The above is not the same as below, as the type will now to (string | number)[]
// let users = [1, 'Jonel'];

// The arr.push() method can insert arbitrary type to the array, which will not be caught as compilation error
// users_typed.push(2);  // adds 3rd element, number

// --------------------
// enum: list of related constants
// --------------------
const small = 1;
const medium = 2;
const large = 3;

// PascalCase
enum SizeDefault {
  Small,
  Medium,
  Large,
} // TS starts as value, 0
enum SizeOverride {
  Small = "s",
  Medium = "m",
  Large = "l",
} // Cast to explicit values
enum Size {
  Small = 1,
  Medium,
  Large,
} //TS implicitly declares the values of that follows

let mySize: Size = Size.Small;
console.log(mySize); // logs `1`

const enum SizeOptimal {
  Small = 1,
  Medium,
  Large,
} // const on enum makes its JS output map more optimized
let mySizeOptimal: SizeOptimal = SizeOptimal.Small;
