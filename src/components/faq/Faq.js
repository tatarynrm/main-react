import React, { useState } from 'react'

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            ques: "💰 Доставка безкоштовна?",
            answer: "Доставка є Безкоштовною. Мінімальна сума доставки складає 150 або 250 грн, в залежності від адреси доставки.",
            open: false
        },
        {
            ques: "💳 Чи можлива оплата карткою?",
            answer: "Так! Ви можете розрахуватися картою на сайті, або при отримані замовлення.",
            open: false
        },

        {
            ques: "🚀 Скільки чекати на доставку?",
            answer: "Доставка в зелену зону Львова – до 59 хвилин (в період з 10:00 до 20:00, в інший час 59 хвилин). Доставка в жовту зону – до 59 хвилин.",
            open: false
        },
        {
            ques: "⏰ Який у Вас графік роботи?",
            answer: "Ми працюємо цілодобово.",
            open: false
        },


        {
            ques: "🍕 В яких містах працює доставка піци LA П'ЄЦ?",
            answer: "Ми працюємо у Львові, Вінниці, Івано-Франківську, Харкові, Стрию, Хмельницькому, Рівному, Чернівцях, Черкасах та Дрогобичі .",
            open: false
        }
    ]);
    const toggleFAQ = (index) => {
        setFaq(faq.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }
            return faq;
        }))
    }

    return (
        <div className='faqs'>
            <h2 className='page-title'>Найпоширеніші запитання</h2>
            {faq.map((faq, i) => <div onClick={() => toggleFAQ(i)} key={i} className={'faq ' + (faq.open ? 'open' : '')}>
                <div className="faq-question cu-p">
                    {faq.ques}
                </div>
                <div className="faq-answer">
                    {faq.answer}
                </div>
            </div>
            )}
        </div>
    )
}

export default Faq