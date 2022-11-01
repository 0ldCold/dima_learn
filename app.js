// 1 string
//const name = 'Раб'
//const age = 24

//const output = 'Привет, я анальный ' + name + ' и мой возраст ' + age + ' лет ' //Обе верны
//const output = `Привет меня зовут ${name}  и мой возраст ${age} лет `
//const output = `Привет меня зовут ${name}  и мой возраст ${age < 26 ? 'A' : 'B'} лет ` //В фигурных скобках можно так же использовать тернарные выражения
//console.log(output)

//const output = `
//<div>This is div</div>   //Просто для примера, сохраняются все отступы и ковычки
//<p>this is o</p>         //Да-да это HTML
//`
//console.log(output)

//const name = 'Лианоара'
//new String() что JS делает под капотом,создает новую строчку
//console.log(name.length) //Можно глянуть сколько символов
//console.log(name.toUpperCase()) //Можно привести все к вернему регистру(капс)
//console.log(name.toLowerCase()) //Можно привести все к нижнему регистру
//console.log(name.charAt(4)) // На какой позиции находится какой символ
//console.log(name.indexOf('ара')) // Проверитьь комбинацию строк 
//console.log(name.indexOf('!')) // можно проверить на наличие значение и сравнивать с ним. Если нету вернет -1
//console.log(name.startsWith('лиа')) // Проверка старта строки с ()
//console.log(name.toLowerCase().startsWith('лиа')) //Логика понятна
//console.log(name.endsWith('лиа')) //Точно так же, только с конца
//console.log(name.repeat(3)) //Повторять строчку
//const string = '      password      '
//console.log(string.trim())  // отчищает пробелы. Так же работает с Left и Right

//function logPerson(s, name, age) {  
//    console.log(s, name, age ) //можно апперировать массивом и его значениями
//    if (age < 0){              //Можно валидировать параметр. 
//        age = 'Еще не помер'
//    }
//    return `${s[0]}${name}${s[1]}${age}${s[2]}`
//}
//const personName = 'Лианоара'
//const personName2 = 'Грэйк'
//const personAge = 24
//const personAge2 = -30
//
//const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
//const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
//
//console.log(output)
//console.log(output2)