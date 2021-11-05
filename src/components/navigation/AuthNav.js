import { LinkStyled } from './Navigation.styled';

const AuthNav = () => {
  return (
    <nav>
      <LinkStyled
        exact
        to="/register"
        activeStyle={{
          color: '#5DCB98',
        }}
      >
        Sign up
      </LinkStyled>
      <LinkStyled
        exact
        to="/login"
        activeStyle={{
          color: '#5DCB98',
        }}
      >
        Sign In
      </LinkStyled>
    </nav>
  );
};

export default AuthNav;
