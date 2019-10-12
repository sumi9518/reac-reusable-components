import React from 'react';
import  propTypes from 'prop-types';

const Alert = (props) => {
    return (
        <div>
            {
                props.show &&
                <div className={`alert alert-${props.type}`} role="alert">
                    {props.message ? props.message : props.children}
                </div>
            }
        </div>
    );
};
Alert.propTypes = {
    type: propTypes.string.isRequired,
    message: propTypes.string,
    show: propTypes.bool
}
Alert.defaultProps={
    type:"primary",
    message: "deafult message",
    show: true
}

export default Alert;