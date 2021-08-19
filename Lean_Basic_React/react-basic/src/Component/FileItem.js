import './CssItem.css'
import PropTypes from 'prop-types';

// const FileItem = ()=>{
//     const name ="พักโรงแรม"
//     const amount = 5000
//     return(
//         // <li>พักโรงแรม<span>5000</span></li>
//         // <li>{name}<span>{amount}</span></li>
//         <li className="title">{name}<span>{amount}</span></li>
//     )
// }

// const FileItem1 = (props)=>{
//     return(
//         <li>{props.name}<span>{props.amount}</span></li>    
//     )
// }

const FileItem2 = (props)=>{
    const {name,amount} = props
    return(
        <li>{name}<span>{amount}</span></li>    
    )
}
// 2 or 3 
const FileItem3 = ({name,amount})=>{
    return(
        <li>{name}<span>{amount}</span></li>    
    )
}
//กำหนด tpye{PropTypes.type} กำหนดให้ครบ{isRequired} ใส่เพื่อมใน fileitem
FileItem2.prototype=    {
    name:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default FileItem2