// вывести матрицу
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


for (let i of matrix) {
    let s = ``
    for (let j of i){
        s += j + ` `
    }
    console.log(s)
}
