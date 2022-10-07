import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
    it('should render', () => {
        render(<ErrorPage />);
        expect(screen.getByText('Oops!')).toBeInTheDocument();
    });
});
