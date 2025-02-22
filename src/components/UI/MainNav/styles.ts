import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    width: auto;
    margin-left: auto;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const CartMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68px;
  height: 40px;
  border-radius: 40px;
  background: #0378f23d;
  padding: 0 18px 0 11px;
  position: relative;
`;

export const MainIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const MainCartText = styled.span`
  color: #e4e4e7;
  font-size: 14px;
  line-height: 23.8px;
  text-align: center;
`;

export const MainNavText = styled(MainCartText)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
`;