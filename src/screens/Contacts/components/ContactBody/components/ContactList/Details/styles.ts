import styled from 'styled-components';

export const ContainerDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5;

  .title {
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 0.4em;
    margin-bottom: 0.8em;

    > svg {
      width: 1em;
      height: 1em;
      fill: var(--white);
    }
  }

  .subtitle {
    font-size: 0.9em;
    font-weight: 500;
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  font-size: 0.8em;

  .address {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }

  .semi-bold {
    font-weight: 500;
  }
`;

export const ContainerTelephones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8em;
`;

export const SingleTelephone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;

  svg {
    width: 1.4em;
    height: 1.4em;
    fill: var(--white);
  }
`;
