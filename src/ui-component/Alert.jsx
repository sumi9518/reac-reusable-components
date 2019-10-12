import React from 'react';
import  propTypes from 'prop-types';

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
           {props.message ? props.message : props.children}
        </div>
    );
};
Alert.propTypes = {
    type: propTypes.string.isRequired,
    message: propTypes.string
}
Alert.defaultProps={
    message: "deafult message"
}

export default Alert;