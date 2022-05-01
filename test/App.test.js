import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
    jest.useFakeTimers();
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBeGreaterThan(0);
    });
});