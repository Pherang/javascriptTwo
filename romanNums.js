function convertToRoman(num) {

    /* 
    * Roman numerals follow a pattern where  if a smaller digit comes after a larger
    * one it is added. If it appears before a larger one it is subtracted
    * e.g.    IV is four and VI is six. Before and after.
    */

    /* 
    * Some pseudo code for 3999 in Roman Numerals:   
    * If 3999 > 1000 then subtract 1000 and record an M.
    * If 2999 > 1000 then subtract 1000 and record an M.
    * If 1999 > 1000 then subtract 1000 and record an M.
    * 999  < 1000 and > 100 then subtract 100 and record a C, etc.
    * If 99 > 
    * If 9 > 1 then subtract 1 and record an I, and so on.
    *
    */

    /*  
    * After we have all ones, tens, hundreds, and thousands recorded.
    * We can use a table to look up the numbers and translate them?
    * Is there an algorithm that could be programmed? We will need to know the values..
    * 3 Ms = MMM, 900 = CM, 90 = XC, 9 = IX   
    */

    // Finally return the calculated roman numeral.

    return num;
}
   


var answerBox = document.getElementById("answer");

answerBox.textContent = convertToRoman(36);