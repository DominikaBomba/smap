/* Wszystkie wydarzenia w jednym miejscu.
   Klucz obiektu (np. "hba") to jednocześnie adres podstrony: /hba
   - short: krótki opis widoczny na karcie
   - full:  pełny opis na podstronie (każdy element tablicy = osobny akapit)
   Uwaga: w tekstach używamy cudzysłowów typograficznych „ ”,
   zwykły znak " zakończyłby string w JavaScripcie. */

export const events = {
    hba: {
        tag: "HBA Warsaw Branch",
        title: "the HBA",
        image: "",
        alt: "photo from the HBA conference",
        short:
            "Nasz projekt na spotkaniu „The Power of Mentoring” — o tym, co powstaje z połączenia mentoringu, współpracy i AI.",
        full: [
            "Podczas spotkania „The Power of Mentoring”, zorganizowanego przez warszawski oddział Healthcare Businesswomen's Association, siły połączyły Roche Polska, Fundacja Liderek Biznesu i Girls Future Ready.",
            "Zaprezentowałyśmy tam nasz projekt jako przykład tego, co powstaje z połączenia współpracy, mentoringu i sztucznej inteligencji. Pokazałyśmy, jak z relacji mentorskiej może narodzić się realne narzędzie wspierające pacjentów ze stwardnieniem rozsianym.",
        ],
    },

    smicoztego: {
        tag: "Konferencja pacjencka",
        title: "Konferencja „SM – i co z tego?”",
        image: "",
        alt: "photo from the SM - i co z tego? conference",
        short:
            "Dzień ekspercki i dni pacjenckie — słuchałyśmy na żywo pytań, które naprawdę zadają osoby z SM.",
        full: [
            "Dominika wzięła udział w dniu eksperckim oraz dniach pacjenckich Ogólnopolskiej Konferencji „SM – i co z tego?” — jednego z największych w Polsce wydarzeń poświęconych stwardnieniu rozsianemu.",
            "To była okazja, by usłyszeć na żywo, jakie pytania i problemy naprawdę nurtują pacjentów — od diagnozy, przez leczenie, po codzienność z SM. Zebrane wnioski zasiliły naszą wyszukiwarkę pytań i pomogły lepiej zrozumieć potrzeby społeczności.",
        ],
    },

    gfr: {
        tag: "Finał HerStory",
        title: "the Girls Future Ready Final",
        image: "",
        alt: "photo from the gfr conference",
        short:
            "Warsztaty o technologii w medycynie na finale programu HerStory — na przykładzie naszego projektu.",
        full: [
            "Podczas finału programu HerStory fundacji Girls Future Ready poprowadzimy warsztaty o technologii w medycynie — na przykładzie naszego projektu.",
            "Skupimy się na sztucznej inteligencji: pokażemy uczestniczkom, jak przejść od pomysłu do działającego narzędzia i jak robić to w sposób etyczny. To także okazja, by opowiedzieć historię mentoringu, z którego ten projekt wyrósł.",
        ],
    },

    ptpn: {
        tag: "PTPN",
        title: "Ogólnopolska Konferencja Pielęgniarek Neurologicznych",
        image: "",
        alt: "photo from the nursing conference",
        short:
            "Wystąpienie o etycznym korzystaniu z LLM-ów oraz prywatności danych pacjentów.",
        full: [
            "Na Ogólnopolskiej Konferencji Pielęgniarek Neurologicznych Dominika opowie o etycznym i prawidłowym korzystaniu z dużych modeli językowych (LLM) w opiece nad pacjentem.",
            "W centrum wystąpienia znajdą się prywatność i bezpieczeństwo danych — czyli to, o czym trzeba pamiętać, zanim jakiekolwiek informacje o pacjencie trafią do narzędzia AI. To ważny temat w środowisku, które na co dzień jest najbliżej osób z SM.",
        ],
    },
};