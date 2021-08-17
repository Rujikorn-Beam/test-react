// ค้นหาข้อมูลใน Array
// indexof (ข้อมูล) =>ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find (ข้อมูล)=> ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ Undefind
// findIndex (ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const color = ["red","green","blue","white","black"]
console.log(color)

console.log(`indexOf(data): `+color.indexOf("red")) // ได้ index = 0

// ค้นข้อมูลได้ข้อมูลกลับมา
console.log(`find(data): `+color.find(element=>element==="green"))  //ค่าใด้ใน element มีก่ารเจอ green หรือ ไม่


const search = color.findIndex(element=>element==="blue")
console.log(`findindex: `+search)