import React from "react";
import PropTypes from "prop-types";

import { Button } from "reactstrap";

const AddButton = ({onClickAdd}) => (  
  <Button  color="success" onClick={ onClickAdd } className="button-add-float">
    <span className="button-add-float-text">+</span>
  </Button >
);

AddButton.propTypes = {
  onClickAdd: PropTypes.func.isRequired
}

export default AddButton;
