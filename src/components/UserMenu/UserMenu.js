import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '../Button/Button';
import { Container, Text, Name } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <Text>
        Hello, <Name>{name}</Name>
      </Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </Button>
    </Container>
  );
};

export default UserMenu;
