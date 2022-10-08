interface Props {
    className?: string;
    children?: React.ReactNode;
}

export default function CardTitle({ children, className }: Props) {
    return <h2 className={`card-title ${className || ''}`}>{children}</h2>;
}
