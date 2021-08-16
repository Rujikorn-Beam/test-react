// push(นำสมาชิกไปต่อท้าย) , pop(เอาตัวท้ายสุดออกไป), 
// ตรงข้าม shift (เอาตัวหน้าสุดออกไป) ,unshift (เพิ่มตัวหน้าสุด)

const data =[10,20,30]

console.log(data) // [ 10, 20, 30 ]

// data.push(500)
// data.push(1000) [ 10, 20, 30, 500, 1000 ]
//or 
data.push(...[500,1000]) // if no ... arr จะซ้อนกัน [ 10, 20, 30, [ 500, 1000 ] ]
console.log(data) // [ 10, 20, 30, 500, 1000 ]

data.pop()
console.log(data)// [ 10, 20, 30, 500 ]
// console.log(data)// [ 10, 20, 30 ]

data.shift()
console.log(data)// [ 20, 30, 500 ]

data.unshift(999)
console.log(data) // [ 999, 20, 30, 500 ]

