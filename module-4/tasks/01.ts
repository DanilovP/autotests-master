// Создать интервальный таймер, который выводит секунды с момента старта
const timer = (i:number) => console.log(i)
let sec = 5
let i=1
console.log(`Start`)
while (i<=sec){
    setTimeout(timer,i*1000,i)
    i++
}


