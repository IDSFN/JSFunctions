/*=======================================
=            Deep comparison            =
=======================================*/
function deepEqual(val1, val2) {
  if (val1 === val2)
    return true;

  // focus now only on objects, remember null are also objects
  else if (  !val1
          || !val2
          || typeof val1 != "object"
          || typeof val2 != "object")
    return false;

  // 100% i'm gonna deal with objects now, so i need to compare there
  //  properties and their properties value
  for (var prop in val1) {

    // instead of using "prop in val2" we can check if the prop is
    // available on the other object directly as follow
    // val2[prop] != undefined 
    if ( !val2[prop] || !deepEqual(val1[prop], val2[prop]))
      return false;
  }

  // we passed all the possibilities now 100% val1 === val2
  return true;
}
/*-----  End of Deep comparison  ------*/



var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


