"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4*a*c;

  if (d === 0) {
    arr[0] = (-b / (2 * a));
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  }
  return arr; // array
}

//задача №2
// let percentPlaceholder = percent.getAttribute('placeholder');
// let contributionPlaceholder = contribution.getAttribute('placeholder');
// let amountPlaceholder = amount.getAttribute('placeholder');

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = [];

  if (isNaN(percent)) {
    //Number(percent);
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if (isNaN(contribution)) {
    //Number(contribution);
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if (isNaN(amount)) {
    //Number(amount);
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  let s = amount - contribution; //тело кредита
  const dateNow = new Date(); //текущая дата
  let n = Math.ceil(((date - dateNow)/1000/60/60/24/30.5)); //разница между датами в мс и пересчет в месяцы
  let p = percent/12/100;
  let k = s * (p + (p / (((1 + p)**n) - 1)));
  let r = Number((k * n).toFixed(2));
  console.log(r);
  return(r);

  return totalAmount;
}
