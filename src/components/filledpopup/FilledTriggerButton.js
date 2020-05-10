import React from "react";
const FilledTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-block btn-lg btn-info center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default FilledTrigger;