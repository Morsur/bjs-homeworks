"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percent_converted = Number(percent) / 100;
    if (isNaN(percent_converted)) {
      return `Параметр percent содержит неправильное значение ${percent}`;
    }

    let contribution_converted = Number(contribution);
    if (isNaN(contribution_converted)) {
      return `Параметр contribution содержит неправильное значение ${contribution}`;
    }

    let amount_converted = Number(amount);
    if (isNaN(amount_converted)) {
      return `Параметр amount содержит неправильное значение ${amount}`;
    }

    let date_converted = monthDiff(new Date(Date.now()),new Date(date));
    let return_to_bank = amount - contribution;
    let P = percent_converted / 12;
    let months_pay = return_to_bank * (P+P/((Math.pow(1+P, date_converted))-1));
    let total_pay = (months_pay * date_converted);

    console.log(Math.round( total_pay * 100 + Number.EPSILON ) / 100);
    return (Math.round( total_pay * 100 + Number.EPSILON ) / 100);
}

function monthDiff(dateFrom, dateTo) {
 let result = dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
   return result+1;
}
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function getGreeting(name) {
  if (name && name.length >= 1) {
    return(`Привет, мир! Меня зовут ${name}.`);
  } else {
    return("Привет, мир! Меня зовут Аноним.");
  }
    // код для задачи №2 писать здесь
    //  greeting;
}
