function addTwo(num : number):number{
   return num + 2
}

console.log(addTwo(2)) // 4

function getUpper(val : string):string{
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){

}
let loginUser = (name:string,email:string,isPaid:boolean = false) => {
    console.log(name,email,isPaid)
}

const getHello = (str : string) : string => {
    return "Hello"
}

const heros = ["superman","batman","flash"]
// const heros = [1,2,3]
heros.map((hero):string => hero)

function consoleMe(message : string):void{
    console.log(message)
}

function consoleError(message : string):never{
    throw new Error(message)
}

consoleMe("This is a message")
addTwo(7)
getUpper("aalu")
signUpUser("aalu","aalumail.com",true)
loginUser("aalu","aalumail.com")
getHello("aalu")
consoleError("This is an error")

export {};