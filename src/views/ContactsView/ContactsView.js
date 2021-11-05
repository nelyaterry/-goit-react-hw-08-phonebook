import { Phonebook, Title, ContactBox } from './ContactsView.stuled';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import Contacts from '../../components/Contacts/Contacts';

const ContactsView = () => {
  return (
    <Phonebook>
      <ContactForm />
      <ContactBox>
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </ContactBox>
    </Phonebook>
  );
};

export default ContactsView;
