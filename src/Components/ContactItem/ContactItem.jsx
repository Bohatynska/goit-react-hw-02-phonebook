import {
  ContactItem,
  Name,
  Number,
} from 'Components/ContactItem/ContactItem.styled';

const ContactListItem = ({ name, number }) => {
  return (
    <ContactItem>
      <Name>{name}:</Name>
      <Number>{number}</Number>
    </ContactItem>
  );
};
export default ContactListItem;
