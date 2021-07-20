import React, { useEffect } from 'react'




export default function DogGallery(props) {

    console.log(props)
const DOG_IMAGE_URL = `https://dog.ceo/api/breed/${props.breedSelected}/images`;

    useEffect(() => {
        fetch(DOG_IMAGE_URL)
          .then((res) => res.json)
          .then((d) => d);
    
    })
    
    return (
        <div>
            {props.breedSelected}
        </div>
    )
};
