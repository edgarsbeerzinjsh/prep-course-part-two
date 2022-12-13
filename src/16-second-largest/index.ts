/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
  return Math.max(...array.filter((nums) => nums < Math.max(...array)));
  // let answer: number = Math.min(...array);
  // let nrPlace: number = 2;
  // while (nrPlace) {
  //     let largest: number = array[0];
  //     let largestIndex: number = 0;
  //     for (let i = 1; i < array.length; i++) {
  //         if (array[i] > largest) {
  //             largest = array[i];
  //             largestIndex = i
  //         }
  //     };
  // if (nrPlace == 1) {
  //     answer = largest;
  //     break;
  // }
  // array.splice(largestIndex, 1);
  // nrPlace -= 1
  // }
  // return answer
}

export { secondLargest };
