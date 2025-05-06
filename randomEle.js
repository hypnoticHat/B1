var arr = [1,2,3,'xuan','ha','thu','dong',5,6,7];
function randomEle(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomEle(arr));