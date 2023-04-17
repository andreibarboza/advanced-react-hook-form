import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 0.5em 1em;

  background-color: var(--white);

  bottom: 1.5em;
  right: 1.5em;
  z-index: 15;

  border-radius: 0.5em;

  > button {
    font-size: 1.5em;
    text-transform: uppercase;
    color: var(--black);
    font-weight: 600;
  }

  svg {
    width: 2em;
    height: 2em;
    fill: var(--black);
  }
`;
