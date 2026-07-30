import hbaImg from "./assets/hba3.jpg";
import gfr from "./assets/summit.png";
import konferencja from "./assets/konferencja.png";
import smicoztego from "./assets/smicoztego.png";

/* Obrazy przypisane do wydarzeń — teksty (tag, title, short, full, alt)
   znajdują się w plikach tłumaczeń: src/i18n/locales/{pl,en}.json pod kluczem "events". */
export const eventImages = {
    ptpn: konferencja,
    gfr: gfr,
    hba: hbaImg,
    smicoztego: smicoztego,
};

/* Buduje pełną listę wydarzeń, łącząc obrazy z przetłumaczonym tekstem
   pobranym z i18n (t('events', { returnObjects: true })). */
export function getEvents(translatedEvents) {
    const events = {};
    for (const slug of Object.keys(eventImages)) {
        const content = translatedEvents?.[slug] || {};
        events[slug] = {
            ...content,
            image: eventImages[slug],
        };
    }
    return events;
}
