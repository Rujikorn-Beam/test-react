// Block scope (let/constant)

//การเขียนแบบเดิม

var x = 10
// if(x===10){
//     var y=500
//     console.log("y in ="+y);
// }
if(x===10){
    let y=500
    console.log("y in ="+y);
}
// if(x===100){
//     var y=500
//     console.log("y ="+y);
// }

console.log("y out ="+y);