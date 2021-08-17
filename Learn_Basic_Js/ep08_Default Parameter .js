// Default Parameter กำหนดค่าแรกให้กับ parameter

getDateCustomer=(cutomerName,cutomerAddress="กรุงเทพ")=>{ // ถ้าไม่ใส่ ="กรุงเทพ" ใช้ if ด้านล่างแทนได้
    
    // if(!cutomerAddress){
    //     cutomerAddress = "กรุงเทพ"
    // }
    const address = `name : ${cutomerName}
    Address : ${cutomerAddress}`
    
    return address

}

console.log(getDateCustomer("Rujikorn","Nakorn"))
console.log(getDateCustomer("Rujikorn"))
