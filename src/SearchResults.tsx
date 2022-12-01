import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PetOwner from "./PetOwner";

const SearcResults = () => {
  const { searchTerm } = useParams();
  const [resultsByOwner, setResultsByOwner] = useState<PetOwner[]>([]);
  const [resultsByPet, setResultsByPet] = useState<PetOwner[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const results = [...resultsByOwner, ...resultsByPet];

  useEffect(() => {
    fetch(`https://localhost:7127/api/petregistry/owner/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setResultsByOwner(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));

    fetch(`https://localhost:7127/api/petregistry/pet/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setResultsByPet(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, [searchTerm]);
  if (isError) {
    return <div>An error occured when fetching data. :(</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      Results:
      {results.map((owner, id) => (
        <div key={id}>
          <div>{owner.firstName}</div>
          <div>{owner.lastName}</div>
          <Link to={`/edit/${owner.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default SearcResults;
