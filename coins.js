  function coinCounter (num) {
  var coinPurse = {};
    if (num >= 25) {
      coinPurse.quarters = Math.floor(num/25);
      num = (num - (coinPurse.quarters*25));
    }
    if (num >= 10 || num <= 24) {
      coinPurse.dimes = Math.floor(num/10);
      num = (num - (coinPurse.dimes*10));
    }
    if (num >= 5 || num <=9) {
      coinPurse.nickels = Math.floor(num/5);
      num = (num - (coinPurse.nickels*5));
    }
    coinPurse.pennies = num;

  return coinPurse;
}

var coins = coinCounter(74);
console.log(coins);
