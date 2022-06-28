// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string
function fun(n:number){
    let i = 0,c = 0 
    let s = ``
    while (c!=n){
        if (i%2===1){
            s += i + ` `
            c++
        }
        i++
    }
    return s
}
console.log(fun(10))