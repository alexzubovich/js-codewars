// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
//
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
//
// The combine function should be a good citizen, so should not mutate the input objects.
//
// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

function combine(...objects) {
    const result = {};

    for (let obj of objects) {
        for (let key in obj) {
            result[key] = (result[key] || 0) + obj[key];
        }
    }

    return result;
}