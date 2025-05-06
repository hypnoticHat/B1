function randomInt(min,max){
    if (min > max) {
        return ("min must be less than max");
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const args = process.argv.slice(2);
const min = parseInt(args[0]);
const max = parseInt(args[1]);
console.log(randomInt(min,max));