import { useState } from "react";

const PetOwnerForm = ({ petOwner, saveFunction }: PetOwnerProps) => {
  console.log("petOwnerform");
  const [pets, setPets] = useState<Pet[]>(petOwner ? petOwner.pets : []);
  const [firstName, setFirstName] = useState<string>(
    petOwner ? petOwner.firstName : "First Name"
  );
  const [lastName, setLastName] = useState<string>(
    petOwner ? petOwner.lastName : "Last Name"
  );

  const addPetForm = () => {
    pets.push({ name: "Pet's Name" });
    const newPets = [...pets];
    console.log("pet clixked");
    setPets(newPets);
  };
  const removePetForm = (petToRemove: Pet) => {
    const newPets = pets.filter((pet) => pet !== petToRemove);
    setPets(newPets);
  };
  const saveToDb = () => {
    const petOwnerToSave = {} as PetOwner;
    petOwnerToSave.firstName = firstName;
    petOwnerToSave.lastName = lastName;
    if (petOwner) {
      petOwnerToSave.id = petOwner.id;
    }
    petOwnerToSave.pets = pets;
    saveFunction(petOwnerToSave);
  };
  const changePetName = (index: number, petName: string) => {
    pets[index].name = petName;
  };
  return (
    <div>
      PetOwnerForm
      <div>
        <div>First Name</div>
        <input
          type="text"
          placeholder={petOwner ? petOwner.firstName : "First Name"}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
      </div>
      <div>
        <div>Last Name</div>
        <input
          type="text"
          placeholder={petOwner ? petOwner.lastName : "Last Name"}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
      </div>
      <div>Pets:</div>
      {pets.map((pet, index) => {
        return (
          <div>
            <div>Pet Name</div>
            <input
              type="text"
              placeholder={pet.name}
              onChange={(event) => changePetName(index, event.target.value)}
            />
            <div>
              <button onClick={() => removePetForm(pet)}>remove</button>
            </div>
          </div>
        );
      })}
      <button onClick={addPetForm}>add pet</button>
      <button onClick={saveToDb}>SAVE</button>
    </div>
  );
};

export default PetOwnerForm;

interface Pet {
  id?: number;
  name: string;
}

interface PetOwner {
  id: number;
  firstName: string;
  lastName: string;
  pets: Pet[];
}

interface PetOwnerProps {
  petOwner: PetOwner | undefined;
  saveFunction(petOwner: PetOwner): void;
}
//TODO: send existing petOwnerAndPets as parameter and add ability to remove and add pets
