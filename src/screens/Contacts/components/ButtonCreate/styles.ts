import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 50%;

  background-color: var(--success);

  padding: 1em;

  bottom: 1.5em;
  right: 1.5em;

  z-index: 15;

  svg {
    width: 4em;
    height: 4em;
    fill: var(--white);
  }
`;
