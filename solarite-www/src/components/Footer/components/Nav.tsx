import React from "react";
import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://discord.gg/nKKhBbk">
        <StyledLinkIcon src={require("../../../assets/img/discord.png")} />
      </StyledLink>
      <StyledLink href="https://twitter.com/solaritefinance">
        <StyledLinkIcon src={require("../../../assets/img/twitter.png")} />
      </StyledLink>
      <StyledLink href="https://t.me/solaritefinance">
        <StyledLinkIcon src={require("../../../assets/img/telegram.png")} />
      </StyledLink>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`;

const StyledLink = styled.a`
  // color: ${(props) => props.theme.color.grey[400]};
  // padding-left: ${(props) => props.theme.spacing[3]}px;
  // padding-right: ${(props) => props.theme.spacing[3]}px;
  padding: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }

  background-color: #dae1e7;
  border-radius: 15px;
  height: 30px;
  margin: 5px;
`;
const StyledLinkIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export default Nav;
