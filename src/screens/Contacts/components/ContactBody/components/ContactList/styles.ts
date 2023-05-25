import styled from 'styled-components';

export const ContainerContactList = styled.div`
  height: fit-content;
  background-color: var(--black-second);
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  border-radius: 8px;
  width: 350px;

  padding: 0.8em 1em;
`;

export const ContainerMiddle = styled.div`
  display: flex;
  gap: 10px;

  .name {
    font-weight: 600;
    font-size: 1.2em;
  }

  .telephone {
    font-weight: 500;
    font-size: 1em;
    margin: 0.3em 0;
  }
`;

export const ContainterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1em;
  > svg {
    width: 1.5em;
    height: 1.5em;
    fill: var(--white);
    cursor: pointer;

    transition: all 200ms;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const Initial = styled.div`
  width: 1.5em;
  height: 1.5em;
  min-width: 1.5em;
  min-height: 1.5em;
  border-radius: 50%;
  border: 2px solid var(--white);

  background: var(--success);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4em;
  font-weight: 700;
`;

export const ContainerBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin-bottom: 0.2em;

  .badge {
    display: flex;
    align-items: center;
    font-style: italic;

    gap: 0.3em;
    font-weight: 400;
    font-size: 0.7em;

    svg {
      width: 1em;
      height: 1em;
      fill: var(--success);
    }
  }
`;

export const Footer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  cursor: pointer;

  font-size: 0.9;
  font-weight: 600;
  transition: all 200ms;
  svg {
    transition: all 200ms;
    transform: rotate(${({ open }) => (open ? '0deg' : '180deg')});
  }

  :hover {
    opacity: 0.8;
  }
`;
