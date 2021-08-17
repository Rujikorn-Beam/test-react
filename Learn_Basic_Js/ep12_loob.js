// Loop Array
// For loop , ForEach,ForOf

const data = [10,20,30,40,50]

// for(let i = 0; i<data.length;i++){
//     if (data[i]>=30) break
//     console.log(`No. ${i} = ${data[i]}`)
// }

//forEach เขียน base continew ไม่ได้ ex add  break ไม่ได้ code จะไม่ทำงาน
let sum =0
data.forEach(e =>{
    // if(e>=30){
    //     console.log("hello")
    // }
    console.log(e)
    console.log(`No. Array Ddate ${e}`)
    sum +=e
    console.log(`Total = ${sum}`)

})

//ForOf = forloop+ ForEach ใช้ได้ทั้ง 2 แบบ
for (const element of data){
    if(element>=30) break
    console.log(`Member of Date = ${element}`)
}