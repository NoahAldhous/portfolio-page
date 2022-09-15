import './ScrollDownButton.css';
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function ScrollDownButton(){


    function scrollDown(){
        document.querySelector(".Aboutmepage").scrollIntoView();
    }

    return <section className = 'Icon-container'>
                <div className = "scroll-down-button-text" >SCROLL</div>
                <MdKeyboardArrowDown className = 'Arrow-Icon' size ={60} onClick = {scrollDown}/>
                <div className = "scroll-down-button-text" >DOWN</div>
            </section>
}