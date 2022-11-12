
// Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds);

// Convert all the strings to title caps in a string array
function sentenceCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
   
   return str.replace(/\w\S*/g,
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
  }
   
  document.write(sentenceCase('karthic krishnan'));
//   Sum of all numbers in an array
console.log(
    [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
  )

// Return all the prime numbers in an array

var myInt = 235345;
 
let myFunc = num => Number(num);
 
var intArr = Array.from(String(myInt), myFunc);
 
console.log(intArr);