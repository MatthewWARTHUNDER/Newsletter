import React from 'react';
import logomindtech from '../assets/logomindtech.svg';


export default function Navbar() {
    return (
        <nav className="w-full bg-blue-600 flex items-center justify-around py-4">
            <div className="flex items-center justify-between h-16 w-full ml-20 mx-auto">
                <img
                    src={logomindtech}
                    alt="Logomindtech"
                    className="h-15 w-auto"
                />



            </div>
        </nav>
    );
}