const MOBILE_MAX_WIDTH = 768;

const updateCommon = (state, action) => {
    const initialState = {
        isMobile: false,
        notify: {
            text: '',
            isVisible: false,
            autoClose: false,
            satus: 'warning'
        }
    }
    
    if (state === undefined) {
        return initialState;
    }

    switch(action.type) {
        case 'SET_IS_MOBILE':
            return {
                ...state.common,
                isMobile: action.payload <= MOBILE_MAX_WIDTH,
            };
        case 'SET_NOTIFICATION':
            return {
                ...state.common,
                notify: {...state.common.notify, ...action.payload}
            }
        default:
            return state.common;
    }
}

export default updateCommon;
