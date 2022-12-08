const person = {   //объект
    name: 'Дима',
    age: 24,
    isProgrammer: true,
    languages: ['ru','en','kz'],
    // 'complex key':'Complex Value',
    // ['key_' + (1 + 3)]: 'Complex Key', //key_4
    greet(){
        console.log('greet from person')

    },
    info() {
        // console.log(this)
//        console.info('Информация про человека по имени:', person.name) можно выводить по другому
          console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.languages.push('uk')
// //person['key_4'] = undefined
// delete person['key_4']  // можно удалять ключи

// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

//const {name, age , languages} = person   //так менее грамоздко 
//const {name, age: personAge, languages} = person   // через : можно поместить в отдельную переменную 
// const {name, age: personAge = 10, languages} = person   // если значение каким то образом оказало undefined то он примет значение 10 

// console.log(name, age , languages)

// for (let key in person) {  //опасен. 
//         console.log('key;',key)
//         console.log('value:', person[key])
// }

// const keys = Object.keys(person)  // не идет по прототипу
// keys.forEach((key)=>{
//     console.log('key:', key)
//     console.log('value:', person[key])
// })
// Object.keys(person).forEach((key)=>{   // можно не создавать отдельную переменую. так как он создает отдельный массив
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

//Context
// person.info()

const logger = {
    keys() {
      console.log('Object Keys: ', Object.keys(this))
    },
  
    keysAndValues() {
      // "key": value
      // Object.keys(this).forEach(key => {
      //   console.log(`"${key}": ${this[key]}`)
      // })
      // const self = this
      Object.keys(this).forEach(function(key) {
        console.log(`"${key}": ${this[key]}`)
      }.bind(this))
    },
  
    withParams(top = false, between = false, bottom = false) {
      if (top) {
        console.log('------- Start -------')
      }
      Object.keys(this).forEach((key, index, array) => {
        console.log(`"${key}": ${this[key]}`)
        if (between && index !== array.length - 1) {
          console.log('--------------')
        }
      })
  
      if (bottom) {
        console.log('------- End -------')
      }
    }
  }
  
//const bound = logger.keys.bind(logger) // возвращает новую функцию 
//const bound = logger.keys.bind(person) // интересно работает. Поясни 
//bound()
// logger.keys.call(person) // метод калл не возвращает новую функцию. Бандит и сразу вызывает
//logger.keysAndValues.call(person)
//logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])