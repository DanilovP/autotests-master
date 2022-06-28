// Написать функцию sum для суммирования всех переданных аргументов
function sum(...numbers:number[]):number {
    return numbers.reduce((fn, ln) => fn + ln)
  }
  
 console.log(sum(1, 2, 3))