import Heading from "./Heading"
import { render, screen } from '@testing-library/react';

test("is Workflow 2 in the file?", function() {
    render(<Heading />)
    const headerTitle = screen.getByText(/Workflow 2/);
    expect(headerTitle).toBeInTheDocument();
})