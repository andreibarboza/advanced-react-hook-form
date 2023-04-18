import styled from 'styled-components';

export const Container = styled.div`
  display: unset;

  button {
    background-color: var(--white);
    color: var(--black);
    font-weight: 600;
    border-radius: 0.2em;
    transition: all 200ms;

    :hover {
      opacity: 0.8;
    }
  }

  .sm {
    padding: 0.2em 0.4em;
    font-size: 0.7em;
  }

  .md {
    padding: 0.4em 0.8em;
    font-size: 0.9em;
  }

  .lg {
    padding: 0.6em 1em;
    font-size: 1.1em;
  }

  .exlg {
    padding: 1em 1.4em;
    font-size: 1.4em;
  }

  .delete {
    background-color: var(--error);
    color: var(--white);
  }

  .success {
    background-color: var(--success);
    color: var(--white);
  }
`;
