import { render, screen } from "@testing-library/react"


describe('<Confirmation>', () => {
    it('should render with dialog role', () => {
        render(<Confirmation />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});