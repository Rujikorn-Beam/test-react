// Destructing 

// Array

// const color = ["green","red","Yellow"]
// const [a,b,c] = color
// const [x,,z]= color // ใช้ , เพื่อข้ามarr ที่ไม่ต้องการ


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(x)
// console.log(z)

const product = {
    productName : "Computer",
    price : 30000,
    stock:10
}
console.log(product)
// ชื่อ : ตัวแปร
// const {productName:productName,price:price,stock:stock} = product 
//or ถ้าชื่อเหมือนกัน
const {productName,price,stock} = product

console.log(price)

