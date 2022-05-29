import React from 'react';
import bright from '../../media/images/bright.jpg';
import brown from '../../media/images/brown.jpg';
import './contacts.sass';

const Contacts = () => {
    return(
        <section className="contacts">
            <h1 className="contacts__title">Наша команда</h1>
            <article className="contacts__container">
                <div className="contacts__person">
                    <h3 className="contacts__job">Администратор и мэнеджер</h3>
                    <h4 className="contacts__name">Nickname</h4>
                    <img className="contacts__avatar" src={brown} />
                    <div className="contacts__connect">
                        <span className="contacts__email">name@mail.com</span>
                        <span className="contacts__discord">@discordCh</span>
                    </div>
                </div>
                <div className="contacts__person">
                    <h3 className="contacts__job contacts__job_dev">Разработчик</h3>
                    <h4 className="contacts__name contacts__name_dev">Nickname</h4>
                    <img className="contacts__avatar"  src={bright} />
                    <div className="contacts__connect">
                        <span className="contacts__email">name@mail.com</span>
                        <span className="contacts__discord">@discordCh</span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Contacts;
