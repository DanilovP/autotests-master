// Вывести n чисел в не четной последовательность 1 3 5 7 ... (не четность определяется i % 2 === 1).
// Для хранения результата использовать строку
let n = 10
let c = 0,i = 0
let s = ``
while (c!=n){
    if (i%2===1){
        s += i + ` `
        c++
    }
    i++
}
console.log(s)