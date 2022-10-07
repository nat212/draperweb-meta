import React from 'react';
import Header from './Header';

interface Props {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main role="main">{children}</main>
        </>
    );
}

export default Layout;
