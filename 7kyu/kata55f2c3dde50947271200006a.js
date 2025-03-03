// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.
// https://www.codewars.com/kata/55f2c3dde50947271200006a

function addProperty(obj, prop, value) {
  if (prop in obj) {
    throw new Error("Such a property already exists.");
  }
  obj[prop] = value;
}
