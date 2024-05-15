
import React, { useState } from 'react';

export const Shop = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
           
        </div>
    );
};
