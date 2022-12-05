import Pet from "./Pet";

interface PetOwner {
  id: number;
  firstName: string;
  lastName: string;
  pets: Pet[];
}

export default PetOwner;
