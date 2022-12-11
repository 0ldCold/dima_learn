// //1 Функции 
// //Function Declaration  можно обращатся когда хотим 
// function greet(name){
//     console.log ('Привет - ', name)
// }

// //Function Expression   Создаем функцию и складываем ее в переменную. Нельзя получить доступ до инициализации
// const greet2 = function greet2(name){     
//     console.log ('Привет 2 - ', name)
// }

//  greet('Дима')
// greet2('Дима')
// //Function Expression   будет ошибка   Cannot access 'greet2' before initialization
// // const greet2 = function greet2(name){     
//      console.log ('Привет 2 - ', name)
//  }

//  console.log(typeof greet) скажет что это функция. А по факту объект 
//  console.dir(greet) 

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function(){  //setTimeout
//     if (counter === 5) {
//         clearInterval(interval)  //clearTimeout
//     } else {
//       console.log(++counter)
//     }
// },1000)

// 3 Стрелочные функции   Поясни за такой тип функций 

// function greet(name){
//     console.log ('Привет - ', name)
// }

// const arrow = (name) => {
//     console.log('Привет - ', name)
// }
// arrow('Дима')

// const arrow2 = name => console.log('Привет - ', name)

// arrow2('Илюша')

// // const pow2 = num => { // логика одна и таже 
// //     return num ** 2 
// // }
// const pow2 = num => num ** 2 

// console.log(pow2(5))



//4 Параметры по умолчанию 
// const sum = (a, b = 1) => a + b

// console.log(sum(41,5))

// function sumAll(...all){      //Весьма инетерсно что так можно "складывать" числа и не только
// let result = 0
// for (let num of all) {
//     result += num
// }
// return result
// }
// const res = sumAll(1,2,3,4)
// console.log(res)

// 5 Замыкание   Поясни за логику в целом. Не совсем понимаю как работает. Мб надо просто переварить и снова вернуться к этому 
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }

// const logWithlastName =createMember ('Дима')
// console.log(logWithlastName)
// console.log(logWithlastName(' Лагода'))
// console.log(logWithlastName(' Хуягода'))