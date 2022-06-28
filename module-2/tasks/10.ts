// Написать функцию которая меняет key и value местами. Гарантируется что в исходном объект value уникальны
function objectReverse(obj: any) {
    let res= {}
    for (let i in obj){
        res[obj[i]]=i
    }
    return res
}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(objectReverse(group))
