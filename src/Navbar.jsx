import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import raport from "./assets/Raport_do_smap.pdf";

/* Górna nawigacja w stylu referencji:
   logo z szeryfową kursywą | linki w monospace | owalny przycisk CTA */
function Navbar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const next = i18n.language === "pl" ? "en" : "pl";
        i18n.changeLanguage(next);
    };

    return (
        <nav className="siteNav">
            <Link to="/aboutUs" className="siteNavLogo">
                <em>{t("navbar.logoPrefix")}</em>{t("navbar.logoSuffix")}
            </Link>

            <div className="siteNavLinks">
                <NavLink to="/">{t("navbar.search")}</NavLink>
                <NavLink to="/aboutUs">{t("navbar.aboutUs")}</NavLink>
            </div>

            <div className="siteNavRight">
                <button
                    type="button"
                    className="langSwitch"
                    onClick={toggleLanguage}
                    aria-label="Zmień język / Change language"
                    title="Zmień język / Change language"
                >
                    {i18n.language === "pl" ? "EN" : "PL"}
                </button>


                <a className="siteNavCta" href={raport} download aria-label={t("aboutUs.reports.report.downloadAriaLabel")}>
                    <span className="material-symbols-outlined">see the report</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
