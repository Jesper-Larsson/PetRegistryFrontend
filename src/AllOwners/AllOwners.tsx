import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetOwner from "../Shared/PetOwner";
import { GetAllOwners } from "../API/PetRegistryAPI";
import Strings from "../Shared/Strings";
import "./AllOwners.css";

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
    <div className="Container">
      <h2>{Strings.allOwnersHeading}</h2>
      {allOwners.map((owner, id) => (
        <div key={id} className="Row">
          <div className="PetOwner">
            <div className="PetOwnerProperty">{owner.firstName}</div>
            <div className="PetOwnerProperty">{owner.lastName}</div>
          </div>
          <div className="EditButton">
            <Link to={`/edit/${owner.id}`}>
              <button>{Strings.openText}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllOwners;
