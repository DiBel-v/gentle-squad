import React from 'react';
import './rules.sass';

const Rules = () => {
    return(
        <section className="rules">
            <h1 className="rules__title">Правила сервера</h1>
            <article className="rules__content">
                <p className="rules__info">
                    Подключаясь к Gentle squad, вы соглашаетесь со всеми приведенными ниже правилами.
                    Gentle squad стремится быть приятной и безопасной средой для всех членов нашего сообщества. 
                    Для этого мы сформулировали конкретные правила и соответствующие наказания, которые применяются нашими администраторамии. 
                    Если вы видите, что кто-то пренебрегает правилами, пожалуйста, отправьте отчет об игроке.
                </p>
                <p className="rules__info">
                    Нарушения сверх третьего будут рассматриваться с постоянным или долгосрочным ограничением со стороны сервера. 
                    Если вы считаете, что были наказаны по недействительной причине, мы должны попросить вас воздержаться от волнений и 
                    вместо этого подать апелляцию, написав одному из администраторов.
                </p>
                <p className="rules__info">
                    Ожидается, что игроки ознакомятся с правилами прежде, чем зайти на сервер;
                </p>
                <p className="rules__info">
                    <b>«Я не знал, что это было против правил»</b>
                </p>
                <p className="rules__info">
                    Это ни в коем случае не будет принято в качестве апелляции или оправдания.
                    Вы несете ответственность за свою учетную запись и, следовательно, за всех, 
                    кто может получить к ней доступ. Это означает, что любые наказания, примененные 
                    к вашей учетной записи, когда ее использует другой игрок, связаны с вашей учетной записью.
                </p>
                <h3 className="rules__headline">Что запрещенно делать на сервере:</h3>
                <ul className="rules__list">
                    <li className="rules__item"><span className="rules__item-text">Спам;</span></li>
                    <li className="rules__item"><span className="rules__item-text">Портить игровой процесс другим людям (grief);</span></li>
                    <li className="rules__item"><span className="rules__item-text">Мошенничество;</span></li>
                    <li className="rules__item"><span className="rules__item-text">Использование ботов;</span></li>
                    <li className="rules__item"><span className="rules__item-text">Использование запрещенного ПО и модификаций.</span></li>
                </ul>
            </article>
        </section>
    )
}

export default Rules;
