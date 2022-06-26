// Создать функцию, которая возвращает промис, который резолвится через n миллисекунд.
let n:number = 5
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, n*1000)
})

promise.then(console.log)