import { Div } from "./Contact.styled.js";

const Contact = ({ details }) => {
  return (
    <Div>
      <h1>{ details.email }</h1>
    </Div>
  );
};

export default Contact;
