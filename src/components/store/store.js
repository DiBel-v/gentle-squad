import React, { useState } from 'react';
import './store.sass';
import cookie from '../../media/images/cookie.png';
import Cart from '../../media/svg/cart-gold.svg';
import ModalBuy from '../modal-buy';
import { connect } from 'react-redux';
import { setProductToCart } from '../../actions';

const availableBuns = [
    {
        img: cookie,
        amount: 10,
        title: `10 плюшек`
    },
    {
        img: cookie,
        amount: 25,
        title: `25 плюшек`
    },
    {
        img: cookie,
        amount: 50,
        title: `50 плюшек`
    },
    {
        img: cookie,
        amount: 100,
        title: `100 плюшек (+10 плюшек бонусом)`
    }
];
const Store = ({setProductToCart}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const setBunsToCart = (bun) => {
        setProductToCart(bun)
        setIsModalOpened(true);
    };

    return (
        <section className="store">
            <h1 className="store__head">Магазин</h1>
            <article className="store__container">
                <h5 className="store__count">Выберите количество плюшек:</h5>
                <section className="store__content">
                    {
                        availableBuns.map((bun) => {
                            return (
                                <div className="store__choose" key={bun.amount}>
                                    <img className="store__choose-img" src={bun.img} />
                                    <div className="store__choose-description">
                                        <span className="store__choose-count">{bun.title}</span>
                                        <span className="store__choose-pay">{bun.amount} рублей</span>
                                    </div>
                                    <button className="store__buy" onClick={() => setBunsToCart(bun)}>
                                        <Cart className="store__cart-img" />
                                        Купить
                                    </button>
                                </div>
                            )
                        })
                    }
                </section>
            </article>
            { isModalOpened ? <ModalBuy closeModal={() => setIsModalOpened(false)}/> : '' }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductToCart: (product) => dispatch(setProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
