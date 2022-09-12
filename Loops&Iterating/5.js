function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let result = 0
  let tries = 1;
  while (result = randomNumberBetween(1, 6) <= 2) {
    tries += 1;
  }
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');