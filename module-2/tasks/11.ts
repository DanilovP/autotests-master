// Создать функцию для подсчета кол-ва свойств в объекте
function count(obj) {
    let num=Object.keys(obj).length
    return num
}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(count(group)) // 3
