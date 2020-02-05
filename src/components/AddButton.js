import React from "react";
import PropTypes from "prop-types";

const AddButton = ({onClickAdd}) => (
  <button type="button" onClick={onClickAdd} className="button-add-float">
    <span className="button-add-float-text">+</span>
  </button>
);

AddButton.propTypes = {
  onClickAdd: PropTypes.func.isRequired
}

export default AddButton;
