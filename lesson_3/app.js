
// var i = 0
// while (i <= 10 ){
//     i++
//     console.log(i)
//
// }



// var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
// var fruitForFound = 'pineapple'
// var i = 0
// while (i <fruits.length){
//     if(fruits[i] === fruitForFound)
//         console.log(`ok ${i}`)
//     i++
// }



// // for..of
// var numbers = [1, 2, 3, 4, 5,6]
//
// for (var number of numbers){
//     console.log(number)
// }



// for..in
// var human = {
//     name:'Baiel',
//     surname:'Bolotbekov',
//     age: '15',
//     isMarried: false,
//     address:{
//         city: 'Bishkek',
//         street: null
//     },
//     g: undefined
// }
//
// for (var key in human){
//     console.log(key)
    // console.log(human["age"])



//методы массиво
// var fruits = ['banana',  'pineapple', 'raspberry']
// fruits.push('apple')
// console.log(fruits)
//
// var fristFruits = fruits.shift()
// console.log(fristFruits)
//
// var fruitAdd = fruits.unshift('banana')
// console.log(fruits)
//
// var fruit = fruits.pop()
// console.log(fruit)


// fruits.splice(0,2)

// fruits.splice(0, 2, 'b')
// console.log(fruits)

//функции

// function-declaration
function sayHello (num1, num2) {
    console.log(num1 + num2)
}
sayHello(9, 3)

function  printDelimiter(){
    console.log('--' .repeat(10))
}
printDelimiter()

// function-expression
var strlog = function (string){
    return alert(string)

}
strlog(prompt('enter'))

const getMax = function (n1, n2){
    console.log(n1 > n2 ? n1:n2 )
}
getMax(6, 7)








