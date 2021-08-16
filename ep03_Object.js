//ทำงานกับ Object

// ตัวแปรเก็บข้อมูล
const username = "Rujikorn"
const age = 20
const addrees ="กทม"

// const cutomer = {
//     cutomerName : "Beam",
//     age: 30,
//     address:"กทม"
// }
const customer = {
    cutomerName : username,
    age, // ==> ปกติ age: age,  ถ้าชื่อเหมือกัน ใช้ตัวเดียวกันได้เลย age
    address: addrees,

    showDate(){
        console.log("NAME: "+ username)
        console.log("Name: "+this.cutomerName)
    }
}

customer.showDate()
console.log(customer);

