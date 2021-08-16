// Spread Operator


const newArr = [100,200,300]

// Q: move newArr --> ใส่ในdata ผิด
const data = [10,20,newArr]
console.log(data) // [ 10, 20, [ 100, 200, 300 ] ]
console.log(data.length) // จะมี 3 จำนวน = ซ้อน arr


// Q: move newArr --> ใส่ในdata ถูก
const data1 = [10,20,...newArr]
console.log(data1) // [ 10, 20, 100, 200, 300 ]
console.log(data1.length) // จะมี 5 จำนวน 


const data2 = [20,30,40] 
data2.push(...data1)
console.log(data2) //[ 20,  30,  10, 20,100, 200, 300]

