import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Card from '../Card';

test('renders content', () => { 
    const Card = {
        content: 'this is a test to know if the card is rendering',
        important: true,
    }
    const component = render(<Card content={Card.content} important={Card.important} />);
 })