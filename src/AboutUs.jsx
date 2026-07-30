import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getEvents } from "./event";
import "./Aboutus.css";
import gfrLogo from "./assets/gfr.png";
import rocheLogo from "./assets/roche_logo.png";
import human from "./assets/bg1.png";
import march from './assets/march.jpeg';
import april from './assets/april.jpg';
import may from './assets/may.jpeg';
import june from './assets/june.jpeg';
import july from './assets/july.jpeg';
import dominika from './assets/dominika.jpg';
import paulina from './assets/paulina.png';



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
    const { t } = useTranslation();
    const [showContactInfo, setShowContactInfo] = useState(false);
    const events = getEvents(t("events", { returnObjects: true }));

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=download,lock,search"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
            <header>


                <div className="heroContent">
                    <div> <span className="heroEyebrow">{t("aboutUs.eyebrow")}</span></div>
                    <div>
                        <h1>{t("aboutUs.heading")}</h1>

                        <p className="intro">
                            {t("aboutUs.intro")}
                        </p>
                    </div>


                    <div> <h5 className="heroByline">{t("aboutUs.byline")}</h5> </div>
                </div>
            </header>

            {/* pasek statystyk i partnerów pod hero */}
            <section className="statsBar">
                <div className={"headerNumbers"}>
                    <div>
                        <CountUp end={4}/>
                        <div>{t("aboutUs.stats.months")}<br/> {t("aboutUs.stats.monthsLine2")}</div>
                    </div>

                    <div>
                        <CountUp end={13}/>
                        <div>{t("aboutUs.stats.experts")} <br/> {t("aboutUs.stats.expertsLine2")}</div>
                    </div>

                    <div>
                        <CountUp end={20} prefix="+"/>
                        <div> {t("aboutUs.stats.hours")}<br/> {t("aboutUs.stats.hoursLine2")}</div>
                    </div>

                    <div>
                        <CountUp end={2985} prefix="~"/>
                        <div>{t("aboutUs.stats.comments")}<br/> {t("aboutUs.stats.commentsLine2")}</div>
                    </div>
                </div>

                <p>
                    {t("aboutUs.partnersText")}
                </p>

                <div className={"partners"}>
                    <img src={gfrLogo} alt={t("aboutUs.partnerAlt1")}/>
                    <img src={rocheLogo} alt={t("aboutUs.partnerAlt2")}/>
                </div>
            </section>


            <section className="whatWeDo">
                <h4>{t("aboutUs.whatWeDo.headingPrefix")} <em>{t("aboutUs.whatWeDo.headingEm")}</em>:</h4>
                <div>
                    {Object.entries(events).map(([slug, event]) => (
                        <div id={slug} key={slug}>
                            <Link to={`/${slug}`}>
                                <img src={event.image} alt={event.alt}/>
                                <span className="cardTag">{event.tag}</span>
                                <h5>{event.title}</h5>
                                <div>{event.short}</div>
                                <span className="readMore">{t("aboutUs.whatWeDo.readMore")}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="reports">
                <h4>{t("aboutUs.reports.headingPrefix")} <em>{t("aboutUs.reports.headingEm")}</em>?</h4>

                <div className="reportRow">
                    <h5>{t("aboutUs.reports.report.label")}</h5>
                    <div>
                        <a href="./assets/" download="raport_Smap_june2026.pdf" aria-label={t("aboutUs.reports.report.downloadAriaLabel")}>
                            <span className="material-symbols-outlined">download</span>
                        </a>
                    </div>
                    <div>
                        <strong>
                            {t("aboutUs.reports.report.titleBold")}
                        </strong>{" "}
                        {t("aboutUs.reports.report.description")}
                    </div>
                </div>

                <div className="reportRow">
                    <h5>{t("aboutUs.reports.analysis.label")}</h5>
                    <div>
                        <button
                            type="button"
                            className="iconButton"
                            onClick={() => setShowContactInfo((prev) => !prev)}
                            aria-label={t("aboutUs.reports.analysis.ariaLabel")}
                        >
                            <span className="material-symbols-outlined">lock</span>
                        </button>
                        {showContactInfo && (
                            <p className="contactInfo">
                                {t("aboutUs.reports.analysis.contactInfo")}{" "}
                                <a href="mailto:kontakt@twojadomena.pl">
                                    ...
                                </a>
                            </p>
                        )}
                    </div>
                    <div>
                        {t("aboutUs.reports.analysis.description")}
                    </div>
                </div>

                <div className="reportRow">
                    <h5>{t("aboutUs.reports.search.label")}</h5>
                    <div>
                        <Link to="/.." aria-label={t("aboutUs.reports.search.ariaLabel")}>
                            <span className="material-symbols-outlined">search</span>
                        </Link>
                    </div>
                    <div>
                        {t("aboutUs.reports.search.description")}
                    </div>
                </div>
            </section>

            <section className={"aboutMe"}>
                <h4>{t("aboutUs.aboutMe.heading")}</h4>
                <div>
                    <div>
                        <div><h4>{t("aboutUs.aboutMe.person1Name")}</h4>  <img src={dominika} alt={t("aboutUs.aboutMe.photoAlt")}/></div>
                        <p>{t("aboutUs.aboutMe.person1Bio")}</p>

                    </div>
                    <div>
                        <div><h4>{t("aboutUs.aboutMe.person2Name")}</h4>  <img src={paulina} alt={t("aboutUs.aboutMe.photoAlt")}/></div>
                        <p>{t("aboutUs.aboutMe.person2Bio")}</p>

                    </div>

                </div>
            </section>

            <section className={"values"}>
                <h4>{t("aboutUs.values.headingPrefix")} <em>{t("aboutUs.values.headingEm")}</em></h4>

                <div>
                    <div>
                        <h5>{t("aboutUs.values.ethics.title")}</h5>
                        <p>{t("aboutUs.values.ethics.text")}</p>
                    </div>


                    <div>
                        <h5>{t("aboutUs.values.accessibility.title")}</h5>
                        <p>{t("aboutUs.values.accessibility.text")}</p>
                    </div>

                    <div>
                        <h5>{t("aboutUs.values.reliability.title")}</h5>
                        <p>{t("aboutUs.values.reliability.text")}</p>
                    </div>

                    <div>
                        <h5>{t("aboutUs.values.cooperation.title")}</h5>
                        <p>{t("aboutUs.values.cooperation.text")}</p>
                    </div>
                </div>
            </section>

            <section className="journey">
                <h4>{t("aboutUs.journey.heading")}</h4>

                <div className="timeline">
                    <div className="timelineTrack"></div>

                    <div className="timelineItem">
                        <div className="timelineDot"></div>
                        <div className="timelineCard">
                            <span className="journeyMonth">{t("aboutUs.journey.march.month")}</span>
                            <img src={march} alt={t("aboutUs.journey.march.alt")} className="journeyImg" />
                            <h5>{t("aboutUs.journey.march.title")}</h5>
                            <p>{t("aboutUs.journey.march.text")}</p>
                        </div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineDot"></div>
                        <div className="timelineCard">
                            <span className="journeyMonth">{t("aboutUs.journey.aprilMay.month")}</span>
                            <img src={april} alt={t("aboutUs.journey.aprilMay.alt")} className="journeyImg" />
                            <h5>{t("aboutUs.journey.aprilMay.title")}</h5>
                            <p>{t("aboutUs.journey.aprilMay.text")}</p>
                        </div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineDot"></div>
                        <div className="timelineCard">
                            <span className="journeyMonth">{t("aboutUs.journey.may.month")}</span>
                            <img src={may} alt={t("aboutUs.journey.may.alt")} className="journeyImg" />
                            <h5>{t("aboutUs.journey.may.title")}</h5>
                            <p>{t("aboutUs.journey.may.text")}</p>
                        </div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineDot"></div>
                        <div className="timelineCard">
                            <span className="journeyMonth">{t("aboutUs.journey.june.month")}</span>
                            <img src={june} alt={t("aboutUs.journey.june.alt")} className="journeyImg" />
                            <h5>{t("aboutUs.journey.june.title")}</h5>
                            <p>{t("aboutUs.journey.june.text")}</p>
                        </div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineDot"></div>
                        <div className="timelineCard">
                            <span className="journeyMonth">{t("aboutUs.journey.july.month")}</span>
                            <img src={july} alt={t("aboutUs.journey.july.alt")} className="journeyImg" />
                            <h5>{t("aboutUs.journey.july.title")}</h5>
                            <p>{t("aboutUs.journey.july.text")}</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}

export default AboutUs;
