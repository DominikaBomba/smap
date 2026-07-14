import { Link, useParams } from "react-router-dom";
import { events } from "./event";
import "./EventPage.css";

function EventPage() {
    const { eventId } = useParams();
    const event = events[eventId];

    if (!event) {
        return (
            <main className="eventPage">
                <h1>Nie znaleziono wydarzenia</h1>
                <Link to="/aboutUs" className="backLink">
                    ← Wróć na stronę główną
                </Link>
            </main>
        );
    }

    return (
        <main className="eventPage">
            <Link to="/aboutUs" className="backLink">
                ← Wróć
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