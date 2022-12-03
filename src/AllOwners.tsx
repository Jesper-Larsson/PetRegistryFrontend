import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetOwner from "./PetOwner";
import { GetAllOwners } from "./PetRegistryAPI";
import Strings from "./Strings";

const AllOwners = () => {
  const [allOwners, setAllOwners] = useState<PetOwner[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetAllOwners()
      .then((data) => {
        setAllOwners(data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, []);
  if (isError) {
    return <div>{Strings.errorText}</div>;
  }
  if (isLoading) {
    return <div>{Strings.loadingText}</div>;
  }
  return (
    <div>
      <h1>{Strings.allOwnersHeading}</h1>
      {allOwners.map((owner, id) => (
        <div key={id}>
          <div>{owner.firstName}</div>
          <div>{owner.lastName}</div>
          <Link to={`/edit/${owner.id}`}>{Strings.openText}</Link>
        </div>
      ))}
    </div>
  );
};

export default AllOwners;
