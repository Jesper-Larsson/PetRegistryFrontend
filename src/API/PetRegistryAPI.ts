import PetOwner from "../Shared/PetOwner";
const baseUrl = "https://localhost:7127/api/petregistry";
const SearchByOwnerName = (searchTerm: string) =>
  fetch(`${baseUrl}/owner/${searchTerm}`).then((response) => response.json());
const SearchByPetName = (searchTerm: string) =>
  fetch(`${baseUrl}/pet/${searchTerm}`).then((response) => response.json());

const GetAllOwners = () => fetch(baseUrl).then((response) => response.json());

const GetOwnerById = (id: string) =>
  fetch(`${baseUrl}/ownerandpets/${id}`).then((response) => response.json());
const PutPetOwner = (petOwnerToSave: PetOwner) =>
  fetch(`${baseUrl}/ownerandpets/${petOwnerToSave.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(petOwnerToSave)
  });

const PostPetOwner = (petOwnerToSave: PetOwner) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(petOwnerToSave)
  });

const DeletePetOwner = (id: string) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  });
export {
  SearchByOwnerName,
  SearchByPetName,
  GetAllOwners,
  GetOwnerById,
  PostPetOwner,
  PutPetOwner,
  DeletePetOwner
};
