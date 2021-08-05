import React from "react";

export default function DogDropdown(props) {

    // console.log(Object.keys(props.dogList))

  return (
    <div>
      <select onChange={(e) => props.breedSelected(e.target.value)}>
        {Object.keys(props.dogList).map((dog, index) => (
          <option key={index}>{dog}</option>
        ))}
      </select>
    </div>
  );
}
