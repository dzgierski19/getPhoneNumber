const getRandomNineDigits = () => {
  let randomNineDigits = "";
  for (let i = 0; i < 9; i++) {
    randomNineDigits += Math.floor(Math.random() * 10);
  }
  console.log(randomNineDigits);
  if (randomNineDigits[0] === "0") {
    return getRandomNineDigits();
  }
  return randomNineDigits;
};

const result1 = getRandomNineDigits();
console.log(result1);
