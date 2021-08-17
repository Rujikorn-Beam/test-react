// Array Reduce

const data = [10,20,30,40]

// array.reduce((ค่าที่ถูกประมวลผลเป็นค่าที่ถูกสะสมค่า(ค่าเริ่มต้นที่ระบุ),e)=>,ค่าเริ่มต้น //total = 0)

const sum=data.reduce((value,e)=>{
    console.log(`value ${value}, element ${e}`)
    const total = e+value
    return total
},0)

// value 0, element 10
// value 10, element 20
// value 30, element 30
// value 60, element 40

console.log(`Sum :${sum}`) // Sum :100

const sum1 = data.reduce((value,e)=>e+value,0)

console.log(`Sum1 : ${sum1}`) //Sum1 : 100

// value = 0

//ex2

const car = [
    {Product:"book",price:100},
    {Product:"snack",price:10},
    {Product:"phone",price:4600}
]

const sum2 = car.reduce((value,e)=>{
    const totol = e.price+value
    return totol
},0)

// or
const sum2_1 = car.reduce((value,e)=>e.price+value,0)

console.log(`SumProduct1: ${sum2}`)
console.log(`SumProduct2: ${sum2_1}`)


