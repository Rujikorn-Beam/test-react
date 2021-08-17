import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FileHelloComponent from './HelloComponent/HelloComponent'; // นำcomponent ต่างไฟล์มาใส่


// การสร้าง Compoment(ส่วนประกอบ)
function HelloComponent(){
  return<h1>Hello Compoment </h1>
}
// สร้าง class
class Hello2Component extends React.Component{
  render() {
    return (
      <div>
        <h1>Hello Class Compoment</h1>
      </div>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
