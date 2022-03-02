import styled, { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.text};
  }

  & .modal-content {
    background-color: ${({ theme }) => theme.body} !important;
  }
  
  & .mysection {
    background-image: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  }

  & .navnavbar {
        background-image: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
        border-image: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  }

  & .to-bottom {
    color: ${({ theme }) => theme.text};
  }  
  `