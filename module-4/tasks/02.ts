// Создать функцию deferred, которая принимает выражение и callback. Если выражение true, то callback выполняется сразу иначе через 1сек
const callback = (text:string)=>console.log(text)
const deferred = (bool:boolean,callback:any)=>{
    if (bool) setTimeout(callback,0,`Выражение true`)
    else setTimeout(callback,1000,`Выражение false`)
}
deferred(4>2,callback)