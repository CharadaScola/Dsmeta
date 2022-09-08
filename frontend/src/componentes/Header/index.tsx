import logo from '../../assets/img/Logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DsMeta" />
                <h1>DsMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/scolamatheus/"> @Scola</a>
                </p>
            </div>
        </header>
    )
}
export default Header 
