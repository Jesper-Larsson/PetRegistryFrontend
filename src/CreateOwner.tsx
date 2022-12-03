import { useState } from "react";
import PetOwnerForm from "./PetOwnerForm";
import PetOwner from "./PetOwner";
import { PostPetOwner } from "./PetRegistryAPI";
import Strings from "./Strings";
const CreateOwner = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(false);
  const addToDb = (petOwnerToSave: PetOwner) => {
    setIsLoading(true);
    PostPetOwner(petOwnerToSave)
      .then(() => {
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };
  if (isError) {
    return <div>{Strings.errorText}</div>;
  }
  if (isLoading) {
    return <div>{Strings.loadingText}</div>;
  }
  if (hasUpdated) {
    return (
      <div>
        {Strings.successText}
        <button onClick={() => setHasUpdated(false)}>
          {Strings.addAnotherText}
        </button>
      </div>
    );
  }
  return (
    <div>
      {Strings.addOwnerHeading}
      <PetOwnerForm petOwner={undefined} saveFunction={addToDb} />
    </div>
  );
};

export default CreateOwner;
