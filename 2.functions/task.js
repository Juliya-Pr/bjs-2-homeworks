// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  function count() {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  count();
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum += arr[i];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  let result = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(arrOfArr[i]);
    if (max < result) {
      max = result;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let result = Math.abs(max - min);
  return result;
}
