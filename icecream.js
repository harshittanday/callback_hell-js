let stocks = {
    Fruits: ["strawberry", "graphes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true;


let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping would you love to have? "));
        },3000)
    })
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice();

    console.log("D");
    console.log("E");
}
kitchen();
console.log("cleaning the dishes");
console.log("cleaning the table");
console.log("taking others orders");


//async function

// async function order() {
//     try {
//         await abc;
//      }
//     catch (error) {
//         console.log("abc doesn't exist",error)
//     }
//     finally {
//         console.log("runs code anyways")
//     }
// }

// order().then(() => {
//     console.log("anything");
// })






// promises


// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve( work() );
//             },time)
            
//         }

//         else {
//             reject(console.log("our shop is closed"));
//         }
//     })
// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//     .then(() => {
//         return order(0000, () => console.log("production has started"));
//     })

//     .then(() => {
//         return order(2000, () => console.log("the fruit was chopped"));
//     })

//     .then(() => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`));
//     })

//     .then(() => {
//         return order(1000, () => console.log("start the machine"));
//     })
//     .then(() => {
//         return order(2000,()=>console.log(`icecream placed on ${stocks.holder[0]} `))
//     })
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} was selected`)); 
//     })
//     .then(() => {
//         return order(1000, () => console.log("icecrean was served")); 
//     })

//     .catch(() => {
//         console.log("Customer left");
//     })

//     .finally(() => {
//         console.log("day ended. shop is closed");
//     })







// using callback and async functions



// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//         call_production();
//     }, 2000);

    
// }
// let production = () => {
//     setTimeout(() => {
//         console.log("production has started");

//         setTimeout(() => {
//             console.log("the fruit has been chopped");
            
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} ans ${stocks.liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log("the machine was started");

//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was selected `);

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added as toppings`);

//                             setTimeout(() => {
//                                 console.log('serve the icecream');
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     }, 0000);
// }

// order(0,production);