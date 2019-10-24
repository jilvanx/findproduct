import styled, { keyframes, css } from 'styled-components';

export const Header = styled.header`
  background: #2e193f;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 5px 30px 30px 30px;

  input {
    height: 30px;
    width: 300px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    border-right-style: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px 15px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #fff;
  border: 1px solid #eee;
  border-left-style: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Total = styled.div`
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;
  p {
    margin: 10px;
    text-transform: uppercase;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 50px;

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 4px;
    transition: 0.1s linear box-shadow;

    img {
      width: 240px;
      height: 140px;
    }

    p {
      font-size: 15px;
      color: #555555;
      margin: 5px;
    }

    span {
      color: #babbc0;
      font-size: 12px;
      padding: 3px 4px;
      text-decoration: line-through;
    }

    span.sprice {
      font-size: 16px;
      color: #000;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
