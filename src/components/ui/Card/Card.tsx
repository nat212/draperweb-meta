import React from 'react'

interface Props {
    className?: string
    children?: React.ReactNode
}

export default function Card({ children, className }: Props) {
    return <div className={`card glass shadow-xl ${className ?? ''}`}>{children}</div>
}
