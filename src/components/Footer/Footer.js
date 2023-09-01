import './Footer.css'


export default function Footer(){

    const currentYear = new Date().getFullYear()

    return  <section className = 'Footer-container'>
                <div className = 'Footer-text'>
                    &copy; Noah Aldhous {currentYear}
                </div>
            </section>
}