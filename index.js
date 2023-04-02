function reverseString(word) {
  // TODO: implement string reversing functionality

 return word.split("").reverse().join("");
  
}
function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here


  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false


  create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
*/

/*
  Add written explanation of your solution here
  I need to make an isPalindrome function that returns either true or false. 
  When the input string is the same forwards and backwards, I should return true. 
  That means that if the input string is the same after I reverse it, I should return true.
 For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", so my solution should return true for these cases. "hi" in reverse is "ih", so my solution should return false for this case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"))
 
  console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));
}

module.exports = isPalindrome;
