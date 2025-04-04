import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Categories } from '../categories';
import userEvent from '@testing-library/user-event';

describe('Categories', () => {
  it('должен рендерить кнопки и выбирать категорию', async () => {
    const mocks = [
      {
        id: '1',
        name: 'Phones',
        created_at: '2023-03-09T23:55:09.749Z',
      },
      {
        id: '2',
        name: 'Laptops',
        created_at: '2023-03-09T23:55:09.749Z',
      },
    ];

    const handleChange = vi.fn();

    render(<Categories items={mocks} isLoading={false} onChange={handleChange} />);

    const buttons = screen.getAllByTestId('category');
    expect(buttons).toHaveLength(2);

    const button = screen.getByText('Phones');
    await userEvent.click(button);

    expect(handleChange).toHaveBeenCalledWith({ category: '1' });

    expect(buttons[0]).toHaveTextContent('Phones');
    expect(buttons[1]).toHaveTextContent('Laptops');
  });
});
