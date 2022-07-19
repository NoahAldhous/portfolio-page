import './Header.css'

export default function Header(){


      var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.querySelector(".Header").style.top = "0";
  } else {
  document.querySelector(".Header").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
  }

    return <div className = "Header">
        <a className ="email" href="mailto:naldhous@hotmail.co.uk" target='_blank' rel='noreferrer'>naldhous@hotmail.co.uk</a>
    </div>
}