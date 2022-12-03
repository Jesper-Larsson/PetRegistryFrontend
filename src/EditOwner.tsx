import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetOwnerForm from "./PetOwnerForm";
import PetOwner from "./PetOwner";
import { PutPetOwner, DeletePetOwner, GetOwnerById } from "./PetRegistryAPI";
import Strings from "./Strings";
const EditOwner = () => {
  const { id } = useParams();

  const [petOwner, setPetOwner] = useState<PetOwner>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasUpdated, setHasUpdated] = useState(false);

  const deletePetOwner = () => {
    setIsLoading(true);
    if (!id) {
      setIsError(true);
      return;
    }
    DeletePetOwner(id)
      .then(() => {
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };
  const saveChangesToDb = (petOwnerToSave: PetOwner) => {
    setIsLoading(true);
    PutPetOwner(petOwnerToSave)
      .then(() => {
        setPetOwner(petOwnerToSave);
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };

  useEffect(() => {
    if (!id) {
      setIsError(true);
      return;
    }
    GetOwnerById(id)
      .then((data) => {
        setPetOwner(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, [id]);
  if (isError) {
    return <div>{Strings.errorText}</div>;
  }
  if (isLoading) {
    return <div>{Strings.loadingText}</div>;
  }
  if (hasUpdated) {
    return <div>{Strings.successText}</div>;
  }
  return (
    <div>
      <PetOwnerForm petOwner={petOwner} saveFunction={saveChangesToDb} />
      <button onClick={deletePetOwner}>{Strings.deletText}</button>
    </div>
  );
};

export default EditOwner;
