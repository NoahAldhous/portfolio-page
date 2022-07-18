import './Navbutton.css';

export default function Navbutton({buttonText}){
    switch(buttonText){
        case 'AM':
            return <button className = {`AM Navbutton`}>
            </button>
        case 'PF':
            return <button className = {'PF Navbutton'}>
            </button>
        case 'EX':
            return <button className = {'EX Navbutton'}>
            </button>
        case 'CI':
            return <button className = {'CI Navbutton'}>
            </button>
        case 'LI':
            return <button className = {'LI Navbutton'}>
            </button>
        case 'TW':
            return <button className = {'TW Navbutton'}>
            </button>
        case 'GH':
            return <button className = {'GH Navbutton'}>
            </button>
        case 'IG':
            return <button className = {'IG Navbutton'}>
            </button>
    default:
        return null;
    }
}