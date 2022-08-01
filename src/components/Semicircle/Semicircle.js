import './Semicircle.css'

export default function Semicircle({text, url}){
  

    return <div className = "semiCircle-container"><a className = "semiCircle" href={url} target='_blank' rel='noreferrer'>{text}
    </a></div> 
}