function getSolutions( a, b, c ) {
  const D = b**2-4*a*c;
  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D == 0) {
    const x1 = -b / 2 * a;
    return { D: D, roots: [ x1 ] };
  } else {
    const x1 = (-b + Math.sqrt(D)) / 2 * a;
    const x2 = (-b - Math.sqrt(D)) / 2 * a;
    let obj = { D: D, roots: [ x1,  x2 ] };

    return obj;

  }
}

function showSolutionsMessage( a, b, c ) {
  const result = getSolutions ( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length == 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.roots.length == 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}

function getAverageScore(data) {
  let result = {};

  for (key in data) {
    let value = data[key];
    let average = getAverageMark(value);

    result[key] = average;
  }

  result.average = getAverageMark(Object.values(result));
  return result;

}

function getAverageMark(marks){

  if (marks.length == 0) return 0;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }

  return (sum / marks.length);
}
