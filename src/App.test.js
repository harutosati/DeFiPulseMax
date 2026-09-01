// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiPulseMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiPulseMax/i);
    expect(titleElement).toBeInTheDocument();
});
