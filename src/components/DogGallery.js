import React, { useEffect, useState } from "react";

export default function DogGallery(props) {
  //   console.log(props);

  const [dogImage, setdogImage] = useState([]);

  useEffect(() => {
    if (props.breedSelected) {
      fetch(`https://dog.ceo/api/breed/${props.breedSelected}/images`)
        .then((res) => res.json())
        .then((d) => setdogImage(d.message.slice(1, 3)));
    }
  }, [props.breedSelected]);

  //   const fetchDogImage = (dogNow) => {
  //     fetch(`https://dog.ceo/api/breed/${dogNow}/images`)
  //       .then((res) => res.json())
  //       .then((d) => console.log(d));
  //   };

  return (
    <div>
      {props.breedSelected}
      <div>
        Dog Image:{" "}
        {dogImage.map((image, key) => (
          <img src={image} key={key} />
        ))}
      </div>
    </div>
  );
}
