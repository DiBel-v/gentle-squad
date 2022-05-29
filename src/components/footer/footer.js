import React, {useContext} from 'react';

import { setNotification } from '../../actions';
import { connect } from 'react-redux';
import ServerBlock from '../server-block';
import DiscordBlock from '../discord-block';
import Store from '../store';
import sword from '../../media/images/sword.png';
import navigation from '../../helpers/navigation';
import {dynamicComponentContext} from '../../utils/context';

import './footer.sass';

const Footer = ({setNotification}) => {
    const {setComponent} = useContext(dynamicComponentContext);

    const rules = navigation.find((nav) => nav.title === 'Правила');
    const howToPlay = navigation.find((nav) => nav.title === 'Как играть');

    const changeOnStoreComponent = () => {
        setNotification({
            text: 'К сожалению, в данный момент, магазин не доступен.',
            isVisible: true,
            autoClose: false,
            status: 'warning'
        });
        // setComponent({component: Store, title: 'Магазин'});
    }

    return(
        <footer className="footer">
            <article className="footer__container">
                <section className="footer__content">
                    <div className="footer__join">
                        <h3 className="footer__title">Хотите присоединиться к веселью?</h3>
                        <ServerBlock isFooter={true} />
                        <DiscordBlock isFooter={true} />
                    </div>
                    <div className="footer__links">
                        <h3 className="footer__title">Полезные ссылки</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <img className="footer__item-icon" src={sword} />
                                <a onClick={() => setComponent(rules)} className="footer__item-text">Правила сервера</a>
                            </li>
                            <li className="footer__item">
                                <img className="footer__item-icon" src={sword} />
                                <a onClick={() => setComponent(howToPlay)} className="footer__item-text">Как попасть на сервер</a>
                            </li>
                            <li className="footer__item">
                                <img className="footer__item-icon" src={sword} />
                                <a className="footer__item-text" href="https://minecraft.fandom.com/" target="_blank">Справочник для майнкрафта</a>
                            </li>
                            <li className="footer__item">
                                <img className="footer__item-icon" src={sword} />
                                <a href="https://minecraftrating.ru/" target="_blank" className="footer__item-text">Проголосуйте за нас</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__support">
                        <h3 className="footer__title">Поддержка Gentle squad</h3>
                        <p className="footer__info">
                            Получайте потрясающие награды, поддерживая Gentle squad
                        </p>
                        <button onClick={() => changeOnStoreComponent()} className="footer__shop">
                            За покупками
                        </button>
                    </div>
                </section>
                <section className="footer__subfooter">
                    <div className="footer__rights">
                        <p className="footer__copyrights">© Gentle squad {new Date().getFullYear()}. Все права защищены.</p>
                        <p className="footer__copyrights">Мы не связаны с Mojang Studios.</p>
                    </div>
                    <div className="footer__developed">
                        Developed by HiAmid
                    </div>
                </section>
            </article>
        </footer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNotification: (payload) => dispatch(setNotification(payload))
    }
}

const mapStateToProps = (state) => {
    return {
        common: state.common
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
