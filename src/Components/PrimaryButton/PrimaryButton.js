import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button
            className="btn btn-primary bg-gradient-to-r to-primary from-secondary">{children}
        </button>
    );
};

export default PrimaryButton;