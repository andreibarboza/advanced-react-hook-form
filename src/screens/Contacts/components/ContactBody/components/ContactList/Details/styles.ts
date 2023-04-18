import styled from 'styled-components';

export const ContainerDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5;

  .title {
    display: flex;
    align-items: center;

    gap: 0.4em;

    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 0.4em;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--success);
    }
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: calc(100% - 125px);
  font-size: 0.8em;

  .address {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    background: var(--black);
    padding: 0.6em;
    width: 100%;
    border-radius: 8px;
  }

  .semi-bold {
    font-weight: 600;
  }
`;

export const ContainerTelephones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.85em;
`;

export const SingleTelephone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
`;
