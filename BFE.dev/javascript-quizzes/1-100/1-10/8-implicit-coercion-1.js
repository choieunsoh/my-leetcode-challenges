console.log(Boolean('false'));
console.log(Boolean(false));
console.log('3' + 1);
console.log('3' - 1);
console.log('3' - ' 02 ');
console.log('3' * ' 02 ');
console.log(Number('1'));
console.log(Number('number'));
console.log(Number(null));
console.log(Number(false));

/*
true
false
"31"
2
1
6
1
NaN
0
0
*/

/*
console.log(Boolean('false')) // ONLY empty string will be false
console.log(Boolean(false)) // if it's already boolean type, NO conversion
console.log('3' + 1) // either of part is string, whole expression will be string concatenation
console.log('3' - 1) // subtraction operator ONLY trigger ToNumber() conversion, no string
///? same as (3-1) = 2
console.log('3' - ' 02 ') // String to Number will trim all white spaces and starting 0
///? same as (3 - 2) = 1
console.log('3' * ' 02 ') // multiplicative operator ONLY trigger ToNumber() conversion
///? same as (3 * 2) = 6
console.log(Number('1')) // String to Number, here is the valid number 1
console.log(Number('number')) // String to Number, here NOT Valid, return NaN
console.log(Number(null)) // by ECMA spec, it's 0
console.log(Number(false)) // by ECMA spec, it's 0
*/
