// console.log('Hello work')

// Переменная
var name ='Baiel'
var nameAndSurname = 'Baiel Bolotbekov'
console.log(name,  nameAndSurname)

//Типы данных
//1)string
var name2 ='Baieel'
console.log(typeof name2);
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.repeat(2));
//2)number
var number = 5
var number2 = 2
console.log(number.toString());
console.log(number * number2);
console.log()
//3)boolean
// операторы сравнение <,>,<=,>=,==,===,!=,!==
var num1 = 33
var num2 = "33"
console.log(num1 == num2)
//словные конструкции if, else.if,else
// var login = prompt("enter login -")
// var password =  prompt("enter password -")
// var login2 = prompt("enter your login ")
// var password2 =  prompt("enter your password")
// if (login === login2 && password === password2) {
//     alert('ok')
// }else {
//     console.error('error')
// }


//&&, || - логические операторы

var userName = prompt('name')
var userSurname = prompt( 'surname')
var userAge = prompt('age')
if (userAge <= 18){
    console.log('Превет,', userName)
}
 else if (userAge >= 19 && userAge <= 60){
    console.log("Здравсвуйте,", userName," ", userSurname)
}
 else if (userAge >= 61 && userAge <= 80){
    console.log("Добро пожаловать,", userName," ", userSurname)
}
else{
    console.log("введите корректный возрост от 5 до 80")
}


