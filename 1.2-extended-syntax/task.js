"use strict"

function getResult(a,b,c){
    const d = b**2-4*a*c;
    const x0 = (-b+Math.sqrt(d))/(2*a);
    const x1 = (-b-Math.sqrt(d))/(2*a);
    let x;

    if (d < 0) {
      x = [];
    }

    else if (d == 0) {
      x = [x0];
    }

    else {
      x = [x0, x1];
    }

    return x;
}

function getAverageMark(marks){

  if (marks.length == 0) return 0;

  if (marks.length > 5) {
    console.log ("Оценок больше, чем 5!");
    marks = marks.slice(0, 5);
  }

  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }

  return Math.round(sum / marks.length);
}

function askDrink(name,dateOfBirthday){

  let userYear = dateOfBirthday.getFullYear();
  let today = new Date()
  let todayYear = today.getFullYear()
  let age = todayYear - userYear;
  let result;

  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
  }

  return result;
}
