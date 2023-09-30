import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;
  display: block;
`;
const HeaderNav = styled.nav`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px;
  height: min-content;
  justify-content: flex-start;
  overflow: hidden;
  padding: 40px 0;
  position: relative;
`;
const NavContainer = styled.div`
  padding: 0 1rem;
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: max-content;
  justify-content: space-between;
  //overflow: hidden;
  width: 100%;
  position: relative;

  color: #767e9b;
  font-size: 16px;
  @media (min-width: 991.5px) {
    padding: 0 3rem;
  }
  @media (min-width: 1199.5px) {
    padding: 0 4rem;
  }
`;

const TitleSection = styled.div`
  font-size: 20px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  --framer-paragraph-spacing: 0px;
  transform: none;
`;
const MenuSection = styled.div`
  display: none;

  @media (min-width: 991.5px) {
    align-content: center;
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 48px;
    height: max-content;
    justify-content: center;
    //overflow: hidden;
    padding: 0;
    position: relative;
    width: max-content;
  }
`;
const MenuEle = styled.div`
  font-size: 20px;
  height: auto;
  position: relative;
  width: auto;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #a4667c;
  }
`;

interface IHeader {
  scrollCallback: (idx: number) => void;
}
const MENUS = ['About', 'Project', 'Contact'];
function Header({ scrollCallback }: IHeader) {
  return (
    <HeaderContainer>
      <HeaderNav>
        <NavContainer>
          <TitleSection>FrontEnd Developer. HwaYeon</TitleSection>
          <MenuSection>
            {MENUS.map((menu, i) => {
              return (
                <MenuEle key={i + 1} onClick={() => scrollCallback(i + 1)}>
                  {menu}
                </MenuEle>
              );
            })}
            <MenuEle>
              <a
                href="https://github.com/eee0930"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github fa-lg" />
              </a>
            </MenuEle>
          </MenuSection>
        </NavContainer>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
