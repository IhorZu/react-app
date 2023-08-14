import logo from '../../logo.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
}

export default Header;
