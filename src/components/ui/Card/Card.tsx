import React from 'react';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export default function Card({ children, className }: Props) {
    return (
        <div className={`card bg-base-100 shadow-xl ${className ?? ''}`}>
            {children}
        </div>
    );
}
