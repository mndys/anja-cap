import styled from 'styled-components/macro'

export default styled.button`
  margin-top: 20px;
  padding: 15px 45px;
  border-radius: 35px;
  border-color: 2px white;
  background-color: var(--color-yellow-green);
  color: var(--color-darkgreen);
  font-weight: ${props => (props.isActive ? '600' : '400')};
  border: none;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => (props.isActive ? '0.8em' : 'em')};
  font-family: inherit;
  font-weight: 600;

  &.active {
    border-color: 1px var(--color-darkgreen);
    box-shadow: 0 0 5px 1px var(--color-darkgreen);
  }
`
