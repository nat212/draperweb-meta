import { createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/Root';
import ErrorPage from '@/routes/ErrorPage';
import App from '@/App';
import React from 'react';
import Login from '@/routes/Login/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);
