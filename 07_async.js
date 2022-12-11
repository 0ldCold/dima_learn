// Event Loop

// const timeout = setTimeout(() => {
//   console.log('after timeout')  
// }, 2500 )

// clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('after timeout')  
//   }, 1000 )
  
//   clearInterval(interval)

// const delay = (callback, wait = 1000) => {  //не практично так писать
//     setTimeout(callback, wait)
// }

// delay(()=>{
//     console.log ('After 2 seconds') //лишний код, можно переписать 
// }, 2000 )

const delay = (wait = 1000) =>{
    const promise = new Promise( (resolve, reject) =>{
        setTimeout ( ()=>{
            reject('Ахтунг что-то пошло не так')   
        //    resolve()
        }, wait )
    })
return promise
}

// delay(2500)
//   .then(()=> {
//     console.log('After 2 seconds')
//   })
//   .catch( err => console.error('Error',err))  // помогает отлавливать ошибки
//   .finally(()=> console.log ('Finally'))

  const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
  ]))
  //getData().then(data => console.log(data))

 async function asyncExample(){
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e){
        console.log(e)
    } finally {
        console.log('Finally')
    }
  }
  asyncExample()


  //Что такое аякс запросы? 
  //Вроде по базису прошел асинхронности. Скажи на сколько углубится.