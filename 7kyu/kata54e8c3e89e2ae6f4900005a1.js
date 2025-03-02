// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// The questions array is already defined for you and is not the same as the one in the example.
// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1

for (let q of questions) {
    q.usersAnswer = null;
}