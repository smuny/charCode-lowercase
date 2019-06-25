Input: "Hello"
Output: "hello"


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

//     you need to check each letter if they are upper or lowercase
    let result = [];

    for (i = 0; i < str.length; i += 1){
        let currentChar = str[i];
        let charCode = currentChar.charCodeAt();

        if (charCode >= 65 && charCode <= 90){
           currentChar = String.fromCharCode(charCode + 32)
        }
        result.push(currentChar)
    }
    return result.join('');
}
