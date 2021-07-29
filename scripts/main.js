'use strict';

function isNotValidParameter(param) {
  return Number.isNaN(param);
}

function numbers(){
  const long = Number(prompt('Input the length'));
  if (isNotValidParameter(long)) {
    alert('Wrong input: please insert a number')
  }
  let row
  for (let i = 1; i <= long; i++)
    row = row + i + " "
  console.log(row);
}

function odd1() {
  const odd = Number(prompt('Input the length'));
  if (isNotValidParameter(odd)) {
    alert('Wrong input: please insert a number')
  }
  let row = "";
  for (let i = 1; i <= odd; i = i + 2)
    row = row + i + " "
  console.log(row);
}

function odd2() {
  const odd = Number(prompt('Input the length'));
  if (isNotValidParameter(odd)) {
    alert('Wrong input: please insert a number')
  }
  let row = "";
  for (let i = 1; i <= odd; i++)
    if (i % 2 != 0) {
      row = row + i + " "
    }
  console.log(row);
}

function addition(){
  const first = Number(prompt('Input first number'));
  const last = Number(prompt('Input last number'));
  let sum = 0;
  if ((isNotValidParameter(first)) || (isNotValidParameter(last))) {
    alert('Wrong input: please insert a number')
  }
  else
   if (first<last) {
    for (let i=first; i<=last; i++)
      sum = sum + i;
  } else {
    for (let i=last; i<=first; i++)
      sum = sum + i;
  }
  return sum
}

function maximum(a, b, c) {
 let max = a;
  for (let i = 1; i <= arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  console.log(max);
}

function fizzBuzz(num) {
  let p = [ "", "Fizz", "Buzz", "FizzBuzz" ];
  let arr =[];
  let n= 0;
  for (let i = 1; i <= num; i++) {
    p[0] = i;
    if (i % 3 == 0)
      n += 1;
    if (i % 5 == 0)
      n += 2;
    arr[i] = (p[n]);
    n = 0;
  }
  
  console.log(arr.join(" "));
} 

function matrice(wth, hth) {
  // debugger;
  let x="";
  let rest;
  for (let i=1; i <= hth; i++){
    for (let j=1; j <= wth; j++) {
      rest = (j + i) % 2;
      if (rest == 0) 
        x += '0' + " ";
      else  
        x += '1' + " ";
    }
    console.log(x + "\n");
    x = "";
  }
}