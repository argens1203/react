import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestableButton } from './testable-button';

// https://testing-library.com/docs/ecosystem-user-event/

describe('testable button', () => {
    it('', () => {
        render(<TestableButton />);
        const button = screen.getByText(/Click/i);
        userEvent.click(button);
        userEvent.unhover(button);

        expect(button).toHaveTextContent('Clicked 1 time(s)');
    });
});
