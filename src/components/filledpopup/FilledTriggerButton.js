import React from "react";
const FilledTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-xs btn-outline-secondary center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default FilledTrigger;
