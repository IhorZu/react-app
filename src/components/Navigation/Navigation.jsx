import './Navigation.scss';

const Navigation = () => {

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#" className="nav__link">Menu 1</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Menu 2</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Menu 3</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Menu 4</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
