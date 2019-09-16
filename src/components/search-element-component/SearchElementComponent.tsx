import React from "react";

import "./SearchElementComponent.scss";

interface Props {
  search(value: string): any;
}

interface State {}

export const SearchElementComponent = React.memo((props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.search(event.target.value);
  };

  const addChord = () => {
    alert("adding chord");
  };

  return (
    <span>
      <input
        id="searchfield"
        type="text"
        onChange={handleChange}
        placeholder="search"
      />
      <button id="addchord" onClick={addChord} title="Add new chord chart">
        {" "}
        +
      </button>
    </span>
  );
});
