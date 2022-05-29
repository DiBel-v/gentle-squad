import React, { useContext, useState } from 'react';

import { setNotification } from '../../actions';
import navigation from '../../helpers/navigation';
import { connect } from 'react-redux';
import Store from '../store';
import Discord from '../../media/svg/discord-icon.svg';
import CartGold from '../../media/svg/cart-gold.svg';
import Copy from '../../media/svg/copy-open.svg';

import { dynamicComponentContext } from '../../utils/context';

import './navigate.sass';
import reactDom from 'react-dom';

const Navigate = ({common, setNotification}) => {
    const [isMenuOpened, setMenuOpened] = useState(false);
    const {mainComponent, setComponent} = useContext(dynamicComponentContext);

    const navListPc = () => {
        return navigation.map((nav) => {
            return(
                <li key={nav.title}
                    className={`navigate__list-item ${nav.title === mainComponent.title ? 'navigate__list-item_active' : ''}`}
                    onClick={() => setComponent(nav)}
                >
                    <a className="navigate__list-link">{nav.title}</a>
                </li>
            )             
        })
    }

    const openMobileMenu = () => {
        if (common.isMobile) {
            setMenuOpened(!isMenuOpened)
        }
    }

    const mobileMenu = () => (
        <div className="navigate__mobile-menu" >
            <div className={`navigate__mobile-icon-container ${isMenuOpened ? 'navigate__mobile-icon-container_is_open' : ''}`}>
                <div className="navigate__mobile-menu-row"></div>
            </div>
            { isMenuOpened ?
                <nav className="navigate__mobile-navigation">
                    <ul className="navigate__mobile-list">
                        {navigation.map((nav) => {
                            return(
                                <li key={nav.title}
                                    className={`navigate__mobile-item ${nav.title === mainComponent.title ? 'navigate__mobile-item_active' : ''}`}
                                    onClick={() => setComponent(nav)}
                                >
                                    <a className="navigate__mobile-link">{nav.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                : ''
            }
        </div>
    );

    const changeOnStoreComponent = () => {
        setNotification({
            text: 'К сожалению, в данный момент, магазин не доступен.',
            isVisible: true,
            autoClose: false,
            status: 'warning'
        });
        // setComponent({component: Store, title: 'Магазин'});
    }

    const copyIp = () => {
        setNotification({
            text: 'Скопировано',
            isVisible: true,
            autoClose: true,
            status: 'info'
        });
    }

    return (
        <article className="navigate">
            <nav className="navigate__container" onClick={() => openMobileMenu()}>
                { !common.isMobile ? 
                    <ul className="navigate__list">
                        {navListPc()}
                    </ul> : mobileMenu()
                }
            </nav>
            {common.isMobile ? 
                <button className="navigate__copy-ip" onClick={() => copyIp()}>IP<Copy className="navigate__copy-icon" /></button>
                : ''
            }
            {common.isMobile ? 
                <a className="navigate__discord-container">
                    <Discord className="navigate__discord-icon" />
                </a> : ''
            }
            
            <div className="navigate__store-container">
                <button className="navigate__store-button" onClick={() => changeOnStoreComponent()}>
                    { common.isMobile ? <CartGold className="navigate__cart-icon" /> : 'Магазин'}
                </button>
            </div>
        </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigate);
