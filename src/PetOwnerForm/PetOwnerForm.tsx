import PetOwner from "../Shared/PetOwner";
import Pet from "../Shared/Pet";
import { useState } from "react";
import Strings from "../Shared/Strings";
import "./PetOwnerForm.css";

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
    <div className="PetOwnerForm">
      <div className="NameInput">
        <b>{Strings.firstNameText}</b>
        <input
          type="text"
          placeholder={petOwner ? petOwner.firstName : Strings.firstNameText}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
      </div>
      <div className="NameInput">
        <b>{Strings.lastNameText}</b>
        <input
          type="text"
          placeholder={petOwner ? petOwner.lastName : Strings.lastNameText}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
      </div>
      <div>
        <h3>{Strings.petsText}</h3>
        {pets.map((pet, index) => {
          return (
            <div key={index} className="NameInput">
              <div>
                <b>{Strings.petNameText}</b>
                <input
                  type="text"
                  placeholder={pet.name}
                  onChange={(event) => changePetName(index, event.target.value)}
                />
              </div>
              <div>
                <button onClick={() => removePetForm(pet)}>
                  {Strings.removePetText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={addPetForm}>{Strings.addPetText}</button>
      </div>
      <div>
        <button onClick={saveToDb}>{Strings.saveText}</button>
      </div>
    </div>
  );
};

export default PetOwnerForm;

interface PetOwnerProps {
  petOwner: PetOwner | undefined;
  saveFunction(petOwner: PetOwner): void;
}
