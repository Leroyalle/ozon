import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { TestComponent } from './test-component';
import { render, screen } from '@testing-library/react';

describe('useClickOutside', () => {
  it('вызывает callback при клике вне элемента', async () => {
    const handleClickOutside = vi.fn();
    render(<TestComponent onClickOutside={handleClickOutside} />);

    const outsideElement = screen.getByTestId('outside');
    await userEvent.click(outsideElement);
    expect(handleClickOutside).toHaveBeenCalledTimes(1);
  });

  it('не вызывает callback при клике внутри элемента', async () => {
    const handleClickOutside = vi.fn();
    render(<TestComponent onClickOutside={handleClickOutside} />);

    const insideElement = screen.getByTestId('inside');
    await userEvent.click(insideElement);
    expect(handleClickOutside).not.toHaveBeenCalled();
  });

  it('удаляет слушатель при размонтировании', () => {
    const handleClickOutside = vi.fn();
    const { unmount } = render(<TestComponent onClickOutside={handleClickOutside} />);

    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
});
