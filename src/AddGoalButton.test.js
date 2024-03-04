import { act, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddGoalButton from './AddGoalButton';

describe('AddGoalButton', () => {
  test('renders AddGoalButton component without crashing', () => {
    render(<AddGoalButton />);
  });

  test('renders AddGoalDialog when button is clicked', () => {
    render(<AddGoalButton />);
    const addButton = screen.getByRole('button');
    act(() => {
      userEvent.click(addButton);
    });
    const dialogElement = screen.getByRole('dialog');
    expect(dialogElement).toBeInTheDocument();
  });

});