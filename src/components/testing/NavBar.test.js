import TestRenderer from 'react-test-renderer';
import BrowserRouter from 'react-router-dom';
import NavBar from '../NavBar';

describe('test of nav bar component', () => {
  test('compare with snapshot', () => {
    const myRenderer = TestRenderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const TestComponent = myRenderer.toJSON();
    expect(TestComponent).toMatchSnapshot();
  });
});
