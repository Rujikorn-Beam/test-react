import React from "react";
import FileItem from "./Component/FileItem";
import FileTransaction from "./Component/FileTransaction";
import './App.css'
import FileTransaction4 from "./Component/FileTransaction";
import FormComponent from "./Component/FormComponent"

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
    <FileTransaction4/>
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
  return(
    <div>
      <Title/>
      <Descrtion/>
      <FormComponent/>
      <Transaction/>
    </div>
  )
}
export default App2;
