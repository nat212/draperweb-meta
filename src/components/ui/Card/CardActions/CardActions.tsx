import React from 'react'

interface Props {
    className?: string
    children?: React.ReactNode
}

export default function CardActions({ children, className }: Props) {
    return <div className={`card-actions ${className ?? ''}`}>{children}</div>
}
