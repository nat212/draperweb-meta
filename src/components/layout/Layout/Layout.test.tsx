import Layout from './Layout'
import { render, screen } from '@testing-library/react'

describe('Layout', () => {
    it('should render correctly', () => {
        render(<Layout>Hello, world!</Layout>)

        const world = screen.queryByText('Hello, world!')
        expect(world).toBeInTheDocument()
        expect(world).toHaveAttribute('role', 'main')
    })
})
