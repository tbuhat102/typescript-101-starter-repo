/* function reverse string
* Objective: pass in a string and 
return the string reversed
* @param str - passed in string
* @returns str - reversed string
*/
function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Hello World"));
