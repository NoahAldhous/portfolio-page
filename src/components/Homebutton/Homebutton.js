import './Homebutton.css'
import { AiOutlineHome } from "react-icons/ai";

export default function Homebutton({handleClick, page}){
    return <button className = "Homebutton" onClick = {function(){handleClick(page)}}>
        { <AiOutlineHome size = {30}/> }
    </button>
}