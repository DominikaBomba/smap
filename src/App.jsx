import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import questionsPl from './questions.pl.json'
import questionsEn from './questions.en.json'

function App() {
    const { t, i18n } = useTranslation()
    const [query, setQuery] = useState('')

    const questions = i18n.language === 'en' ? questionsEn : questionsPl

    const search = query.toLowerCase().trim()

    const filtered = questions.filter(item =>
        search === '' ||
        item.question.toLowerCase().includes(search) ||
        item.answer.toLowerCase().includes(search)
    )

    return (
        <main className="faq">
            <h1>{t('app.titlePrefix')} <em>{t('app.titleEm')}</em></h1>

            <input
                type="text"
                className="faqSearch"
                placeholder={t('app.searchPlaceholder')}
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <p className="faqCount">
                {t('app.countText', { filtered: filtered.length, total: questions.length })}
            </p>

            <div className="faqResults">
                {filtered.length === 0 ? (
                    <p className="faqEmpty">
                        {t('app.emptyResults', { query })}
                    </p>
                ) : (
                    filtered.map(item => (
                        <div className="faqItem" key={item.id}>
                            <div className="faqItemHeader">
                                <span className="faqCategory">{item.category}</span>
                                <h3>{item.question}</h3>


                                <div className="faqMeta">
                                    <div>{t('app.source', { linktitle: item.linktitle })}</div>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            className="faqLink"
                                            title={item.linktitle || item.question}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t('app.learnMore')} &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="faqContent">
                                <p className="faqAnswer">{item.answer}</p>

                                {item.embedUrl && (
                                    <div className="faqEmbedWrapper">
                                        <iframe
                                            src={item.embedUrl}
                                            title={t('app.previewTitle', { question: item.question })}
                                            scrolling="no"
                                            frameBorder="0"
                                            allowFullScreen={true}
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    )
}

export default App
