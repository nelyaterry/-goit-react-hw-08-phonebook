import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import LoginView from './views/LoginView';
import RegView from './views/RegView';
import authOperations from 'redux/auth/auth-operation';
import PrivatRoute from 'components/navigation/PrivateRoute';
import PublicRoute from 'components/navigation/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import ContactsView from 'views/ContactsView/ContactsView';
import HomeView from 'views/HomeView/HomeView';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PrivatRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivatRoute>

          <PublicRoute path="/register" restricted>
            <RegView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
        </Switch>
      </>
    )
  );
};

export default App;
