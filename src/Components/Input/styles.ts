import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;

export const InputStyleContainer = styled.div`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s;
  overflow: hidden;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  height: 100%;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`;
