// Spelice & slice
// เอาออก splice(ตำแหน่งเริ่มต้นที่จะลบ(index),จำนวนที่จะลบ,สมาชิกที่ต้องการแทรก(ใส่ก็ได้ไม่ใส่ก็ได้))
// ดึงเอา slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย -1)

const data = [10,20,30,40,50]
const data1 = [10,20,30,40,50]
const data2 = [10,20,30,40,50]

console.log(data)
// Splice
data.splice(2,2) 
console.log(data)                  // [ 10, 20, 50 ]

data1.splice(1,2,99)                // (x,y,99) เพิ่มตัวสุดท้ายคือใส่แทรกเข้าไปหลังจากลบเสร็จแล้ว
console.log(data1)                  // [ 10, 99, 40, 50 ]

// Slice


const result = data2.slice(1,3) // ต้องหารตัวมารับเพราะค่า data ที่นำมาใช่จะไม่เปลี่ยน
console.log(result) //= (1-2)index = [20,30] 






