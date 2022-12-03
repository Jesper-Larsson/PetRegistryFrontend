import PetOwner from "./PetOwner";
import Pet from "./Pet";
import { useState } from "react";
import Strings from "./Strings";

const PetOwnerForm = ({ petOwner, saveFunction }: PetOwnerProps) => {
  const [pets, setPets] = useState<Pet[]>(petOwner ? petOwner.pets : []);
  const [firstName, setFirstName] = useState<string>(
    petOwner ? petOwner.firstName : Strings.firstNameText
  );
  const [lastName, setLastName] = useState<string>(
    petOwner ? petOwner.lastName : Strings.lastNameText
  );
  const addPetForm = () => {
    pets.push({ name: Strings.petNameText });
    const newPets = [...pets];
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
      <div>
        <div>{Strings.firstNameText}</div>
        <input
          type="text"
          placeholder={petOwner ? petOwner.firstName : Strings.firstNameText}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
      </div>
      <div>
        <div>Strings.lastNameText</div>
        <input
          type="text"
          placeholder={petOwner ? petOwner.lastName : Strings.lastNameText}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
      </div>
      <div>Pets:</div>
      {pets.map((pet, index) => {
        return (
          <div key={index}>
            <div>{Strings.petNameText}</div>
            <input
              type="text"
              placeholder={pet.name}
              onChange={(event) => changePetName(index, event.target.value)}
            />
            <div>
              <button onClick={() => removePetForm(pet)}>
                {Strings.removePetText}
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={addPetForm}>{Strings.addPetText}</button>
      <button onClick={saveToDb}>{Strings.saveText}</button>
    </div>
  );
};

export default PetOwnerForm;

interface PetOwnerProps {
  petOwner: PetOwner | undefined;
  saveFunction(petOwner: PetOwner): void;
}
