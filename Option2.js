function sumOfDistinctElements(set1, set2) {
    // Step 1
    let elements = {};
  
    // Step 2
    for (let element of set1) {
      elements[element] = true;
    }
  
    for (let element of set2) {
      elements[element] = true;
    }
  
    // Step 3
    let sumOfDistinct = 0;
    for (let element in elements) {
      sumOfDistinct += parseInt(element);
    }
  
    // Step 4
    console.log("Sum of distinct elements: ", sumOfDistinct);
  }
  
  // Example
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  sumOfDistinctElements(set1, set2);
  // Output: Sum of distinct elements:  13