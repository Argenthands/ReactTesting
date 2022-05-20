import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Note } from './Note';

test('renders content', () => {
    const note = {
        content: 'this is a test to know if the card is rendering',
        important: true,
    }
    const viewComponent = render(<Note note={Note} />);
    console.log(viewComponent)
})