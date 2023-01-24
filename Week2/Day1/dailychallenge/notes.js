// To properly  display the orange string you should do this:

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let fruits_1 = moreFruits[1];

let fruits_2 = fruits_1[1];
let oranges = fruits_1[1][0];

console.log(fruits_2);
console.log(oranges);

// You were previously doing this:

let fruits_2 = fruits_1[1];

console.log(fruits_2);

// Which displays the ARRAY containing the 'Oranges' string but not the string itself
