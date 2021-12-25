// Write a program that reads the price excluding VAT of an item, the number of items and the rate of
// VAT, and which provides the corresponding total price including VAT. Make sure that labels
// appear clearly.

let priceExludeTaxItem,itemNumber,vatRate,totalPrice;

priceExludeTaxItem = Number(prompt('Enter the price excluding tax of item '));
itemNumber = Number(prompt('Enter the item number'));
vatRate = Number(prompt('Enter the VAT rate'));
totalPrice = priceExludeTaxItem * itemNumber * (1 + vatRate);
console.log(`The price including all taxes is: ${totalPrice}`);

