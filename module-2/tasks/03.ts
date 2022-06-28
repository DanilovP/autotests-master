// Дописать функцию для подсчета суммы нечетных чисел в массиве
function sumOdd(arr:number[]):number {
    let sum=0
    for (let i of arr){
        if (i%2===1){
            sum+=i
        }
    }
    return sum
}

const nums = [1, 2, 3]
console.log(sumOdd(nums)) // 4
