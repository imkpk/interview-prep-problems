function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

const curry = tripleAdd(1)(2)(3);
console.log(curry);

function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(tripleAdd1(1, 2, 3));

function quadrupleAdd(num1) {
  return function (num2) {
    return function (num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
console.log(quadrupleAdd(1)(2)(3, 4));
