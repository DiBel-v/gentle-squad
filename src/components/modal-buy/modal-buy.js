import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { clearCart, appendProductToCart, removeOneProductFromCart } from '../../actions';
import cookie from '../../media/images/cookie.png';
import './modal-buy.sass';

const ModalBuy = ({closeModal, clearCurrentCart, cart, appendProductToCart, removeOneProductFromCart}) => {
    const [isConfirmModalOpened, toggleConfirmModalOrBuy] = useState(true);

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            clearCurrentCart();
            closeModal();
        }
    };

    const buyOrConfirm = () => {
        if (isConfirmModalOpened) {
            toggleConfirmModalOrBuy(false);
        } else {
            closeModal();
        }
    }

    const closeOrBack = () => {
        if (isConfirmModalOpened) {
            closeModal();
        } else {
            toggleConfirmModalOrBuy(true);
        }
    }

    const confirmModal = (
        <>
            <div className="modal-buy__form-field">
                <label htmlFor="nickname">Введите свой никнейм на сервере:</label>
                <input
                    placeholder="YourNickname"
                    name="nickname"
                    id="nickname"
                    className="modal-buy__nickname" 
                />
            </div>
        </>
    )

    const confirmBuy = (
        <div className="modal-buy__cart-item-block">
            <img src={cookie} className="modal-buy__cookie-img" />
            <div className="modal-buy__amount-block">
                <button className="modal-buy__count-button" onClick={() => removeOneProductFromCart()}>-</button>
                <span className="modal-buy__count-text">{cart.orderTotal}</span>
                <button className="modal-buy__count-button" onClick={() => appendProductToCart()}>+</button>
            </div>
            <span className="modal-buy__amount-buns">Количество плюшек: {cart.bunAmount}</span>
        </div>
    )

    return ReactDOM.createPortal(
        <div className="modal-buy" onClick={handleClickOutside}>
            <section className="modal-buy__content">
                <h1 className="modal-buy__head">Подтвердите покупку</h1>
                <button className="modal-buy__btn-close" onClick={() => closeModal()}>
                    <div className="modal-buy__close" />
                </button>
                { isConfirmModalOpened ? confirmModal : confirmBuy }
                <div className="modal-buy__navigation">
                    <button className="modal-buy__btn" onClick={() => buyOrConfirm()}>{ isConfirmModalOpened ? 'Подтвердить' : 'Купить' }</button>
                    <button className="modal-buy__btn" onClick={() => closeOrBack()}>{ isConfirmModalOpened ? 'Отменить' : 'Назад' }</button>
                </div>
            </section>
        </div>
    , document.getElementById("root"));
}

const mapStateProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentCart: () => dispatch(clearCart()),
        appendProductToCart: () => dispatch(appendProductToCart()),
        removeOneProductFromCart: () => dispatch(removeOneProductFromCart())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(ModalBuy);
