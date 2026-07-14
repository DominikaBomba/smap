import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/* Górna nawigacja w stylu referencji:
   logo z szeryfową kursywą | linki w monospace | owalny przycisk CTA */
function Navbar() {
    return (
        <nav className="siteNav">
            <Link to="/aboutUs" className="siteNavLogo">
                <em>SM</em>ap
            </Link>

            <div className="siteNavLinks">
                <NavLink to="/">Wyszukiwarka</NavLink>
                <NavLink to="/aboutUs">O nas</NavLink>
            </div>

            {/* podmień href, gdy raport będzie miał swój adres */}
            <a className="siteNavCta" href="#">
                Zobacz raport
            </a>
        </nav>
    );
}

export default Navbar;