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
let percentPlaceholder = percent.getAttribute('placeholder');
let contributionPlaceholder = contribution.getAttribute('placeholder');
let amountPlaceholder = amount.getAttribute('placeholder');

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = [];

  let s = amount - contribution; //тело кредита
  // const date1 = new Date(); //текущая дата
  // const date2 = new Date(date); //срок погашения
  //let n = ((date2 - date1) * 60 * 60 * 24 * 30);
  //let percent; //процентная ставка
  let n = 12;
  let p = percent/12;
  let k = s * (p + (p / (((1 + p)**n) - 1)));
  let r = k * 12;
  // if (typeof percent === 'string' || typeof contribution === 'string' || typeof amount === 'string') {
  //   Number(percent);
  //   Number(contribution);
  //   Number(amount);
  //   console.log(`Общая сумма к выплате: ${Number(r.toFixed(2))}`);
  //   console.log(`Первоначальный взнос: ${contribution}`);
  //   console.log(`Погашение основного долга: ${s}`);
  //   console.log(`Проценты за пользование кредитом: ${Number((r - s).toFixed(2))}`);
  //   totalAmount[0] = (`Общая сумма к выплате: ${Number(r.toFixed(2))}`);
  // } else

  if (typeof percent !== 'string') {
    return(`Параметр ${percentPlaceholder} содержит неправильное значение "${percent}"`);
    //totalAmount[0] = (`Параметр "${percentPlaceholder}" содержит неправильное значение "${percent}"`);
  } else if (typeof contribution === 'string') {
    return(`Параметр "${contributionPlaceholder}" содержит неправильное значение "${contribution}"`);
    //totalAmount[0] = (`Параметр "${contributionPlaceholder}" содержит неправильное значение "${contribution}"`);
  } else if (typeof amount === 'string') {
    return(`Параметр "${amountPlaceholder}" содержит неправильное значение "${amount}"`);
    //totalAmount[0] = (`Параметр "${amountPlaceholder}" содержит неправильное значение "${amount}"`);
  }
  // else {
  //   console.log(`Общая сумма к выплате: ${Number(r.toFixed(2))}`);
  //   console.log(`Первоначальный взнос: ${contribution}`);
  //   console.log(`Погашение основного долга: ${s}`);
  //   console.log(`Проценты за пользование кредитом: ${Number((r- s).toFixed(2))}`);
  //   totalAmount[0] = (`Общая сумма к выплате: ${Number(r.toFixed(2))}`);
  // }
  return totalAmount;
}
