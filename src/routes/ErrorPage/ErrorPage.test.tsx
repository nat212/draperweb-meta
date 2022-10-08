import { act, render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello, world!</div>,
        errorElement: <ErrorPage />,
    },
]);

describe('ErrorPage', () => {
    it('should render', async () => {
        render(<RouterProvider router={router} />);
        act(() => {
            router.navigate('/404');
        });
        expect(screen.getByText('Oops!')).toBeInTheDocument();
    });
});
