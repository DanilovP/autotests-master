// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле

//const page = new Page("Yandex", 'https://yandex.ru')
//page.open()
export class Page {
    constructor(protected name: string, private url: string) {
    }
    open(){
        console.log(`Переход на страницу ${this.name}: ${this.url}`)
    }
}
