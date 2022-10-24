// 1 Переменные 
// variable (var) устаревшая переменная, старатся не юзать
// constanta (не меняются(Только для чтения), лучше создать новую переменную)
// let 
// cameCase Правильное написание кода. Если два слова то пишим так firstName, first с маленькой Name с большой. Код выглядит более приятно и понятно. 

//const firstName = 'Dmitriy' //string
//const age = 23 number
//const isProgrammer = true // boolean

// 2 Мутирование 
//console.log ('Имя человека:' + firstName + ', а возраст человека: ' + age) Можно объединять строки и числа. JS делает это сам по себе, но есть команда
//.toString котокая приводит значение к строке
//alert нету в JS, она есть в HTML
//console.log ('Имя человека:' + firstName + ', а возраст человека: ' + age) 

//const lastName = prompt ('Введите фамилию') Выводим на странице поле для заполнения и воодим данные
//alert (firstName + ' ' + lastName) Выводим данные пользователю 

// 3 Операторы
//let currentYear = 2022
//const birthYear = 1998

//const age = currentYear - birthYear 

//const a = 10
//const b = 5

//let c = 32
//c = c + a оба синтаксиса верны 
//c += a
//console.log (a + b)
//console.log (a - b)
//console.log (a * b)
//console.log (a / b)
//console.log (currentYear++)
//console.log (currentYear)

// 4 Типы данных 

//const isProgrammer = true 
//const name = 'Dima'
//const age = 23
//let x               // в константу всегда нужно что-то заносить не может быть пустым. в let можно
//console.log(typeof isProgrammer) //boolean
//console.log(typeof name) //string
//console.log(typeof age)//number
//console.log(typeof x)//undefiend 
//console.log(null)//null

// 5 Приоритет операторов 

//const fullAge = 23
//const birthYear = 1998
//currentYear = 2022

// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge
//console.log (isFullAge)
// Приоритеты можно смотреть тут https://developer.mozilla.org

// 6 условные операторы 
//const courseStatus = 'fail' //ready, fail, pending

//if (courseStatus === 'ready') {          // Правильный синтаксис
//    console.log('Курс готов')  // Консоль тут нужна для проверки исполнение оператора 
//} else if (courseStatus === 'pending') {
//    console.log ('Курс не готов')
//} else {
//    console.log ('Нету')
//}

//const isReady = true

//if (isReady === true) {
//  console.log ('Все готово')      Одно и то же значение что и ниже
//} Так как там булевое значение не нужно указывать на переменную 
//1.  if (isReady) {
//    console.log ('Все готово')
//} else {
//    console.log ('Все не готово')
//}

// Тернарное выражение. Для простых выражений
//isReady ? console.log ('Все готово') : console.log ('Все не готово')

//const num1 = 42 //number 
//const num2 = '42' //string 

//console.log (num1 === num2) === проверяет не только значение, но и тип данных. == проверяет только значение  42=42

// 7 Булевая логика  
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND


// 8 Функции 

//function calculateAge (year) {
//    return 2022 - year
//}

//const myAge = calculateAge (1998)
//console.log(calculateAge(1998))

//function logInfoAbount (name, year){
//    const age = calculateAge(year)
//
//    if (age > 0){
//        console.log('Человек по имени' +  name  + ' сейчас имеет возраст ' + age)
//    } else { 
//        console.log ('ЯДЕРНЫЙ АПОКАЛИПСИС')
//
//    }
//
//}
//logInfoAbount (' Дмитрий', 1998)
//logInfoAbount (' Дмитрий', 2023)

// 9 Массивы

//const nameGuild = ['Кадзу', 'Беовульв', 'Грэйк']
//const nameGuild = new Array ('Кадзу', 'Беовульв', 'Грэйк')
//console.log (nameGuild) //посмотреть весь массив
//console.log (nameGuild[0])  //Посмотреть что находится под первым индексом
//console.log (nameGuild.length)

//nameGuild[2] = 'Джининг'   //Хоть и констатнта но содержимое массива можно менять
//nameGuild[3] = 'Грэйк'     //Можно расширять массив
//nameGuild[nameGuild.length] = 'Фливи'   // Можно складывать в конец новые данные в массиве
//console.log(nameGuild)

// 10 Циклы
//const nameGuild = ['Кадзу', 'Беовульв', 'Грэйк', 'Фливи']  //Группы

//for (let i = 0; i< nameGuild.length; i++) {       //Можно писать так
//    const guild = nameGuild[i]
//    console.log(guild)
//}
//for (let guild of nameGuild) {                     //Но так менее грамоздко 
//   console.log(guild)
//}

// 11 Объекты 
const person = {       // person = объект 
    firstName: 'Дмитрий',
    lastName: 'Лагода',
    year: 1998,
    languages: ['Ru', 'Kz', 'En'],
    hasWife: false,
    greet: function(){             //метод
        console.log ('greet')
    }
}

console.log(person.lastName)            //обращение через ТОЧКУ.
console.log(person ['firstName'])       //через квадратные скобки, но нужно передавать строчяку
const key = 'languages'                 // Динамический ключ
console.log(person[key])               
person.hasWife = true            //Можно менять ключи
person.isProgrammer = true       //Можно добавлять ключи   
console.log(person)           
person.greet()

// dev