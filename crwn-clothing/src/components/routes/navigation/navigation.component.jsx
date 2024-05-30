import { Fragment } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <Fragment>
        <div className="navigation">
        <Link className="logo-container" to="/">
        <div className="logo">
        <Logo/>
        </div>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
        Shop
        </Link>
        </div>
        </div>
        </Fragment>
    );
}

export default Navigation;