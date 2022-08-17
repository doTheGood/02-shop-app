import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 00.75rem;
  font-size: 00.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
    cursor: pointer;
  }

  user-select: none;
`;
