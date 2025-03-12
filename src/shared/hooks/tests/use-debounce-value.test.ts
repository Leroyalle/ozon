import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDebounceValue } from '../use-debounce-value';

describe('UseSearchProducts', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('должен дебаунсить последующие запросы', () => {
    const { result, rerender } = renderHook(({ query, array }) => useDebounceValue(query, array), {
      initialProps: { query: 'initial', array: ['initial'] },
    });

    expect(result.current).toBe('initial');

    rerender({ query: 'updated', array: ['updated'] });

    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });
});
