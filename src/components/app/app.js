import React, { useState, useEffect } from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import navigation from '../../helpers/navigation';
import { connect } from 'react-redux';
import { setIsWidthMobile } from '../../actions';
import { dynamicComponentContext } from '../../utils/context';
import Notification from '../notification';

const App = ({common, setIsMobile}) => {
    const [mainComponent, setmainComponent] = useState(navigation[0]);
    console.log('common', common);
    const handleWindowResize = () => {
        setIsMobile(window.innerWidth);
    }

    const setComponent = (component) => {
        setmainComponent(component);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [])

    return(
        <>
            <dynamicComponentContext.Provider value={{mainComponent, setComponent}}>
                {common.notify?.isVisible ? <Notification /> : ''}
                <Header />
                <Main />
                <Footer />
            </dynamicComponentContext.Provider>
        </>
    )
}

const mapStateProps = (state) => {
    return {
        common: state.common
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsMobile: (isMobile) => dispatch(setIsWidthMobile(isMobile)),
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App);
