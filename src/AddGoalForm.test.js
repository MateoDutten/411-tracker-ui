import { render, screen } from '@testing-library/react';
import AddGoalForm from './AddGoalForm';

describe('AddGoalForm', () => {
  test('renders AddGoalForm component without crashing', () => {
    render(<AddGoalForm />);
  });

  test('renders form fields', () => {
    render(<AddGoalForm />);
    const goalInput = screen.getByLabelText(/Goal/i);
    const timeframeInput = screen.getByLabelText(/Timeframe/i);
    const dateInput = screen.getByLabelText(/date/i);
    expect(goalInput).toBeInTheDocument();
    expect(timeframeInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<AddGoalForm />);
    const submitButton = screen.getByRole('button', { name: /Save Goal/i });
    expect(submitButton).toBeInTheDocument();
  });
});