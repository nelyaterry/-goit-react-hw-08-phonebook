import { useSelector } from 'react-redux';
import Navigation from 'components/navigation/Navigation';
import AuthNav from 'components/navigation/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
