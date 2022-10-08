import React from 'react';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export default function CardBody({ children, className }: Props) {
    return <div className={`card-body ${className ?? ''}`}>{children}</div>;
}
