import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PetOwner from "./PetOwner";
import { SearchByOwnerName, SearchByPetName } from "./PetRegistryAPI";
import Strings from "./Strings";

const SearcResults = () => {
  const { searchTerm } = useParams();
  const [resultsByOwner, setResultsByOwner] = useState<PetOwner[]>([]);
  const [resultsByPet, setResultsByPet] = useState<PetOwner[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const results = [...resultsByOwner, ...resultsByPet];

  useEffect(() => {
    SearchByOwnerName(searchTerm || "")
      .then((data) => {
        setResultsByOwner(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));

    SearchByPetName(searchTerm || "")
      .then((data) => {
        setResultsByPet(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, [searchTerm]);
  if (isError) {
    return <div>{Strings.errorText}</div>;
  }
  if (isLoading) {
    return <div>{Strings.loadingText}</div>;
  }
  return (
    <div>
      Results:
      {results.length === 0 ? (
        <div>{Strings.noResultsText}</div>
      ) : (
        results.map((owner, id) => (
          <div key={id}>
            <div>{owner.firstName}</div>
            <div>{owner.lastName}</div>
            <Link to={`/edit/${owner.id}`}>{Strings.editText}</Link>
          </div>
        ))
      )}
    </div>
  );
};
export default SearcResults;
