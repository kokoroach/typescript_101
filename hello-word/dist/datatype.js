"use strict";
let number = 2;
let number_typed = 3;
let string = "string";
let string_typed = "string2";
let any_;
let any_typed;
let any_arr = [];
let any_typed_arr = [];
let users_typed = [1, "Jonel"];
const small = 1;
const medium = 2;
const large = 3;
var SizeDefault;
(function (SizeDefault) {
    SizeDefault[SizeDefault["Small"] = 0] = "Small";
    SizeDefault[SizeDefault["Medium"] = 1] = "Medium";
    SizeDefault[SizeDefault["Large"] = 2] = "Large";
})(SizeDefault || (SizeDefault = {}));
var SizeOverride;
(function (SizeOverride) {
    SizeOverride["Small"] = "s";
    SizeOverride["Medium"] = "m";
    SizeOverride["Large"] = "l";
})(SizeOverride || (SizeOverride = {}));
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize);
let mySizeOptimal = 1;
//# sourceMappingURL=datatype.js.map