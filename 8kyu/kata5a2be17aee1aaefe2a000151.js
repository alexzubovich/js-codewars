// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  function sumArrayElements(arr) {
    let sum = 0;

    for (let element of arr) {
      sum += element;
    }
    return sum;
  }

  return sumArrayElements(arr1) + sumArrayElements(arr2);
}
