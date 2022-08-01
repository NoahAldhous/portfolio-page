import './LeftSemiCircle.css'

export default function LeftSemiCircle({text, handleClick, page}){
    return <div className = "leftsemiCircle-container"><button className = "leftsemiCircle" onClick = {function(){handleClick(page)}}>{text}
    </button></div> 
}