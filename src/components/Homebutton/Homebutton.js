import './Homebutton.css'

export default function Homebutton({handleClick, page}){
    return <button className = "Homebutton" onClick = {function(){handleClick(page)}}>HOME</button>
}