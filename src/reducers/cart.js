const setItem = (item) => {
    return {
        cartItem: item,
        orderTotal: 1,
        totalPrice: item.price,
        bunAmount: item.amount === 100 ? 110 : item.amount
    }
};

const updateOrder = (state, quantity) => {
    let newOrderTotal = state.cart.orderTotal;
    let newTotalPrice = state.cart.totalPrice;
    let newBunAmount = state.cart.bunAmount;
    if (state.cart.orderTotal + quantity >= 0) {
        newOrderTotal = state.cart.orderTotal + quantity;
        newTotalPrice = state.cart.totalPrice + quantity * state.cart.cartItem.amount;
        newBunAmount = newOrderTotal * (state.cart.cartItem.amount === 100 ? 110 : state.cart.cartItem.amount);
    }
    return {
        cartItem: state.cart.cartItem,
        orderTotal: newOrderTotal,
        totalPrice: newTotalPrice,
        bunAmount: newBunAmount
    }
}

const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItem: null,
            orderTotal: 0,
            totalPrice: 0,
            bunAmount: 0
        }
    }

    switch(action.type) {
        case 'SET_PRODUCT_IN_CART':
            return setItem(action.payload);
        case 'PRODUCT_ADD_TO_CART':
            return updateOrder(state, 1);
        case 'PRODUCT_REMOVE_FROM_CART':
            return updateOrder(state, -1);
        case 'CLEAR_CART':
            return {
                cartList: null,
                orderTotal: 0,
                totalPrice: 0,
                bunAmount: 0
            }
        default:
            return state.cart;
    }
}

export default updateCart;
