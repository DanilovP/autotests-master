// Добавить в объект функцию toString, которая выводит имя и возраст
const user = {
    name: "UserName",
    age: 18,
    toString: function(){
        console.log(`${this.name} ${this.age} `)
    }
}
user.toString()
