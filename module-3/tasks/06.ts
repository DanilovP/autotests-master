// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3
 class Calculator{
    Val: number 
    constructor(nVal=0){
        this.Val=nVal
    }

    add(num:number){
        this.Val+=num
        return this
    }

    sub(num:number){
        this.Val-=num
        return this
    }

    mul(num:number){
        this.Val*=num
        return this
    }

    div(num:number){
        this.Val/=num
        return this
    }

    getValue(){
        return this.Val
    }
    
}

const test = new Calculator()
console.log(test.add(6).sub(5).mul(6).div(2).getValue())