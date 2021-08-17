// Array map

const number = [10,20,30,40]

console.log(`No. = ${number}`)

const result = number.map(e=>{
    // const a = e*2
    return e*2
})

console.log(`Array map ${result}`);
// [10,20,30,40]
// [10x2,20x2,30x2,40x2]
// [20,40,60,80]

// ex2
const data =["rain","sun","chin","mood","good"]

const result1 = data.map((e,i)=>{ // i = ตำแหน่ง Index
    return `Date ${i} note = ${e}`
})

console.log(result1)

// [
//     'Date 0 note = rain',
//     'Date 1 note = sun',
//     'Date 2 note = chin',
//     'Date 3 note = mood',
//     'Date 4 note = good'
//   ]

// ex 3
const data1 =[
    {day:"01/06/64",weather:"sun",temp:"27"},
    {day:"02/06/64",weather:"rain",temp:"23"},
    {day:"03/06/64",weather:"mood",temp:"26"}
]

console.log(data1)

const result2 = data1.map(e=>{
    return e.weather
})

console.log(result2)