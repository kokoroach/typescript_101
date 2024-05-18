// // Returns `void`
// function calculateTax1(income: number){
// }

// // Returns `number`
// function calculateTax2(income: number){
//     return 0;
// }

// Return type is explicitly defined
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// Also, set the following in the TS config:
// noUnusedLocals
// noUnunsedParameters
// noImplicitReturns
