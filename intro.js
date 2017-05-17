/*
 * Manjunath Sreedaran
 * IT 328 17SP T. Ostrander
 * 5/17/2017
 * intro.js: 
*/

console.log("Introduction to JavaScript");

/*
 * For numbers 1 to 100, prints "FizzBuzz" if number goes evenly into 15,
 * "Fizz" if into 3, "Buzz" if into 5, otherwise the number itself.
*/
function FizzBuzz()
{
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
      console.log("FizzBuzz");
    else if (i % 3 == 0)
      console.log("Fizz");
    else if (i % 5 == 0)
      console.log("Buzz");
    else
      console.log(i);
  }
}

FizzBuzz();

/*
 * Counts the occurrences of the capital letter "B" in the subject
*/
function countBs(subject)
{
  var count = 0;
  for (var i = 0; i < subject.length; i++) {
    if (subject.charAt(i) == "B")
      count++;
  }

  console.log(count);
}

/*
 * Tests the countBs function with a few sample subjects
*/
function test_countBs() {
  var testSubjects = ["", "a", "b", "B", "BB"];
  for (var i = 0; i < testSubjects.length; i++) {
    countBs(testSubjects[i]);
  }
}

test_countBs();

