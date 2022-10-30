// 1 Number
//const num = 42  //integer
//const float = 42.42 //float
//const pow = 10e3 //pow (Возводим степень)

//console.log ('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)  //Максимально допустимое число с которым можно работать
//console.log ('Math.pow 53', Math.pow(2,53)-1)
//console.log ('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //Минимальное число
//console.log('MAX_VALUE', Number.MAX_VALUE) // Максимальное число в степени
//console.log('MIN_VALUE', Number.MIN_VALUE) // Минимальное  в степени
//console.log ('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //Позитив Бесконечность. Можно получить при деление на 0. 1 / 0
//console.log ('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) //Негатив
//console.log (Number.NaN) // Not A Number 
//console.log (typeof NaN) //Где-то меня наебывают (Число)
//const weird = 2 / undefined
//console.log (Number.isNaN(weird))   //Проверка на работу с числом. Хз пригодится или нет
//console.log(isNaN(42))  // Норм число, можно работать
//console.log(isFinite (42))  // Проверка на конечность числа
//console.log(isFinite (Infinity))

//const stringInt = '40'
//const stringFloat = '40.42'
//console.log(stringInt + 2)  Будет 402 потому что все считается строкой. Я ПОМНЮ ЭТОТ МЕМ ИЛЬЯ
//console.log(parseInt(stringInt) + 2)  // Преобразовал в число. Работает только с integer
//console.log(Number(stringInt) + 2) //Все 3 написания верны. ИЛЬЯ поясни какое чаще юзается. 
//console.log(+stringInt + 2) 

//console.log(parseFloat(stringFloat) + 2) // Работает с Float, по аналогии 
//console.log(+stringFloat + 2) // Оба написания верны

//console.log(0.4 + 0.2 ) // не выйдет 0.6 из-за особенности хранение инфы в jave
//console.log((2 / 5)+ (1 / 5))
//console.log ((0.4 + 0.2).toFixed(1)) //Сколько чисел оставим  после запятой. Результат будет в виде строки
//console.log (+(0.4 + 0.2).toFixed(1)) // Теперь это число
//console.log (parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt отдельный тип данных
//console.log(typeof 9007199254740991955645n)
//console.log(9007199254740991955645n) // Большое число. С ним можно взаимодействовать если поставить 'n'
//console.log(9007199254740991955645n - 900719925474099195561n)
//console.log(9007199254740991955645.555n) // Будет ошибка потому что Int
//console.log(10n-4) Где есть n это BigInt. И данный пример ошибка
//BigInt скипнул, считаю что ПОКА ЧТО не пригодится

// 3 Math очень полезен для вычесления чего либо  
//console.log(Math.E) //Экспонента
//console.log(Math.PI) //ПИ ВЕЛИКОЕ ЧИСЛО ПИ
//console.log(Math.sqrt(25)) //Квадратный корень
//console.log(Math.pow(5, 3)) //В степень 
//console.log(Math.abs(-42)) //Модуль числа
//console.log(Math.max(42, 12, 23, 11, 430)) //Показывает максимальное число
//console.log(Math.min(42, 12, 23, 11, 430)) // Минимальное число
//console.log(Math.floor(4.8)) // Округляет в минимум
//console.log(Math.ceil(4.8)) // Округляет большую сторону
//console.log(Math.round(4.8)) // Округляет к ближайшему целому числу
//console.log(Math.trunc(4.8)) //Отсекает дробные знаки. Т.е 4.9 = 4 , 66.6 = 66
//console.log(Math.random()) // Рандом 

// 4 Example
//function gerRandomBetween (min, max) {
//    return Math.random() * (max - min) + min
//}

//console.log(gerRandomBetween(10, 42))

//function gerRandomBetween (min, max) {            //отсек дробную часть
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}

//console.log(gerRandomBetween(10, 42))

