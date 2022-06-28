// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr: string[]):string[] {
    let newarr:string[] = []
    for (let i of arr){
        if (!newarr.includes(i)){
            newarr.push(i)
        }
    }
return newarr
}

const users = ['user1', 'user2', 'user3', 'user2']
console.log(uniq(users)) //['user1', 'user2', 'user3']
