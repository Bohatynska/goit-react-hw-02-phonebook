import { ContactWrap, ContactUl, ContactItem } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <ContactWrap>
      <ContactUl>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ContactUl>
    </ContactWrap>
  );
};

export default ContactList;
