// join , concat แปลงค่า

const data = [100,200,300]
console.log(data) // [ 100, 200, 300 ]

const result = data.join() //แปลง Arr เป็น string
console.log(result) // 100,200,300

const result1 = data.join("*") // แปลงตัวขันจาก , เป็น *
console.log(result1) // 100*200*300

const data1 =[10,20,30]

const alldata = data.concat(data)

console.log(alldata)


