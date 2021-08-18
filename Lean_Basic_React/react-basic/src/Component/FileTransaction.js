import FileItem from "./FileItem"
import './CssItem.css'

const FileTransaction = () => {
    const data=[
        {name:"ต่ารักษาพยาบาล2",amount:2000},
        {name:"เช่าบ้าน",amount:8000},
        {name:"น้ำมัน",amount:500}
    ]
    return (
      <ul className="item-list">
        {/* <FileItem/> */}
        <FileItem name="ต่ารักษาพยาบาล" amount="2000"/>
        <FileItem name={data[0].name} amount={data[0].amount}/>
        {/* <li>เงินเดือน <span>2000</span></li>
        <li>อาหาร <span>500</span></li> */}
      </ul>
    )
  }

export default FileTransaction