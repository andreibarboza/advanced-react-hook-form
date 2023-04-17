import styled from 'styled-components';

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;

  .address-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3em;
  }

  .address-content {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
  }
`;
