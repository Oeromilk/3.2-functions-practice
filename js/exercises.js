(function(){
  "use strict";

  /*
   *
   */

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2){
      "use strict";

    var max = Math.max(num1, num2);

    return max;
  }

  console.assert(max(10, 1) == 10);
  console.assert(max(2, 5) == 5);

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3){
    "use strict";

    var max = Math.max(num1, num2, num3);

    return max;

  }

  console.assert(maxOfThree(1, 14, -20) == 14);
  console.assert(maxOfThree(22, 39, 40) == 40);

  // ---------------------
  // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(char){
    "use strict";

    var outcome;

    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
      outcome = true;
    } else {
      outcome = false;
    }
    return outcome;
  }

  console.assert(isVowel('a') == true);
  console.assert(isVowel('t') == false);

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(phrase){
    "use strict";

    var textPhrase = phrase;
    var newPhrase = "";

    for (var i = 0; i < textPhrase.length; i++){
      var char = textPhrase[i];

      if(isVowel(char) || char == ' '){
        newPhrase += char;
      }else{
        newPhrase += char + "o" + char;
      }

    }
      return newPhrase;
  }

  console.assert(rovarspraket('this is fun') == 'tothohisos isos fofunon');
  console.assert(rovarspraket('aeiou') == 'aeiou');

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  var numArr = [1, 3, 3, 7];
  var numArr1 = [8, 8, 8, 8, 1, 3];

  function sum(array){
    "use strict";

    var total = 0;

    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
    return total;
  }

  console.assert(sum(numArr) == 14);
  console.assert(sum(numArr1) == 36);

  function multiply(array){
    "use strict";

    var total = 1;

    for (var i = 0; i < array.length; i++){
      total = total * array[i];
    }
    return total;
      "use strict";
  }

  console.assert(multiply(numArr) == 63);
  console.assert(multiply(numArr1) == 12288);

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(phrase){
    "use strict";

    return phrase.split('').reverse().join('');
  }

  console.assert(reverse('can we flip this') == 'siht pilf ew nac');
  console.assert(reverse('was it a car or a cat i saw') == 'was i tac a ro rac a ti saw');

  // ---------------------
  // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(words){
    "use strict";

    var strings = words;
    var longest = 0;

    for(var i = 0; i < strings.length; i++)
      if (strings[i].length > longest) {
        longest = strings[i].length;
        }
      return longest;
  }

  var array = ['one', 'five', 'greater', 'stadium'];
  var array1 = ['is', 'them', 'our', 'their'];

  console.assert(findLongestWord(array) == 7);
  console.assert(findLongestWord(array1) == 5);

  // ---------------------
  // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(words, i){
    "use strict";

    var strings = words;
    var number = i;
    var longWords = [];

    for(var i = 0; i < strings.length; i++){
      if (strings[i].length > number){
        longWords.push(strings[i])
      }
    }
    return longWords;
  }

  console.assert(filterLongWords(array, 4));


  // ---------------------
  // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(string){
      "use strict";

      var freq = {};

      for(var i = 0; i < string.length; i++) {
          var character = string.charAt(i);
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
      }
      return freq;
  }

  // This is my console.log() instead of console.assert() because I did not
  // know how to format the 'thruhy' statement.
  console.log(charFreq('abbabcbdbabdbdbabababcbcbab'));

}());
