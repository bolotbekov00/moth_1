// var userIIN = '10909200000020'
// var firstNum = Number(userIIN[0])
// if ((firstNum === 0 || firstNum === 1 || firstNum === 2) && userIIN.length ===14) {
//     console.log('иин проверка успешна')
// }
// else {
//     console.log('ошибка')
// }

// //4) undefined
// let name;
// console.log(typeof name)
//
//
// //5) null
//
// let nothing = null;
// console.log(typeof nothing)
//
//
// //
// var size = 'm'.toLowerCase(S)
// if ( size === 'm' ||size === 'M'){
//     console.log('44')
// }
//
// else if (size === 's'){
//     console.log('46')
// }
// else if (size === 'l'){
//     console.log('46')
// }else {
//     console.log('ошибки')
// }


// switch (size) {
//     case 's':
//         console.log('40')
//         break
//     case 'm':
//         console.log(44)
//         break
//     case '46':
//         console.log(46)
//         break
//     default:
//         console.log('size не правельный')
// }

//6) object

var human = {
    name: 'Baiel',
    surname: 'Bolotbekov',
    age: '15',
    isMarried: false,
    address:{
        city: 'Bishkek',
        street: null
    },
    g: undefined
}

console.log(human)
console.log(human.name)
console.log(human.address.street)

// metod
human.course = 'geeks'
delete  human.age
human ['isMarried'] = true
console.log(human)

console.log(Object.values(human))
console.log(Object.keys(human))
console.log(Object.entries(human))

console.log(human.hasOwnProperty('name'))

// array
var array = ['a', 'b', 'c']
console.log( array[1])

// Переопределения переменых
var num = 1992
num = 'qwerty'
console.log(num)

// циклы
// for
for (var i = 0; i <= 10; i++){
    console.log(i)

}


var names = ['baiel', 'kunduz','john','jack', 'alikhan','egor']
var blackList = ['tim','aidana', 'john','baiel','egor']
for(var i = 0; i < names.length; i++){
    if (blackList.includes(names[i].toLowerCase())){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`welcome, dear guest ${names[i]}`)
}