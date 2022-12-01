import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetOwnerForm from "./PetOwnerForm";
import PetOwner from "./PetOwner";
const EditOwner = () => {
  const { id } = useParams();

  const [petOwner, setPetOwner] = useState<PetOwner>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasUpdated, setHasUpdated] = useState(false);
  const deletePetOwner = () => {
    setIsLoading(true);
    fetch(`https://localhost:7127/api/petregistry/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };
  const saveChangesToDb = (petOwnerToSave: PetOwner) => {
    setIsLoading(true);
    fetch(
      `https://localhost:7127/api/petregistry/ownerandpets/${petOwnerToSave.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(petOwnerToSave)
      }
    )
      .then(() => {
        setPetOwner(petOwnerToSave);
        setIsLoading(false);
        setHasUpdated(true);
      })
      .catch((error) => setIsError(true));
  };

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
  if (hasUpdated) {
    return <div>Success!!!</div>;
  }
  return (
    <div>
      <button onClick={deletePetOwner}>Delete</button>
      EditOwner {"" + id}
      <PetOwnerForm petOwner={petOwner} saveFunction={saveChangesToDb} />
    </div>
  );
};

export default EditOwner;
