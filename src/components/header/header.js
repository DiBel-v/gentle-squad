import React from 'react';
import ServerBlock from '../server-block';
import DiscordBlock from '../discord-block';
import Navigate from '../navigate'
import { connect } from 'react-redux';

import './header.sass';

const Header = ({common}) => {
    return(
        <>
            <header className="header">
                <section className="header__container">
                    {
                        !common.isMobile ? 
                            <div className="header__conacts">
                                <ServerBlock />
                                <DiscordBlock />
                            </div>
                        : ''
                    }
                    
                    <div className="header__logo-container">
                        <h1 className="header__title">
                            Gentle <span className="header__word-blink">s</span>quad
                        </h1>
                    </div>
                    <Navigate />
                </section>
            </header>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return {
        common: state.common
    }
}

export default connect(mapStateToProps)(Header);
