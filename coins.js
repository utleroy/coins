  function coinCounter (num) {
  var coinPurse = {};
    if (num >= 0.25) {
      coinPurse.quarters = Math.floor(num/0.25);
      num = (num - (coinPurse.quarters*0.25));
    }
    if (num >= 0.10 || num <= 0.24) {
      coinPurse.dimes = Math.floor(num/0.10);
      num = (num - (coinPurse.dimes*0.10));
    }
    if (num >= 0.05 || num <=0.09) {
      coinPurse.nickels = Math.floor(num/0.05);
      num = (num - (coinPurse.nickels*0.05));
    }
    if (num >= 0.01 || num <= 0.04) {
      coinPurse.pennies = Math.floor(num/0.01);
      num = (num - (coinPurse.pennies*0.01));
    }
  return coinPurse || (num);
}

var coins = coinCounter(0.67);
console.log(coins);
