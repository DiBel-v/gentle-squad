import React, { useEffect } from "react";
import { connect } from "react-redux"
import { setNotification } from '../../actions';
import './notification.sass';

const Notification = ({common, setNotification}) => {
    
    useEffect(() => {
        if (common.notify.autoClose) {
            setTimeout(() => setNotification({isVisible: false}), 3000);
        }
    }, [])

    return (
        <div className={`notification notification_${common.notify.status}`}>
            <div className="notification__text">{common.notify.text}</div>
            <button className="notification__close" onClick={() => setNotification({isVisible: false})}>X</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
