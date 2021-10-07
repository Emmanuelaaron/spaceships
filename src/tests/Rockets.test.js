import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

describe('Rockets component', () => {
  describe('Use Jest snapshots to test the Rockets component', () => {
    it('renders Rockets component as expected', async () => {
      const RocketsComponent = render(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );

      expect(RocketsComponent.asFragment()).toMatchSnapshot();
    });
  });
});
