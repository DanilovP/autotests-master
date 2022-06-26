import { Page } from "./04";

// Создать класс SearchEnginePage, который наследуется от Page(из предыдущей задачи) и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"

class SearchEnginePage extends Page{
    constructor(name:string,url:string){
        super(name,url)
    }
    
    search(text:string){
        console.log(`Поиск по ${this.name}: ${text}`)
    }
}

const page=new SearchEnginePage(`Google`,'https://google.com')
page.search(`sun`)