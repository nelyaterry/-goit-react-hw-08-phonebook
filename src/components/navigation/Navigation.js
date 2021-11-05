import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { LinkStyled } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <LinkStyled
        exact
        to="/"
        tiveStyle={{
          color: '#5DCB98',
        }}
      >
        Home Page
      </LinkStyled>

      {isLoggedIn && (
        <LinkStyled
          exact
          to="contacts"
          activeStyle={{
            color: '#5DCB98',
          }}
        >
          Contacts
        </LinkStyled>
      )}
    </nav>
  );
};

export default Navigation;
