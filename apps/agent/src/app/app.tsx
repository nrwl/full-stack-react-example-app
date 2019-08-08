import React, { useState, useEffect } from 'react';
import { Ticket } from '@happyorg/data';
import { TicketList } from '@happyorg/ticket-list';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  .ticket {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
`;

export const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [agentName, setAgentName] = useState<{ name: string }>({ name: '' });

  useEffect(() => {
    fetch('/api/tickets')
      .then(t => t.json())
      .then(setTickets);
  }, []);

  useEffect(() => {
    fetch('/agent')
      .then(t => t.json())
      .then(setAgentName);
  }, []);

  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to agent!</h1>
      </header>
      <main>
        <TicketList tickets={tickets} />

        <section>
          <p>Agent {agentName.name}</p>
          <button>Agent Action</button>
        </section>
      </main>
    </StyledApp>
  );
};

export default App;
