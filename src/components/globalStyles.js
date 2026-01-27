import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  & .modal-content {
    background-color: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }

  & .modal-header,
  & .modal-title,
  & .modal-title h1 {
    color: ${({ theme }) => theme.text} !important;
  }

  & .modal-footer {
    border-color: ${({ theme }) => theme.primary};
  }

  & .modal-header {
    border-color: ${({ theme }) => theme.primary};
  }

  & .btn-close {
    filter: ${({ theme }) => theme.body === '#363537' ? 'invert(1)' : 'none'};
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

  & .wrg-toggle-container {
    background-color: ${({ theme }) => theme.ctnbackground};
  }

  & .wrg-toggle-circle {
    background-color: ${({ theme }) => theme.btnbackground};
    border: 1px solid ${({ theme }) => theme.ctnbackground};
  }

  & .hovered {
    &:hover {
      background-color: ${({ theme }) => theme.btnbackground};
    }
    &::active {
      background-color: ${({ theme }) => theme.btnbackground};
    }
  }

  & .project-wrapper__text {
    & p > a {
      &:hover {
        background: ${({ theme }) => theme.secondary};
      }
    }
  }

  /* React-Bootstrap Accordion dark mode support */
  & .accordion {
    --bs-accordion-bg: ${({ theme }) => theme.body};
    --bs-accordion-color: ${({ theme }) => theme.text};
    --bs-accordion-btn-bg: ${({ theme }) => theme.body};
    --bs-accordion-btn-color: ${({ theme }) => theme.text};
    --bs-accordion-active-bg: ${({ theme }) => theme.body};
    --bs-accordion-active-color: ${({ theme }) => theme.text};
    --bs-accordion-border-color: ${({ theme }) => theme.primary};
  }

  & .accordion-item {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.primary};
    border-radius: 12px !important;
  }

  & .accordion-item:first-of-type,
  & .accordion-item:last-of-type {
    border-radius: 12px !important;
  }

  & .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
  }

  & .accordion-item:last-of-type .accordion-collapse {
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
  }

  & .accordion-button {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    &:not(.collapsed) {
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
    
    &:focus {
      box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.secondary};
    }

    &::after {
      filter: ${({ theme }) => theme.body === '#363537' ? 'invert(1)' : 'none'};
    }
  }

  & .accordion-body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 0 0 12px 12px;
    padding-bottom: 25px;
  }

  & .accordion-collapse {
    border-radius: 0 0 12px 12px;
  }

  & .wrapper.years {
    background-color: ${({ theme }) => theme.body};
    border-radius: 8px;
  }

  /* Wrapper and years section styling for dark mode */
  & .wrapper {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 3px 3px 8px ${({ theme }) => theme.primary};
    border-radius: 16px !important;
  }

  & .wrapper.hovered {
    border-radius: 16px !important;
    margin-bottom: 20px;
  }

  & .years {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.body};
    border-radius: 24px !important;
  }

  & .accordion-content {
    padding-bottom: 20px;
  }

  /* Card and general container backgrounds */
  & .card {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `
