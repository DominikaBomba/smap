import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getEvents } from "./event";
import "./EventPage.css";

function EventPage() {
    const { t } = useTranslation();
    const { eventId } = useParams();
    const events = getEvents(t("events", { returnObjects: true }));
    const event = events[eventId];

    if (!event) {
        return (
            <main className="eventPage">
                <h1>{t("eventPage.notFound")}</h1>
                <Link to="/aboutUs" className="backLink">
                    {t("eventPage.backHome")}
                </Link>
            </main>
        );
    }

    return (
        <main className="eventPage">
            <Link to="/aboutUs" className="backLink">
                {t("eventPage.back")}
            </Link>

            <img src={event.image} alt={event.alt} />

            <h1>{event.title}</h1>

            {event.full.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </main>
    );
}

export default EventPage;
