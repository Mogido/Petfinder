import React from 'react';
import './pet-list-item.css';

const PetListItem = ( { pet } ) => {
    const { name, gender } = pet;
    return (
        <div>
            <span>{name}</span>
            <span>{gender}</span>
        </div>
    );
};

export default PetListItem;