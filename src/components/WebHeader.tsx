import React from 'react';
import { Link } from 'gatsby';

export const WebHeader = () => {
    return (
        <header className="web-header">
            <Link to='/' className="header-name">
                <span>JoaoFonseca.dev</span>
            </Link>
        </header>
    );
}