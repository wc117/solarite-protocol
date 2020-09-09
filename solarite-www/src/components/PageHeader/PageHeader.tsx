import React from "react";
import styled from "styled-components";

import Container from "../Container";

interface PageHeaderProps {
  icon: React.ReactNode;
  subtitle?: string;
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  );
};

const StyledPageHeader = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
`;

const StyledIcon = styled.div`
  color: white;
  font-size: 96px;
  height: 108px;
  line-height: 96px;
  text-align: center;
  width: 128px;
  border-radius: 40px;
`;

const StyledTitle = styled.h1`
  // color: ${(props) => props.theme.color.grey[600]};
  color: #f79250;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const StyledSubtitle = styled.h3`
  // color: ${(props) => props.theme.color.grey[400]};
  color: #868996;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export default PageHeader;
