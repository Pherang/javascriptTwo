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
    var romanThousands= "";
    var romanHundreds = "";
    var romanTens = "";
    var romanOnes = "";

    var thousands = 0;
    var hundreds = 0;
    var tens = 0;
    var ones = 0;
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000;
            thousands++;
        }
        if (num < 1000 && num >= 100) {
            console.log(num);
            num -= 100;
            hundreds++;
        }
        if (num < 100 && num >= 10) {
            num -= 10;
            tens++;
        }
        if (num < 10 && num >= 1) {
            num -= 1;
            ones++;
        }

    }

    console.log(thousands + " " + hundreds + " " + tens + " " + ones);

    /*  
    * After we have all ones, tens, hundreds, and thousands recorded.
    * We can use a table to look up the numbers and translate them?
    * Is there an algorithm that could be programmed? We will need to know the values..
    * 3 Ms = MMM, 900 = CM, 90 = XC, 9 = IX    
    */


    function romanCount(thousands,hundreds,tens,ones) {
        // Calculate thousands.
        for (i = 1; i <= thousands; i++) {
            if ( i < 4) {
                romanThousands += "M";
            }
            if (i == 4) {
                romanThousands = "MV";
            }
            if (i == 5) {
                romanThousands = "V-";
            }
            if (i > 5 && i < 9) {
                romanThousands += "M";
            }
            if( i == 9) {
                romanThousands = "VM-";
            }
       }
       console.log("The romans is " + romanThousands);
        // Calculate hundreds.
        for (i = 1; i <= hundreds; i++) {
            if ( i < 4) {
                romanHundreds += "C";
            }
            if (i == 4) {
                romanHundreds = "CD";
            }
            if (i == 5) {
                romanHundreds = "D";
            }
            if (i > 5 && i < 9) {
                romanHundreds += "C";
            }
            if( i == 9) {
                romanHundreds = "CM";
            }
        }

            // Calculate the tens
            for (i = 1; i <= tens; i++) {
                if ( i < 4) {
                    romanTens += "X";
                }
                if (i == 4) {
                    romanTens = "XL";
                }
                if (i == 5) {
                    romanTens = "L";
                }
                if (i > 5 && i < 9) {
                    romanTens += "X";
                }
                if( i == 9) {
                    romanTens = "XC";
                }
            }

            //Calculate the ones
            for (i = 1; i <= ones; i++) {
                if ( i < 4) {
                    romanOnes += "I";
                }
                if (i == 4) {
                    romanOnes = "IV";
                }
                if (i == 5) {
                    romanOnes = "V";
                }
                if (i > 5 && i < 9) {
                    romanOnes += "I";
                }
                if( i == 9) {
                    romanOnes = "IX";
                }
            
            }
            return romanThousands + romanHundreds + romanTens + romanOnes;
        }


        var romanNum = romanCount(thousands,hundreds,tens,ones);
        
        
    

    
    // Finally return the calculated roman numeral.
    console.log("The answer is " + romanNum);
    return romanNum;
}

var answerBox = document.getElementById("answer");

answerBox.textContent = convertToRoman(5000);