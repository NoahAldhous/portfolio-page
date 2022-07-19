import './Header.css'

export default function Header(){


      var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.querySelector(".Header").style.top = "0";
  console.log("it do")
  } else {
  document.querySelector(".Header").style.top = "-15vh";
  console.log("it be scrollin")
  }
  prevScrollpos = currentScrollPos;
  }
      

    return <div className = "Header">
        <a className ="email" href="mailto:naldhous@hotmail.co.uk">naldhous@hotmail.co.uk</a>
    </div>
}