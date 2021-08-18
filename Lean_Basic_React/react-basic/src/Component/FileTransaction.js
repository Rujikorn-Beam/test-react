import FileItem from "./FileItem"
import './CssItem.css'

const FileTransaction = () => {
    return (
      <ul className="item-list">
        <FileItem/>
        <FileItem/>
        <FileItem/>
        {/* <li>เงินเดือน <span>2000</span></li>
        <li>อาหาร <span>500</span></li> */}
      </ul>
    )
  }

export default FileTransaction