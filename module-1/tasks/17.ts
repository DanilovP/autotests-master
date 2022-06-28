// Создать функцию для генерации селектора для выбора элементов по data-at="id=header". сигнатура (id: string) => string,
// Пример foo('header') вернет [data-at*="id=header"]
// Прочитать что такое селектор
const foo = (id:string) => console.log(`[data-at*="id=${id}"]`)
foo(`header`)