function sumOfDistinctElements(set1, set2) {
  // Step 1
  let setA = new Set(set1);
  let setB = new Set(set2);

  // Step 2
  let distinctElements = new Set([...setA, ...setB]);

  // Step 3
  let sumOfDistinct = 0;
  for (let element of distinctElements) {
    sumOfDistinct += element;
  }

  // Step 4
  console.log("Sum of distinct elements: ", sumOfDistinct);
}

// Example
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
sumOfDistinctElements(set1, set2);
// Output: Sum of distinct elements:  13
//

