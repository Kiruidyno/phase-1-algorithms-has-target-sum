function hasTargetSum(array, target) {

  const seen=new Set()       //create an empty set to store the seen numbers
  for (let num of array){      //loop through the array
    const diff= target-num;  

    if (seen.has(diff)){     //if the difference is already in the set, then we have our pair.  
      return true;
    }
    seen.add(num);           //add the current number to the set
  }
  return false;             //if we reach this point, no pair of numbers adds up to the target
}

/* Big 0 Notation
  
  const seen= new Set() creates a new set 
  for... of loops through an array of n elements
  const diff=target-num subtracts two integers 
  if- checks if a value is in a set and returns a boolean value true or false
  seen.add(num)- adds a value to a set, and confirms if the number is the target, 
  return true if the sum  is the target
  return false if the sum is not the target

*/

/* Pseudocode

Create a function called hasTargetSum, with an array and a target
  check through a set of given numbers, 
  identify two numbers that when added sums to the target
  return true if the two numbers exist, 
  otherwise return false
*/

/* Code Explanation
  The code first begins by creating a function called 'hasTargetSum' that takes in two parameters: an array of integers (array) and a target integer (target). 
  The function's purpose is to determine whether there exists a pair of numbers in the input array that adds up to the target number.

  How it works
  1- A new empty set called seen is created to keep track of numbers that have already been seen in the array.
  2- The function then loops through each number (num) in the input array using a for-of loop.
  3- For each number, the function calculates the difference between the target number and the current number by subtracting num from target.
  4- The function checks whether the difference (diff) is already in the seen set by calling the has method on the seen set.
  5- If the difference is already in the set, it means there exists a pair of numbers in the input array that adds up to the target number. In this case, the function immediately returns true to indicate that such a pair exists.
  6- If the difference is not in the set, the current number num is added to the seen set using the add method.
  7- The function continues to loop through the remaining numbers in the input array and repeats steps 3-6 for each number.
  8- If the function reaches the end of the loop without finding a pair of numbers that adds up to the target number, it returns false to indicate that no such pair exists.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");


}

module.exports = hasTargetSum;
