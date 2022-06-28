// Подсчитать средний возраст группы
function avgAge(group:any) {
    let num = 0
    let mem = Object.keys(group).length
    for (let i in group){
        num+=group[i]
    }
    return num/mem
}

const group = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
}
console.log(avgAge(group)); //21.666666
