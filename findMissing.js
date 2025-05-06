var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [1, 2, 3, 4, 5];
function findMissing(array1, array2) {
    var missing = [];
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            missing.push(array1[i]);
        }
    }
    return missing;
}
var missing = findMissing(array1, array2);
console.log("Missing elements: " + missing);