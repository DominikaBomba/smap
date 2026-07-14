import { useState } from 'react'
import './App.css'
import questions from './questions.json'

function App() {
    const [query, setQuery] = useState('')

    const search = query.toLowerCase().trim()

    const filtered = questions.filter(item =>
        search === '' ||
        item.question.toLowerCase().includes(search) ||
        item.answer.toLowerCase().includes(search)
    )

    return (
        <main className="faq">
            <h1>Wyszukiwarka <em>pytań</em></h1>

            <input
                type="text"
                className="faqSearch"
                placeholder="Wpisz, czego szukasz…"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <p className="faqCount">
                {filtered.length} z {questions.length} pytań
            </p>

            <div className="faqResults">
                {filtered.length === 0 ? (
                    <p className="faqEmpty">
                        Brak pytań pasujących do „{query}”. Spróbuj innego słowa.
                    </p>
                ) : (
                    filtered.map(item => (
                        <div className="faqItem" key={item.id}>
                            <div className="faqItemHeader">
                                <h3>{item.question}</h3>
                                <span className="faqCategory">{item.category}</span>
                            </div>
                            <p>{item.answer}</p>
                        </div>
                    ))
                )}
            </div>
        </main>
    )
}

export default App