// receives two arguments, the price per goldToken[price in k's with one decimal (xx.x)}, and the number of imbuements

function imbuementCalc(price, numberOfImbues) {

  let bribeTheFates = 150

  let goldTokensPrice = price * 6
  let priceOfTotalTokens = goldTokensPrice * numberOfImbues
  let moneyForTheFates = bribeTheFates * numberOfImbues
  let priceOfImbues = moneyForTheFates + priceOfTotalTokens
  let totalPerHour = priceOfImbues / 20
  return totalPerHour
  
}

console.log(imbuementCalc(34.4, 4) + "k p/h")