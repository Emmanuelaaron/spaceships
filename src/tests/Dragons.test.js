import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Dragons from '../components/Dragons';

describe('Dragons component', () => {
  describe('Use Jest snapshots to test the Dragons component', () => {
    it('renders Dragons component as expected', async () => {
      const dragonsComponent = render(
        <Provider store={store}>
          <Dragons />
        </Provider>,
      );

      expect(await screen.findAllByText('Reserve Dragon')).toBeTruthy();
      expect(dragonsComponent.asFragment()).toMatchSnapshot();
    });
  });
});
