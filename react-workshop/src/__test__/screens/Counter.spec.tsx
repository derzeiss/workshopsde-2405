import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { CounterScreen } from '../../screens/CounterScreen';

describe('CounterScreen', () => {
  it('should show zero initially', () => {
    render(<CounterScreen />);
    expect(screen.getByText('0')).toBeVisible();
  });

  it('should be possible to increase the counter', async () => {
    const user = userEvent.setup();

    render(<CounterScreen />);
    await user.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeVisible();
  });

  it('should be possible to decrease the counter', async () => {
    const user = userEvent.setup();

    render(<CounterScreen />);
    await user.click(screen.getByText('-'));
    expect(screen.getByText('-1')).toBeVisible();
  });

  it('should be possible to reset the counter', async () => {
    const user = userEvent.setup();

    render(<CounterScreen />);
    await user.click(screen.getByText('+'));
    await user.click(screen.getByText('Reset'));
    expect(screen.getByText('0')).toBeVisible();
  });
});
