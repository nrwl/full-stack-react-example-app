import React from 'react';

import styled from 'styled-components';

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  .gutter-left {
    margin-left: 9px;
  }

  .col-span-2 {
    grid-column: span 2;
  }

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

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }

  .resources {
    text-align: center;
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 9px;
    grid-template-columns: 1fr 1fr;
  }

  .resource {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 3px 9px;
    text-decoration: none;
  }

  .resource:hover {
    background-color: rgba(68, 138, 255, 0.04);
  }

  pre {
    padding: 9px;
    border-radius: 4px;
    background-color: black;
    color: #eee;
  }

  details {
    border-radius: 4px;
    color: #333;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 3px 9px;
    margin-bottom: 9px;
  }

  summary {
    outline: none;
    height: 36px;
    line-height: 36px;
  }
`;

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <StyledApp>
      <header className="flex">
        <img
          alt=""
          width="75"
          src="https://nx.dev/assets/images/nx-logo-white.svg"
        />
        <h1>Welcome to tickets!</h1>
      </header>
      <main>
        <h2>Resources &amp; Tools</h2>
        <p>
          Thank you for using and showing some ♥ for Nx. <br />
          Here are some links to help you get started.
        </p>
        <ul className="resources">
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://nx.dev/react/getting-started/what-is-nx"
            >
              Nx video tutorial
            </a>
          </li>
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://nx.dev/react/tutorial/01-create-application"
            >
              Interactive tutorial
            </a>
          </li>
          <li className="col-span-2">
            <a className="resource flex" href="https://connect.nrwl.io/">
              <img
                height="36"
                alt="Nrwl Connect"
                src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
              />
              <span className="gutter-left">Nrwl Connect</span>
            </a>
          </li>
        </ul>
        <h2>Next Steps</h2>
        <p>Here are some things you can do with Nx.</p>
        <details open>
          <summary>Add UI library</summary>
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </details>
        <details>
          <summary>View dependency graph</summary>
          <pre>{`nx dep-graph`}</pre>
        </details>
        <details>
          <summary>Run affected commands</summary>
          <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
        </details>
      </main>
    </StyledApp>
  );
};

export default App;
