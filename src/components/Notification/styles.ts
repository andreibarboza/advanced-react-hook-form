import styled, { css } from 'styled-components';

export const ContainerNotification = styled.div<{
  show: boolean;
  type: string;
}>`
  position: absolute;
  width: max-content;
  padding: 1em 1.4em;
  font-weight: 600;
  font-size: 1.2em;
  border-radius: 5px;

  ${({ type }) =>
    type === 'error'
      ? css`
          background: var(--error);
        `
      : css`
          background: var(--success);
        `};

  bottom: 50px;
  left: -20px;
  opacity: 0;
  visibility: hidden;
  transition: all 200ms;

  @media (max-width: 500px) {
    bottom: 80px;
  }

  ${({ show }) =>
    show &&
    css`
      left: 10px;
      opacity: 1;
      visibility: visible;
    `}
`;
