import React from "react";

import CardStyles from "./styles";

interface CardProps {
  id: number;
  name: string;
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

function Card({ id, name, checked, setChecked }: CardProps) {
  const idString = id.toString();

  return (
    <CardStyles checked={checked === idString}>
      <label htmlFor={idString}>
        <span onClick={() => setChecked(idString)} />
        <input type="radio" id={idString} name="radio" />
      </label>
      <div onClick={() => setChecked(idString)} className="car-wrapper">
        <h2>{name}</h2>
        {checked === idString && <div className="winner-indicator" />}
      </div>
    </CardStyles>
  );
}

export default Card;
