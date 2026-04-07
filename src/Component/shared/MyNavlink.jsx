import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({to, children}) => {
    return (
        <div>
            <NavLink to={to}
                className={({ isActive }) =>
                    `${isActive ? "text-sm font-medium text-purple-600 border-b border-purple-500" : "text-sm font-medium text-gray-600 hover:text-purple-600"}`
                }>
                {children}
            </NavLink>
        </div>
    );
};

export default MyNavlink;