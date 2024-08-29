import React from 'react';

export default function Button ({label, onClick, styleType='primary',...props}){
    return (
        <button className={`button $ {styleType}`}
                onClick={onClick}
            {...props}>{label}</button>
    );
}
