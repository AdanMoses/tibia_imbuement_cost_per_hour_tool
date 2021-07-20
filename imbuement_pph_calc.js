// receive two arguments, the price per goldToken[price in k's with one decimal (xx.x)}, and the number of imbuements
// each imbuement needs 6 gold tokens
// 20 hours total per imbuement
// multiply price by 6, store in variable goldTokensPrice
// multiply goldTokenPrice by numberOfImbues, store in variable priceOfTotalTokens
// multiply bribeTheFates by numberOfImbues, store in variable moneyForTheFates
// priceOfTotalTokens plus moneyForTheFates, store in variable 
// divided by 20
// return totalPerHour
// output the total price per hour

function imbuementCalc(price, numberOfImbues) {

  let bribeTheFates = 150000

  let goldTokensPrice = price * 6
  let priceOfTotalTokens = goldTokensPrice * numberOfImbues
  let moneyForTheFates = priceOfTotalTokens * numberOfImbues
  let priceOfImbues = moneyForTheFates + priceOfTotalTokens
  let totalPerHour = priceOfImbues / 20
  return totalPerHour
  
}

console.log(imbuementCalc(34.4, 4))