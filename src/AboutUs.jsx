import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "./event";
import "./Aboutus.css";
import gfrLogo from "./assets/gfr.png";
import rocheLogo from "./assets/roche_logo.png";
import human from "./assets/human2.png";


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
    return (
        <>
            <header>
                {/* lewa połowa: duże zdjęcie (wstaw swoje w src) */}
                <div className="heroImage">
                    <img src={human} alt={"zdjęcie zespołu projektu MSEARCH"} />
                </div>

                {/* prawa połowa: nagłówek + opis + przyciski */}
                <div className="heroContent">
                    <h1> SMap</h1>

                    <p className="intro">
                        Celem projektu jest pomoc pacjentom ze stwardnieniem rozsianym
                        poprzez etyczne wykorzystanie sztucznej inteligencji.
                    </p>

                    <div className="heroButtons">
                        <Link to="/" className="btnOutline">
                            Wyszukiwarka
                        </Link>
                        {/* podmień href, gdy raport będzie miał swój adres */}
                        <a href="#" className="btnFilled">
                            Zobacz raport
                        </a>
                    </div>
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

            <section className="reports">
                <h4>Co <em>tworzymy</em>?</h4>

                <div className="reportRow">
                    <h5>RAPORT</h5>
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
                        Analiza około 3000 zanonimizowanych komentarzy społeczności
                        SM: o czym pacjenci rozmawiają, czego szukają i co ich
                        niepokoi. Dostępna dla wybranych organizacji.
                    </div>
                </div>

                <div className="reportRow">
                    <h5>WYSZUKIWARKA</h5>
                    <div>
                        Zbiór prawdziwych pytań społeczności SM wraz z odpowiedziami,
                        w formie prostej wyszukiwarki. Dostępna dla pacjentów.
                    </div>
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

            <section className={"aboutMe"}>
                <h4> O mnie</h4>
                <p>
                    Nazywam się Dominika Bomba. Tworzę projekt, którego celem jest
                    wsparcie pacjentów ze stwardnieniem rozsianym poprzez etyczne
                    wykorzystanie sztucznej inteligencji. Na co dzień interesuję się
                    programowaniem, nowymi technologiami i AI.
                </p>
            </section>

            <section className={"values"}>
                <h4>Nasze <em>wartości</em></h4>
            </section>
        </>
    );
}

export default AboutUs;