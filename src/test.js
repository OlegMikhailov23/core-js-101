
function roundToPowerOfTen(num, pow) {
  if (pow === 0) {
    return num;
  }
  console.log(Math.round(num / 10 ** pow) * 10 ** pow);
}

roundToPowerOfTen(82534834965, 5);
