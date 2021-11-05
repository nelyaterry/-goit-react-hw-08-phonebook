import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';

import ButtonText from '../Button/Button';
import {
  ContacstList,
  Contact,
  ContactName,
  ContactPhone,
  MessageNotFound,
} from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 ? (
        <ContacstList>
          {contacts.map(({ name, number, id }) => (
            <Contact key={id}>
              <ContactName>{name}</ContactName>
              <ContactPhone>{number}</ContactPhone>
              <ButtonText type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </ButtonText>
            </Contact>
          ))}
          {isLoading && (
            <Loader type="Oval" color="#5DCB98" height={40} width={40} />
          )}
        </ContacstList>
      ) : (
        <MessageNotFound>Contact not found</MessageNotFound>
      )}
    </>
  );
};

export default Contacts;
