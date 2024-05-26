function add(v1: number, v2: number): number {
  return v1 + v2;
}

function calclate(
  v1: number,
  v2: number,
  callback: (a: number, b: number) => number
): number {
  return callback(v1, v2);
}

const addResult = calclate(3, 4, add);
console.log(addResult);
