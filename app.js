// using .then method to chain promises from the slowMath library. 

// slowMath.add(6,2)
// .then(val => {
//     console.log(val); 
//     return slowMath.multiply(val, 2); 
// }).then(val => {
//     console.log(val); 
//     return slowMath.divide(val, 4); 
// }).then(val => {
//     console.log(val); 
//     return slowMath.subtract(val, 3)
// }).then(val => {
//     console.log(val); 
//     return slowMath.add(val, 98); 
// }).then(val => {
//     console.log(val); 
//     return slowMath.remainder(val, 2); 
// }).then(val => {
//     console.log(val); 
//     return slowMath.multiply(val, 50);
// }).then(val => {
//     console.log(val); 
//     return slowMath.remainder(val, 40); 
// }).then(val => {
//     console.log(val);
//     return slowMath.add(val, 32); 
// }). then(val => {
//     console.log(`The final result is ${val}.`);  
// }).catch(error => {
//     console.log(error); 
// }); 

// using Async/Await keywords to chain promises from the slowMath library.

async function doMathSlowly() {
    try {
        let val = await slowMath.add(6, 2);
        console.log(val);
        val = await slowMath.multiply(val, 2);
        console.log(val);
        val = await slowMath.divide(val, 4);
        console.log(val);
        val = await slowMath.subtract(val, 3);
        console.log(val); 
        val = await slowMath.add(val, 98); 
        console.log(val); 
        val = await slowMath.remainder(val, 2)
        console.log(val); 
        val = await slowMath.multiply(val, 50); 
        console.log(val); 
        val = await slowMath.remainder(val, 40); 
        console.log(val); 
        val = await slowMath.add(val, 32); 
        console.log(`The final result is ${val}.`); 
    } catch (err) {
        console.log(err);
    };
};

doMathSlowly(); 