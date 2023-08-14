import logo from '../../assets/logo.svg';
import './Logo.scss';

function Logo() {
    return (
        <img src={logo} className="logo" alt="logo" />
    );
}

export default Logo;
