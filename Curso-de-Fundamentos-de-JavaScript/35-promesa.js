/* 

Estados de la promesa
Promisa()

Estados:
    pending
    fullfilled
    rejected

Callbacks:
    resolve
    reject

then() -> se ejecuta cuando la promesa se resuelve
catch() -> se ejecuta cuando no se resuelve y podemos obtener el error

*/

const promesa = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        let operacionExitosa = true
        if(operacionExitosa){
            resolve("La operación fue exitosa")
        }else{
            reject("Fallo la operación")
        }
    },2000)
    
})

//se llama la promesa
promesa.then((successMessage) => {
    console.log(errorMessage)
})

promesa.catch((successMessage) => {
    console.log(errorMessage)
})