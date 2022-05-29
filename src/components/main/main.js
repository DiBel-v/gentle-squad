import React, { useContext } from 'react';
import { dynamicComponentContext } from '../../utils/context';

import './main.sass';

const Main = () => {
    const {mainComponent} = useContext(dynamicComponentContext);

    return(
        <main className="main">
            <section className="main__container">
                <div className="main__container-block">
                    <mainComponent.component />
                </div>
            </section>
        </main>
    )
}

export default Main;
