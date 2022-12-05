import { useState } from "react";
import PetOwnerForm from "../PetOwnerForm/PetOwnerForm";
import PetOwner from "../Shared/PetOwner";
import { PostPetOwner } from "../API/PetRegistryAPI";
import Strings from "../Shared/Strings";
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
      <div className="AddAnother">
        <div>{Strings.successText}</div>
        <button onClick={() => setHasUpdated(false)}>
          {Strings.addAnotherText}
        </button>
      </div>
    );
  }
  return (
    <div>
      <h2>{Strings.addOwnerHeading}</h2>
      <PetOwnerForm petOwner={undefined} saveFunction={addToDb} />
    </div>
  );
};

export default CreateOwner;
