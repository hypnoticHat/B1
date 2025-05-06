function factorial(n) {
  if (n < 0) {
    return "undefined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function combination(n, r) {
  if (n < r) {
    return "undefined";
  } else if (r === 0 || n === r) {
    return 1;
  } else {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
}

const args = process.argv.slice(2);
const n = parseInt(args[0]);
const r = parseInt(args[1]);

console.log(combination(n, r)); 