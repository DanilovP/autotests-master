// доработать предыдущую функцию, добавить опциональный 2-ой аргумент, через которое промис реджектится.

let n:number =2 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, n*1000)

    setTimeout(() => {
        reject('error')
    }, n/1000)

})

promise
    .then(
        data => console.log(data),
        error => console.log(error)
    )