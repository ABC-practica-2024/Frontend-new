import React from 'react';
import './Button.css';

export default function Button({ label, styleType }) {
    let className = '';

    if (styleType === 'auth') {
        className = 'button-auth';
    } else if (styleType === 'register') {
        className = 'button-register';
    }else if (styleType === 'sidebar') {
        className = 'button-sidebar';
    }

    return (
        <button className={className}>
            {label}
        </button>
    );
}
