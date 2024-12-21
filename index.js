function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n), where n is the length of the input array
  Space Complexity: O(n), due to the storage of numbers in the set
*/

/* 
  Add your pseudocode here
  1. Create a set to keep track of the numbers we've seen so far.
  2. Loop through each number in the input array:
      a. Calculate the complement of the current number by subtracting it from the target.
      b. Check if the complement exists in the set:
          i. If yes, return true.
      c. Otherwise, add the current number to the set.
  3. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The function checks if any two numbers in the array add up to the target. 
  It uses a set to keep track of numbers we've already seen. For each number in 
  the array, it calculates the complement (the value needed to reach the target) 
  and checks if the complement exists in the set. If it does, we know the pair 
  exists, and we return true. Otherwise, we add the current number to the set 
  and continue. If no pair is found by the end of the loop, the function returns false.
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
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, -1, 1, 3, 5], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10], 10));
}

module.exports = hasTargetSum;
