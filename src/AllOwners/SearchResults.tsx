import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PetOwner from "../Shared/PetOwner";
import { SearchByOwnerName, SearchByPetName } from "../API/PetRegistryAPI";
import Strings from "../Shared/Strings";
import "./AllOwners.css";

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
    <div className="Container">
      <h2>{Strings.resultsText}</h2>
      {results.length === 0 ? (
        <div>{Strings.noResultsText}</div>
      ) : (
        results.map((owner, id) => (
          <div key={id} className="Row">
            <div className="PetOwner">
              <div className="PetOwnerProperty">{owner.firstName}</div>
              <div className="PetOwnerProperty">{owner.lastName}</div>
            </div>
            <div className="EditButton">
              <Link to={`/edit/${owner.id}`}>
                <button>{Strings.editText}</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default SearcResults;
