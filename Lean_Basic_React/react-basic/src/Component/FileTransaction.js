import './CssItem.css'
import { v4 as uuidv4 } from 'uuid';
import FileItem2 from "./FileItem";

// const FileTransaction = () => {
//     const data = [
//         { name: "ต่ารักษาพยาบาล2", amount: 2000 },
//         { name: "เช่าบ้าน", amount: 8000 },
//         { name: "น้ำมัน", amount: 500 }
//     ]
//     return (
//         <ul className="item-list">
//             {/* <FileItem/> */}
//             <FileItem name="ต่ารักษาพยาบาล" amount="2000" />
//             <FileItem name={data[0].name} amount={data[0].amount} />
//             <FileItem name={data[1].name} amount={data[2].amount} />
//             {/* <li>เงินเดือน <span>2000</span></li>
//         <li>อาหาร <span>500</span></li> */}
//         </ul>
//     )
// }

// const FileTransaction1 = () => {
//     const data = [
//         { name: "ต่ารักษาพยาบาล2", amount: 2000 },
//         { name: "เช่าบ้าน", amount: 8000 },
//         { name: "น้ำมัน", amount: 500 }
//     ]
//     return (
//         <ul className="item-list">
//             <FileItem name="ต่ารักษาพยาบาล" amount="2000" />
//             <FileItem name={data[0].name} amount={data[0].amount} />
//             {data.map((e)=>{
//             return(
//                 // <FileItem name={e.name} amount={e.amount} />,
//                 //  or
//                 <FileItem {...e}/>
//             )}
//             )}
//         </ul>
//     )
// }

// const FileTransaction2 = () => {
//     const data = [
//         {id:1, name: "ต่ารักษาพยาบาล2", amount: 2000 },
//         {id:2, name: "เช่าบ้าน", amount: 8000 },
//         {id:3, name: "น้ำมัน", amount: 500 }
//     ]
//     return (
//         <ul className="item-list">
//             {data.map((e)=>{
//             return(
//                 // <FileItem name={e.name} amount={e.amount} />,
//                 //  or
//                 <FileItem {...e} key={e.id}/>
//             )}
//             )}
//         </ul>
//     )
// }
// if no need id ขกกำหนด Id use uuid
const FileTransaction3 = () => {
    const data = [
        {name: "ต่ารักษาพยาบาล2", amount: 2000 },
        {name: "เช่าบ้าน", amount: 8000 },
        {name: "น้ำมัน", amount: 500 }
    ]
    return (
        <ul className="item-list">
            {data.map((e)=>{
            return(
                // <FileItem name={e.name} amount={e.amount} />,
                //  or
                <FileItem2 {...e} key={uuidv4()}/>
            )}
            )}
        </ul>
    )
}
//กำหนด tpye ใส่เพื่อใน fileitem

const FileTransaction4 = () => {
    // ย้ายคำสั่งไปที่ App เพิ่อกระจายข้อมูล
    const data = [
        {name: "ต่ารักษาพยาบาล2", amount: 2000 },
        {name: "เช่าบ้าน", amount: 8000 },
        {name: "น้ำมัน", amount: 500 },
    ]
    return (
        <ul className="item-list">
            {data.map((e)=>{
            return(
                // <FileItem name={e.name} amount={e.amount} />,
                //  or
                <FileItem2 {...e} key={uuidv4()}/> // ย่ายไป ใน App  bottom to top
            )}
            )}
        </ul>
    )
}
const FileTransaction5 = (props) => {
    // ย้ายคำสั่งไปที่ App เพิ่อกระจายข้อมูล
    const {item} = props
    return (
        <ul className="item-list">
            {item.map((e)=>{
            return(
                // <FileItem name={e.name} amount={e.amount} />,
                //  or
                <FileItem2 {...e} key={e.id}/> // ย่ายไป ใน App  bottom to top
            )}
            )}
        </ul>
    )
}

export default FileTransaction5