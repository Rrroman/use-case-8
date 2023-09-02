import { fireEvent, screen } from '@testing-library/react';
import MessageForm from './MessageForm';
import { renderWithProviders } from '../../utils/test-utils';

describe('Message Form', () => {
  test('renders form', () => {
    renderWithProviders(<MessageForm />);

    const group = screen.getByRole('group', { name: 'Write message.' });
    expect(group).toBeInTheDocument();
  });

  test('Disables "Save" button if empty form', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(button).toBeDisabled();
  });

  test('Display "first name" error', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/First name:/i), {
      target: { value: 'aa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText('Name should have more than 3 characters.')
    ).toBeInTheDocument();
  });

  test('No error message for valid "first name"', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/First name:/i), {
      target: { value: 'aaa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.queryByText('Name should have more than 3 characters.')
    ).not.toBeInTheDocument();
  });

  test('Display "second name" error', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Second name:/i), {
      target: { value: 'aa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText('Second name should have more than 3 characters.')
    ).toBeInTheDocument();
  });

  test('No error message for valid "second name"', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Second name:/i), {
      target: { value: 'aaa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.queryByText('Second name should have more than 3 characters.')
    ).not.toBeInTheDocument();
  });

  test('Display "email" error', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: 'aa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText('Please recheck your email.')).toBeInTheDocument();
  });

  test('No error message for valid "email"', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: 'aaa@gmail.com' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.queryByText('Please recheck your email.')
    ).not.toBeInTheDocument();
  });

  test('Display "message" error', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Message:/i), {
      target: { value: 'aa' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText('Message should have at least 20 characters.')
    ).toBeInTheDocument();
  });

  test('Message with only spaces is not allowed', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Message:/i), {
      target: { value: '                               ' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText('Message should have at least 20 characters.')
    ).toBeInTheDocument();
  });

  test('Trims spaces', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Message:/i), {
      target: { value: '          aaa        aaa             ' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText('Message should have at least 20 characters.')
    ).toBeInTheDocument();
  });

  test('No error message for valid "message"', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/Message:/i), {
      target: { value: '12345678901234567890' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.queryByText('Message should have at least 20 characters.')
    ).not.toBeInTheDocument();
  });

  test('Valid message should be displayed in table', () => {
    renderWithProviders(<MessageForm />);

    const button = screen.getByRole('button', {
      name: 'Save',
    });

    fireEvent.change(screen.getByLabelText(/First name:/i), {
      target: { value: 'John' },
    });

    fireEvent.change(screen.getByLabelText(/Second name:/i), {
      target: { value: 'Doe' },
    });

    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: 'jhondoe@gmail.com' },
    });

    fireEvent.change(screen.getByLabelText(/Message:/i), {
      target: { value: 'Hello World! I am John Doe.' },
    });

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(button).toBeEnabled();
  });
});
