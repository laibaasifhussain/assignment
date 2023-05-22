//Chapter 21 (Changing Case)

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
var lowercaseStr = str.toLowerCase();

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
var lowercaseElement = arr[index].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.
alert(str.toUpperCase());

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
var cityName="kaRacHi";
var first =  cityName.charAt(0).toUpperCase();
var second = cityName.slice(1).toLowerCase();
var result = first + second;
console.log(result);


// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
var sameWords = "captain";
sameWords = sameWords.slice(1,3);
console.log(sameWords);
// 2. The number of characters in the string will be assigned to the
// variable.
var str = "Laiba";
var numofchar = str.length;
// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
seg = animal.slice(2,6);
console.log(seg);
// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
var str = "Laiba";
var numChars = str.length;
// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var str = "example";
var numChars = str.length;
var newStr = str.slice(1, numChars - 3);
// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
// What is the value of indx?
//answer is : 3
// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// var indx = text.lastIndexOf("be");
// What is the value of indx?
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);
//answer : 16
// Note: Try the above both examples by yourself.
// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
var text = "Let it go, let it go!";
var indx = text.lastIndexOf("go") + 1;
// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
if (str[indexNum] !== undefined) {

}
// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
var str = "abcde";
var character = str.charAt(2);
// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
var text = "Hello, world!";
var cha = text.charAt(9);
// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
var str = "example";
var x = str.charAt(str.length - 1);
// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
var input = "abcdef";
var cha = input.charAt(4);
// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
if (str.charAt(2) === 'X') {
}
// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
var charArray = [];
  for (var i = 0; i < str.length; i++) {
    charArray.push(str.charAt(i));
}
// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
var newStr = str.replace("1", "one");
// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
var y = x.replace(/abc/g, "xyz");

// Chapter 26 (Rounding Numbers)
// 1. Form a statement that rounds a number to the nearest integer.
var num = 3.7;
var roundedNum = Math.round(num);
// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 3.2;
var roundNum = Math.ceil(origNum);
// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 3.9;
var roundNum = Math.floor(origNum);
// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
var roundedNum = Math.round(num);
// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
var roundedValue = Math.round(0.5);

// Chapter 27 (Random Numbers)
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50
var randomNum = Math.floor(Math.random() * 50) + 1;
// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
var randomNumber = Math.random();
// 3. You have to create a dice in JavaScript with the use of pseudorandom number.
var diceRoll = Math.floor(Math.random() * 6) + 1;
// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";


// Chapter 28, 29 (Converting Strings)
// 1. How do you convert a string to an integer in JavaScript?
var str = parseInt("43");
var str = Number("43");
var str = +("43");
// 2. Write a JavaScript function to convert the string "123" to an
// integer.
var str = +("123");
// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
var decimalStr = "3.14";
var floatNum = parseFloat(decimalStr);
console.log(floatNum);
// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
var str = "123";

if (!isNaN(Number(str))) 
{
  var integerNum = parseInt(str);
  console.log(integerNum);
}

var decimalStr = "3.14";

if (!isNaN(Number(decimalStr))) 
{
  var floatNum = parseFloat(decimalStr);
  console.log(floatNum);
}
// 5. How can you convert a number to a string in JavaScript?

var num = 123;
var num1 = num.toString();
console.log(num1);

// 6. Write a JavaScript function to convert the number 42 to a string.

var num = 42;
var num1 = num.toString();
console.log(num1);
// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
var decimalStr = "3.14";
var integerNum = parseInt(decimalStr);
console.log(integerNum);


// Chapter 38 (Local vs. Global
// Variables)
// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.
function greet() {
    var message = "Hello,";
    console.log(message + " World!");
}
greet();
// 2. How can you access a global variable inside a function in
// JavaScript?
var globalVariable = "I am global";

function printGlobal() {
  console.log(globalVariable);
}

printGlobal();


