//3rd Highest Number in Array
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
//
//Example:
//
////Using the array
//const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
////The correct answer is : 11



const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// Initialize variables to hold the three largest numbers
let first = 0;
let second = 0;
let third = 0;

// Loop through the array
for (let i = 0; i < arr.length; i++) {
  // Check if the current number is greater than the first largest number
  if (first < arr[i]) {
    // If so, shift the values to their place accordingly
    third = second;
    second = first;
    first = arr[i];
  } else if (second < arr[i]) {
    // If the current number is greater than the second largest number
    // but not greater than the first, update the second largest number
    third = second;
    second = arr[i];
  } else if (third < arr[i]) {
    // If the current number is greater than the third largest number
    // but not greater than the second or first, update the third largest number
    third = arr[i];
  }
}

// Output the three largest numbers
console.log(first, second, third);


