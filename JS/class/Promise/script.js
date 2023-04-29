
 //setTimeout(() => {
 //   console.log('Reg nem 1');
 //   setTimeout(() => {
 //       console.log('Reg nem 2');
 //       setTimeout(() => {
 //           console.log('Reg nem 3');
 //           setTimeout(() => {
 //               console.log('Reg nem 3'+ 'Reg nem 2'+ 'Reg nem 1'\3);
 //           },2000)
 //       },2000)
 //   },3000)
 //},4000)


const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Start process");
        resolve()
        //reject('Bad idea')
    },2000)
})
.then(()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const car ={
                brend: 'Tesla',
                model: 'X'
            }
            console.log('You wanc to buy: ', car.model);
            reject('Not enough money')
            //resolve()
        },2000)
    })
})
.then(() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('СТО checing...')
            const car = {
                brend: Tesla
            }
        })
    })
})

.catch(function(error){
console.error(error)
})
































reject('Opss!')
}, 2000)

 






