import React from 'react';
import cn from 'classnames';

interface Props {
    children?: React.ReactNode;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    theme?:
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger';
}

export default function Button({
    type = 'button',
    className,
    onClick,
    children,
    theme = 'primary',
}: Props) {
    const classes = cn('btn', className, `btn-${theme}`);
    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
};
