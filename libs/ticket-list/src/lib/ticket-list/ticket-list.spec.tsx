import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TicketList from './ticket-list';

describe(' TicketList', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<TicketList />);
    expect(baseElement).toBeTruthy();
  });
});
