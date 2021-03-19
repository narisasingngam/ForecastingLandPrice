import React from "react";
import "./styled.css";

const InputHeader = ({
  handleChangeInput,
  handleOnKeyPress,
  handleClickSearchBtn,
}) => {
  return (
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="d-flex align-self-center">
        <input
          class="margin-input form-control w-100"
          placeholder="Insert land id"
          aria-label="default input example"
          onChange={handleChangeInput}
          onKeyPress={handleOnKeyPress}
        ></input>
        <button
          type="button"
          class="btn w-70 btn-input"
          onClick={handleClickSearchBtn}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default InputHeader;
