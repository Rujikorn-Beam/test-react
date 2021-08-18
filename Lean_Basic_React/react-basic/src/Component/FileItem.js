import './CssItem.css'

const FileItem = ()=>{
    const name ="พักโรงแรม"
    const amount = 5000
    return(
        // <li>พักโรงแรม<span>5000</span></li>
        // <li>{name}<span>{amount}</span></li>
        <li className="title">{name}<span>{amount}</span></li>
    )
}

export default FileItem