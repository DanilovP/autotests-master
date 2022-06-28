// Выполнить    
// 0 - перейти на страницу https://testspace.orange.local.learn.ispringdev.com/login
// 1 - выбрать элемент формы по классу form
// 2 - выбрать элемент с id равным loginField внутри формы
// 3 - выбрать элемент с id равным passwordField внутри формы
// Вывести элементы в консоль
describe(`Test`,function () {
    it(``,function(){
        browser.url(`https://testspace.orange.local.learn.ispringdev.com/login`)
        
        const form = $(`div[@class="form"]`)
        console.log(form)
    })
    
})
