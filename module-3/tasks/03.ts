// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает сумму двух чисел
// Пример sum2(40)(2) // 42
const sum2 = (a:number)=>(b:number)=>a+b
console.log(sum2(4)(2))