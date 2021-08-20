import { number, string } from "prop-types"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './CssItem.css'


const FormComponent = (props)=>{ 

    const [name,setName] = useState('') // เมื่อใส่ค่าจะนำมาใช้เลย 
    const [amout,setAmout] = useState(0) // 0 ค่าเริ่มต้น

    const inputName= (event)=>{
        setName(event.target.value) //เมื่อป้อนค่าเข้าไปจะถูกเก็ยในstate
        //console.log(event.target.value)
//  ค
//  ค่
//  ค่า
//  ค่าเ
//  ค่าเช
//  ค่าเช่
//  ค่าเช่า
    }
    const inputAmount = (event)=>{
        setAmout(event.target.value) //เมื่อป้อนค่าเข้าไปจะถูกเก็ยในstate
        // console.log(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault() // หน้าจะไม่รี ดักจับข้อมูล
        const itemData  = { // เก็บข้อมูล เมื่อกดปุ่ม SUMMIT
            id: uuidv4(),
            name:name ,
            amout:Number(amout)  //ระบุ number type
        }
        // console.log(itemData)
        props.onAddItem(itemData)
        setName('') // คลีดค่าstateให้พร้อมกับค่าต่อไป
        setAmout(0)
        console.log("เพิ่มข้อมูลเรียบร้อย")
    }
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputName} value={name}/>
                </div>
                <div className="form-control">
                    <label>จำนวณเงิน</label>
                    <input type="number" placeholder="ระบุจำนวณเงิน" onChange={inputAmount} value={amout}/>
                </div>
                <div>
                    <button type="submit" className="btn">Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent