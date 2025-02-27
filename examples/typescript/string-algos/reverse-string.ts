/* function reverse string
* Objective: pass in a string and 
return the string reversed
* @param str - passed in string
* @returns str - reversed string
*/
function reverseString(str: string): string {
  // let reversed = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //  reversed += str[i];
  // }
  // return reversed;
  let stringArr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    stringArr.push(str[i]);
  }
  return stringArr.join("");
}
// console.log(reverseString("Hello World"));
function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("lol"));
