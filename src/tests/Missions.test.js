import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

describe('Missions component', () => {
  describe('Use Jest snapshots to test the Missions component', () => {
    it('renders Missions component as expected', async () => {
      const missionsComponent = render(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );

      expect(await screen.findAllByText('Thaicom')).toBeTruthy();
      expect(missionsComponent.asFragment()).toMatchSnapshot();
    });
  });
});
