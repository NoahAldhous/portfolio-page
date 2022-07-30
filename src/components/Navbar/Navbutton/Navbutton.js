import './Navbutton.css';

export default function Navbutton({buttonText, page, handleClick}){
    switch(buttonText){
        case 'AM':
            return <button className = {`AM Navbutton`} onClick = {function(){handleClick(page)}}>
            </button>
        case 'PF':
            return <button className = {'PF Navbutton'} onClick = {function(){handleClick(page)}}>
            </button>
        case 'EX':
            return <button className = {'EX Navbutton'}  onClick = {function(){handleClick(page)}}>
            </button>
        case 'CI':
            return <button className = {'CI Navbutton'}  onClick = {function(){handleClick(page)}}>
            </button>
        case 'LI':
            return <a className = {'LI Navbutton'} href='https://www.linkedin.com/in/noah-aldhous-4436a3195/' target='_blank' rel='noreferrer'>
            </a>
        case 'TW':
            return <a className = {'TW Navbutton'} href='https://twitter.com/theOldHaus' target='_blank' rel='noreferrer'>
            </a>
        case 'GH':
            return <a className = {'GH Navbutton'} href='https://github.com/NoahAldhous' target='_blank' rel='noreferrer'>
            </a>
        case 'IG':
            return <a className = {'IG Navbutton'} href='https://www.instagram.com/the_oldhaus/' target='_blank' rel='noreferrer'>
            </a>
    default:
        return null;
    }
}