import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('Testing NavBar component', () => {
  test('Snapshot testing', () => {
    const myRenderer = renderer.create(
      <Router>
        <NavBar />
      </Router>,
    );
    const testComponent = myRenderer.toJSON();
    expect(testComponent).toMatchSnapshot();
  });
});
