// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
  let newStr = "";

  for (let letter of str) {
    newStr = letter + newStr;
  }
  return newStr;
}
