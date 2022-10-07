import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
    it('should render correctly', () => {
        render(<Header />);

        expect(screen.queryByRole('navigation')).toBeInTheDocument();
    });
});
