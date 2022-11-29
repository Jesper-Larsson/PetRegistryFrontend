import { useParams } from "react-router-dom";
import PetOwnerForm from "./PetOwnerForm";

const EditOwner = () => {
  const { id } = useParams();
  return (
    <div>
      EditOwner {"" + id}
      <PetOwnerForm />
    </div>
  );
};

export default EditOwner;
