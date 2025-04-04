import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { SearchResult } from '../search-result';

import { TestProviders } from '@/shared';
import { mockProducts } from './mocks';

describe('SearchResult', () => {
  let setIsFocused: Mock;

  beforeEach(() => {
    setIsFocused = vi.fn();
  });

  it('должен корректно рендериться', () => {
    const isFocused = true;
    render(
      <TestProviders
        component={
          <SearchResult isFocused={isFocused} setIsFocused={setIsFocused} items={mockProducts} />
        }
      />,
    );

    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByText(mockProducts[0].products.name)).toBeInTheDocument();
  });

  it('должен возвращать undefined если items undefined', () => {
    const isFocused = true;
    const items = undefined;

    render(
      <TestProviders
        component={<SearchResult isFocused={isFocused} setIsFocused={setIsFocused} items={items} />}
      />,
    );
    const results = screen.queryByTestId('results');
    expect(results).toBeNull();
  });

  it('должен возвращать undefined если isFocused false', () => {
    const isFocused = false;

    render(
      <TestProviders
        component={
          <SearchResult isFocused={isFocused} setIsFocused={setIsFocused} items={mockProducts} />
        }
      />,
    );
    const results = screen.queryByTestId('results');
    expect(results).toBeNull();
  });

  it('должен возвращать заглушку если ничего не найдено', () => {
    const isFocused = true;
    render(
      <TestProviders
        component={<SearchResult isFocused={isFocused} setIsFocused={setIsFocused} items={[]} />}
      />,
    );

    expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
  });
});
