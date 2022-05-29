import React, { useState } from 'react';
import Copy from '../../media/svg/copy-open.svg';
import { connect } from 'react-redux';
import './how-to-play.sass';

const HowToPlay = ({common}) => {

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('gentle.squad-server.org');
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    }

    return(
        <section className="how-to-play">
            <h1 className="how-to-play__head">Как играть</h1>
            <article className="how-to-play__info-container">
                <div className="how-to-play__instruction">
                    <h3 className="how-to-play__title">Инструкция</h3>
                    <p className="how-to-play__description">
                        Присоединяйтесь к Gentle squad прямо сейчас, чтобы играть с 
                        другими людьми в любом из наших классных модов
                    </p>
                    <ul className="how-to-play__list">
                        <li className="how-to-play__list-item">
                            <div className="how-to-play__step">#1</div>
                            <p className="how-to-play__step-info">Запустите <span className="how-to-play__important">Minecraft</span> и нажмите кнопку <span className="how-to-play__important">Мультиплеер</span></p>
                        </li>
                        <li className="how-to-play__list-item">
                            <div className="how-to-play__step">#2</div>
                            <p className="how-to-play__step-info">Нажмите на кнопку <span className="how-to-play__important">Добавить сервер </span>
                            и введите любое наименование, которое хотите, в блоке <span className="how-to-play__important">Имя сервера</span></p>
                        </li>
                        <li className="how-to-play__list-item">
                            <div className="how-to-play__step">#3</div>
                            <p className="how-to-play__step-info">Скопируйте IP сервера нажав на <span className="how-to-play__important">Нажмите, чтобы скопировать IP</span>,
                             затем вставьте скопированный адрес в поле <span className="how-to-play__important">Адрес сервера</span></p>
                        </li>
                    </ul>
                </div>
                <div className="how-to-play__copy-container">
                    <div className="how-to-play__copy-block">
                        <span className="how-to-play__copy">
                            gentle.squad-server.org
                        </span>
                    </div>
                    <button onClick={() => copyToClipboard()} className="how-to-play__button-copy">
                        <Copy className="how-to-play__icon-copy" />
                        Нажмите, чтобы скопировать IP
                    </button>
                    {
                        isCopied ?
                            <div className="how-to-play__copied">
                                IP адрес скопирован!
                            </div>
                            : ''
                    }
                    
                </div>
            </article>
            {!common.isMobile ? <div className="how-to-play__arrow"></div> : ''}
            <h1 className="how-to-play__congrats">Поздравляем, теперь ты готов присоединиться к Gentle squad!</h1>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        common: state.common
    }
}

export default connect(mapStateToProps)(HowToPlay);
