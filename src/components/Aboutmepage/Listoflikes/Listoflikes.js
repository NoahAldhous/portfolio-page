import './Listoflikes.css';
import Listitem from './Listitem/Listitem';

export default function Listoflikes({likes}){
    console.log(likes)

    return<ul className = "Listoflikes" > LIKES:
          {likes.map(
        function(item){
            console.log(item)
          return <Listitem key = {item.key} text = {item.text}/>
        }
      )}
    </ul>
}

