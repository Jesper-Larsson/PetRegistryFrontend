import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllOwners = () => {
  const [allOwners, setAllOwners] = useState<Owner[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7127/api/petregistry")
      .then((response) => response.json())
      .then((data) => setAllOwners(data))
      .catch((error) => setIsError(true));
  }, []);
  if (isError) {
    return <div>An error occured when fetching data. :(</div>;
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

interface Owner {
  id: number;
  firstName: string;
  lastName: string;
}
