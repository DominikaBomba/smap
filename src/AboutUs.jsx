import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "./event";
import "./Aboutus.css";
import gfrLogo from "./assets/gfr.png";
import rocheLogo from "./assets/roche_logo.png";
import human from "./assets/bg1.png";


/* Licznik: animuje liczbę od 1 do `end` po załadowaniu strony.
   prefix/suffix pozwalają zachować znaki typu "~" i "h+". */
function CountUp({ end, prefix = "", suffix = "", duration = 1500 }) {
    const [value, setValue] = useState(1);
    useEffect(() => {
        let frame;
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out: szybko na początku, wyhamowuje przy końcu
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(1 + (end - 1) * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(step);
            }
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [end, duration]);

    return (
        <h4>
            {prefix}
            {value}
            {suffix}
        </h4>
    );
}

function AboutUs() {
    const [showContactInfo, setShowContactInfo] = useState(false);

    return (
        <><link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=download,lock,search"
            rel="stylesheet"
        />
            <header>



                <div className="heroContent">
                    <span className="heroEyebrow">Projekt HerStory</span>

                    <h1>SMap</h1>

                    <p className="intro">
                        Celem projektu jest pomoc pacjentom ze stwardnieniem rozsianym
                        poprzez etyczne wykorzystanie sztucznej inteligencji.
                    </p>

                    <div className="heroDivider" />

                    <h5 className="heroByline">Dominika Bomba &amp; Paulina Święcicka</h5>
                </div>
            </header>

            {/* pasek statystyk i partnerów pod hero */}
            <section className="statsBar">
                <div className={"headerNumbers"}>
                    <div>
                        <CountUp end={4} />
                        <div>miesiące<br/>  pracy</div>
                    </div>

                    <div>
                        <CountUp end={13} />
                        <div>zaangażowanych <br/> ekspertów</div>
                    </div>

                    <div>
                        <CountUp end={20} prefix="+"/>
                        <div> godzin<br/>  konsultacji</div>
                    </div>

                    <div>
                        <CountUp end={2985} prefix="~" />
                        <div>przeanalizowanych<br/>  komentarzy</div>
                    </div>
                </div>

                <p>
                    Projekt realizowany w ramach HerStory we współpracy fundacji
                    Girls Future Ready oraz Roche Polska.
                </p>

                <div className={"partners"}>
                    <img src={gfrLogo} alt={"Roche logo"} />
                    <img src={rocheLogo} alt={"Girls Future Ready logo"} />
                </div>
            </section>


            <section className="whatWeDo">
                <h4>Tak <em>działamy</em>:</h4>
                <div>
                    {Object.entries(events).map(([slug, event]) => (
                        <div id={slug} key={slug}>
                            <Link to={`/${slug}`}>
                                <img src={event.image} alt={event.alt} />
                                <span className="cardTag">{event.tag}</span>
                                <h5>{event.title}</h5>
                                <div>{event.short}</div>
                                <span className="readMore">Czytaj więcej →</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="reports">
                <h4>Co <em>tworzymy</em>?</h4>

                <div className="reportRow">
                    <h5>RAPORT</h5>
                    <div>
                        <a href="./assets/" download="raport_Smap_june2026.pdf" aria-label="Pobierz raport">
                            <span className="material-symbols-outlined">download</span>
                        </a>
                    </div>
                    <div>
                        <strong>
                            Potential Areas Where Patients Diagnosed with MS Can Be
                            Supported by AI
                        </strong>{" "}
                        — raport oparty na ponad 13 wywiadach z ekspertami Roche
                        z neurologii, sztucznej inteligencji i komunikacji.
                    </div>
                </div>

                <div className="reportRow">
                    <h5>ANALIZA</h5>
                    <div>
                        <button
                            type="button"
                            className="iconButton"
                            onClick={() => setShowContactInfo((prev) => !prev)}
                            aria-label="Informacja o dostępie do analizy"
                        >
                            <span className="material-symbols-outlined">lock</span>
                        </button>
                        {showContactInfo && (
                            <p className="contactInfo">
                                Dostęp do analizy jest ograniczony — prosimy o kontakt
                                mailowy:{" "}
                                <a href="mailto:kontakt@twojadomena.pl">
                                    ...
                                </a>
                            </p>
                        )}
                    </div>
                    <div>
                        Analiza około 3000 zanonimizowanych komentarzy społeczności
                        SM: o czym pacjenci rozmawiają, czego szukają i co ich
                        niepokoi. Dostępna dla wybranych organizacji.
                    </div>
                </div>

                <div className="reportRow">
                    <h5>WYSZUKIWARKA</h5>
                    <div>
                        <Link to="/.." aria-label="Przejdź do wyszukiwarki">
                            <span className="material-symbols-outlined">search</span>
                        </Link>
                    </div>
                    <div>
                        Zbiór prawdziwych pytań społeczności SM wraz z odpowiedziami,
                        w formie prostej wyszukiwarki. Dostępna dla pacjentów.
                    </div>
                </div>
            </section>

            <section className={"aboutMe"}>
                <h4> O mnie</h4>
                <div>
                    <div>
                        <div> <h4>Dominika Bomba </h4>  <img src={human} alt={"dominika photo"}/></div>
                        <p> Stworzyłam SMap, którego celem jest
                        wsparcie pacjentów ze stwardnieniem rozsianym poprzez etyczne
                        wykorzystanie sztucznej inteligencji. Na co dzień interesuję się
                        programowaniem, nowymi technologiami i AI.</p>

                    </div>
                    <div>
                        <div> <h4> Paulina Święcicka </h4>  <img src={human} alt={"dominika photo"}/></div>
                        <p> Stworzyłam SMap, którego celem jest
                            wsparcie pacjentów ze stwardnieniem rozsianym poprzez etyczne
                            wykorzystanie sztucznej inteligencji. Na co dzień interesuję się
                            programowaniem, nowymi technologiami i AI.</p>

                    </div>

                </div>
            </section>

            <section className={"values"}>
                <h4>Nasze <em>wartości</em></h4>

                <div>
                    <div>
                        <h5>Etyczne użycie AI</h5>
                        <p>Szczegółowo werfikujemy i konsultujemy analizy sztucznej inteligencji w pełni dbając o prywatność.</p>
                    </div>


                    <div>
                        <h5>Dostępność dla każdego</h5>
                        <p>Tworzymy narzędzia łatwych do użycia i zrozumienia przez każdego</p>
                    </div>

                    <div>
                        <h5>Rzetelność</h5>
                        <p>Opieramy się jedynie na twardych danych oraz wiedzy ekspertów medycznych</p>
                    </div>

                    <div>
                        <h5>Współpraca</h5>
                        <p>Łączymy pokolenia (poprzez mentoring!), technologie i medycynę. </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;