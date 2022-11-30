import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetOwnerForm from "./PetOwnerForm";

const EditOwner = () => {
  const { id } = useParams();

  const [petOwner, setPetOwner] = useState<PetOwner>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://localhost:7127/api/petregistry/ownerandpets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPetOwner(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, []);
  if (isError) {
    return <div>An error occured when fetching data. :(</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      EditOwner {"" + id}
      <PetOwnerForm
        petOwner={petOwner}
        saveFunction={(petOwner: PetOwner) => {
          console.log(petOwner.id);
          console.log(petOwner.firstName);
          console.log(petOwner.lastName);
          petOwner.pets.forEach((pet) => console.log(pet.name));
          //todo -> use a callback function with api-put
        }}
      />
    </div>
  );
};

export default EditOwner;

interface Pet {
  id: number;
  name: string;
}

interface PetOwner {
  id: number;
  firstName: string;
  lastName: string;
  pets: Pet[];
}
