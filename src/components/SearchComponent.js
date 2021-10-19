import React from 'react';

export const SearchComponent = () => {
    return (
        <div className="input-group input-group-lg">
            <span className="input-group-text">Icono de busqueda</span>
            <input type="text" className="form-control" autoComplete="off" placeholder="Search your hero or villain..." />
        </div>
    );
}
