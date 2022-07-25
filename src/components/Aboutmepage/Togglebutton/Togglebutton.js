import './Togglebutton.css'

export default function Togglebutton({handleChange}){
    return <div className= "Picture-switcher">
    <label className="switch">
    <input type="checkbox" onChange={handleChange}/>
    <span className="slider round"></span>
    </label>
</div>
}