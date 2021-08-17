// Array Filter(คัดกรอง)

const data =[10,20,30,40]
const data1 = [
    {name:"beam",salary:25000,deepartemnt:"program"},
    {name:"beam1",salary:40000,deepartemnt:"markgeting"},
    {name:"beam2",salary:30000,deepartemnt:"program"}
]

// 1.กำหนดเงื่อนไง 2. ถูกจับแยกไปใส่อีก array นึง

const result =  data.filter(e=>{
    return e>20
})

console.log(result)

const result1 = data1.filter(e=>e.salary>10000).filter(e=>e.deepartemnt==="program")


console.log(result1)
console.log(sum1)