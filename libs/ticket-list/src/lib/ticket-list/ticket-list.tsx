import React from 'react';

import { Ticket } from '@happyorg/data';

/* tslint:disable:no-empty-interface */
export interface TicketListProps {
  tickets: Ticket[];
}

export const TicketList = (props: TicketListProps) => {
  return (
    <>
      {props.tickets.map(t => (
        <p className="ticket flex" key={t.id}>
          {t.title}
        </p>
      ))}
    </>
  );
};

export default TicketList;
