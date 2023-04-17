import styled from 'styled-components';

export const ContainerContactList = styled.div`
  height: fit-content;
  background-color: var(--black-second);
  gap: 0.5em;
  border-radius: 4px;
  width: 325px;

  padding: 0.8em 1em;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
  }
`;

export const ContainerName = styled.div``;

export const ContainerBadge = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3em;

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    font-weight: 500;
    font-size: 0.65em;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
`;
