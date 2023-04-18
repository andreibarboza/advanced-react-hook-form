import styled from 'styled-components';

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;

  .address-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3em;

    svg {
      transition: all 200ms;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }

      width: 1.6em !important;
      height: 1.6em !important;

      fill: var(--error);
    }
  }

  .address-content {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
  }
`;
