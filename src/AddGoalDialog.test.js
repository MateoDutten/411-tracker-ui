import { render, screen, fireEvent } from '@testing-library/react';
import AddGoalDialog from './AddGoalDialog';

describe('AddGoalDialog', () => {
  it('should render AddGoalForm when open prop is true', () => {
    render(<AddGoalDialog open={true} />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });

  it('should not render AddGoalForm when open prop is false', () => {
    render(<AddGoalDialog open={false} />);
    const formElement = screen.queryByRole('form');
    expect(formElement).not.toBeInTheDocument();
  });

  it('should call onClose prop when dialog is closed', () => {
    const onClose = jest.fn();
    render(<AddGoalDialog open={true} onClose={onClose} />);
    const dialogElement = screen.getByRole('dialog');
    fireEvent.keyDown(dialogElement, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});