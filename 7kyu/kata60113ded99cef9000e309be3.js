// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
//
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:
//
// ['a', 1, 2, false, 'b']
// expected output is:
//
// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }
//
// https://www.codewars.com/kata/60113ded99cef9000e309be3

function separateTypes(input) {
    const separatedInput = {};
    for(i of input) {
        (separatedInput[typeof(i)] ??= []).push(i);
    }
    return separatedInput;
}