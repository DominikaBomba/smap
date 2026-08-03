import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

/* Górna nawigacja w stylu referencji:
   logo z szeryfową kursywą | linki w monospace | owalny przycisk CTA */
function Navbar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const next = i18n.language === "pl" ? "en" : "pl";
        i18n.changeLanguage(next);
    };

    return (
        <div className="navbar">
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

                {/* podmień href, gdy raport będzie miał swój adres */}
                <a className="siteNavCta" href="#">
                    {t("navbar.seeReport")}
                </a>
            </div>

        </nav>
            <div className="remember">
                <div className="rememberRow">
                    <span className="rememberIcon" aria-hidden="true">⚠</span>
                    <p className="rememberText">
                        <strong>Ostatnia aktualizacja: 01.08.2026</strong> — Informacje medyczne zmieniają się bardzo dynamicznie. Dane prezentowane mogą być nieaktualne w przyszłości. Nie ponosimy odpowiedzialności za decyzje podjęte na podstawie tych danych. Zawsze konsultuj się z lekarzem.
                    </p>
                </div>
                <div className="rememberRow">
                    <span className="rememberIcon" aria-hidden="true">⚠</span>
                    <p className="rememberText">
                        <strong>Last update: 01.08.2026</strong> — Medical information changes very dynamically. The data presented may become outdated in the future. We are not responsible for decisions made based on this data. Always consult a doctor.
                    </p>
                </div>
            </div>

            </div>
    );
}

export default Navbar;
