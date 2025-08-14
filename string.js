let num = prompt("Welcome to the JS tutorial. Enter a number:")
console.log("You entered:", num);

let strthing = `This is a template literal with the quotations marks on the top left of your keyboard`;
console.log(strthing);

let obj = {
    item: "Pearl Roadshow Acoustic Drum Kit",
    price: 499.99,
}
let output = `The ${obj.item} costs ${obj.price}`;
console.log(output);

let stringbe = "Hello, World!";
console.log(stringbe[6]);

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
console.log("Let's learn few string methods.");
console.log("Length of str1:", str1.length);
console.log("Convert string to uppercase", str2.toUpperCase());
console.log("Convert string to lowercase", str1.toLowerCase());
console.log("A part of the string from 0 to 4 is ..", str1.slice(0, 4));
console.log("This is a method to concatenate strings..", str1 + str2);
