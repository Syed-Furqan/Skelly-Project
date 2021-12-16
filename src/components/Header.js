import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <i className="fa fa-shopping-bag"></i>
                <p><span>E-</span>Shop</p>
            </div>
            <div className="header__middle">
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
            </div>
            <div className="header__right">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-cart"></i>
                <i className="fa fa-user"></i>
            </div>
        </div>
    );
}

export default Header;