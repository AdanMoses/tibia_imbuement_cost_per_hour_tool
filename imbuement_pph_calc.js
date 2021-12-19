// receives two arguments, the price per goldToken(price in k's with one decimal (xx.x)), and the number of imbuements
const goldCoins = process.argv[2]
const goldTokens = process.argv[3]

function imbuementCalc(price, numberOfImbues) {

  let bribeTheFates = 150

  let goldTokensPrice = price * 6
  let priceOfTotalTokens = goldTokensPrice * numberOfImbues
  let moneyForTheFates = bribeTheFates * numberOfImbues
  let priceOfImbues = moneyForTheFates + priceOfTotalTokens
  let totalPerHour = priceOfImbues / 20
  return totalPerHour
  
}

console.log(imbuementCalc(goldCoins, goldTokens) + "k p/h")