import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
export const UsernameContainer = styled.span`
  display: block;
  color: black;
  font-size: 12px;

  &::hover {
    display: block;
    color: red;
    font-size: 12px;
    font-weight: bold;
  }
`
