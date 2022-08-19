import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 6px;
  padding: 000.75rem 2.8rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  text-transform: uppercase;
  transition: 00.4s;
  line-height: 1.3rem;
  margin-top: 000.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
