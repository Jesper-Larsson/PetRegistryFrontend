import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllOwners = () => {
  const [allOwners, setAllOwners] = useState<PetOwner[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7127/api/petregistry")
      .then((response) => response.json())
      .then((data) => {
        setAllOwners(data);
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
  return (
    <div>
      AllOwners
      {allOwners.map((owner, id) => (
        <div key={id}>
          <div>{owner.firstName}</div>
          <div>{owner.lastName}</div>
          <Link to={"/edit/" + owner.id}>open</Link>
        </div>
      ))}
    </div>
  );
};

export default AllOwners;

interface PetOwner {
  id: number;
  firstName: string;
  lastName: string;
}
