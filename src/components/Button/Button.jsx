import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const ButtonText = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

ButtonText.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonText;
