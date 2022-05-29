import updateCart from './cart';
import updateCommon from './common';

const reducer = (state, action) => {
    return {
        cart: updateCart(state, action),
        common: updateCommon(state, action)
    }
}

export default reducer;
