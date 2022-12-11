//const myGuild = ['Лианоара', 'Кадзу', 'Грэйк','Беовульф']  //Можно хранить строки
// const people = [
//     {name: 'Дима', budget: 5000},
//     {name: 'Илья', budget: 4500},
//     {name: 'Кирилл', budget: 4000},
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13 ] //Числа и булевувые значения  

//console.log(myGuild)  //Массив это объект, принял понял. 

// function addItemToEnd(){  //функция

// }

//Method
// myGuild.push('Джининг')  //положил Лешу в конец
// myGuild.unshift('Фливи') //положил Илюху в начало 

//myGuild.shift() //можно удалить первый элемент с массива
//myGuild.pop()  //можно удалить последний элемент с массива

// const myGuildClean = myGuild.shift()  // Удаляешь, но все еще можешь с ним работать 
// const myGuildCleanend = myGuild.pop()
// console.log(myGuildClean)
// console.log(myGuildCleanend)
// console.log(myGuild)

// console.log(myGuild.reverse())   //Название говорит за себя
// console.log(myGuild)

// const index = myGuild.indexOf('Лианоара')  //хорошо работает с примитивными данными 
// myGuild[index] = 'Это всего лишь игра'  // Изменили отдельно взятый индекс
// console.log(myGuild)

// const index = people.findIndex(function(person){ // таким образом можно узнать каждый объект находящийся в массиве
//     console.log(person) 
// }) 
// const index = people.findIndex(function(person){
//     return person.budget === 4500
// }) 
// const person = people.find(function(person){   // результат один и тот же. Подход разный 
//     return person.budget === 4500

// }) 
// console.log(person)

// let findedPerson        //выглядит грамоздко. 
// for (const person of people){
//     if (person.budget === 4000){   
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const person = people.find((person)=>{    //можно еще упростить 
//     return person.budget === 4000 
// })
// console.log(person)  // если нет значиние то будет ундивайнд

// Лямда функция 
// const person = people.find(person=>person.budget === 4000)  //Вспомнил мем Дмитрий/Дима/Димасик/ДОМЕСТОС
// console.log(person)

// console.log(myGuild.includes('Грэйк'))   //Спрашивает "Есть такой элемент в массиве"

// const upperCaseGuild = myGuild.map(guild => {    // .map всегда возращает новый массив.  
//     return guild.toUpperCase()
// })
// console.log(upperCaseGuild)
// console.log(myGuild)


// const  pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)  
// console.log(pow2Fib)

// const  pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2).map(Math.sqrt) 
// const filteredNumbers = pow2Fib.filter(num =>{
//     return num > 5
// })
// console.log(pow2Fib)
// console.log(filteredNumbers)
// Задача 1
// const text = 'Привет, у нас 300 вайпов на нерзуле'
// //const reverseText = text.split(',')   //Получаем массив из двух элементов
// const reverseText = text.split('').reverse().join('')   //Получаем массив из каждой строчки
// console.log(reverseText)

const people = [
    {name: 'Дима', budget: 5000},
    {name: 'Илья', budget: 4500},
    {name: 'Кирилл', budget: 4000},
]
// const allbudget = people.reduce((acc,person)=>{  //сделано немного не правильно
//     if (person.budget > 4200){
//         acc +=person.budget
//     }
    
//     return acc

// }, 0)

// const allbudget = people    //Нужно твое мнение 
// .filter(person => person.budget >4200)
// .reduce((acc,person)=>{
//     acc +=person.budget
//     return acc
// }, 0)
// console.log(allbudget)