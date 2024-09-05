import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
    return (
        <div className="search-container">
            <span className="material-symbols-rounded text-base icon">search</span>
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
