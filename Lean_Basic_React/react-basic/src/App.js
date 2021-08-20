import React from "react";
import FileItem from "./Component/FileItem";
import './App.css'
import FileTransaction4 from "./Component/FileTransaction";
import FormComponent from "./Component/FormComponent"
import FileTransaction5 from "./Component/FileTransaction";
import { useState } from "react";

const DesignTitle = {color:"Blue",textAlign:"center",fontSize:"1.5rem"}

// const Title = () => <h1 style={{color:"red",textAlign:"center",fontSize:"1.5rem"}}>Program บัญชีรายรับ - รายจ่าย</h1>
const Title = () => <h1 style={DesignTitle}>App บัญชีรายรับ - รายจ่าย</h1>
const Descrtion = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

const Item = ()=>{
  return (
    <li>ค่าเดินทาง <span>200</span></li>
  )
}
const Transaction = () => {
  return (
    <FileTransaction5/>
  )
}
// const Transaction1 = () => {
//   return (
//     <ul>
//       <Item/>
//       <Item/>
//       <Item/>
//       <li>เงินเดือน <span>2000</span></li>
//       <li>อาหาร <span>500</span></li>
//     </ul>
//   )
// }


// function App() {
//   return (
//     //  section/div/React.Fragment/ <>
//     <React.Fragment>
//       <article>
//         <h1 style={{color:"red",textAlign:"center",fontSize:"1.5rem"}}>Program บัญชีรายรับ - รายจ่าย</h1>
//         <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
//         <ul>
//           <li>ค่าเดินทาง <span>200</span></li>
//           <li>เงินเดือน <span>2000</span></li>
//           <li>อาหาร <span>500</span></li>
//         </ul>
//       </article>
//     </React.Fragment>

//   );
// }

function App1(){
  return(
    <div>
      <Title />
      <Descrtion/>
      <Transaction/>
    </div>
  )
}

function App2() {
  const initData = [
        {id:1,name: "ต่ารักษาพยาบาล2", amount: -2000 },
        {id:2,name: "เช่าบ้าน", amount: 8000 },
        {id:3,name: "น้ำมัน", amount: 500 },
    ]
    const [item, setItem] = useState(initData) // usestate(ข้อมูลตั้งต้น)
    const onAddNewItem =(newItem)=>{
      // console.log("ข้อมูลที่ส่งมา = ", newItem)
      setItem((prevItem)=>{
        return [newItem,...prevItem]
      })
    }
    
  return(
    <div>
      <Title/>
      <Descrtion/>
      <FormComponent onAddItem = {onAddNewItem}/>
      <FileTransaction5 item = {item}/>  {/* ส่งของมูลไป transaction ชื่อที่ส่งไปไม่ใช้ชื่อไฟล์แต่เป็นชื่อ funstion  โดยใช้ propส่่งไป*/}
    </div>
  )
}
function App3() {
  const initData = [] // เอาออกและตั้ง state เป็น array ถ้าไม่ต้องการข้อมูลเริ่มต้น
    const [item, setItem] = useState([]) // usestate(ข้อมูลตั้งต้น)
    const onAddNewItem =(newItem)=>{
      // console.log("ข้อมูลที่ส่งมา = ", newItem)
      setItem((prevItem)=>{
        return [newItem,...prevItem]
      })
    }
    
  return(
    <div>
      <Title/>
      <Descrtion/>
      <FormComponent onAddItem = {onAddNewItem}/>
      <FileTransaction5 item = {item}/>  {/* ส่งของมูลไป transaction ชื่อที่ส่งไปไม่ใช้ชื่อไฟล์แต่เป็นชื่อ funstion  โดยใช้ propส่่งไป*/}
    </div>
  )
}
export default App3;
