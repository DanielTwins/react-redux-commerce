import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = () => {
  const listItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  // get the date for the current year
  const getCurrentYear = () => new Date().getFullYear().toString();

  return (
    <FooterContainer>
      <FooterList>
        {listItems.map((item) => (
          <FooterListItem key={item.name}>
            <FooterLink to={item.path}>{item.name}</FooterLink>
          </FooterListItem>
        ))}
      </FooterList>
      <p
        css={css`
          margin: 0;
          font-size: 14px;
        `}
      >
        © {getCurrentYear()} ReduxShop
      </p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const FooterListItem = styled.li`
  margin-right: 20px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #666;
  }
`;
