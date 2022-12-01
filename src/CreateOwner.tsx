import { useState } from "react";
import PetOwnerForm from "./PetOwnerForm";
import PetOwner from "./PetOwner";
const CreateOwner = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(false);
  const addToDb = (petOwnerToSave: PetOwner) => {
    console.log(JSON.stringify(petOwnerToSave));
    setIsLoading(true);
    fetch(`https://localhost:7127/api/petregistry/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petOwnerToSave)
    })
      .then(() => {
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };
  if (isError) {
    return <div>An error occured when fetching data. :(</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (hasUpdated) {
    return <div>Success!!!</div>;
  }
  return (
    <div>
      CreateOwner
      <PetOwnerForm petOwner={undefined} saveFunction={addToDb} />
    </div>
  );
};

export default CreateOwner;
