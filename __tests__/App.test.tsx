import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

it('renders LoginScreen when not logged in', async () => {
  const { getByText } = render(<App />);

  await waitFor(() => {
    expect(getByText('Log In')).toBeTruthy();
  });
});
