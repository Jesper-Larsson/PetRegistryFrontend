import { useState } from "react";

const PetOwnerForm = () => {
  const [pets, setPets] = useState<Pet[]>([{ id: 1, name: "test" }]);
  return (
    <div>
      PetownerForm
      <div>
        <div>First Name</div>
        <input type="text" placeholder="First Name"></input>
      </div>
      <div>
        <div>Last Name</div>
        <input type="text" placeholder="Last Name"></input>
      </div>
      <div>Pets:</div>
      {pets.map((pet) => {
        return (
          <div>
            <div>Pet Name</div>
            <input type="text" value={pet.name} />
            <div>
              <button>remove</button>
            </div>
          </div>
        );
      })}
      <button>add pet</button>
    </div>
  );
};

export default PetOwnerForm;

interface Pet {
  id: number;
  name: string;
}

//TODO: send existing ownerAndPets as parameter and add ability to remove and add pets
