const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

const setProductToCart = (item) => {
    return {
        type: 'SET_PRODUCT_IN_CART',
        payload: item
    }
}

const appendProductToCart = () => {
    return {
        type: 'PRODUCT_ADD_TO_CART'
    }
}

const removeOneProductFromCart = () => {
    return {
        type: 'PRODUCT_REMOVE_FROM_CART'
    }
}

const setIsWidthMobile = (innerWidth) => {
    return {
        type: 'SET_IS_MOBILE',
        payload: innerWidth
    }
}

const setNotification = (payload) => {
    return {
        type: 'SET_NOTIFICATION',
        payload
    }
}

export {
    clearCart,
    setProductToCart,
    appendProductToCart,
    removeOneProductFromCart,
    setIsWidthMobile,
    setNotification
}
